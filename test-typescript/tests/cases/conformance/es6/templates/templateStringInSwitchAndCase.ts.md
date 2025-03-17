__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 103,
  "body": [
    {
      "type": "SwitchStatement",
      "start": 1,
      "end": 103,
      "discriminant": {
        "type": "TemplateLiteral",
        "start": 9,
        "end": 21,
        "expressions": [
          {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 0,
            "raw": "0"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 9,
            "end": 15,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 16,
            "end": 21,
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
          "start": 29,
          "end": 40,
          "consequent": [],
          "test": {
            "type": "TemplateLiteral",
            "start": 34,
            "end": 39,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 34,
                "end": 39,
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
          "start": 61,
          "end": 101,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 88,
              "end": 101,
              "expression": {
                "type": "TemplateLiteral",
                "start": 88,
                "end": 100,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 94,
                    "end": 95,
                    "value": 1,
                    "raw": "1"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 88,
                    "end": 94,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 95,
                    "end": 100,
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
            "start": 66,
            "end": 78,
            "expressions": [
              {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "value": 0,
                "raw": "0"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 66,
                "end": 72,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 73,
                "end": 78,
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
