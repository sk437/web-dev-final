import React, {useState} from "react";
import MTGColor from "./MTGColor"
import {Link} from "react-router-dom";
import CardListComponent from "../ListOfCardsComponent";

let initRender = false;

const SearchComponent = () => {
    let url = window.location.href;
    if (url.includes("search?order=name&q=")) {
        if (url.lastIndexOf("/") > url.indexOf("search?order=name&q=")) {
            url = url.substring(url.indexOf("search?order=name&q=") + 20, url.lastIndexOf("/"));
        } else {
            url = url.substring(url.indexOf("search?order=name&q=") + 20, url.lastIndexOf("/"));
        }
    } else {
        url = "";
    }

    const [name, setName] = useState(
    (window.location.href.includes("search?order=name&q=")?
        ((url.includes("c%3A"))? url.substring(0, url.indexOf("c%3A")-1).replaceAll("+", " ") :
            url.substring(0, url.indexOf("c%3C%3D")-1).replaceAll("+", " "))
         : '')
    );
    const [col, setCol] = useState(
        (window.location.href.includes("search?order=name&q=")?
            {
                and: (url.includes("c%3A")),
                green:
                    ((url.includes("c%3A"))?
                        url.substring(url.indexOf("c%3A"), url.indexOf("t%3A")).includes("g") :
                            url.substring(url.indexOf("c<%3D"), url.indexOf("t%3A")).includes("g")),
                blue:
                    ((url.includes("c%3A"))?
                        url.substring(url.indexOf("c%3A"), url.indexOf("t%3A")).includes("u") :
                        url.substring(url.indexOf("c<%3D"), url.indexOf("t%3A")).includes("u")),
                red:
                    ((url.includes("c%3A"))?
                        url.substring(url.indexOf("c%3A"), url.indexOf("t%3A")).includes("r") :
                        url.substring(url.indexOf("c<%3D"), url.indexOf("t%3A")).includes("r")),
                black:
                    ((url.includes("c%3A"))?
                        url.substring(url.indexOf("c%3A"), url.indexOf("t%3A")).includes("b") :
                        url.substring(url.indexOf("c<%3D"), url.indexOf("t%3A")).includes("b")),
                white:
                    ((url.includes("c%3A"))?
                        url.substring(url.indexOf("c%3A"), url.indexOf("t%3A")).includes("w") :
                        url.substring(url.indexOf("c<%3D"), url.indexOf("t%3A")).includes("w")),

            } :
        {
        green: false,
        blue: false,
        red: false,
        white: false,
        black: false,
        and: true
    }));
    const [type, setType] = useState(
        (window.location.href.includes("search?order=name&q=")?
            url.substring(url.indexOf("t%3A") + 4, url.indexOf("o%3A")-1).replaceAll("t3%A", " ") : '')
    );
    const [text, setText] = useState(
        (window.location.href.includes("search?order=name&q=")?
            url.substring(url.indexOf("o%3A") + 4, url.lastIndexOf("%22")).substring(3).replaceAll("%20", " ") : '')
    );

    const [results, setResults] = useState([]);
    const findCards = () =>
    {
        fetch(`https://api.scryfall.com/cards/${formatQuery()}`)
            .then(res => res.json())
            .then(re => setResults(re.data))
        console.log("Test");
        console.log(results);
    }
    let urlU = window.location.href;
    if (urlU.includes("user=?")) {
        if (urlU.lastIndexOf("/") < urlU.indexOf("user=?")){
            urlU = urlU.substring(urlU.indexOf("user=?") + 6);
        }
        else {
            urlU = urlU.substring(urlU.indexOf("user=?") + 6, urlU.lastIndexOf("/"));
        }
    }
    else {
        urlU = "";
    }
    function formatQuery() {
        let formattedName = name.replaceAll(" ", "+");
        let formattedColor = "c";
        formattedColor = formattedColor + ((col.and) ? "%3A" : "<%3D");
        if (col.green) {
            formattedColor = formattedColor + "g";
        }
        if (col.blue) {
            formattedColor = formattedColor + "u";
        }
        if (col.red) {
            formattedColor = formattedColor + "r";
        }
        if (col.white) {
            formattedColor = formattedColor + "w";
        }
        if (col.black) {
            formattedColor = formattedColor + "b";
        }
        let formattedType = "t%3A" + type.replaceAll(" ", "+t%3A");
        let formattedText = "o%3A%22" + text.replaceAll(" ", "%20") + "%22";

        return "search?order=name&q=" + formattedName + "+" + formattedColor + "+" +
            formattedType + "+" + formattedText;
    }

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <form>
                        <label for="cardName">Card Name: </label>
                        <input type="text" className="form-control" id="cardName"
                               defaultValue={name}
                               onChange={(e) => {
                                   setName(e.target.value);
                               }}
                               placeholder="Name of Card"/>
                        <br/>
                        <label for="type">Card Type: </label>
                        <input type="text" className="form-control" id="type"
                               defaultValue={type}
                               onChange={(e) => {
                                   setType(e.target.value);
                               }}
                               placeholder="Type of Card"/>
                        <br/>
                        <label for="text">Card Text: </label>
                        <textarea className="form-control" rows="3" id="type" placeholder="Rules Text "
                                  defaultValue={text}
                                  onChange={(e) => {
                                      setText(e.target.value);
                                  }}/>
                        <br/>
                        <p className="text-primary">Card Colors: </p>
                        <div className="row">
                            <div className="col-2 ml-2">
                                <label className="form-check-label ">
                                    <input className="form-check-input" type="radio" name="colorchoice" id="AND"
                                           defaultChecked={(col.and)? "checked": ""}
                                           onClick={e =>
                                               setCol({...col, and: true})
                                           }/>
                                    AND
                                </label>

                                <br/>

                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="colorchoice" id="OR"
                                           defaultChecked={(!col.and)? "checked": ""}
                                           onClick={e =>
                                               setCol({...col, and: false})
                                           }/>
                                    OR
                                </label>
                            </div>
                            <div className="col-10">
                                <span className="ml-4"/>
                                <input className="form-check-input" type="checkbox" value=""
                                       defaultChecked={(col.white)? "checked": ""}
                                       onClick={e =>
                                           setCol({...col, white: !col.white})
                                       }
                                       id="white"/>
                                <label className="form-check-label" for="white">
                                    <MTGColor c="./mtgwhite.png"/>
                                </label>
                                <span className="ml-4"/>
                                <input className="form-check-input" type="checkbox" value=""
                                       defaultChecked={(col.blue)? "checked": ""}
                                       onClick={e =>
                                           setCol({...col, blue: !col.blue})
                                       }
                                       id="blue"/>
                                <label className="form-check-label" for="blue">
                                    <MTGColor c="./mtgblue.png"/>
                                </label>
                                <span className="ml-4"/>
                                <input className="form-check-input" type="checkbox" value=""
                                       defaultChecked={(col.red)? "checked": ""}
                                       onClick={e =>
                                           setCol({...col, red: !col.red})
                                       }
                                       id="red"/>
                                <label className="form-check-label" for="red">
                                    <MTGColor c="./mtgred.png"/>
                                </label>
                                <span className="ml-4"/>
                                <input className="form-check-input" type="checkbox" value=""
                                       defaultChecked={(col.black)? "checked": ""}
                                       onClick={e =>
                                           setCol({...col, black: !col.black})
                                       }
                                       id="black"/>
                                <label className="form-check-label" for="black">
                                    <MTGColor c="./mtgblack.png"/>
                                </label>
                                <span className="ml-4"/>
                                <input className="form-check-input" type="checkbox" value=""
                                       defaultChecked={(col.green)? "checked": ""}
                                       onClick={e =>
                                           setCol({...col, green: !col.green})
                                       }
                                       id="green"/>
                                <label className="form-check-label" for="green">
                                    <MTGColor c="./mtggreen.png"/>
                                </label>
                            </div>
                        </div>
                        <br/>
                        <div className="text-center">
                            <Link to={`/search/${formatQuery()}/user=?${urlU}`}>
                                <button
                                    onClick={e => {
                                        formatQuery();
                                        findCards();
                                    }}
                                    className="btn btn-primary rounded-pill">
                                    Search
                                </button>
                            </Link>
                        </div>
                    </form>
                </li>
            </ul>
            <p className="text-center">Search Results</p>
            <CardListComponent cards={results}/>
        </>
    );
};
export default SearchComponent;