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
                  "raw": "123",
                  "cooked": "123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 36,
                "end": 46,
                "value": {
                  "raw": "321 123",
                  "cooked": "321 123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 68,
                "end": 73,
                "value": {
                  "raw": "321",
                  "cooked": "321"
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
                      "raw": "456 ",
                      "cooked": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 29,
                    "end": 35,
                    "value": {
                      "raw": " 654",
                      "cooked": " 654"
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
                      "raw": "456 ",
                      "cooked": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 61,
                    "end": 67,
                    "value": {
                      "raw": " 654",
                      "cooked": " 654"
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
