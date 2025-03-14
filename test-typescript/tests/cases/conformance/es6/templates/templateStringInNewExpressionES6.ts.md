templateStringInNewExpressionES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 71,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 71,
      "expression": {
        "type": "NewExpression",
        "start": 17,
        "end": 70,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 34,
            "end": 52,
            "expressions": [
              {
                "type": "Literal",
                "start": 43,
                "end": 44,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 34,
                "end": 43,
                "tail": false,
                "value": {
                  "cooked": "hello ",
                  "raw": "hello "
                }
              },
              {
                "type": "TemplateElement",
                "start": 44,
                "end": 52,
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
            "start": 54,
            "end": 59,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 54,
                "end": 59,
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
            "start": 61,
            "end": 69,
            "expressions": [
              {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 61,
                "end": 65,
                "tail": false,
                "value": {
                  "cooked": "1",
                  "raw": "1"
                }
              },
              {
                "type": "TemplateElement",
                "start": 66,
                "end": 69,
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
          "start": 21,
          "end": 33,
          "expressions": [
            {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 21,
              "end": 27,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 28,
              "end": 33,
              "tail": true,
              "value": {
                "cooked": "abc",
                "raw": "abc"
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
