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
                                                        }) => {
    return (
        <Column fillWidth gap="m">
            {/* Carrossel apenas para imagens (como originalmente) */}
            {images.length > 0 && (
                <Carousel
                    sizes="(max-width: 960px) 100vw, 960px"
                    images={images.map((image) => ({
                        src: image,
                        alt: title,
                    }))}
                />
            )}

            {/* Seção de vídeos abaixo do carrossel */}
            {videos.length > 0 && (
                <Column gap="s" paddingX="s">
                    {videos.map((video, index) => (
                        <video
                            key={index}
                            controls
                            style={{ width: '100%', borderRadius: '8px' }}
                        >
                            <source src={video} type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    ))}
                </Column>
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
                        </Flex>
                    </Column>
                )}
            </Flex>
        </Column>
    );
};