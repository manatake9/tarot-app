# Cups Card Generation Rules

Use these prompts to create the Cups minor arcana cards in the same visual language as the existing major arcana images in `public/cards/major-arcana`.

## Output

- Size: `1024 x 1792`
- Aspect ratio: `4:7`
- Format: `PNG`
- Save folder: `public/cards/cups`
- Filename style: `ACE of CUPS.png`, `TWO of CUPS.png`, ... `KING of CUPS.png`
- Do not place card names, suit names, titles, captions, logos, or watermarks inside the image.

## Shared Prompt Blocks

### Base Prompt

```text
minimal fantasy tarot card illustration,
inspired by Rider-Waite tarot symbolism,
quiet cinematic atmosphere,
soft volumetric lighting,
minimal composition,
subtle surrealism,
symbolic negative space,
clean silhouette,
muted color palette,
gentle texture,
dreamlike environment,
balanced vertical composition,
medieval-inspired clothing,
no modern fashion,
emotion conveyed through posture and lighting,
high visual clarity,
ornate thin frame border,
small margin around artwork,
no text,
no title,
no watermark,
no logo
```

### Camera Prompt

```text
centered composition,
single main subject unless the card symbolism requires two or more figures,
cinematic framing,
slightly low camera angle,
strong silhouette readability,
subject occupying middle 60 percent of frame,
large atmospheric background,
soft depth perspective,
calm empty space around subject
```

### Frame Prompt

```text
thin decorative border,
elegant line art frame,
subtle vintage ornament,
2.5 percent outer margin,
symmetrical corner decoration,
minimal arcane motifs,
dark ivory frame color,
clean geometric balance
```

### Cups Suit Style

```text
The Cups suit should feel lunar, emotional, reflective, and watery.
Use silver-blue, pearl, muted teal, pale rose, soft gold, and deep indigo as recurring accents.
Water should appear often, but avoid making every card a literal ocean scene.
Cups should look like chalices, not modern glasses.
Figures should feel introspective rather than theatrical.
Prefer quiet rituals, moonlit gardens, reflective pools, mist, veils, flowers, and soft clouds.
```

### Negative Prompt

```text
modern clothes,
cyberpunk,
excessive jewelry,
heavy armor,
overcrowded composition,
busy background,
unnecessary extra characters,
text,
title,
watermark,
logo,
photorealistic skin pores,
hyper detailed face,
exaggerated anime expression,
beard,
mustache,
muscular bodybuilder physique,
extra fingers,
deformed hands,
blurry,
low quality,
oversaturated colors
```

## Copy-Paste Template

```text
[Base Prompt]

[Camera Prompt]

[Frame Prompt]

[Card-specific prompt]

[Cups Suit Style]

[Negative Prompt]
```
