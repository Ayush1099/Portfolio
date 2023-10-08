import styled from 'styled-components'

export const Card = styled.div`
    width: 330px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
        height: auto; /* Adjust the height to 'auto' on hover */
    }
`
export const Title = styled.div`
    margin-top: 2px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.bgLight}; /* Set initial background color */
    color: ${({ theme }) => theme.white}; /* Set initial text color */
    text-decoration: none; /* Remove underline */
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; /* Add transition for color change */

    ${({ dull, theme }) => dull && `
        color: ${theme.text_secondary};
    `}
    
    &:hover {
        background-color: ${({ theme }) => theme.primary}; /* Change background color on hover */
        color: ${({ theme }) => theme.text_primary}; /* Change text color on hover */
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`
export const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? 'unset' : '4')}; /* Expand all lines on hover */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all 0.8s ease-in-out;
`
export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`
export const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`