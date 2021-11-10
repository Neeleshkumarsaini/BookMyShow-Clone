<template>
  <div class="events">
    <h1>Movies</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
	"adult": false,
	"backdrop_path": "/yguBaPk5V0nZCcSBthre4YFMAgk.jpg",
	"belongs_to_collection": null,
	"budget": 63000000,
	"genres": [{
		"id": 18,
		"name": "Drama"
	}],
	"homepage": "http://www.foxmovies.com/movies/fight-club",
	"id": 550,
	"imdb_id": "tt0137523",
	"original_language": "en",
	"original_title": "Fight Club",
	"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
	"popularity": 47.081,
	"poster_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
	"production_companies": [{
		"id": 508,
		"logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
		"name": "Regency Enterprises",
		"origin_country": "US"
	}, {
		"id": 711,
		"logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
		"name": "Fox 2000 Pictures",
		"origin_country": "US"
	}, {
		"id": 20555,
		"logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
		"name": "Taurus Film",
		"origin_country": "DE"
	}, {
		"id": 54051,
		"logo_path": null,
		"name": "Atman Entertainment",
		"origin_country": ""
	}, {
		"id": 54052,
		"logo_path": null,
		"name": "Knickerbocker Films",
		"origin_country": "US"
	}, {
		"id": 25,
		"logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
		"name": "20th Century Fox",
		"origin_country": "US"
	}, {
		"id": 4700,
		"logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
		"name": "The Linson Company",
		"origin_country": "US"
	}],
	"production_countries": [{
		"iso_3166_1": "DE",
		"name": "Germany"
	}, {
		"iso_3166_1": "US",
		"name": "United States of America"
	}],
	"release_date": "1999-10-15",
	"revenue": 100853753,
	"runtime": 139,
	"spoken_languages": [{
		"english_name": "English",
		"iso_639_1": "en",
		"name": "English"
	}],
	"status": "Released",
	"tagline": "Mischief. Mayhem. Soap.",
	"title": "Fight Club",
	"video": false,
	"vote_average": 8.4,
	"vote_count": 22760
}
        // {
        //   id: 5928101,
        //   category: 'animal welfare',
        //   title: 'Cat Adoption Day',
        //   description: 'Find your new feline friend at this event.',
        //   location: 'Meow Town',
        //   date: 'January 28, 2022',
        //   time: '12:00',
        //   petsAllowed: true,
        //   organizer: 'Kat Laydee'
        // },
        // {
        //   id: 4582797,
        //   category: 'food',
        //   title: 'Community Gardening',
        //   description: 'Join us as we tend to the community edible plants.',
        //   location: 'Flora City',
        //   date: 'March 14, 2022',
        //   time: '10:00',
        //   petsAllowed: true,
        //   organizer: 'Fern Pollin'
        // },
        // {
        //   id: 8419988,
        //   category: 'sustainability',
        //   title: 'Beach Cleanup',
        //   description: 'Help pick up trash along the shore.',
        //   location: 'Playa Del Carmen',
        //   date: 'July 22, 2022',
        //   time: '11:00',
        //   petsAllowed: false,
        //   organizer: 'Carey Wales'
        // }
      ]
    }
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>