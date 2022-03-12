import React, { useEffect, useState, useContext } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";






const UserList = ({ users, isLoading }) => {
  
  const [checkedCountryList, setCheckedCountrys] = useState([]);
  // 
  function onCheckboxChange(val, checked){
    if (checked)
      {

      
      checkedCountryList.push(val)
      setCheckedCountrys(checkedCountryList)
      }
    else{

      const filteredList = checkedCountryList.filter((country) =>country !== val)
      setCheckedCountrys(filteredList)
    }
      
    


  }  
  
  const [hoveredUserId, setHoveredUserId] = useState();
  
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
    
    
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };



  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil"  onChange={onCheckboxChange}
                                                            isChecked={!!checkedCountryList.find((country)=> country === "BR")}/>
        <CheckBox value="AU" label="Australia" onChange={onCheckboxChange}
          isChecked={!!checkedCountryList.find((country)=> country === "AU")}/>
        <CheckBox value="CA" label="Canada"  onChange={onCheckboxChange}
          isChecked={!!checkedCountryList.find((country)=> country === "CA")}/>
        <CheckBox value="DE" label="Germany" onChange={onCheckboxChange}
          isChecked={!!checkedCountryList.find((country)=> country === "DE")}/>
      </S.Filters>
      <S.List> 
        {users.filter((user)=> {
          if(checkedCountryList.length === 0){
            return true;
          }
          
          return !!checkedCountryList.find((country)=> country ===user.nat)
        }).map((user, index) => {
              console.log(user)
          return (
            
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
