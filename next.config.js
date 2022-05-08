module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/ventures": { page: "/ventures" },
      "/skills": { page: "/skills" },
      "/skills/[skillName]": { page: "/skills/[skillName]" },
      "/skills/[skillName]/[projectName]": {
        page: "/skills/[skillName]/[projectName]",
      },
      "/connect": { page: "/connect" },
    };
  },
};
