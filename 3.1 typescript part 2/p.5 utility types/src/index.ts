// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

type T = {};
type Func1 = (arg: Partial<T>) => Required<T>;

// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

type Func2 = (arg: Extract<T, { id?: string }>, complementer: (arg: Partial<T>) => Required<T>) => void;

// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс 
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 

function stamp<SomeClass>(figure: new() => SomeClass, count: number) {
    let a = []
    for (let i = 0; i < count; i++)
        a.push(new figure());
    return a;
}

let a: Rectangle[] = stamp(Rectangle, 10);
let b: Circle[] = stamp(Circle, 20);