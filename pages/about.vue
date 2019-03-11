<template>
  <main id="content" class="container mx-auto">
    <h1 class="text-2xl m-4 leading-tight">
      About Us
    </h1>
    <p class="leading-normal m-4">
      HJW Executive Search is a limited liability corporation headquartered in White Plains, NY. Together the principals of the organization, Ron Harrington and Matt DeSabella, have over 20 years of executive search experience. Our firm has quickly emerged as one of the leading executive search firms in North America.  At HJW Executive Search, we take a specialist approach to executive search. Upon the beginning of our relationship, we will assign an expert within our firm who completely understands your industry and the position you are either looking to fill or secure. We have a proprietary database of elite candidates, clients and contacts with whom we have built career-long relationships. Our talent lies in making the perfect match between these different groups, providing companies with the top talent in their industry, while offering our candidates great jobs that can further propel their careers.
    </p>
    <p class="leading-normal m-4">
      Our core competencies are recruiting top talent within the following skill sets: Marketing, Sales, Client Services, Pre-Sales, Post Sales, Ad Operations, Sales Planning, Accounting and Finance, Market Research and Business Analytics. In the past year alone, we have made successful placements in Digital Media, Advertising, Programmatic, RTB, Social Media, Insurance, Financial Services, Marketing/Interactive Marketing Services, Enterprise Software, Transportation, Healthcare and Publishing.
    </p>
    <p class="leading-normal m-4">
      At HJW Executive Search, we take the necessary time to listen to our clients and candidates, understand their needs, and build long-term business relationships. We believe this simple, yet effective, strategy provides us with a competitive edge, but most importantly, it delivers results. 
    </p>
    <p class="leading-normal m-4">
      We look forward to working with you.
    </p>
    <ul class="list-reset m-4">
      <li v-for="(person, index) in people" :key="person.name">
        <div class="flex bg-white rounded shadow flex-wrap md:flex-no-wrap justify-center p-4 mb-4 items-center">
          <img :src="person.img" alt="" :class="[index % 2 === 0 ? 'avatar-even' : 'avatar-odd']">
          <h2 class="text-xl leading-tight w-full text-center my-4 md:w-48 mx-2 flex-no-shrink " v-text="person.name" />
          <p class="leading-normal" v-text="person.bio" />
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: 'Ron Harrington',
          bio: `As one of the founding principals of HJW Executive Search, Ron Harrington brings over a decade of experience and is recognized as one of the leading executive recruiters within the digital advertising / interactive marketing space. Prior to HJW Executive Search, Ron was a three time "top-biller" award winner at a national executive search firm specializing in direct and interactive marketing recruitment. Ron has successfully built and maintained long-term business relationships with clients ranging from small early stage start ups to fortune 1000 companies. Ron has a BS in Business Management from Albertus Magnus College in New Haven CT.`,
          img: require('@/assets/images/people/ron-harrington.jpg')
        },
        {
          name: 'Matt DeSabella',
          bio: `One of the most sought-after Executive Recruiters, Matt DeSabella brings over 9 years of Executive Recruiting experience.  At HJW Executive Search, Matt manages the full "recruiting cycle". He helps clients find that "perfect" candidate and he helps candidates bring their careers to new levels. Since joining HJW Executive Search in 2004, he has helped the company more than double in size. Prior to his Executive Recruiting career, Matt served as General Manager of The Ash Creek Saloon in Fairfield CT, a full service restaurant that ranks amongst one of the best and most successful in the state. Matt enjoys spending time with his family, sports, good food, and a good laugh!! Oh yeah, and a Bud Light after mowing his lawn...`,
          img: require('@/assets/images/people/matt-desabella.jpg')
        },
        {
          name: 'Joshua Bergmark',
          bio: `Joshua Bergmark is one of the most detailed and talented recruiters in the business today.  Josh will present opportunities that are a solid fit for your background and will help guide the process to the finish line. Since joining HJW Executive Search in 2007, he has made countless placements across the country and is constantly on the look out for new business. If you are currently hiring, we highly recommend you reach out to Josh directly and he will lead you through the HJW Executive Search process. Josh is a huge sports fan!! NY Yankees baseball on the TV and playing soccer, softball, basketball, tennis, squash, football, and any other sport I can find time to play!`,
          img: require('@/assets/images/people/joshua-bergmark.jpg')
        },
        {
          name: 'Kristen Osak',
          bio: `Offers 19 years of experience in the CPG industry at Nabisco Biscuit Company, Frito Lay, Snapple and supplier side with clients; Unilever and Ronzoni. I take pride in my work as a recruiter and it shows with both repeat clients & candidates. I enjoy spending time with family & friends, fitness, running and snow-mobiling. I am blessed to be working with such a fantastic team of individuals at HJW Executive Search.`,
          img: require('@/assets/images/people/KristenOsak.jpg')
        },
        {
          name: 'Chris Harrington',
          bio: `I am a senior full cycle digital and emerging technology sales recruiter. Spent my first 4 years in the business working for Danny Cahill at Hobson Associates. Trained by one of the best trainers in the business, won several company awards and was the only non-equity employee to qualify for the 2012 Top Billers RIO Mar incentive Trip which was given to the top 5 billers year to date during each calendar year and consistently finished in top 10% competing against some of the best recruiters in the country. I joined HJW Search in July of 2015 and I run a full cycle desk and manage the careers of key industry players who aren’t looking for a job, but will make a move for the right opportunity, leadership, technology, marketplace positioning, or just a very compelling story that matches there career progression. Major wins in Federal, Social, Mobile, Video technology, Digital, SaaS and Marketing Analytics, digital and multi-channel for the HCP marketplace. Outside of my professional career I am a proud father of 2 girls, Denver Broncos enthusiast, and proud member of Red Sox Nation. Oh, and another fun fact, I have mastered the art of American Cuisine, Barbecue style and won back to back KCBS sanctioned amateur competitions.`,
          img: require('@/assets/images/people/chris-harrington.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.avatar-odd {
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
}
.avatar-even {
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}
</style>
