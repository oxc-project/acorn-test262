__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 8,
            "end": 73,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 36,
                "end": 46,
                "value": {
                  "cooked": "321 123",
                  "raw": "321 123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 68,
                "end": 73,
                "value": {
                  "cooked": "321",
                  "raw": "321"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TemplateLiteral",
                "start": 15,
                "end": 35,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 15,
                    "end": 22,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 29,
                    "end": 35,
                    "value": {
                      "cooked": " 654",
                      "raw": " 654"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 23,
                    "end": 28,
                    "value": " | ",
                    "raw": "\" | \""
                  }
                ]
              },
              {
                "type": "TemplateLiteral",
                "start": 47,
                "end": 67,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 47,
                    "end": 54,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 61,
                    "end": 67,
                    "value": {
                      "cooked": " 654",
                      "raw": " 654"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 55,
                    "end": 60,
                    "value": " | ",
                    "raw": "\" | \""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
