import { Command } from "@oclif/core";
import * as oclifFlags from "@oclif/core/lib/flags.js";
import {someConstant} from '../utils/other.js'

export default class HelloCommand extends Command {

  static description = `Describe the command here
  ...
  Extra documentation goes here
  `;

  static flags = {
    name: oclifFlags.string({ char: "n", description: "name to print" }),
  };

  async run() {
    const { flags } = await this.parse(HelloCommand);
    console.log(flags)
    const name = flags.name || "world";
    this.log(`hello ${name} from ./src/commands/hello.js ${someConstant}`);
  }
}
