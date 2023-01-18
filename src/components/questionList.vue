<template >
    <div class="container q-pt-xl">
        <q-scroll-area>
        <div >
            Question List
        </div>
        <q-list class="q-mt-sm " v-for="q in 8" :key="q">
            <q-item>
                <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur
                        adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="star" color="yellow" />
                </q-item-section>
            </q-item>

            <q-separator spaced inset />
        </q-list>
    </q-scroll-area>
    </div>
</template>