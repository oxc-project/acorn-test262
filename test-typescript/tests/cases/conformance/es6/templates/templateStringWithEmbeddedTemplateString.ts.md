__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 9,
            "end": 74,
            "expressions": [
              {
                "type": "TemplateLiteral",
                "start": 16,
                "end": 36,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 24,
                    "end": 29,
                    "value": " | ",
                    "raw": "\" | \""
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 16,
                    "end": 23,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 30,
                    "end": 36,
                    "value": {
                      "cooked": " 654",
                      "raw": " 654"
                    },
                    "tail": true
                  }
                ]
              },
              {
                "type": "TemplateLiteral",
                "start": 48,
                "end": 68,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 56,
                    "end": 61,
                    "value": " | ",
                    "raw": "\" | \""
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 48,
                    "end": 55,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 62,
                    "end": 68,
                    "value": {
                      "cooked": " 654",
                      "raw": " 654"
                    },
                    "tail": true
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 37,
                "end": 47,
                "value": {
                  "cooked": "321 123",
                  "raw": "321 123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 69,
                "end": 74,
                "value": {
                  "cooked": "321",
                  "raw": "321"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
