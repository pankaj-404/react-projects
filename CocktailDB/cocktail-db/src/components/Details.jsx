import React from "react"
import styles from "./Details.module.css"


export default class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        const { strGlass, strInstructions, strAlcoholic, strMeasure1, strMeasure2, strMeasure3, strMeasure4,strMeasure5,strMeasure6, strCategory, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6 } = this.props.cocktail[0]
        const { back } = this.props


        return (
            <div>
                <button onClick={back} className={styles.left}>Back</button>
                <br />
                <br />
                <div className={styles.card}>
                    <div className={styles.f3}>{strDrink}</div>
                    <hr/>
                    <div className={styles.details}>
                        <div >
                            <img src={strDrinkThumb + "/preview"} alt="Cocktail's image"/>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <div> Alcoholic : <span className={styles.title}>  {strAlcoholic}</span> </div>
                            <div> Category :  <span className={styles.title}>{strCategory}</span> </div>
                            <div>  Glass : <span className={styles.title}> {strGlass}</span> </div>
                            <table>
                                <thead >
                                    <tr style={{backgroundColor: "gray"}}>
                                        <th>Ingredients</th>
                                        <th>Measure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{strIngredient1}</td>
                                        <td>{strMeasure1}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient2}</td>
                                        <td>{strMeasure2}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient3}</td>
                                        <td>{strMeasure3}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient4}</td>
                                        <td>{strMeasure4}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient5}</td>
                                        <td>{strMeasure5}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient6}</td>
                                        <td>{strMeasure6}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><span className={styles.title}>Instructions : </span> {strInstructions}</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}