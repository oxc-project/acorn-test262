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
                    "raw": "1",
                    "value": 1
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 104,
                    "end": 110,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 111,
                    "end": 116,
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
            "start": 82,
            "end": 94,
            "expressions": [
              {
                "type": "Literal",
                "start": 88,
                "end": 89,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 82,
                "end": 88,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 89,
                "end": 94,
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
        "start": 25,
        "end": 37,
        "expressions": [
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "raw": "0",
            "value": 0
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 25,
            "end": 31,
            "tail": false,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          },
          {
            "type": "TemplateElement",
            "start": 32,
            "end": 37,
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
