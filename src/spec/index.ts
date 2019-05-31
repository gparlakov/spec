import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  applyTemplates,
  branchAndMerge,
  mergeWith
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function spec(_options: any): Rule {
  return (_: Tree, _context: SchematicContext) => {

    const templateSource = apply(url("../files"), [
      applyTemplates({
        ...strings,
        ..._options
      })
    ]);

    return branchAndMerge(mergeWith(templateSource));
  };
}
