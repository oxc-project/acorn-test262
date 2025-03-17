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
          "start": 61,
          "end": 101,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 88,
              "end": 101,
              "directive": null,
              "expression": {
                "type": "TemplateLiteral",
                "start": 88,
                "end": 100,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 94,
                    "end": 95,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 88,
                    "end": 94,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 95,
                    "end": 100,
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
            "start": 66,
            "end": 78,
            "expressions": [
              {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 66,
                "end": 72,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 73,
                "end": 78,
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
        "start": 9,
        "end": 21,
        "expressions": [
          {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "raw": "0",
            "value": 0
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 9,
            "end": 15,
            "tail": false,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          },
          {
            "type": "TemplateElement",
            "start": 16,
            "end": 21,
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
