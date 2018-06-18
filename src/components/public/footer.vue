<template>
    <footer class="footer">
        <div class="music_control">
            <div>
                <div class="btn"><img src="../../assets/imgs/pre_white.png"/></div>
                <div class="btn"><img src="../../assets/imgs/pause_white.png"/></div>
                <div class="btn"><img src="../../assets/imgs/next_white.png"/></div>
            </div>
        </div>
        <div class="music_schedule">
            <mu-container style="padding: 16px 0;">
              <mu-flex>
                <mu-flex>
                  00:00
                </mu-flex>
                <mu-flex fill style="padding: 0 16px;">
                  <mu-slider v-model="size" :min="36" :step="1" :max="200"/>
                </mu-flex>
                <mu-flex>
                  04:08
                </mu-flex>
              </mu-flex>
            </mu-container>
        </div>
        <div class="music_voice">
            <mu-container style="padding: 16px 0;">
              <mu-flex>
                <mu-flex>
                    <img src="../../assets/imgs/music_lyrics.png"/>
                </mu-flex>
                <mu-flex fill style="padding: 0 16px;">
                  <mu-slider v-model="size2" :min="0" :step="1" :max="100"/>
                </mu-flex>
              </mu-flex>
            </mu-container>
        </div>

        <div class="music_menu">
            <img src="../../assets/imgs/music_lyrics.png"/>
            <img src="../../assets/imgs/music_lyrics.png"/>
            <img src="../../assets/imgs/music_lyrics.png"/>
        </div>

    </footer>
</template>

<script>
export default {
    data() {
        return {
            size: 56,
            size2: 36
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import 'footer.scss';
</style>