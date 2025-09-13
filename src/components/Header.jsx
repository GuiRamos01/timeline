import { Link, useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

import { AlignJustify, LogOut, Search, Settings, User, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button.jsx"

import Logo from "../img/timeline.png"
import { useState } from "react";
import axios from "axios";
import CookieConsent from "./Cookie";
import { useQuery } from '@tanstack/react-query';

function Header() {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const encodedInput = encodeURIComponent(inputText);
    window.location.href = `/search/?q=${encodedInput}`;
  };

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ["categories"], // chave única do cache
    queryFn: async () => {
      const res = await axios.get(
        "https://revistatimeline.com/wp-json/wp/v2/categories?&per_page=30"
      );
      return res.data;
    },
  });

  const logout = () => {
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
      <div id="Header">
        <Sheet>
          <SheetTrigger><AlignJustify /></SheetTrigger>
          <SheetContent side="left" id="menuHeader">
            <SheetHeader>              
              <form onSubmit={handleSubmit} className="search">
                  <input 
                  type="search" 
                  placeholder="Buscar..." 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <Search onClick={handleSubmit} />
              </form>
              <br />

              <Button className="assineButton">Assine já</Button>

              <Link to='/'>Início</Link>
              <Link to='/quem-somos'>Quem somos</Link>
              <Link to='#'>Comunidade</Link>
              <br />

              <Link to='/ultimas-noticias'>Últimas Notícias</Link>
              {isLoading ? ("") : isError ? ("") : (
                categories?.map((cat) => (
                  <Link
                    reloadDocument
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                  >
                    {cat.name}
                  </Link>
                ))
              )}

              <br />
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <img src={Logo} onClick={() => navigate(`/`)} alt="" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer"><User /></DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Olá, Lorem</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Users /> Comunidade</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings /> Configurações</DropdownMenuItem>
            <DropdownMenuItem onClick={(logout)} className="cursor-pointer"><LogOut /> Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <CookieConsent/>
      </div>
  )
}

export default Header;
