<template>
    <div>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar flat="flat" color="blue">
            <v-app-bar-nav-icon
                variant="text"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>My files</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn variant="text" icon="mdi-magnify"></v-btn>

            <v-btn variant="text" icon="mdi-filter"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>
    </div>
</template>
<script setup>
const drawer = ref(false);
const items = ref([
    { title: "Home", icon: "mdi-inbox" },
    { title: "Inbox", icon: "mdi-inbox" },
    { title: "Starred", icon: "mdi-star" },
    { title: "Send email", icon: "mdi-email" },
    { title: "Drafts", icon: "mdi-file" },
]);
</script>
