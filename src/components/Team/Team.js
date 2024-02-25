import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';

const Team = () => {
    return (
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="Currently we have 2 experts created this website:" />

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        {/* <Teamitem teamImage="Islam.PNG" memberN="Islam Salamzade" memberd="Software Developer" /> */}
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="Islam.PNG" memberN="Islam Salamzade" memberd="Software Developer" />
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="Allahverdi.jpg" memberN="Allahverdi Ibrahimov" memberd="Software Developer" />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Team;