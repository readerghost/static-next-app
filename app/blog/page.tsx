import Image from "next/image";

export default function Blog() {
    return (
        <div className="flex flex-col justify-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold my-4">Spring Doesn`t Recommend @Autowired Anymore</h1>
            <Image src="spring.webp" alt="image" width={800} height={600} priority />
            <p className="line-height=2.5 text-lg">the world of Spring development, particularly Spring Boot, the @Autowired annotation has long been a staple for injecting dependencies into Spring-managed beans. However, with the evolution of Springs best practices and the introduction of new features, <code>@Autowired</code> is no longer the recommended approach for dependency injection. This shift can be surprising for developers familiar with older versions of Spring. In this blog, well dive into why @Autowired is falling out of favor, the alternatives Spring recommends, and how you can modernize your Spring codebase.</p>
        </div>

    );
}