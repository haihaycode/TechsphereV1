// store/modules/audioPlayer.js
const state = {
    audioUrl: '',
    isAudioPlaying: false,
    audioCurrentTime: 0,
    audioDuration: 0
  };
  
  const mutations = {
    SET_AUDIO_URL(state, url) {
      state.audioUrl = url;
    },
    SET_AUDIO_PLAYING(state, isPlaying) {
      state.isAudioPlaying = isPlaying;
    },
    SET_AUDIO_CURRENT_TIME(state, currentTime) {
      state.audioCurrentTime = currentTime;
    },
    SET_AUDIO_DURATION(state, duration) {
      state.audioDuration = duration;
    }
  };
  
  const actions = {
    updateAudioUrl({ commit }, url) {
      commit('SET_AUDIO_URL', url);
    },
    updateAudioPlaying({ commit }, isPlaying) {
      commit('SET_AUDIO_PLAYING', isPlaying);
    },
    updateAudioCurrentTime({ commit }, currentTime) {
      commit('SET_AUDIO_CURRENT_TIME', currentTime);
    },
    updateAudioDuration({ commit }, duration) {
      commit('SET_AUDIO_DURATION', duration);
    }
  };
  
  const getters = {
    audioUrl: (state) => state.audioUrl,
    isAudioPlaying: (state) => state.isAudioPlaying,
    audioCurrentTime: (state) => state.audioCurrentTime,
    audioDuration: (state) => state.audioDuration
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  