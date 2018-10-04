import React from 'react';
import ReactDOM from 'react-dom';
import {StyleGuide, DescribedMock, Embed} from './component-view';
import {Wizard} from './wizard';



ReactDOM.render(
    <StyleGuide>
      <DescribedMock title="Clariah WP3">
        Components for Clariah WP3.

          <Embed caption="Wizard" description="Go through a proces in mutiple steps">
            <Wizard wizardSteps={[
                                {
                                  "stepLink": "1.html",
                                  "stepState": "done",
                                  "stepNumber": "1",
                                  "stepText": "Upload"
                                },
                                {
                                  "stepLink": "2.html",
                                  "stepState": "done",
                                  "stepNumber": "2",
                                  "stepText": "Configure"
                                }
                              ]} />
          </Embed>
        </DescribedMock>


    </StyleGuide>,
  document.getElementById('container')
);
