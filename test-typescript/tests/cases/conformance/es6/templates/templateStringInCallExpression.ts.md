templateStringInCallExpression.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 51,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 1,
        "end": 50,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 14,
            "end": 32,
            "expressions": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 14,
                "end": 23,
                "tail": false,
                "value": {
                  "cooked": "hello ",
                  "raw": "hello "
                }
              },
              {
                "type": "TemplateElement",
                "start": 24,
                "end": 32,
                "tail": true,
                "value": {
                  "cooked": " world",
                  "raw": " world"
                }
              }
            ]
          },
          {
            "type": "TemplateLiteral",
            "start": 34,
            "end": 39,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 34,
                "end": 39,
                "tail": true,
                "value": {
                  "cooked": "   ",
                  "raw": "   "
                }
              }
            ]
          },
          {
            "type": "TemplateLiteral",
            "start": 41,
            "end": 49,
            "expressions": [
              {
                "type": "Literal",
                "start": 45,
                "end": 46,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 41,
                "end": 45,
                "tail": false,
                "value": {
                  "cooked": "1",
                  "raw": "1"
                }
              },
              {
                "type": "TemplateElement",
                "start": 46,
                "end": 49,
                "tail": true,
                "value": {
                  "cooked": "3",
                  "raw": "3"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "TemplateLiteral",
          "start": 1,
          "end": 13,
          "expressions": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1,
              "end": 7,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 8,
              "end": 13,
              "tail": true,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
