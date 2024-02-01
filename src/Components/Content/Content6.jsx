import React from "react";
import style from './Content.module.css';
import Java from "../../images/hello.png"
import myimg from "../../images/developing.png";
import b from "../../images/built-in.png"
import a from "../../images/assignment.png"
import i from "../../images/int.png"
import e from "../../images/int-expressions.png"
import f from "../../images/double.png"
import d from "../../images/double-expressions.png"
import b1 from "../../images/boolean.png"
import b2 from "../../images/boolean-ops.png"
import c from "../../images/comparison-ops.png"
import c1 from "../../images/comparison-expressions.png"
import p from "../../images/system.out.print-api.png"
import pa from "../../images/parse-api.png"
import m from "../../images/math-api.png"
import l from "../../images/library-calls.png"
import t from "../../images/casts.png"
import ief from "../../images/if.png"
import ie from "../../images/if-else.png"
import n from "../../images/nested-if-else.png"
import w from "../../images/while.png"
import fo from "../../images/for.png"
import lo from "../../images/for-while.png"
import br from "../../images/break.png"
import dow from "../../images/do-while.png"
import s from "../../images/switch.png"
import ar from "../../images/array.png"
import arr from "../../images/array-init.png"
import ap from "../../images/array-examples.png"
import ta from "../../images/array2d.png"
import ai from "../../images/array2d-init.png"
import st from "../../images/stdout-api.png"
import stin from "../../images/stdin-api.png"
import pf from "../../images/printf.png"
import pr from "../../images/printf-formatting.png"
import aio from "../../images/stdarrayio-api.png"
import stdr from "../../images/stddraw-api.png"
import sta from "../../images/stdaudio-api.png"
import cm from "../../images/command.png"
import re from "../../images/redirect-stdout.png"
import rein from "../../images/redirect-stdin.png"
import pip from "../../images/piping.png"
import fu from "../../images/function.png"
import fun from "../../images/function-examples.png"
import fl from "../../images/library.png"
import sran from "../../images/stdrandom-api.png"
import sd from "../../images/stdstats-api.png"
import o from "../../images/object.png"
import ins from "../../images/instance-variables.png"
import con from "../../images/constructor.png"
import inm from "../../images/instance-method.png"
import cls from "../../images/class.png"
import ob from "../../images/library-oop.png"
import stdat from "../../images/string-api.png"
import sto from "../../images/string-ops.png"
import jc from "../../images/color-api.png"
import il from "../../images/in-api.png"
import ou from "../../images/out-api.png"
import pi from "../../images/picture-api.png"
import sck from "../../images/stack-api.png"
import q from "../../images/queue-api.png"
import it from "../../images/iterable-anatomy.png"
import ik from "../../images/st-api.png"
import se from "../../images/set-api.png"
import gr from "../../images/graph-api.png"
import Navbar from "../Navbar/Navbar";
const Content = () => {
    return (
        <>
            <Navbar isLoggedIn='true' />
            <h1>JAVA</h1>
            <h2>Hello, World</h2>
            <img src={Java} alt="java" />
            <h2>Editing, compiling and executing</h2>
            <img src={myimg} alt="Program working" />
            <h3>Compiler is a computer program that helps in translating the computer code from one programming language into machine language(0 and 1)</h3>
            <h3>JVM is a tool which acts as a run-time engine for java programs. The main role of the JVM is to find the main method, load and execute our application. The code that we write is written in a human-readable format. This format is not recognized by a machine. A java program file is compiled only once and its corresponding .class file is created which is the java byte code. The .class file is then executed by the JVM.</h3>
            <h2>Built-in data types</h2>
            <img src={b} alt="built-in data types" />
            <h2>Declaration and assignment statements</h2>
            <img src={a} alt="declaration and assignment statements" />
            <h3>A variable is a container which holds the value while the Java program is executed</h3>
            <h3>Assignment operator "=" assigns exactly that value which we want the variable to hold.</h3>
            <h2>Integers</h2>
            <img src={i} alt="Integers in Java" />
            <img src={e} alt="Expressions in integers" />
            <h2>Floating-point numbers.</h2>
            <img src={f} alt="Floating-point numbers in java" />
            <img src={d} alt="Expressions in floating-point numbers" />
            <h2>Booleans.</h2>
            <img src={b1} alt="Booleans in Java" />
            <img src={b2} alt="Operations on boolean" />
            <h2>Comparison operators</h2>
            <img src={c} alt="comparison operators" />
            <img src={c1} alt="Expressions" />
            <h2>Printing</h2>
            <img src={p} alt="printing in java" />
            <h2>Parsing command-line arguments</h2>
            <img src={pa} alt="Parsing command-line arguments" />
            <h2>Math library</h2>
            <img src={m} alt="Math Library" />
            <h2>Java library calls</h2>
            <img src={l} alt="Java library calls" />
            <h2>Type conversion</h2>
            <img src={t} alt="Type conversion" />
            <h2>if statement</h2>
            <img src={ief} alt="anatomy of an if-statement" />
            <h2>If and if-else statements</h2>
            <img src={ie} alt="use of if-else statement" />
            <h2>Nested if-else statement</h2>
            <img src={n} alt="use of nested if-else statement" />
            <h2>while loop</h2>
            <img src={w} alt="anatomy of while loop" />
            <h2>for loop</h2>
            <img src={fo} alt="anatomy of for loop" />
            <h2>Loops</h2>
            <img src={lo} alt="use of loops" />
            <h2>Break statement</h2>
            <img src={br} alt="use of break statement" />
            <h2>Do-while loop</h2>
            <img src={dow} alt="do-while loop" />
            <h2>Switch statement</h2>
            <img src={s} alt="use of switch statement" />
            <h2>Arrays</h2>
            <img src={ar} alt="an array" />
            <h3>Inline array initialization</h3>
            <img src={arr} alt="initialization of an array" />
            <h3>Typical array-processing code</h3>
            <img src={ap} alt="array codes" />
            <h2>Two-dimensional arrays</h2>
            <img src={ta} alt="2D-array" />
            <h3>Initialization</h3>
            <img src={ai} alt="initialization of 2d-array" />
            <h2>Our standard output library</h2>
            <img src={st} alt="standard output library" />
            <h2>Our standard input library</h2>
            <img src={stin} alt="standard input library" />
            <h2>Formatted printing</h2>
            <img src={pf} alt="formatted printing" />
            <img src={pr} alt="fp" />
            <h2>Our library for array input and output</h2>
            <img src={aio} alt="libraries" />
            <h2>Our standard drawing library</h2>
            <img src={stdr} alt="drawing library" />
            <h2>Our standard audio library</h2>
            <img src={sta} alt="audio library" />
            <h2>Command line</h2>
            <img src={cm} alt="command line" />
            <h2>Redirection and piping</h2>
            <img src={re} alt="redirection" /> <img src={rein} alt="redirect" />
            <img src={pip} alt="piping" />
            <h2>Functions</h2>
            <img src={fu} alt="functions" />
            <img src={fun} alt="examples of function" />
            <h2>Libraries of functions</h2>
            <img src={fl} alt="libraries of functions" />
            <h2>Our standard random library</h2>
            <img src={sran} alt="random libraries" />
            <h2>Our standard statistics library</h2>
            <img src={sd} alt="statistics libraries" />
            <h2>Using an object</h2>
            <img src={o} alt="using an object" />
            <h2>Instance variables</h2>
            <img src={ins} alt="instance variables" />
            <h2>Constructors</h2>
            <img src={con} alt="using a constructor" />
            <h2>Instance methods</h2>
            <img src={inm} alt="instance methods" />
            <h2>Classes</h2>
            <img src={cls} alt="use of a class" />
            <h2>Object-oriented libraries</h2>
            <img src={ob} alt="object-oriented libraries" />
            <h2>Java's String data type</h2>
            <img src={stdat} alt="string data type" />
            <img src={sto} alt="operations on a string" />
            <h2>Java's Color data type</h2>
            <img src={jc} alt="color data type" />
            <h2>Our input library</h2>
            <img src={il} alt="input library" />
            <h2>Our output library</h2>
            <img src={ou} alt="output library" />
            <h2>Our picture library</h2>
            <img src={pi} alt="picture library" />
            <h2>Our stack data type</h2>
            <img src={sck} alt="stack data type" />
            <h2>Our queue data type</h2>
            <img src={q} alt="queue data type" />
            <h2>Iterable</h2>
            <img src={it} alt="iterable" />
            <h2>Our symbol table data type</h2>
            <img src={ik} alt="symbol table data type" />
            <h2>Our set data type</h2>
            <img src={se} alt="set data type" />
            <h2>Our graph data type</h2>
            <img src={gr} alt="graph data type" />
            {/* <div className={style["content-container"]}>
            <h1 className={style.head1}>Ready. Set. Learn...</h1><br />
            <div className={style["container"]}>
                <div className={style["window"]}>
                    <div className={style["window-title"]}>
                        <p>Console Window</p>
                        <div className={style["window-buttons"]}>
                            <div className={`${style["window-button"]} ${style.fullscreen}`}></div>
                            <div className={`${style["window-button"]} ${style.reduce}`}></div>
                            <div className={`${style["window-button"]} ${style.close}`}></div>
                        </div>
                    </div>
                    <div className={style.console}>
                        <pre><code>def main():<br />
                            &nbsp; for i in range(100):<br />
                            &nbsp; &nbsp; print(f"Add to favorites i")<br />
                            &nbsp; &nbsp; if favorite = true:<br />
                            &nbsp; &nbsp; &nbsp; Favorite()<br />

                            def Favorite():<br />
                            &nbsp; print("thanks")<br />

                            main()</code></pre>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Content;