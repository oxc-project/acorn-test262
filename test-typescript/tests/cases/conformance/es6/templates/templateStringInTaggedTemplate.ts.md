templateStringInTaggedTemplate.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 76,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 76,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 1,
        "end": 76,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 42,
          "end": 76,
          "expressions": [
            {
              "type": "Literal",
              "start": 48,
              "end": 52,
              "raw": "\"AM\"",
              "value": "AM"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 42,
              "end": 47,
              "tail": false,
              "value": {
                "cooked": "I ",
                "raw": "I "
              }
            },
            {
              "type": "TemplateElement",
              "start": 53,
              "end": 76,
              "tail": true,
              "value": {
                "cooked": " THE TEMPLATE PORTION",
                "raw": " THE TEMPLATE PORTION"
              }
            }
          ]
        },
        "tag": {
          "type": "TemplateLiteral",
          "start": 1,
          "end": 38,
          "expressions": [
            {
              "type": "TemplateLiteral",
              "start": 14,
              "end": 27,
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "start": 18,
                  "end": 23,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 18,
                      "end": 23,
                      "tail": true,
                      "value": {
                        "cooked": "TAG",
                        "raw": "TAG"
                      }
                    }
                  ]
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 14,
                  "end": 17,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 24,
                  "end": 27,
                  "tail": true,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  }
                }
              ]
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1,
              "end": 13,
              "tail": false,
              "value": {
                "cooked": "I AM THE ",
                "raw": "I AM THE "
              }
            },
            {
              "type": "TemplateElement",
              "start": 28,
              "end": 38,
              "tail": true,
              "value": {
                "cooked": " PORTION",
                "raw": " PORTION"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
