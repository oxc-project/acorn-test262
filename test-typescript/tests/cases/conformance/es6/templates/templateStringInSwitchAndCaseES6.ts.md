__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 119,
  "body": [
    {
      "type": "SwitchStatement",
      "start": 17,
      "end": 119,
      "discriminant": {
        "type": "TemplateLiteral",
        "start": 25,
        "end": 37,
        "expressions": [
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "value": 0,
            "raw": "0"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 25,
            "end": 31,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 32,
            "end": 37,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": true
          }
        ]
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 45,
          "end": 56,
          "consequent": [],
          "test": {
            "type": "TemplateLiteral",
            "start": 50,
            "end": 55,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 50,
                "end": 55,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 61,
          "end": 72,
          "consequent": [],
          "test": {
            "type": "TemplateLiteral",
            "start": 66,
            "end": 71,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 66,
                "end": 71,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                },
                "tail": true
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 77,
          "end": 117,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 104,
              "end": 117,
              "expression": {
                "type": "TemplateLiteral",
                "start": 104,
                "end": 116,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 110,
                    "end": 111,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 104,
                    "end": 110,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 111,
                    "end": 116,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": true
                  }
                ]
              },
              "directive": null
            }
          ],
          "test": {
            "type": "TemplateLiteral",
            "start": 82,
            "end": 94,
            "expressions": [
              {
                "type": "Literal",
                "start": 88,
                "end": 89,
                "value": 0,
                "raw": "0"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 82,
                "end": 88,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 89,
                "end": 94,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
