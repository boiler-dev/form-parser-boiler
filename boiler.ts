import { join } from "path"

import { ActionBoiler } from "boiler-dev"

export const install: ActionBoiler = async ({
  cwdPath,
}) => {
  const actions = []

  actions.push({
    action: "npmInstall",
    source: ["busboy", "tmp-promise"],
  })

  actions.push({
    action: "npmInstall",
    dev: true,
    source: ["@types/aws-lambda", "aws-lambda"],
  })

  return actions
}

export const generate: ActionBoiler = async ({
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
