import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import InfoContact from '../components/InfoContact';
import GeneralInfoCard from '../components/GeneralInfoCard';
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
                imageUrl="images/profile.jpg"
                resumeUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              />
            </Card>
          </div>

          <div className="row">
            <Card groupClass="contactcard">
              <Contact>
                <InfoContact title="Based in:" subtitle="USA" groupClass="fas fa-map-marker-alt" />
              </Contact>
              <Contact>
                <InfoContact title="GitHub:" subtitle="johndoe" groupClass="fab fa-github" />
              </Contact>
              <Contact>
                <InfoContact title="LinkedIn:" subtitle="johndoe" groupClass="fab fa-linkedin" />
              </Contact>
              <Contact>
                <InfoContact title="Website:" subtitle="johndoe.com" groupClass="fas fa-globe" />
              </Contact>
              <Contact>
                <InfoContact title="Email:" subtitle="johndoe@johndoe.com" groupClass="fas fa-envelope" />
              </Contact>
              <Contact>
                <InfoContact title="Cellphone:" subtitle="+1 901 354 1894" groupClass="fas fa-mobile-alt" />
              </Contact>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="skillscard">
              <GeneralInfoCard title="Tech Stack" groupClass="skills">
                {[
                  'PHP', 'Laravel', 'JavaScript', 'React.js', 'Node.js', 'Nest.js',
                  'MySql', 'PostgreSQL', 'Git', 'Docker', 'PHUnit', 'CSS', 'Antd', 'Tailwind'
                ].map(skill => <InfoSkill key={skill} text={skill} />)}
              </GeneralInfoCard>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="experiencecard">
              <GeneralInfoCard title="Experience" groupClass="experience">
                <InfoGeneral date="September 2021 - Present" title="Position" description="Company Name" />
                <InfoGeneral date="July 2019 - August 2021" title="Position" description="Company Name" />
              </GeneralInfoCard>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="certificationcard">
              <GeneralInfoCard title="Certification" groupClass="certification">
                <InfoGeneral date="March 2022" title="Lorem ipsum" description="Lorem ipsum dolor sit amet" />
              </GeneralInfoCard>
            </Card>
          </div>

          <div className="row">
            <Card groupClass="educationcard">
              <GeneralInfoCard title="Education" groupClass="education">
                <InfoGeneral date="2015 - 2019" title="Degree" description="Institution Name" />
                <InfoGeneral date="2012 - 2014" title="Degree" description="Institution Name" />
              </GeneralInfoCard>
            </Card>
          </div>
        </div>

        <div className="column2">
          <div className="row">
            <GroupCard title="Github Projects" link="See All" linkHref="https://github.com/dufacoga?tab=repositories" groupClass="githubprojects">
              {repos.length === 0 ? (
                <p>Loading...</p>
              ) : repos.length === 0 ? (
                <p>No GitHub projects found.</p>
              ) : (
                <>
                  {repos.slice(0, 8).map((repo) => (
                    <Card key={repo.id} groupClass="githubproject" urlCard={repo.html_url} >
                      <InfoGithubProject
                        name={repo.name}
                        description={repo.description}
                        stars={repo.stargazers_count}
                        forks={repo.forks_count}
                        language={repo.language}
                      />
                    </Card>
                  ))}

                  {repos.length < 8 &&
                    Array.from({ length: 8 - repos.length }).map((_, i) => (
                      <Card key={`clone-${i}`} groupClass="githubproject clone" >
                        <InfoGithubProject
                          name={repos[0].name}
                          description={repos[0].description}
                          stars={repos[0].stargazers_count}
                          forks={repos[0].forks_count}
                          language={repos[0].language}
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
                  imageUrl="images/illustration-gallery-icon.png"
                  description="Lorem ipsum dolor sit amet..."
                />
              </Card>
              <Card groupClass="project">
                <InfoMyProject
                  title="Project Name"
                  imageUrl="images/illustration-gallery-icon.png"
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
                  imageUrl="images/amazonawsarticles.png"
                  description="In modern web dev, APIs are the lifeblood..."
                >
                  <InfoHashtag text="#api" />
                  <InfoHashtag text="#backend" />
                  <InfoHashtag text="#javascript" />
                  <InfoHashtag text="#tutorial" />
                </InfoMyArticle>
              </Card>
              <Card groupClass="article">
                <InfoMyArticle
                  title="Rate Limiting with Bottleneck"
                  time="about 1 year ago"
                  imageUrl="images/amazonawsarticles.png"
                  description="In modern web dev, APIs are the lifeblood..."
                >
                  <InfoHashtag text="#api" />
                  <InfoHashtag text="#backend" />
                  <InfoHashtag text="#javascript" />
                  <InfoHashtag text="#tutorial" />
                </InfoMyArticle>
              </Card>
            </GroupCard>
          </div>
        </div>
      </div>

      <div className="footer">
        <Card groupClass="footercard">
          <span>
            Inspired by <i className="fab fa-github"></i>Arifszn’s design. Fully recoded from scratch by <i className="fab fa-github"></i>Dufacoga.
          </span>
        </Card>
      </div>
    </div>
  );
}

export default Home;