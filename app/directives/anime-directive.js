"use strict";
function animeDirective($window) {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {

            // dictates the click event, attached to whichever element is assigned this directive (in food-selection)
            $element.on("click", () => {
                // sets element with the class of plate to the variable plate
                const plate = document.querySelector(".plate");
                // sets plate's first attribute value (count) to count
                const count = plate.attributes[0].value;
                // cycles 0-count and runs plateWobble(0 - count)
                for (let i = 0; i <= count; i++) {
                    plateWobble(i);
                }

                function plateWobble(count) {
                    var screenWidth = $window.innerWidth;

                    if (screenWidth <= 375) {
                        // array of animations
                        const animations = [
                            {
                                targets: '#item0',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['0.9', '-0.9'], duration: 200 },
                                    { value: ['1.1', '-1.1'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.7', '-0.7'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.3', '-0.3'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "75px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item1',
                                rotate: [
                                    { value: ['0.6', '-0.6'], duration: 210 },
                                    { value: ['0.8', '-0.8'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "140px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item2',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "205px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item3',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "270px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item4',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "335px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item5',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "400px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            }
                        ];

                        anime({
                            targets: '.plate',
                            rotate: [
                                { value: ['0.4', '-0.4'], duration: 210 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['1.2', '-1.2'], duration: 185 },
                                { value: ['1', '-1'], duration: 190 },
                                { value: ['0.8', '-0.8'], duration: 195 },
                                { value: ['0.6', '-0.6'], duration: 200 },
                                { value: ['0.4', '-0.4'], duration: 205 },
                                { value: ['0.2', '-0.2'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            easing: 'easeInOutCirc',
                            delay: 550
                        });
                        anime(animations[count]);
                        plate.attributes[0].value++;
                    } else if (screenWidth > 375 && screenWidth <= 769) {
                        const tabletAnimations = [
                            {
                                targets: '#item0',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['0.9', '-0.9'], duration: 200 },
                                    { value: ['1.1', '-1.1'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.7', '-0.7'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.3', '-0.3'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "20px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item1',
                                rotate: [
                                    { value: ['0.6', '-0.6'], duration: 210 },
                                    { value: ['0.8', '-0.8'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "135px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item2',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "255px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item3',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "375px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item4',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "495px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item5',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "610px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            }
                        ];

                        anime({
                            targets: '.plate',
                            rotate: [
                                { value: ['0.4', '-0.4'], duration: 210 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['1.2', '-1.2'], duration: 185 },
                                { value: ['1', '-1'], duration: 190 },
                                { value: ['0.8', '-0.8'], duration: 195 },
                                { value: ['0.6', '-0.6'], duration: 200 },
                                { value: ['0.4', '-0.4'], duration: 205 },
                                { value: ['0.2', '-0.2'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            easing: 'easeInOutCirc',
                            delay: 550
                        });
                        anime(tabletAnimations[count]);
                        plate.attributes[0].value++;
                        console.log("tablet animations ran");
                    } else if (screenWidth >= 770) {
                        const tabletAnimations = [
                            {
                                targets: '#item0',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['0.9', '-0.9'], duration: 200 },
                                    { value: ['1.1', '-1.1'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.7', '-0.7'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.3', '-0.3'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "20px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item1',
                                rotate: [
                                    { value: ['0.6', '-0.6'], duration: 210 },
                                    { value: ['0.8', '-0.8'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "135px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item2',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "255px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item3',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "375px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item4',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "495px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item5',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "610px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            }
                        ];

                        anime({
                            targets: '.plate',
                            rotate: [
                                { value: ['0.4', '-0.4'], duration: 210 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['1.2', '-1.2'], duration: 185 },
                                { value: ['1', '-1'], duration: 190 },
                                { value: ['0.8', '-0.8'], duration: 195 },
                                { value: ['0.6', '-0.6'], duration: 200 },
                                { value: ['0.4', '-0.4'], duration: 205 },
                                { value: ['0.2', '-0.2'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            easing: 'easeInOutCirc',
                            delay: 550
                        });
                        anime(tabletAnimations[count]);
                        plate.attributes[0].value++;
                        console.log("tablet animations ran");
                    }
                };

            })
        }
    }
}



angular.module("App").directive("animeDirective", animeDirective);