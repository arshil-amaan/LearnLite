import React from "react";
import style from './Content.module.css';
import ao from "../../images/Screenshot 2023-11-02 110510.png"
import as from "../../images/Screenshot 2023-11-02 110327.png"
import b from "../../images/Screenshot 2023-11-02 110203.png"
import c from "../../images/Screenshot 2023-11-02 105559.png"
import i from "../../images/Screenshot 2023-11-02 110652.png"
import l from "../../images/Screenshot 2023-11-02 110914.png"
import m from "../../images/Screenshot 2023-11-02 111116.png"
import o from "../../images/Screenshot 2023-11-02 111745.png"
import s from "../../images/StrApi.png"
import ie from "../../images/IfStatements.png"
import el from "../../images/Screenshot 2023-12-02 214012.png"
import w from "../../images/LoopStatements.png"
import br from "../../images/Screenshot 2023-12-02 215846.png"
import a from "../../images/Screenshot 2023-12-02 220142.png"
import ap from "../../images/ArrayOperations.png"
import ac from "../../images/Screenshot 2023-12-02 220610.png"
import t from "../../images/Screenshot 2023-12-02 220816.png"
import f from "../../images/Screenshot 2023-12-02 221104.png"
import cl from "../../images/Screenshot 2023-12-02 221326.png"
import ob from "../../images/Screenshot 2023-12-02 221626.png"
import u from "../../images/Screenshot 2023-12-02 221903.png"
import Navbar from "../Navbar/Navbar";
const Content = () => {
    return (
        <>
            <Navbar isLoggedIn='true' />
            <h1>PYTHON</h1>
            <h2>Installation & Getting Started:</h2>
            <h3>To install Python, visit the official website: https://www.python.org/<br />
                Download the executable file, and run it. Check the version by typing 'python --version' in the command prompt.<br />
                Start Python by opening the Python IDE or your preferred text editor, and type the following:<br />
                print("Hello World !!!")<br />
                Now save the file with a .py extension and run it.<br />
                You will get the following output:<br />
                Hello World !!!<br />
            </h3>
            <h2>Python Comments</h2>
            <h3>Python comments are a part of a code file that a programmer does not want to execute, used to explain code, or avoid specific parts of code during testing. They are added with a '#' at the beginning.
                Single-Line Comments:<br />
                To write a comment just add a # at the start of the line.<br />
                Example 1:<br />
                #This is a Single-line Comment<br />
                print(“This is a print statement”)<br />
                Output: This is a print statement.<br />
                Example 2:<br />
                print("Hello World !!!") #Printing Hello World<br />
                Output: Hello World !!!<br />
                Multi-Line Comments:<br />
                To write multi-line comments you can use # at each line or you can use the multiline string.<br />
                Example 1: The use of #.<br />
                #It will execute a block of code if a specified condition is true.<br />
                #If the condition is false than it will execute another block of code.<br />
                p = 7<br />
                {"if (p > 5):"}<br />
                &nbsp;&nbsp;print("p is greater than 5.")<br />
                else:<br />
                &nbsp;&nbsp;print("p is not greater than 5.")<br />
                Output: p is greater than 5.<br />
                Example 2: The use of multiline string.<br />
                """This is an if-else statement. It will execute a block of code if a specified condition is true. If the condition is false then it will execute another block of code."""<br />
                p = 7<br />
                {"if (p > 5):"}<br />
                &nbsp;&nbsp;print("p is greater than 5.")<br />
                else:<br />
                &nbsp;&nbsp;print("p is not greater than 5.")<br />
                Output: p is greater than 5.<br />
            </h3>
            <h2>Python Variables</h2>
            <h3>Python variables are containers for storing information that can be manipulated and referenced later in code, without explicitly declaring the variable type.<br />
                Example:<br />
                name = "Aman"&nbsp;#type str<br />
                age = 20&nbsp;&nbsp;#type int<br />
                passed = True &nbsp;#type bool<br />
                Variable names should be descriptive, can contain alpha-numeric characters and underscores. Start with a letter or underscore, is case sensitive, and cannot start with a number.<br />
                Local Variable:<br />
                A local variable is created within a function and can be only used inside that function. Such a variable has a local scope.<br />
                Global Variable:<br />
                A global variable is created in the main body of the code and can be used anywhere within the code. Such a variable has a global scope.<br />
                Example:<br />
                icecream = "Vanilla" #global variable<br />
                def foods():<br />
                &nbsp;&nbsp;vegetable = "Potato" #local variable<br />
                &nbsp;&nbsp;fruit = "Lichi" #local variable<br />
                &nbsp;&nbsp;print(vegetable + " is a local variable value.")<br />
                &nbsp;&nbsp;print(icecream + " is a global variable value.")<br />
                &nbsp;&nbsp;print(fruit + " is a local variable value.")<br />
                &nbsp;&nbsp;foods()<br />
                Output:<br />
                Potato is a local variable value.<br />
                Vanilla is a global variable</h3>
            <h2>Data Types</h2>
            <h3>Data type specifies the type of value a variable requires to do various operations without causing an error. Types are:<br />
                Numeric data: int, float, complex<br />
                int: 3, -8, 0<br />
                float: 7.349, -9.0, 0.0000001<br />
                complex: 6 + 2i<br />
                Text data: str<br />
                str: “Hello World!!!”, “Python Programming”<br />
                Boolean data: Boolean data consists of values True or False.<br />
                Sequenced data: list, tuple, range<br />
                List:<br />
                A list is an ordered collection of data with elements separated by a comma and enclosed within square brackets. Lists are mutable and can be modified after creation.<br />
                Example:<br />
                list1 = [8, 2.3, [-4, 5], ["apple", "banana"]]<br />
                print(list1)<br />
                Output: [8, 2.3, [-4, 5], ['apple', 'banana']]<br />
                Tuple:<br />
                A tuple is an ordered collection of data with elements separated by a comma and enclosed within parentheses. Tuples are immutable and can not be modified after creation.<br />
                Example:<br />
                tuple1 = (("parrot", "sparrow"), ("Lion", "Tiger"))<br />
                print(tuple1)<br />
                Output: (('parrot', 'sparrow'), ('Lion', 'Tiger'))<br />
                Range:<br />
                It returns a sequence of numbers as specified by the user. If not specified by the user then it starts from 0 by default and increments by 1.<br />
                Example:<br />
                sequence1 = range(4,14,2)<br />
                for i in sequence1:<br />
                &nbsp;&nbsp;print(i)<br />
                Output: 4 6 8 10 12<br />
                Mapped data: dict<br />
                dict: a dictionary is an unordered collection of data containing a key:value pair. The key:value pairs are enclosed within curly brackets.<br />
                Example:<br />
                {'dict1 = {"name":"Sakshi", "age":20, "canVote":True}'}<br />
                print(dict1)<br />
                {"Output: {'name': 'Sakshi', 'age': 20, 'canVote': True}"}<br />
                Set data:<br />
                Set is an unordered collection of elements in which no element is repeated. The elements of sets are separated by a comma and contained within curly braces.<br />
                Example:<br />
                {'set1 = {4, -5, 8, 3, 2.9}'}<br />
                print(set1)<br />
                {'Output: {2.9, 3, 4, 8, -5}'}<br />
                None:<br />
                None is used to define a null value. When we assign a None value to a variable, we are essentially resetting it to its original empty state which is not the same as zero, an empty string or a False value.<br />
                Example:<br />
                state = None<br />
                print(type(state))<br />
                Output:<br />
                {'<class NoneType>'}
            </h3>
            <h2>Data Conversion</h2>
            <h3>
                The process of converting numeric data from one type to another is called as type conversion.<br />
                To convert from integer to float, we use float() function.<br />
                To convert from integer to complex, we use the complex() function.<br />
                Example:<br />
                num1 = -25<br />
                num2 = float(num1)<br />
                num3 = complex(num1)<br />
                print(num2)<br />
                print(num3)<br />
                Output:<br />
                -25.0<br />
                (-25+0j)<br />
                To convert from float to integer, we use int() function. int() function rounds of the given number to the nearest integer value.<br />
                To convert from float to complex, we use the complex() function.<br />
                Example:<br />
                num1 = 8.4<br />
                num2 = int(num1)<br />
                num3 = complex(num1)<br />
                print(num2)<br />
                print(num3)<br />
                Output:<br />
                8<br />
                (8.4+0j)<br />
                Note: complex numbers cannot be converted to integer or float.</h3>
            <h2>Type Casting</h2>
            <h3>Similar to type conversion, type casting is done when we want to specify a type on a variable.<br />
                Example:<br />
                str1 = "7"<br />
                str2 = "3.142"<br />
                str3 = "13"<br />
                num1 = 29<br />
                num2 = 6.67<br />
                print(int(str1))<br />
                print(float(str2))<br />
                print(float(str3))<br />
                print(str(num1))<br />
                print(str(num2))<br />
                Output:<br />
                7<br />
                3.142<br />
                13.0<br />
                29<br />
                6.67</h3>
            <h2>Python Operators</h2>
            <h3>Python has different types of operators for different operations. They are as follows:<br />
                Arithmetic operators:<br />
                Arithmetic operators are used to perform arithmetic/mathematical operations.</h3>
            <img src={ao} alt="arithmetic operators" />
            <h3>Assignment operators:<br />
                These operators are used to assign values to variables.</h3>
            <img src={as} alt="assignment operators" />
            <h3>Bitwise operators:<br />
                Bitwise operators are used to deal with binary operations.</h3>
            <img src={b} alt="bitwise operators" />
            <h3>Comparison operators:<br />
                These operators are used to compare values.</h3>
            <img src={c} alt="comparison operators" />
            <h3>Identity operators:</h3>
            <img src={i} alt="identity operators" />
            <h3>Logical operators:<br />
                These operators are used to deal with logical operations.</h3>
            <img src={l} alt="logical operators" />
            <h3>Membership operators:</h3>
            <img src={m} alt="membership operators" />
            <h3>Operator Precedence in Python:</h3>
            <img src={o} alt="operator's precedence" />
            <h2>Python Strings</h2>
            <h3>In python, anything that you enclose between single or double quotation marks is considered a string. A string is essentially a sequence or array of textual data. Strings are used when working with Unicode characters. </h3>
            <h3>Example:<br />
                name = Samuel"<br />
                print("Hello, " + name)<br />
                Output:<br />
                Hello, Samuel</h3>
            <h4>Operation on Strings</h4>
            <h5>Length of a String:</h5>
            <h6>fruit = "Mango"<br />
                len1 = len(fruit)<br />
                print("Mango is a", len1, "letter word.")<br />
                Output:<br />
                Mango is a 5 letter word.</h6>
            <h5>String as an Array:</h5>
            <h6>A string is essentially a sequence of characters also called an array. Thus we can access the elements of this array.</h6>
            <h6>pie = "ApplePie"<br />
                print(pie[:5])<br />
                print(pie[6])	#returns character at specified index<br />
                Output:<br />
                Apple</h6>
            <h5>Loop through a String:</h5>
            <h6>Strings are arrays and arrays are iterable. Thus we can loop through strings.</h6>
            <h6>alphabets = "ABCDE"<br />
                for i in alphabets:<br />
                print(i)<br />
                Output:<br />
                A<br />
                B<br />
                C<br />
                D<br />
                E</h6>
            <img src={s} alt="string data type" />
            <h2>if and if-else statements</h2>
            <img src={ie} alt="if-else" />
            <h2>if-elif-else statements</h2>
            <img src={el} alt="elif statements" />
            <h2>while and for statements</h2>
            <img src={w} alt="while and for statements" />
            <h2>break statements</h2>
            <img src={br} alt="break" />
            <h2>Arrays</h2>
            <img src={a} alt="Arrays" />
            <h2>Array operations</h2>
            <img src={ap} alt="array operations" />
            <h2>Array aliasing and copying</h2>
            <img src={ac} alt="array copying" />
            <h2>Two-dimensional arrays</h2>
            <img src={t} alt="2d array" />
            <h2>Functions</h2>
            <img src={f} alt="Functions" />
            <h2>Defining a class</h2>
            <img src={cl} alt="Class" />
            <h2>Creating an object</h2>
            <img src={ob} alt="objects" />
            <h2>Using an object</h2>
            <img src={u} alt="using an object" />

        </>
    )
}

export default Content;