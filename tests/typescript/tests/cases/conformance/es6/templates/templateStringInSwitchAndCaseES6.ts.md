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
      "discriminant": {
        "type": "TemplateLiteral",
        "start": 8,
        "end": 20,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 8,
            "end": 14,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 15,
            "end": 20,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "value": 0,
            "raw": "0"
          }
        ]
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 28,
          "end": 39,
          "test": {
            "type": "TemplateLiteral",
            "start": 33,
            "end": 38,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 33,
                "end": 38,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          },
          "consequent": []
        },
        {
          "type": "SwitchCase",
          "start": 44,
          "end": 55,
          "test": {
            "type": "TemplateLiteral",
            "start": 49,
            "end": 54,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 54,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                },
                "tail": true
              }
            ],
            "expressions": []
          },
          "consequent": []
        },
        {
          "type": "SwitchCase",
          "start": 60,
          "end": 100,
          "test": {
            "type": "TemplateLiteral",
            "start": 65,
            "end": 77,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 65,
                "end": 71,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 72,
                "end": 77,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 71,
                "end": 72,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 87,
              "end": 100,
              "expression": {
                "type": "TemplateLiteral",
                "start": 87,
                "end": 99,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 87,
                    "end": 93,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 94,
                    "end": 99,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 93,
                    "end": 94,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              },
              "directive": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
