import React from 'react';
import styled from 'styled-components'
import { Layout } from 'antd';
import AccountButton from './Button'

export default styled(
	({
		className
	}) => {
		
		return <Layout.Header 
			className={className}
			>
			<div 
				className="col right"
				>
				<AccountButton/>
			</div>
		</Layout.Header>
	})
	`
		
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 86px;
	padding: 0 40px;
	background: var(--color-primary);
	color: var(--color-light);
	
	.col{
		display: flex;
		align-items: center;

		&.right{
			line-height: 1em;

			.balance{
				font-size: 12px;
				margin-right: 1em;
				>*{
					line-height: 1.2em;
					text-align: right;
				}
			}
		}
	}

	.account-button{
		background: white !important;
		color: var(--color-primary) !important
	}

		
	`