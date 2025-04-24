__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "SwitchStatement",
      "start": 0,
      "end": 102,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 28,
          "end": 39,
          "consequent": [],
          "test": {
            "type": "TemplateLiteral",
            "start": 33,
            "end": 38,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 33,
                "end": 38,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 44,
          "end": 55,
          "consequent": [],
          "test": {
            "type": "TemplateLiteral",
            "start": 49,
            "end": 54,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 54,
                "tail": true,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                }
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 60,
          "end": 100,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 87,
              "end": 100,
              "directive": null,
              "expression": {
                "type": "TemplateLiteral",
                "start": 87,
                "end": 99,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 93,
                    "end": 94,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 87,
                    "end": 93,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 94,
                    "end": 99,
                    "tail": true,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  }
                ]
              }
            }
          ],
          "test": {
            "type": "TemplateLiteral",
            "start": 65,
            "end": 77,
            "expressions": [
              {
                "type": "Literal",
                "start": 71,
                "end": 72,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 65,
                "end": 71,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 72,
                "end": 77,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          }
        }
      ],
      "discriminant": {
        "type": "TemplateLiteral",
        "start": 8,
        "end": 20,
        "expressions": [
          {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "raw": "0",
            "value": 0
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 8,
            "end": 14,
            "tail": false,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          },
          {
            "type": "TemplateElement",
            "start": 15,
            "end": 20,
            "tail": true,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
