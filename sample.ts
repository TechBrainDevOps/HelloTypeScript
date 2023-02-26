let user_name: string = "TypeScript";
console.log('Hello, ' + user_name);

const main = () => {
    /** 型アノテーション */
    // let str: string = 0; // ← Type 'number' is not assignable to type 'string'.と表示される

    /** 指定できる型 */
    let v_bool: boolean = true;
    let v_num: number = 123;
    let v_str: string = "ABCDEFG";
    let v_null: null = null;
    let v_undef: undefined = undefined;

    let v_arr1: string[] = ["Red", "Green", "Blue"]; // 配列(記法1)
    let v_arr2: Array<string> = ["Red", "Green", "Blue"]; // 配列(記法2)
    let v_tuple: [string, number] = ["Yamada", 26]; // タプル

    let v_obj: object = { "name": "Yamada", "age": 26 }; // オブジェクト

    enum Color { Red, Green, Blue };
    let v_enm: Color = Color.Green; // enum
    console.log(v_enm);
}

main();

class MyClass { name: string; }
var val_class: MyClass = new MyClass(); // クラス呼び出し

val_class.name = 'hoge';

console.log(val_class);

let v_any: any = 4; // any型(任意の型)

function func(arg: string | number) { console.log(arg) } // 引数の型は複数指定可能
func(1 + 1); // 数値型
func("1" + 1); // 文字列型

function log(msg: string): void { // 返り値: void
    console.log(msg);
}

log('log');

function error(msg: string): never {
    throw new Error(msg);
}

error('This is Error');
