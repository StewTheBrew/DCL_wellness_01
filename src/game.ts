import {
  Animator,
  ColliderLayer,
  engine,
  GltfContainer,
  InputAction,
  pointerEventsSystem,
  Transform
} from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { setupUi } from './ui'



const TC = engine.addEntity()

// Add a 3D model to it
GltfContainer.create(TC, {
  src: 'models/Medieval_maze/Treasure_chamber.glb',
})

Animator.create(TC, {
  states: [
    {
      clip: 'up',
      playing: true,
      loop: false,
    },
  ],
})

pointerEventsSystem.onPointerDown(
  {
    entity: TC,
    opts: {
      button: InputAction.IA_POINTER,
      hoverText: 'Interact'
    }
  },
  () => {
    // TODO use Animator.getClip()
    const mutableAnimator = Animator.getMutable(TC)
    mutableAnimator.states[1].playing = true
  }
)