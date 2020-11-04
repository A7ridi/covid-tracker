import React from 'react';
import numeral from 'numeral';
import './InfoBox.css';
import { Card, CardContent, Typography } from "@material-ui/core"

const InfoBox = ({ title, cases, isRed, active, total, ...props }) => {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">
                    { title }
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
                <Typography color="textSecondary" className="infoBox__total">
                    {numeral(total).format('0.0a')} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
