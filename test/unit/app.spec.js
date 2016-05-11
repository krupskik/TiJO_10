describe('app', function () {
    'use strict';
    var app = window.app;
    var answer = window.app;


    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });

        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });

        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });



        //wrong return age value was 12 proper is 5
        it('should return age value 12', function () {
            expect(app.assignToSwimmingCourse('Mario', '10/06/2010')).toEqual({
                name: 'Mario', age: 5, course: 'kids'
            });
        });
        //wrong reurn course was 'adult' proper is 'kids'
        it('should return adults as course value', function () {
            expect(app.assignToSwimmingCourse('Mario', '10/06/2010')).toEqual({
                name: 'Mario', age: 5, course: 'kids'
            });
        });
    });


    describe('calculateArea', function () {
        //wrong return message was 'Niepowodzenie'
        it('a is greater than b, all params are proper', function () {
            expect(answer.calculateArea(11, 10, 0, 'Sukces', 'Niepowodzenie')).toEqual({ area : 11, message : 'Sukces' });
        });

        //wrong return area value was 10
        it('insert 0 as first and third value', function () {
            expect(answer.calculateArea(0, 11, 0, 'Sukces', 'Niepowodzenie')).toEqual({ area : 11, message : 'Sukces' });
        });

        // wrong return value area was 20
        it('should return Sukces message, all params are proper', function () {
            expect(answer.calculateArea(25, 10, 1, 'Sukces', 'Niepowodzenie')).toEqual({ area : 15, message : 'Sukces' });
        });
    });
});