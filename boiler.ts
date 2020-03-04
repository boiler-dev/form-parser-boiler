import { join } from "path"

import { InstallBoiler, GenerateBoiler } from "boiler-dev"

export const install: InstallBoiler = async ({
  cwdPath,
}) => {
  const actions = []

  actions.push({
    action: "npmInstall",
    source: ["busboy"],
  })

  actions.push({
    action: "npmInstall",
    dev: true,
    source: ["aws-lambda"],
  })

  return actions
}

export const generate: GenerateBoiler = async ({
  cwdPath,
  files,
}) => {
  const actions = []

  for (const file of files) {
    const { name, source } = file

    if (name === "formParser.ts") {
      actions.push({
        action: "write",
        path: join(cwdPath, "src", name),
        source,
      })
    }
  }

  return actions
}
