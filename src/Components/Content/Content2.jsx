import React from "react";
import style from './Content.module.css';
import Navbar from "../Navbar/Navbar";

const Content = () => {
    const myvar = "Basic Tags";
    const m = "<html> </html>"
    const n = "<head> </head>"
    const b = "<body> </body>"
    const t = "<title> </title>"
    const p = "<p> </p>"
    const br = "<br>"
    const bl = "<blockquote> </blockquote>"
    const d = "<div> </div>"
    const s = "<span> </span>"
    const bg = "<body bgcolor=?>"
    const bt = "<body text=?>"
    const bk = "<body link=?>"
    const bv = "<body vlink=?>"
    const ba = "<body alink=?>"
    const u = "<ul> </ul>"
    const o = "<ol start=?> </ol>"
    const l = "<li> </li>"
    const dl = "<dl> </dl>"
    const dt = "<dt>"
    const dd = "<dd>"
    const pr = "<pre> </pre>"
    const h = "<h1> </h1> --> <h6> </h6>"
    const i = "<i> </i>"
    const tt = "<tt> </tt>"
    const c = "<code> </code>"
    const ci = "<cite> </cite>"
    const a ="<address> </address>"
    return (
        <>
            <Navbar isLoggedIn='true' />
            <h1>HTML</h1>
            <h2>{myvar}</h2>
            <h3>{m}</h3>
            <h3>Creates an HTML document</h3>
            <h3>{n}</h3>
            <h3>Sets off the title & other info that isn't displayed</h3>
            <h3>{b}</h3>
            <h3>Sets off the visible portion of the document</h3>
            <h3>{t}</h3>
            <h3>Puts name of the document in the title bar; when bookmarking pages, this is what is bookmarked</h3>
            <h2>Formatting</h2>
            <h3>{p}</h3>
            <h3>Creates a new paragraph</h3>
            <h3>{br}</h3>
            <h3>Inserts a line break (carriage return)</h3>
            <h3>{bl}</h3>
            <h3>Puts content in a quote - indents text from both sides</h3>
            <h3>{d}</h3>
            <h3>Used to format block content with CSS</h3>
            <h3>{s}</h3>
            <h3>Used to format inline content with CSS</h3>
            <h2>Body attributes (only used in email newsletters)</h2>
            <h3>{bg}</h3>
            <h3>Sets background color, using name or hex value</h3>
            <h3>{bt}</h3>
            <h3>Sets text color, using name or hex value</h3>
            <h3>{bk}</h3>
            <h3>Sets color of links, using name or hex value</h3>
            <h3>{bv}</h3>
            <h3>Sets color of visited links, using name or hex value</h3>
            <h3>{ba}</h3>
            <h3>Sets color of active links (while mouse-clicking)</h3>
            <h2>Lists</h2>
            <h3>{u}</h3>
            <h3>Creates an unordered list</h3>
            <h3>{o}</h3>
            <h3>Creates an ordered list (start=xx, where xx is a counting number)</h3>
            <h3>{l}</h3>
            <h3>Encompasses each list item</h3>
            <h3>{dl}</h3>
            <h3>Creates a definition list</h3>
            <h3>{dt}</h3>
            <h3>Precedes each defintion term</h3>
            <h3>{dd}</h3>
            <h3>Precedes each defintion</h3>
            <h2>Text Tags</h2>
            <h3>{pr}</h3>
            <h3>Creates preformatted text</h3>
            <h3>{h}</h3>
            <h3>Creates headlines -- h1=largest, h6=smallest</h3>
            <h3>{"<b> </b>"}</h3>
            <h3>Creates bold text</h3>
            <h3>{i}</h3>
            <h3>Creates italicized text</h3>
            <h3>{tt}</h3>
            <h3>Creates typewriter-style text</h3>
            <h3>{c}</h3>
            <h3>Used to define source code, usually monospace</h3>
            <h3>{ci}</h3>
            <h3>Creates a citation, usually processed in italics</h3>
            <h3>{a}</h3>
            <h3>Creates address section, usually processed in italics</h3>
            <h3>{"<em> </em>"}</h3>
            <h3>Emphasizes a word (usually processed in italics)</h3>
            <h3>{"<strong> </strong>"}</h3>
            <h3>Emphasizes a word (usually processed in bold)</h3>
            <h3>{"<font size=?> </font>"}</h3>
            <h3>Sets size of font - 1 to 7 (should use CSS instead)</h3>
            <h3>{"<font color=?> </font>"}</h3>
            <h3>Sets font color (should use CSS instead)</h3>
            <h3>{"<font face=?> </font>"}</h3>
            <h3>Defines the font used (should use CSS instead)</h3>
            <h2>Links</h2>
            <h3>{"<a href=URL>clickable text</a>"}</h3>
            <h3>Creates a hyperlink to a Uniform Resource Locator</h3>
            <h3>{"<a href=mailto:EMAIL_ADDRESS>clickable text</a>"}</h3>
            <h3>Creates a hyperlink to an email address</h3>
            <h3>{"<a name=NAME>"}</h3>
            <h3>Creates a target location within a document</h3>
            <h3>{"<a href=#NAME>clickable text</a>"}</h3>
            <h3>Creates a link to that target location</h3>
            <h2>Graphical elements</h2>
            <h3>{"<hr>"}</h3>
            <h3>Inserts a horizontal rule</h3>
            <h3>{"<hr size=?>"}</h3>
            <h3>Sets size (height) of horizontal rule</h3>
            <h3>{"<hr width=?>"}</h3>
            <h3>Sets width of rule (as a % or absolute pixel length)</h3>
            <h3>{"<hr noshade>"}</h3>
            <h3>Creates a horizontal rule without a shadow</h3>
            <h3>{"<img src=URL />"}</h3>
            <h3>Adds image; it is a separate file located at the URL</h3>
            <h3>{"<img src=URL align=?>"}</h3>
            <h3>Aligns image left/right/center/bottom/top/middle (use CSS)</h3>
            <h3>{"<img src=URL border=?>"}</h3>
            <h3>Sets size of border surrounding image (use CSS)</h3>
            <h3>{"<img src=URL height=?>"}</h3>
            <h3>Sets height of image, in pixels</h3>
            <h3>{"<img src=URL width=?>"}</h3>
            <h3>Sets width of image, in pixels</h3>
            <h3>{"<img src=URL alt=?>"}</h3>
            <h3>Sets the alternate text for browsers that can't process images (required by the ADA)</h3>
            <h2>Forms</h2>
            <h3>{"<form> </form>"}</h3>
            <h3>Defines a form</h3>
            <h3>{"<select multiple name=? size=?> </select>"}</h3>
            <h3>Creates a scrolling menu. Size sets the number of menu items visible before user needs to scroll.</h3>
            <h3>{"<select name=?> </select>"}</h3>
            <h3>Creates a pulldown menu</h3>
            <h3>{"<option>"}</h3>
            <h3>Sets off each menu item</h3>
            <h3>{"<textarea name=? cols=x rows=y></textarea>"}</h3>
            <h3>Creates a text box area. Columns set the width. rows set the height.</h3>
            <h3>{'<input type="checkbox" name=? value=?>'}</h3>
            <h3>Creates a checkbox.</h3>
            <h3>{'<input type="checkbox" name=? value=? checked>'}</h3>
            <h3>Creates a checkbox which is pre-checked.</h3>
            <h3>{"<input type=radio name=? value=?>"}</h3>
            <h3>Creates a radio button.</h3>
            <h3>{"<input type=radio name=? value=? checked>"}</h3>
            <h3>Creates a radio button which is pre-checked.</h3>
            <h3>{"<input type=text name=? size=?>"}</h3>
            <h3>Creates a one-line text area. Size sets length, in characters.</h3>
            <h3>{"<input type=submit value=?>"}</h3>
            <h3>Creates a submit button. Value sets the text in the submit button.</h3>
            <h3>{"<input type=image name=? src=? border=? alt=?>"}</h3>
            <h3>Creates a submit button using an image.</h3>
            <h3>{'<input type="reset">'}</h3>
            <h3>Creates a reset button</h3>
            <h2>Tables (use only for data layout - use CSS for page layout)</h2>
            <h3>{"<table> </table>"}</h3>
            <h3>Creates a table</h3>
            <h3>{"<tr> </tr>"}</h3>
            <h3>Sets off each row in a table</h3>
            <h3>{"<td> </td>"}</h3>
            <h3>Sets off each cell in a row</h3>
            <h3>{"<th> </th>"}</h3>
            <h3>Sets off the table header (a normal cell with bold, centered text)</h3>
            <h2>Table attributes (only use for email newsletters)</h2>
            <h3>{"<table border=?>"}</h3>
            <h3>Sets the width of the border around table cells</h3>
            <h3>{"<table cellspacing=?>"}</h3>
            <h3>Sets amount of space between table cells</h3>
            <h3>{"<table cellpadding=?>"}</h3>
            <h3>Sets amount of space between a cell's border and its contents</h3>
            <h3>{"<table width=?>"}</h3>
            <h3>Sets width of the table in pixels or as a percentage</h3>
            <h3>{"<tr align=?>"}</h3>
            <h3>Sets alignment for cells within the row (left/center/right)</h3>
            <h3>{"<td align=?>"}</h3>
            <h3>Sets alignment for cells (left/center/right)</h3>
            <h3>{"<tr valign=?>"}</h3>
            <h3>Sets vertical alignment for cells within the row (top/middle/bottom)</h3>
            <h3>{"<td valign=?>"}</h3>
            <h3>Sets vertical alignment for cell (top/middle/bottom)</h3>
            <h3>{"<td rowspan=?>"}</h3>
            <h3>Sets number of rows a cell should span (default=1)</h3>
            <h3>{"<td colspan=?>"}</h3>
            <h3>Sets number of columns a cell should span</h3>
            <h3>{"<td nowrap>"}</h3>
            <h3>Prevents lines within a cell from being broken to fit</h3>
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