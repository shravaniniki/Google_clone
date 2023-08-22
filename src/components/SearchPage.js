import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import Search from './Search';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function SearchPage() {
    const [{term},dispatch]=useStateValue();
    const {data}=useGoogleSearch(term);
    console.log(data);
  return (
    <div className='searchPage'>
        <div className='serachPage_header'>
            <Link to='/'>
            <img className='searchPage_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' alt='google logo'/>
             </Link>
             <div className='searchPage_headerBody'>
              <Search hideButtons/>
              <div className='searchPage_options'>
                <div className='searchPage_optionsLeft'>
                  <div className='searchPage_option'>
                   <SearchIcon/>
                   <Link to='/all'>All</Link>
                  </div>  
                  <div className='searchPage_option'>
                   <DescriptionIcon/>
                   <Link to='/news'>News</Link>
                  </div>
                  <div className='searchPage_option'>
                   <ImageIcon/>
                   <Link to='/image'>Image</Link>
                  </div> 
                  <div className='searchPage_option'>
                   <LocalOfferIcon/>
                   <Link to='/shoping'>Shoping</Link>
                  </div>
                  <div className='searchPage_option'>
                   <RoomIcon/>
                   <Link to='/maps'>Maps</Link>
                  </div> 
                  <div className='searchPage_option'>
                   <MoreVertIcon/>
                   <Link to='/more'>More</Link>
                  </div>
                </div>
                <div className='searchPage_optionsRight'>
                  <div className='searchPage_option'>
                    <Link to='/settings'>Settings</Link>
                  </div>      
                  <div className='searchPage_option'>
                    <Link to='/tools'>Tools</Link>
                  </div>
                </div>
              </div>
             </div>
        </div>
        {true && (
          <div className='searchPage_results'>
            <p className='searchPage_resultCount'>
About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
            </p>
            {
              data?.items.map(item=>(
                <div className='searchPage_result'>
                  <a href={item.Link}>
                    <img className='searchPage_resultImage' src={item.pagemap?.cse_image?.length>0 && 
                    item.pagemap?.cse_image?.[0]?.src} 
                    alt='search result'/>
                    {item.displayLink}</a>
                  <a className='searchPage_resultTitle' href={item.Link}><h2>{item.title}</h2></a>
                  <p className='searchPage_resultSnippet'>{item.snippet}</p>
                </div>
              ))
            }
            </div>
        )} 
        <div className='searchPage_result'>
         
        </div>
    </div>
  )
}
