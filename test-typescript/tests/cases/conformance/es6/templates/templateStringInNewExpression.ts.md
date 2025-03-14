__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 55,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 55,
      "expression": {
        "type": "NewExpression",
        "start": 1,
        "end": 54,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 18,
            "end": 36,
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
                "start": 18,
                "end": 27,
                "tail": false,
                "value": {
                  "cooked": "hello ",
                  "raw": "hello "
                }
              },
              {
                "type": "TemplateElement",
                "start": 28,
                "end": 36,
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
            "start": 38,
            "end": 43,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 38,
                "end": 43,
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
            "start": 45,
            "end": 53,
            "expressions": [
              {
                "type": "Literal",
                "start": 49,
                "end": 50,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 45,
                "end": 49,
                "tail": false,
                "value": {
                  "cooked": "1",
                  "raw": "1"
                }
              },
              {
                "type": "TemplateElement",
                "start": 50,
                "end": 53,
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
          "start": 5,
          "end": 17,
          "expressions": [
            {
              "type": "Literal",
              "start": 11,
              "end": 12,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 5,
              "end": 11,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 12,
              "end": 17,
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
  "sourceType": "script",
  "hashbang": null
}
```
