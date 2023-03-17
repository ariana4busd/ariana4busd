import css from "@app/page.module.css";
import { Icon } from "@icons/icon";
import { cn } from "@utils/classnames";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ariana for School Board",
};

export default function Home() {
  return (
    <>
      <section className={css.cover}>
        <Image src="/portrait/headshot-01.webp" alt="" fill priority />
        <div className={css.cover_text}>
          <div className={css.cover_name}>Ariana Martinez</div>
          <div className={css.cover_slogan}>
            Thriving Together Toward Student Success
          </div>
        </div>
      </section>

      <section className={css.intro} aria-label="Introduction">
        <div className={css.intro_img}>
          <Image src="/portrait/headshot-04.webp" alt="" fill />
        </div>
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
            personal experience advocating for my sister{"'"}s educational and
            mental health needs with her IEP, as well as my professional
            experience supporting foster youth and other vulnerable populations.
          </p>
          <p>
            I have established successful working relationships with various
            stakeholders including parents, school staff, service providers, and
            community members to assess and support the specialized needs of
            children and families. When we all work together, we can create a
            culture that nurtures success for our students.
          </p>
          <p>
            I have research experience in education, psychology, and social
            work. Research indicates that Social Emotional Learning contributes
            to higher academic achievement, improved mental health, and greater
            career success. Now more than ever is the opportunity to build on
            sources of support like the Wellness Center to make a positive
            difference on our students{"'"} mental health. I want to help every
            student feel included so they are safe to learn, safe to contribute,
            and safe to challenge the status quo. I hope to utilize my knowledge
            of the education system, my Child Welfare experience, and my
            socioemotional skills as a Licensed Clinical Social Worker to ensure
            we are <b>Thriving Together Toward Student Success</b> as a school
            district.
          </p>
        </div>
      </section>

      <section className={css.vote}>
        <h1>Vote April 11, 2023</h1>
        <Link href="/vote">
          <Icon id="ic_location" />
          <span>View Trustee Area 5</span>
        </Link>
      </section>

      <section className={cn(css.list, css.priority, "full_bleed")}>
        <h1>Priorities</h1>
        <dl>
          <div className={css.priority_card}>
            <picture>
              <Image src="/home/student_wellness.webp" alt="" fill />
            </picture>
            <dt>Student Wellness</dt>
            <dd>
              Ensuring social, emotional, and behavioral supports to reduce
              stress and promote resilience in schools
            </dd>
          </div>
          <div className={css.priority_card}>
            <picture>
              <Image src="/home/student_success.webp" alt="" fill />
            </picture>
            <dt>Student Success for All</dt>
            <dd>
              Appreciating the different strengths of all students to generate
              opportunities for each student to thrive
            </dd>
          </div>
          <div className={css.priority_card}>
            <picture>
              <Image src="/home/trust.webp" alt="" fill />
            </picture>
            <dt>Transparency and Trust</dt>
            <dd>
              Delineating a communication structure to disseminate key decisions
              that impact students, educators, and the community
            </dd>
          </div>
          <div className={css.priority_card}>
            <picture>
              <Image src="/home/collaboration.webp" alt="" fill />
            </picture>
            <dt>Collaboration and Community</dt>
            <dd>
              Leveraging the strengths of our community to find creative
              solutions together
            </dd>
          </div>
        </dl>
      </section>

      <section className={cn(css.list, css.endorsements)}>
        <h1>Endorsements</h1>
        <dl>
          <div className={css.endorsement}>
            <dt>Benicia Teachers Association</dt>
            <dd></dd>
          </div>
          <div className={css.endorsement}>
            <dt>California School Employee Association Benicia Chapter 1096</dt>
            <dd></dd>
          </div>
          <div className={css.endorsement}>
            <dt>Napa-Solano Central Labor Council </dt>
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
            <dd>Solano County Supervisor</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Michael Minahen</dt>
            <dd>
              Associate Superintendent of Human Resources and Educator
              Effectiveness, Solano County Office of Education
            </dd>
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
          <div className={css.endorsement}>
            <dt>Gary Wing</dt>
            <dd>Former Benicia Unified School Board Member</dd>
          </div>
          <div className={css.endorsement}>
            <dt>Jack Flynn</dt>
            <dd>
              Fairfield-Suisun Unified School District School Board Member
            </dd>
          </div>
          <div className={css.endorsement}>
            <dt>Dan Smith</dt>
            <dd>Former Benicia City Council Member</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
