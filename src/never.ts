export { };

function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('test!');
    console.log({ result });
} catch (error) {
    console.log({ error });
}

let foo: void = undefined;
// 基本的にはデータを代入できない
// let bar: never = undefined;
let bar: never = error('only me!');
