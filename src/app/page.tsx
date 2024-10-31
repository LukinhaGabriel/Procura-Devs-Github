"use client";

import { useEffect, useState } from "react";

import SearchForm from "@/components/searchform/search-form";
import ProfileStats from "@/components/profile-stat/profile-stat";
import ErrorMessage from "@/components/error-message/error-message";
import { GithubUser } from "@/types/github-user";

import { getUserByName } from "@/services/api";
import { formatDate } from "@/utils/format-date";

import { Buildings, Link, MapPin, TwitterLogo } from "@phosphor-icons/react/dist/ssr";

import "./index.css";

export default function Home() {
  const  [user, setUser] = useState<GithubUser | undefined>(undefined);
  const  [error, setError] = useState<string | undefined>(undefined);
  
  const userAdded = (name: string):void => {
    setError("");
    getUserByName(name)
    .then( ( data ) => { return setUser( data ); } )
    .catch( ( error ) => { setError(error.message) } );
  };

  useEffect(() => {
    getUserByName("lukinhagabriel")
      .then( ( data ) => { return setUser( data ); } )
      .catch( ( error ) => { setError(error.message) } );
  }, []);

  return (
    <main>
      <SearchForm searchUserByName = {(name:string)  => userAdded(name) } />
      {error && user &&
        (
          <ErrorMessage message={error}/>
        )}
      {(user) && (!error) &&
        (<section className="profile">
          <div  className="profile__avatar">
            <img src={`https://github.com/${user.login}.png`} alt="Avatar" />
          </div>
          <div className="profile__user">
            <h2 className="profile__name">{user.name}</h2>
            <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className="profile__username">@{user.login}</a>
            <p className="profile__created_at">Juntou-se em <time dateTime={user.created_at}>{formatDate(user.created_at)}</time></p>
          </div>
            
          <p className="profile__bio">{user.bio || "Bio não disponível"}</p>
            
          <div  className="profile__stats">
            <ProfileStats label="Repos:" value={`${user.public_repos}`}/>
            <ProfileStats label="Followers:" value={`${user.followers}`}/>
            <ProfileStats label="Following:" value={`${user.following}`}/>
          </div>
            
          <ul className="profile__details">
            <li className="profile__details__item">
              <MapPin size={24} weight="fill"/>
              <p>{user.location}</p>
            </li>
              
            <li className="profile__details__item">
              <TwitterLogo size={24} weight="fill"/>
              <a href={`https://x.com/${user.twitter_username}`} target="_blanck" rel="noopener noreferrer">{user.twitter_username || "Não disponível"}</a>
            </li>

            <li className="profile__details__item">
              <Link size={24} />
              <a href={`${user.blog}`} target="_blank" rel="noopener noreferrer">{user.blog  || "Não disponível"}</a>
            </li>
              
            <li className="profile__details__item">
              <Buildings size={24} weight="fill" />
              <p>{user.company || "Não disponível"}</p>
            </li>
          </ul>
        </section>)}
    </main>
  );
}