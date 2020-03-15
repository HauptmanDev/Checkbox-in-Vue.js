<template>
    <div class="firstPage">
        <header>
            <h1>{{ msg }}</h1>
        </header>
        <main class="main">
            <div class="md-checkbox" v-on:keydown.space="onChange">
                <div v-bind:class="[checkedValue ? 'container-enabled' : 'container-checked']">
                    <div id="press-checkbox">
                        <input id="i1" type="checkbox" v-on:click="onClick" v-bind:checked="checkedValue"
                               v-bind:disabled="inputDisabled">
                        <label for="i1" disabled="inputDisabled"></label>
                    </div>
                </div>
            </div>
            <div>
                <md-button v-on:click="onDisabledClick">Disabled/Enabled</md-button>
            </div>
        </main>
    </div>
</template>


<script>
    export default {
        name: 'PageCheckbox',
        props: {
            msg: String,
        },
        data: () => {
            return {
                checkedValue: false,
                inputDisabled: false,
                checkedKeyboard: false,
            };
        },
        methods: {
            onClick: function () {
                this.checkedValue = !this.checkedValue;
            },
            onDisabledClick: function () {
                this.inputDisabled = !this.inputDisabled;
            }
        },
        created() {
            document.addEventListener('keydown', ev => {
                if (ev.code === 'Space' || ev.code === 'Tab') {
                    let clickClass = document.getElementById('press-checkbox');
                    clickClass.classList.add('press-checked-on');
                    this.onClick();
                }
            });
        },
    };

</script>

<style lang="scss">

    .firstPage {
        display: flex;
        flex-direction: column;
    }

    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
    }

    $md-checkbox-checked-color: rgb(51, 122, 183);
    $md-checkbox-border-color: rgba(0, 0, 0, 0.54);
    $md-checkbox-border-color-disabled: rgba(0, 0, 0, 0.26);
    $md-checkbox-checked-color-disabled: rgba(0, 0, 0, 0.26);

    $md-checkbox-margin: 1em 0;
    $md-checkbox-size: 1.25em;
    $md-checkbox-padding: .25em;
    $md-checkbox-border-width: 2px;
    $md-checkbox-border-radius: 0.125em;
    $md-checkmark-width: 0.125em;
    $md-checkmark-color: #fff;
    $md-checkbox-label-padding: .75em;
    $md-checkbox-status: silver;

    .md-checkbox {
        position: relative;
        margin: $md-checkbox-margin;
        text-align: left;

        &.md-checkbox-inline {
            display: inline-block;
        }

        label {
            cursor: pointer;
            display: inline;
            line-height: $md-checkbox-size;
            vertical-align: top;
            clear: both;
            padding-left: 1px;

            &:not(:empty) {
                padding-left: $md-checkbox-label-padding;
            }

            &:before, &:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
            }

            &:before {
                // box
                width: $md-checkbox-size;
                height: $md-checkbox-size;
                background: #fff;
                border: $md-checkbox-border-width solid $md-checkbox-border-color;
                border-radius: $md-checkbox-border-radius;
                cursor: pointer;
                transition: background .3s;
            }

            &:after {
                // checkmark
            }
        }

        input[type="checkbox"] {
            outline: 0;
            visibility: hidden;
            width: $md-checkbox-size;
            margin: 0;
            display: block;
            float: left;
            font-size: inherit;


            &:checked {
                + label:before {
                    background: $md-checkbox-checked-color;
                    border: none;
                }

                + label:after {
                    $md-checkmark-size: $md-checkbox-size - 2 * $md-checkbox-padding;
                    transform: translate($md-checkbox-padding, ($md-checkbox-size / 2) - ($md-checkmark-size / 2.6)) rotate(-45deg);
                    width: $md-checkmark-size;
                    height: $md-checkmark-size / 2;
                    border: $md-checkmark-width solid $md-checkmark-color;
                    border-top-style: none;
                    border-right-style: none;
                }
            }

            &:disabled {
                + label:before {
                    border-color: $md-checkbox-border-color-disabled;
                }

                &:checked {
                    + label:before {
                        background: $md-checkbox-checked-color-disabled;
                    }
                }
            }
        }

    }

    .container-checked {

        &:before, &:after {
            content: "";
            position: absolute;
        }

        &:hover {
            &:before {
                top: -(1.5em - $md-checkbox-size / 2);
                left: -(1.5em - $md-checkbox-size / 2);
                width: 3em;
                height: 3em;
                background: silver;
                border-radius: 50%;
                cursor: pointer;
                transition: background .3s;
            }
        }


        &:after {
            // checkmark
        }

        input[type="checkbox"] {
            outline: 0;
            visibility: hidden;
            margin: 0;
            display: block;
            float: left;
            font-size: inherit;


            &:checked {
                + label:before {
                    background: $md-checkbox-checked-color;
                    border: none;
                }

                + label:after {
                    $md-checkmark-size: $md-checkbox-size - 2 * $md-checkbox-padding;
                    transform: translate($md-checkbox-padding, ($md-checkbox-size / 2) - ($md-checkmark-size / 2.6)) rotate(-45deg);
                    width: $md-checkmark-size;
                    height: $md-checkmark-size / 2;
                    border: $md-checkmark-width solid $md-checkmark-color;
                    border-top-style: none;
                    border-right-style: none;
                }
            }

            &:disabled {
                + label:before {
                    border-color: $md-checkbox-border-color-disabled;
                }

                &:checked {
                    + label:before {
                        background: $md-checkbox-checked-color-disabled;
                    }
                }
            }
        }
    }

    .container-enabled {

        &:before, &:after {
            content: "";
            position: absolute;
        }

        &:hover {
            &:before {
                top: -(1.5em - $md-checkbox-size / 2);
                left: -(1.5em - $md-checkbox-size / 2);
                width: 3em;
                height: 3em;
                background: lightblue;
                border-radius: 50%;
                cursor: pointer;
                transition: background .3s;
            }
        }


        &:after {
            // checkmark
        }

        input[type="checkbox"] {
            outline: 0;
            visibility: hidden;
            margin: 0;
            display: block;
            float: left;
            font-size: inherit;


            &:checked {
                + label:before {
                    background: $md-checkbox-checked-color;
                    border: none;
                }

                + label:after {
                    $md-checkmark-size: $md-checkbox-size - 2 * $md-checkbox-padding;
                    transform: translate($md-checkbox-padding, ($md-checkbox-size / 2) - ($md-checkmark-size / 2.6)) rotate(-45deg);
                    width: $md-checkmark-size;
                    height: $md-checkmark-size / 2;
                    border: $md-checkmark-width solid $md-checkmark-color;
                    border-top-style: none;
                    border-right-style: none;
                }
            }

            &:disabled {
                + label:before {
                    border-color: $md-checkbox-border-color-disabled;
                }

                &:checked {
                    + label:before {
                        background: $md-checkbox-checked-color-disabled;
                    }
                }
            }
        }
    }

    .press-checked-on {
        width: 3em;
        height: 3em;
        background: silver;
        border-radius: 50%;
        cursor: pointer;
        transition: background .3s;
    }

    .press-checked-off {
        width: 3em;
        height: 3em;
        background: lightblue;
        border-radius: 50%;
        cursor: pointer;
        transition: background .3s;
    }

    // *************************************

    // *************************************
    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        position: absolute;
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif;
        color: #333;
        font-size: 16px;
    }

    section {
        background: white;
        margin: 0 auto;
        padding: 4em;
        max-width: 800px;

        h1 {
            margin: 0 0 2em;
        }
    }
</style>
