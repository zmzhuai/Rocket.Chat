import React from 'react';

export default class RoomContainerComponent extends React.Component {
	render() {
		return (
			<ul aria-live="polite">
				<li>Message list</li>
			</ul>
		);
	}
}


/**

			<ul aria-live="polite">
				{{#if canPreview}}
					{{#if hasMore}}
						<li class="load-more">
							{{#if isLoading}}
								{{> loading}}
							{{/if}}
						</li>
					{{else}}
						<li class="start color-info-font-color">
							{{#if hasPurge}}
								<div class="start__purge-warning error-background error-border error-color">
									{{> icon block="start__purge-warning-icon" icon="warning"}}
									{{#unless filesOnly}}
										{{#unless excludePinned}}
											{{_ "RetentionPolicy_RoomWarning" time=purgeTimeout}}
										{{else}}
											{{_ "RetentionPolicy_RoomWarning_Unpinned" time=purgeTimeout}}
										{{/unless}}
									{{else}}
										{{#unless excludePinned}}
											{{_ "RetentionPolicy_RoomWarning_FilesOnly" time=purgeTimeout}}
										{{else}}
											{{_ "RetentionPolicy_RoomWarning_UnpinnedFilesOnly" time=purgeTimeout}}
										{{/unless}}
									{{/unless}}
								</div>
							{{/if}}
							{{_ "Start_of_conversation"}}
						</li>
					{{/if}}
				{{/if}}
				{{#each messagesHistory}}{{#nrr nrrargs 'message' .}}{{/nrr}}{{/each}}
				{{#if hasMoreNext}}
					<li class="load-more">
						{{#if isLoading}}
							{{> loading}}
						{{/if}}
					</li>
				{{/if}}
			</ul>
 */
