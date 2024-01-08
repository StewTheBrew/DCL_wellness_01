import { Schemas, engine } from '@dcl/sdk/ecs'


// We use this component to track and group all spinning entities.
// engine.getEntitiesWith(Spinner)
export const Spinner = engine.defineComponent('spinner', { speed: Schemas.Number })

// We use this component to track and group all the cubes.
// engine.getEntitiesWith(Cube)
export const Cube = engine.defineComponent('cube-id', {})

import {
    Animator,
    ColliderLayer,
    GltfContainer,
    InputAction,
    pointerEventsSystem,
    VideoPlayer,
    Material,
    Transform
  } from '@dcl/sdk/ecs'
  import { Vector3 } from '@dcl/sdk/math'
  import { setupUi } from './ui'
  

  
const wellness = engine.addEntity()
GltfContainer.create(wellness, {
  src: 'models/Zen_resort/wellness_02.glb',
  })


const screen1 = engine.addEntity()
GltfContainer.create(screen1, {
    src: 'models/Zen_resort/screen_1.glb',
    })


const screen2 = engine.addEntity()
GltfContainer.create(screen2, {
        src: 'models/Zen_resort/screen_2.glb',
        })

VideoPlayer.create(screen1, {
  src: 'models/Zen_resort/Short Meditation Music - 3 Minute Relaxation, Calming.mp4',
   playing: true,
        })

const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen1 })

// Material.setPbrMaterial(screen1, {
//   texture: videoTexture,
//   roughness: 1.0,
//   specularIntensity: 0,
//   metallic: 0,
// })