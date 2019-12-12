<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" md="6">
        <v-card color="primary" max-width="500" class="mx-auto pa-1">
          <v-row>
            <v-col md="2">
              <v-img :src="card.icon" aspect-ratio="1.5"></v-img>
            </v-col>
            <v-col md="7">
              <v-row>
                <v-col cols="12" class="pa-0">
                  <v-btn icon>
                    <v-icon color="white">mdi-checkbox-marked-outline</v-icon>
                  </v-btn>
                  <span color="white">{{ card.title }}</span>
                </v-col>
                <v-col cols="12" class="pa-0">
                  <v-icon color="white">mdi-cellphone-iphone</v-icon>
                  <span>{{ card.totalUsers }} users</span>
                  <span v-for="platform in platforms" :key="platform.index">
                    <v-icon color="white">{{ `mdi-${platform}` }}</v-icon>
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="3" class="text-sm-right">
              <v-btn v-for="item in TopIcons" :key="item.index" icon>
                <v-icon color="white">{{ `mdi-${item.icon}` }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <no-ssr>
            <v-sparkline
              :fill="true"
              :value="card.chartData"
              color="#99d5cf"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </no-ssr>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon color="white">mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="white">
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon color="white">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Card',
  data() {
    return {
      cards: [],
      //   labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      TopIcons: [{ icon: 'share-outline' }, { icon: 'dots-vertical' }],
      platforms: ['google-chrome', 'android', 'apple-ios']
    }
  },
  mounted() {
    this.handleFetchData()
  },
  methods: {
    async handleFetchData() {
      const res = await this.$axios(
        '/api/apps?take=5&skip=5&sortBy=title&direction=desc'
      )
      const { data } = res.data
      this.cards = data
      console.log(data)
    }
  }
}
</script>
<style>
span {
  color: #fff;
}
</style>
