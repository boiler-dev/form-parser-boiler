import { ActionBoiler } from "boiler-dev"

export const install: ActionBoiler = async () => {
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

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/formParser.ts",
    sourcePath: "tsignore/formParser.ts",
  })

  return actions
}
