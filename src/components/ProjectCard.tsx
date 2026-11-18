"use client";

import {
    AvatarGroup,
    Carousel,
    Column,
    Flex,
    Heading,
    SmartLink,
    Text,
} from "@/once-ui/components";
import styles from "./ProjectCard.module.scss";

type ProjectLink = {
    label: string;
    href: string;
};

interface ProjectCardProps {
    href: string;
    priority?: boolean;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
    link: string;
    videos?: string[];
    featured?: boolean;
    status?: string;
    links?: ProjectLink[];
}

function getVideoType(video: string) {
    return video.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
                                                            href,
                                                            images = [],
                                                            title,
                                                            content,
                                                            description,
                                                            avatars,
                                                            link,
                                                            videos = [],
                                                            featured = false,
                                                            status = "",
                                                            links = [],
                                                        }) => {
    return (
        <Column
            fillWidth
            gap="m"
            className={featured ? styles.featured : undefined}
            padding={featured ? "12" : undefined}
            radius={featured ? "l" : undefined}
        >
            {(featured || status) && (
                <Flex gap="8" wrap paddingX="s" vertical="center">
                    {featured && <span className={styles.featuredBadge}>Featured project</span>}
                    {status && <span className={styles.statusBadge}>{status}</span>}
                </Flex>
            )}

            {images.length > 0 && (
                <Carousel
                    sizes="(max-width: 960px) 100vw, 960px"
                    images={images.map((image) => ({
                        src: image,
                        alt: title,
                    }))}
                />
            )}

            {videos.length > 0 && (
                <div className={featured ? styles.featuredVideos : styles.videos}>
                    {videos.map((video, index) => (
                        <video
                            key={video}
                            controls
                            playsInline
                            preload={featured || index === 0 ? "metadata" : "none"}
                            className={styles.video}
                        >
                            <source src={video} type={getVideoType(video)} />
                            Your browser does not support embedded video.
                        </video>
                    ))}
                </div>
            )}

            <Flex
                mobileDirection="column"
                fillWidth
                paddingX="s"
                paddingTop="12"
                paddingBottom="24"
                gap="l"
            >
                {title && (
                    <Flex flex={5}>
                        <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                            {title}
                        </Heading>
                    </Flex>
                )}
                {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
                    <Column flex={7} gap="16">
                        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
                        {description?.trim() && (
                            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                                {description}
                            </Text>
                        )}
                        <Flex gap="24" wrap>
                            {content?.trim() && (
                                <SmartLink
                                    suffixIcon="arrowRight"
                                    style={{ margin: "0", width: "fit-content" }}
                                    href={href}
                                >
                                    <Text variant="body-default-s">Read case study</Text>
                                </SmartLink>
                            )}
                            {link && (
                                <SmartLink
                                    suffixIcon="arrowUpRightFromSquare"
                                    style={{ margin: "0", width: "fit-content" }}
                                    href={link}
                                >
                                    <Text variant="body-default-s">View project</Text>
                                </SmartLink>
                            )}
                            {links.map((projectLink) => (
                                <SmartLink
                                    key={projectLink.href}
                                    suffixIcon="arrowUpRightFromSquare"
                                    style={{ margin: "0", width: "fit-content" }}
                                    href={projectLink.href}
                                >
                                    <Text variant="body-default-s">{projectLink.label}</Text>
                                </SmartLink>
                            ))}
                        </Flex>
                    </Column>
                )}
            </Flex>
        </Column>
    );
};
