import './App.css'

function App() {
  // var num: number = 10;
  // console.log(num);
  // let str = `adada${num}`;

  // let user = {
  //   name: "aza",
  //   surename: "usup",
  //   birthday: null,
  // };

  // let a: any = 123;
  // a = { tipe: "asdas", id: 2, boolean: true };
  // console.log(a);

  // let test: any = 1234;
  // let str: string = test;

  // let any: any = true;

  // let test: unknown = 1234;

  // let str: string = any;

  // const f = (arg1: symbol, arg2: string): any => ( );







  // literal types:
  // let env: "const1" | "const2" | "cosnt3" = "const1";

  // const setEnv = (
  //   env: "const1" | "const2" | "cosnt3"
  // ): "const1" | "const2" | "cosnt3" => {
  //   return env;
  // };
  // // types
  // type Env = "const1" | "const2" | "cosnt3";
  // let env2: Env = "const1";

  // const setEnv2 = (env: Env): Env => {
  //   return env;
  // };

  // let literalTypes:
  //   | { a: "aza"; b: "usup" }
  //   | true
  //   | "asdasd"
  //   | "qwerty"
  //   | 123
  //   | ["a", false, 999, { name: "Ivan"; sure: "Petrov" }] = "qwerty";

  // type literalTypesUsing =
  //   | { a: "aza"; b: "usup" }
  //   | true
  //   | "asdasd"
  //   | "qwerty"
  //   | 123
  //   | ["a", false, 999, { name: "Ivan"; sure: "Petrov" }];

  // const literalTypesUsingConst = (arg: literalTypesUsing): literalTypesUsing => {
  //   return arg;
  // };

  // literalTypesUsingConst("qwerty");



  //Enums 
  // enum literalTypesEnum {
  //   Prodaction = "asdasd",
  //   value2 = "qwerty"
  // }

  // let literalTypesEnumUsing: literalTypesEnum = literalTypesEnum.Prodaction;

  // const literalEnumFunction = (arg: literalTypesEnum): literalTypesEnum => {
  //   return arg;
  // }

  // literalEnumFunction(literalTypesEnum.value2)






  
  // interface
  interface User {
    name: string | number;
    surename: string;
    height?: number;
  }

  interface User2 {
    name: number;
    surename: boolean;
    height?: number;
  }

  interface General {
    user: User,
    user2: User2
  }

  const general: General = {
    user: {
      name: "Aza",
      surename: "Usupbekov"
    },
    user2: {
      name: 4444,
      surename: true
    }
  }







}
export default App
