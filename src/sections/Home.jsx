import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import InfoContact from '../components/InfoContact';
import GeneralInfoCard from '../components/GeneralInfoCard';
import GeneralLargeCard from '../components/GeneralLargeCard';
import InfoSkill from '../components/InfoSkill';
import InfoGeneral from '../components/InfoGeneral';
import GroupCard from '../components/GroupCard';
import InfoGithubProject from '../components/InfoGithubProject';
import InfoPublication from '../components/InfoPublication';
import InfoMyProject from '../components/InfoMyProject';
import InfoMyArticle from '../components/InfoMyArticle';
import InfoHashtag from '../components/InfoHashtag';

function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/dufacoga/repos?sort=updated&direction=desc', {
          headers: {
            'User-Agent': 'PortfolioApp',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="column1">
          <div className="row">
            <Card groupClass="headercard">
              <Header />
            </Card>
          </div>

          <div className="row">
            <Card groupClass="profilecard">
              <Profile
                title="John Doe"
                subtitle="Sr. Software Engineer | Distributed Systems Specialist | Node.js, Microservices Architecture"
                imageUrl={`${import.meta.env.BASE_URL}images/profile.jpg`}
                resumeUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              />
            </Card>
          </div>

          <div className="row">
            <Card groupClass="contactcard">
              <Contact>
                <InfoContact title="Based_in" subtitle="USA" end="," subtitleUrl="" subtitleUrltarget="_self"/>
                <InfoContact title="GitHub" subtitle="johndoe" end="," subtitleUrl="" subtitleUrltarget="_blank"/>
                <InfoContact title="LinkedIn" subtitle="johndoe" end="," subtitleUrl="" subtitleUrltarget="_blank"/>
                <InfoContact title="Website" subtitle="johndoe.com" end="," subtitleUrl="" subtitleUrltarget="_blank"/>
                <InfoContact title="Email" subtitle="johndoe@johndoe.com" end="," subtitleUrl="" subtitleUrltarget="_self"/>
                <InfoContact title="Cellphone" subtitle="+1 901 354 1894" end="" subtitleUrl="" subtitleUrltarget="_self"/>
              </Contact>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="skillscard">
              <GeneralInfoCard title="TECH_STACK">
                <InfoSkill text="PHP" end="," />
                <InfoSkill text="Laravel" end="," />
                <InfoSkill text="JavaScript" end="," />
                <InfoSkill text="React.js" end="," />
                <InfoSkill text="Node.js" end="," />
                <InfoSkill text="Nest.js" end="," />
                <InfoSkill text="MySql" end="," />
                <InfoSkill text="PostgreSQL" end="," />
                <InfoSkill text="Git" end="," />
                <InfoSkill text="Docker" end="," />
                <InfoSkill text="PHUnit" end="," />
                <InfoSkill text="CSS" end="," />
                <InfoSkill text="Antd" end="," />
                <InfoSkill text="Tailwind" end="" />
              </GeneralInfoCard>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="experiencecard">
              <GeneralLargeCard title="EXPERIENCE">
                <InfoGeneral startDate="September 2021" endDate="Present" title="Position" description="Company Name" type="Stage" />
                <InfoGeneral startDate="July 2019" endDate="August 2021" title="Position" description="Company Name" type="Entry" />
              </GeneralLargeCard>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="certificationcard">
              <GeneralLargeCard title="CERTIFICATIONS">
                <InfoGeneral startDate="" endDate="March 2022" title="Title" description="Institution Name" type="" />
              </GeneralLargeCard>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="educationcard">
              <GeneralLargeCard title="EDUCATION">
                <InfoGeneral startDate="" endDate="December 2019" title="Degree" description="Institution Name" type="" />
                <InfoGeneral startDate="" endDate="December 2014" title="Degree" description="Institution Name" type="" />
              </GeneralLargeCard>
            </Card>
          </div>
        </div>

        <div className="column2">
          <div className="row">
            <GroupCard title="GITHUB_PROJECTS" link="See All Projects" linkHref="https://github.com/dufacoga?tab=repositories" groupClass="githubprojects">
              {repos.length === 0 ? (
                <p>Loading...</p>
              ) : repos.length === 0 ? (
                <p>No GitHub projects found.</p>
              ) : (
                <>
                  {repos.slice(0, 6).map((repo) => (
                    <Card key={repo.id} groupClass="githubproject" urlCard="" >
                      <InfoGithubProject
                        name={repo.name}
                        description={repo.description}
                        stars={repo.stargazers_count}
                        forks={repo.forks_count}
                        language={repo.language}
                        link={repo.name}
                        linkHref={repo.html_url}
                      />
                    </Card>
                  ))}

                  {repos.length < 6 &&
                    Array.from({ length: 6 - repos.length }).map((_, i) => (
                      <Card key={`clone-${i}`} groupClass="githubproject clone" >
                        <InfoGithubProject
                          name={repos[0].name}
                          description={repos[0].description}
                          stars={repos[0].stargazers_count}
                          forks={repos[0].forks_count}
                          language={""}
                        />
                      </Card>
                    ))}
                </>
              )}
            </GroupCard>
          </div>

          <div className="row">
            <GroupCard title="Publications" groupClass="publications">
              <Card groupClass="publication">
                <InfoPublication
                  title="Publication Title"
                  origin="Journal Name"
                  author="John Doe, Jane Smith"
                  description="Lorem ipsum dolor sit amet..."
                />
              </Card>
              <Card groupClass="publication">
                <InfoPublication
                  title="Publication Title"
                  origin="Journal Name"
                  author="John Doe, Jane Smith"
                  description="Lorem ipsum dolor sit amet..."
                />
              </Card>
            </GroupCard>
          </div>

          <div className="row">
            <GroupCard title="My Projects" groupClass="myprojects">
              <Card groupClass="project">
                <InfoMyProject
                  title="Project Name"
                  imageUrl={`${import.meta.env.BASE_URL}images/illustration-gallery-icon.png`}
                  description="Lorem ipsum dolor sit amet..."
                />
              </Card>
              <Card groupClass="project">
                <InfoMyProject
                  title="Project Name"
                  imageUrl={`${import.meta.env.BASE_URL}images/illustration-gallery-icon.png`}
                  description="Lorem ipsum dolor sit amet..."
                />
              </Card>
            </GroupCard>
          </div>

          <div className="row">
            <GroupCard title="My Articles" groupClass="myarticles">
              <Card groupClass="article">
                <InfoMyArticle
                  title="Rate Limiting with Bottleneck"
                  time="about 1 year ago"
                  imageUrl={`${import.meta.env.BASE_URL}images/amazonawsarticles.png`}
                  description="In modern web dev, APIs are the lifeblood..."
                >
                  <InfoHashtag text="#api" end="," />
                  <InfoHashtag text="#backend" end="," />
                  <InfoHashtag text="#javascript" end="," />
                  <InfoHashtag text="#tutorial" end="" />
                </InfoMyArticle>
              </Card>
              <Card groupClass="article">
                <InfoMyArticle
                  title="Rate Limiting with Bottleneck"
                  time="about 1 year ago"
                  imageUrl={`${import.meta.env.BASE_URL}images/amazonawsarticles.png`}
                  description="In modern web dev, APIs are the lifeblood..."
                >
                  <InfoHashtag text="#api" end="," />
                  <InfoHashtag text="#backend" end="," />
                  <InfoHashtag text="#javascript" end="," />
                  <InfoHashtag text="#tutorial" end="" />
                </InfoMyArticle>
              </Card>
            </GroupCard>
          </div>
        </div>
      </div>

      <div className="footer">
        <Card groupClass="footercard">
          <span>
            Developed entirely by <i className="fab fa-github"></i>Dufacoga.
          </span>
        </Card>
      </div>
    </div>
  );
}

export default Home;