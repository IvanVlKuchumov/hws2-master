import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: 147,
                height: 4,
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:after': {
                        width: 6,
                        height: 6,
                        top: '50%',
                        left: '50%',
                        backgroundColor: '#00CC22'
                    }
                }

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
