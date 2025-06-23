"use client"
import React, { Suspense } from "react";
import Section from "./section";
import bonusBuyIcon from "../../../../../public/assets/categoriesIcon/bonus_buy_icon.svg";
import featuredGamesIcon from "../../../../../public/assets/categoriesIcon/featured_games_icon.svg";
import hotGameIcon from "../../../../../public/assets/categoriesIcon/hot game.svg";
import liveGameIcon from "../../../../../public/assets/categoriesIcon/livegameIcon.svg";
import newReleases from "../../../../../public/assets/categoriesIcon/ new release.svg";
import { useSearchParams } from "next/navigation";
import { getData } from "@/app/hooks/getData";

export default function Content() {
  const searchParams = useSearchParams();
  const res = getData();

  const categoryParam = searchParams.get('category');
  const providerParam = searchParams.get('provider');
  const searchParam = searchParams.get('search');

  const defaultSections = [
    { id: 'featured-games', name: 'Featured Games', icon: featuredGamesIcon },
    { id: 'new-releases', name: 'New Releases', icon: newReleases },
    { id: 'hot-games', name: 'Hot Games', icon: hotGameIcon },
    { id: 'bonus-buy', name: 'Bonus Buy', icon: bonusBuyIcon },
    { id: 'live', name: 'Live Games', icon: liveGameIcon }
  ];

  const isFilterActive = categoryParam || providerParam || searchParam;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isFilterActive ? (
        <Section 
          res={res} 
          categories={categoryParam?.split(',') || []}
          providers={providerParam?.split(',') || []}
          searchQuery={searchParam || ''}
          categoriesName="Filtered Results"
          icon={featuredGamesIcon}
          showAll={true}
        />
      ) : (
        defaultSections.map(section => (
          <Section
            key={section.id}
            res={res}
            categories={[section.id]}
            categoriesName={section.name}
            icon={section.icon}
          />
        ))
      )}
    </Suspense>
  );
}