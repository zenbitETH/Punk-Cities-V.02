import { FC } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import styled from "styled-components";

type Visibility = 'always' | 'connected' | 'not_connected'


const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  background: #aaa6a1;
  font-size: 26px;
  font-weight: 500;
  border-radius: 10rem;
  

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #fdb04e;
	background: #fdb04e;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #fdb04e;
  }
`;


const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { isConnected } = useAccount()

	if ((show == 'connected' && !isConnected) || (show == 'not_connected' && isConnected)) return null

	return (
		<div className='mx-auto'>
			<ConnectKitButton.Custom>

			{({ isConnected, show, truncatedAddress, ensName }) => {
      		  return (
      		    <StyledButton onClick={show}>
      		      {isConnected ? ensName ?? truncatedAddress : "Start Game"}
      		    </StyledButton>
      		  );
      		}}

			</ConnectKitButton.Custom>
		</div>
	)
}

export default ConnectWallet
