__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 91,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 25,
            "end": 90,
            "expressions": [
              {
                "type": "TemplateLiteral",
                "start": 32,
                "end": 52,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 40,
                    "end": 45,
                    "value": " | ",
                    "raw": "\" | \""
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 32,
                    "end": 39,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 46,
                    "end": 52,
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
                "start": 64,
                "end": 84,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 72,
                    "end": 77,
                    "value": " | ",
                    "raw": "\" | \""
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 64,
                    "end": 71,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 78,
                    "end": 84,
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
                "start": 25,
                "end": 31,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 53,
                "end": 63,
                "value": {
                  "cooked": "321 123",
                  "raw": "321 123"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 85,
                "end": 90,
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
