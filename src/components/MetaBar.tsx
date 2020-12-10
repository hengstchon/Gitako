import { BranchName, Breadcrumb, Flex, Text } from '@primer/components'
import { GitBranchIcon } from '@primer/octicons-react'
import * as React from 'react'

type Props = {
  metaData: MetaData
}

export function MetaBar({ metaData: { userName, repoName, branchName, repoUrl, userUrl } }: Props) {
  return (
    <Flex flexDirection="column" justifyContent="space-between" className={'meta-bar'}>
      <Breadcrumb>
        <Breadcrumb.Item href={userUrl}>
          <Text color="#58a6ff">{userName}</Text>
        </Breadcrumb.Item>
        <Breadcrumb.Item href={repoUrl}>
          <Text fontWeight="bolder" color="#58a6ff">{repoName}</Text>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Flex flexWrap="nowrap">
        <div className={'octicon-wrapper'}>
          <GitBranchIcon size="small" />
        </div>
        <BranchName as="span" backgroundColor="#161b22" color="#c9d1d9">
          {branchName || '...'}
        </BranchName>
      </Flex>
    </Flex>
  )
}
