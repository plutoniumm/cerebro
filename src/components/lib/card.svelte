<script>
    import Tag from "@com:lib/tag.svelte";
    import { wiki, medium, github } from "$lib/process";

    export let //
        data = {
            title: "",
            desc: "",
            tag: "",
            image: "",
            external: {
                github: "",
                medium: "",
                wiki: "",
                orig: "",
            },
        };

    const nukicon = "https://api.nukes.in/cms/icon?name";
    const { title, desc, tag, image, external: ext } = data;
</script>

<div class="card †l rpm-20 ƒ-col ∆-ct">
    <img class="hero" src={image} alt={title} />
    <h1 class="title">
        {title}
    </h1>
    <div>
        <Tag text={tag} />
    </div>
    <p class="desc">
        {desc}
    </p>
    <div class="ƒ ∆-bw">
        <a rel="external" target="_blank" href={github(ext.github)}>
            <img
                class="minicon dark m5 p5"
                src="{nukicon}=generic:GitHub.svg"
                alt=""
            />
        </a>
        <a rel="external" target="_blank" href={medium(ext.medium)}>
            <img
                class="minicon m5 p5"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
                alt=""
            />
        </a>
        <a rel="external" target="_blank" href={wiki(ext.wiki)}>
            <img
                class="minicon m5 p5"
                src="{nukicon}=generic:Wikipedia.svg"
                alt=""
            />
        </a>
        <a rel="external" target="_blank" href={ext.orig}>
            <img class="minicon m5 p5" src="{nukicon}=generic:Web.svg" alt="" />
        </a>
    </div>
</div>

<style lang="scss">
    .card {
        overflow: hidden;
        width: 350px;
        height: 375px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        align-items: left;
        .hero {
            width: 100px;
            height: 100px;
        }
    }
    .minicon {
        width: 36px;
        height: 36px;
        opacity: 75%;
    }
    .dark {
        filter: brightness(0%);
    }
    .title {
        font-size: 2rem;
    }
    .desc {
        font-size: 1.4rem;
    }
    @media (max-width: 768px) {
        .card {
            width: 300px;
            height: 325px;
        }
    }
</style>
