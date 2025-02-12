"use client";

import React, { useState, useEffect } from "react";
import ProjectHeader from "@/app/projects/ProjectHeaderr";
import Board from "../BoardView";
import List from "../ListView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const [id, setId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
    };
    unwrapParams();
  }, [params]);

  if (!id) return <div>Loading...</div>;

  return (
    <div>
        <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
        />

        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Board" && (
            <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
        {activeTab === "List" && (
            <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
    </div>
  );
};

export default Project;