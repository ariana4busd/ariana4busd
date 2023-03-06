import Image from "next/image";
import { cn } from "./helpers";
import css from "./page.module.css";

export const metadata = {
  title: "Ariana for School Board",
};

export default function Home() {
  return (
    <>
      <section className={css.cover}>
        <img src="/portrait/headshot-01.webp" alt="" />
        <div className={css.cover_text}>
          <div className={css.cover_name}>Ariana Martinez</div>
          <div className={css.cover_slogan}>
            Thriving Together Toward Student Success
          </div>
        </div>
      </section>

      <section className={css.intro} aria-label="Introduction">
        <img
          className={css.intro_img}
          src="/portrait/headshot-04.webp"
          alt=""
        />
        <div>
          <p>
            My name is Ariana Martinez and I am privileged to have the
            opportunity to run for the Benicia Unified School District Governing
            Board Trustee Area 5.
          </p>
          <p>
            Born and raised in the Bay Area, I have the unique experience of
            being a product of Vallejo schools, a charter school, and Benicia
            High School. I have also served children and families across a
            variety of school settings in my role as a Social Worker. My entire
            career has been in public service with an emphasis on serving
            children and families.
          </p>
          <p>
            I know firsthand the importance of equity in education from my
            personal experience advocating for my sister’s educational and
            mental health needs with her IEP, as well as my professional
            experience supporting foster youth and other vulnerable populations.
          </p>
          <p>
            I have established successful working relationships with various
            stakeholders including parents, school staff, service providers, and
            community members to assess and support the specialized needs of
            children and families.
          </p>
          <p>
            I have research experience in education, psychology, and social
            work. I hope to utilize my knowledge of the education system, my
            Child Welfare experience, and my skills as a Licensed Clinical
            Social Worker to ensure success for our school district.
          </p>
        </div>
      </section>

      <section className={cn(css.priorities, "full_bleed")}>
        <h1>Priorities</h1>
        <dl>
          <div className={css.priority}>
            <dt>Student Wellness</dt>
            <dd>
              Ensuring social, emotional, and behavioral supports to reduce
              stress and promote resilience in schools
            </dd>
          </div>
          <div className={css.priority}>
            <dt>Student Success for All</dt>
            <dd>
              Appreciating the different strengths of all students to generate
              opportunities for each student to thrive
            </dd>
          </div>
          <div className={css.priority}>
            <dt>Transparency and Trust</dt>
            <dd>
              Delineating a communication structure to disseminate key decisions
              that impact students, educators, and the community
            </dd>
          </div>
          <div className={css.priority}>
            <dt>Collaboration and Community</dt>
            <dd>
              Leveraging the strengths of our community to find creative
              solutions together
            </dd>
          </div>
        </dl>
      </section>

      <section className={css.endorsements}>
        <h1>Endorsements</h1>
        <dl>
          <div className={css.endorsement}>
            <dt>Benicia Teachers Association</dt>
            <dd></dd>
          </div>
          <div className={css.endorsement}>
            <dt>Bill Dodd</dt>
            <dd>California State Senator</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Steve Young</dt>
            <dd>Benicia Mayor</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Terry Scott</dt>
            <dd>Benicia Vice Mayor</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Kari Birdseye</dt>
            <dd>Benicia City Council Member</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Monica Brown</dt>
            <dd>Solano County Board of Supervisor</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Sheri Zada</dt>
            <dd>Benicia Unified School Board President</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Mark Maselli</dt>
            <dd>Benicia Unified School Board Member</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Dr. Gethsemane Moss</dt>
            <dd>Benicia Unified School Board Member</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Andre Stewart</dt>
            <dd>Former Benicia Unified School Board Member</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
