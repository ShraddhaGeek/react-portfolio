import React from 'react'
import Particles from "react-particles-js";

export default function ParticleContainer(props) {
    const particlesOptions = {
        'particles': {
            'number': {
                'value': 20,
                'density': {
                'enable': true,
                'value_area': 200,
            }
            },
            'color': {
                "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
                // 'value': props.theme.palette.text.primary,
            },
            'size': {
                'value': 4,
                'random': true,
                'anim': {
                    'speed': 10,
                    'size_min': 0.3
                }
            },
            'line_linked': {
                'enable': false
            },
            'move': {
                'random': true,
                'speed': 1,
                'direction': 'top',
                'out_mode': 'out'
            }
        },
        'interactivity': {
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'bubble'
                },
                'onclick': {
                    'enable': true,
                    'mode': 'repulse'
                }
            },
            'modes': {
                'bubble': {
                    'distance': 250,
                    'duration': 2,
                    'size': 0,
                    'opacity': 0
                },
                'repulse': {
                    'distance': 400,
                    'duration': 4
                }
            }
        }
    }

    return (
        <div style={props.theme.palette.particle}>
            <Particles params={particlesOptions} />
            {props.children}
        </div>
    )
}
