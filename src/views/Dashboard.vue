<!-- clean code là trên hết nghe -->
<template>
    <div class="card m-3">
        <div class="card-body grid grid-cols-1 md:grid-cols-3">
            <div class="w-full">
                <sidebar></sidebar>
            </div>
            <div class="col-span-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit deserunt quis, quibusdam delectus
                    mollitia maiores, aspernatur sapiente ad eligendi odit? Placeat vero sunt nam qui quidem ullam
                    recusandae blanditiis.</p>
            </div>
        </div>
    </div>
</template>
<script>
import sidebar from "@/components/account/sidebar.vue";
export default {
    name: "DashboardComponent",
    components: {
        sidebar,
    },
}
</script>