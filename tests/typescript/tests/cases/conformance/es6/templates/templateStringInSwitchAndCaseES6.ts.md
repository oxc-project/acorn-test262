__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": false,
            "start": 8,
            "end": 14
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": true,
            "start": 15,
            "end": 20
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 14,
            "end": 15
          }
        ],
        "start": 8,
        "end": 20
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 33,
                "end": 38
              }
            ],
            "expressions": [],
            "start": 33,
            "end": 38
          },
          "consequent": [],
          "start": 28,
          "end": 39
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "123",
                  "cooked": "123"
                },
                "tail": true,
                "start": 49,
                "end": 54
              }
            ],
            "expressions": [],
            "start": 49,
            "end": 54
          },
          "consequent": [],
          "start": 44,
          "end": 55
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 65,
                "end": 71
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 72,
                "end": 77
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 71,
                "end": 72
              }
            ],
            "start": 65,
            "end": 77
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 87,
                    "end": 93
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": true,
                    "start": 94,
                    "end": 99
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 93,
                    "end": 94
                  }
                ],
                "start": 87,
                "end": 99
              },
              "directive": null,
              "start": 87,
              "end": 100
            }
          ],
          "start": 60,
          "end": 100
        }
      ],
      "start": 0,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
