var user_name = "TypeScript";
console.log('Hello, ' + user_name);
var main = function () {
    /** 型アノテーション */
    // let str: string = 0; // ← Type 'number' is not assignable to type 'string'.と表示される
    /** 指定できる型 */
    var v_bool = true;
    var v_num = 123;
    var v_str = "ABCDEFG";
    var v_null = null;
    var v_undef = undefined;
    var v_arr1 = ["Red", "Green", "Blue"]; // 配列(記法1)
    var v_arr2 = ["Red", "Green", "Blue"]; // 配列(記法2)
    var v_tuple = ["Yamada", 26]; // タプル
    var v_obj = { "name": "Yamada", "age": 26 }; // オブジェクト
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var v_enm = Color.Green; // enum
    console.log(v_enm);
};
main();
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
var val_class = new MyClass(); // クラス呼び出し
val_class.name = 'hoge';
console.log(val_class);
var v_any = 4; // any型(任意の型)
function func(arg) { console.log(arg); } // 引数の型は複数指定可能
func(1 + 1); // 数値型
func("1" + 1); // 文字列型
function log(msg) {
    console.log(msg);
}
log('log');
function error(msg) {
    throw new Error(msg);
}
error('This is Error');
