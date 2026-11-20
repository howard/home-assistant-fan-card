# Agent instructions

## Tooling and development workflow

Commit at your own discretion.

If tools/environments are required that aren't available on the host system, use containers.
For recurring use cases, keep re-usable container stuff around.

Keep track of pending tasks using a to-do list.
Make a plan for each task before beginning implementation.
Planning may include exploratory activities.

When UI reaches a meaningful state, show a screenshot to the human for approval.

## Goal

This project develops a Home Assistant Marketplatce (formerly called HACS) plugin/extension that introduces a new card type for fan control.

The card can be configured by setting one or more fans that are defined by entities that provide speed in Hz, and an optional problem entity for highlighting fans with issues.

The card should also have configuration for how many fans to show per row.
This is important, because the card should shows an image of a beige Noctua fan for each configured fan, whose blades are animated to rotate at the actual rate of rotation from the Hz sensor entity.

The animation might be poorly visible at the actual rate, so provide optional configuration for scaling the rate of rotation (1.0 matches real life rotation frequency, 0.5 should animate half as fast as reality, use 0.15 by default).

When a fan has a problem according to the optional problem entity, it should have a red border.

### Usage example

I have 8 fan entities that I want to show in two rows, so 4 fans per row.
The Hz entities could read like `sensor.onlyfans_e86bead8_fan0_tacho` - the corresponding error entity could read like `binary_sensor.onlyfans_e86bead8_fan0_problem`.

## Deployment

I will install this to my personal Home Assistant setup via Marketplace.
