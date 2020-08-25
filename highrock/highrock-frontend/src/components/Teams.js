import React from "react"
import Title from "./Title"
import TeamMember from "./TeamMember"
import { Link } from "gatsby"

const Teams = ({team,title,showLink,list}) => {
  const [value, setValue] = React.useState(0);
  console.log(team);
  return (
    <section className="section teams section-center">
      <Title title={title}/>
      <div className="teams-center">
        {
          !list &&
          <div className="btn-container">
            {team.map((item, index)=>{
              return <button 
              className={`team-btn ${index === value && 'active-btn'}`} 
              key={item.id}
              onClick={()=> setValue(index)}
              >
                {item.name}
              </button>
            })}
          </div>
        }
          {team.map((item, index)=>{
            return <TeamMember activeValue={value} key={item.id} index={index} {...team[index]} listOutAll={list}/>
          })}
      </div>
      { showLink &&
      <Link to="/team" className="btn center-btn">
        All team
      </Link>
      }
    </section>
  );
};

export default Teams;
