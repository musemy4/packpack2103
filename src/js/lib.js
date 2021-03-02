//es6 모듈
export const pi = Math.PI;

export function power(x, y){
    return x**y;//es7 지수연산자
}


//es6 클래스
export class Foo {
    //클래스 필드 정의 제안
    #private = 10;
    foo(){
        //객체 rest/spread 프로퍼티
        const {a, b, ...x} = { ...{a: 1, b: 2}, c: 3, d: 4};
        return { a, b, x};
    }

    bar(){
        return this.#private;
    }

}