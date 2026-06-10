"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  FileCode,
  Database,
} from "lucide-react";

type CourseCardProps = {
  title: string;
  progress: number;
  iconName: string;
};

const icons = {
  Code2,
  Rocket,
  FileCode,
  Database,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  const Icon =
    icons[iconName as keyof typeof icons] || Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-500/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <Icon className="h-8 w-8 text-indigo-400" />

          <span className="text-sm text-zinc-500">
            {progress}%
          </span>
        </div>

        <h3 className="mb-4 text-xl font-semibold text-white">
          {title}
        </h3>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-indigo-500"
          />
        </div>

        <p className="text-sm text-zinc-400">
          {progress}% complete
        </p>
      </div>
    </motion.article>
  );
}