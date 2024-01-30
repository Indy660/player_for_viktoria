import { MUSIC_LIST } from '../const/music_list'
import { onBeforeMount, ref, computed, reactive } from 'vue'
// TODO: какого хрена рефы вызывают ошибку
// Ref, ComputedRef,
interface Track {
  songName: string
}

interface TopTrack extends Track {
  sort: number
  bestParties: true
}
export function tracksApi() {
  onBeforeMount(() => {
    defaultTrackList.value = MUSIC_LIST
    topTrackList.value = MUSIC_LIST.filter((item) => item.sort)
    notAggressiveTrackList.value = MUSIC_LIST.filter((item) => item.notAggressive)
    totalNumbSongs.value = currentTracks.value.length
  })
  const defaultTrackList: Ref<Track[]> = ref([])
  const topTrackList: Ref<TopTrack[]> = ref([])
  const notAggressiveTrackList: Ref<Track[]> = ref([])
  const currentTrackIndex: Ref<number> = ref(0)
  const totalNumbSongs: Ref<number> = ref(0)

  const pathToCurrentFile: ComputedRef<string> = computed(() => {
    // TODO: хз как сделать по другому
    const basePath = import.meta.env.DEV ? '/' : '/player_with_my_favorite_music/'
    return currentTracks.value[currentTrackIndex.value]
      ? `${basePath}music/${currentTracks.value[currentTrackIndex.value]}`
      : ``
  })

  const sortingTopTrackList = computed(() => {
    return [...topTrackList.value].sort((a, b) => a.sort - b.sort)
  })

  const tabsOption = reactive([
    { label: 'All music', id: 1, url: 'all' },
    { label: 'Top', id: 2, url: 'top' },
    { label: 'Top Shorts', id: 4, url: 'shorts' },
    { label: 'Not aggressive', id: 3, url: 'not_aggressive' }
  ])
  const tabSelected: Ref<number> = ref(1)
  function changeTab(option: Object) {
    if (
      !(tabSelected.value === 4 && option.id === 2) &&
      !(tabSelected.value === 2 && option.id === 4)
    ) {
      currentTrackIndex.value = 0
    }
    tabSelected.value = option.id
    totalNumbSongs.value = currentTracks.value.length
  }

  const tracksByTab: ComputedRef<string[]> = computed(() => {
    switch (tabSelected.value) {
      case 1:
        return defaultTrackList.value.map((item) => item.songName)
      case 2:
        return sortingTopTrackList.value.map((item) => item.songName)
      case 3:
        return notAggressiveTrackList.value.map((item) => item.songName)
      case 4:
        return sortingTopTrackList.value
          .filter((item) => item?.bestParties)
          .map((item) => item.songName)
    }
  })

  const currentBestParties = computed(() => {
    return (
      (tabSelected.value === 4 &&
        sortingTopTrackList.value[currentTrackIndex.value]?.bestParties) ||
      []
    )
  })

  const currentTracks: ComputedRef<string[]> = computed(() => {
    return isRandomTracks.value ? getRandomTracks() : tracksByTab.value
  })

  function getRandomTracks(): string[] {
    return tracksByTab.value
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  function nextTrack() {
    currentTrackIndex.value += 1
    if (currentTrackIndex.value >= currentTracks.value.length) {
      currentTrackIndex.value = 0
    }
  }

  function previousTrack() {
    currentTrackIndex.value =
      (currentTrackIndex.value - 1 + currentTracks.value.length) % currentTracks.value.length
  }

  function selectTrack(trackIndex: number) {
    currentTrackIndex.value = trackIndex
  }

  const isRandomTracks: Ref<boolean> = ref(false)
  function handlerRandomBtn() {
    isRandomTracks.value = !isRandomTracks.value
  }

  return {
    totalNumbSongs,
    defaultTrackList,
    topTrackList,
    currentBestParties,
    nextTrack,
    previousTrack,
    pathToCurrentFile,
    sortingTopTrackList,
    currentTrackIndex,
    changeTab,
    selectTrack,
    tabsOption,
    tabSelected,
    isRandomTracks,
    handlerRandomBtn,
    currentTracks
  }
}
