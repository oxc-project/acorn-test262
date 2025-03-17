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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                    "raw": "\" | \"",
                    "value": " | "
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 32,
                    "end": 39,
                    "tail": false,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 46,
                    "end": 52,
                    "tail": true,
                    "value": {
                      "cooked": " 654",
                      "raw": " 654"
                    }
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
                    "raw": "\" | \"",
                    "value": " | "
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 64,
                    "end": 71,
                    "tail": false,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 78,
                    "end": 84,
                    "tail": true,
                    "value": {
                      "cooked": " 654",
                      "raw": " 654"
                    }
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "tail": false,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                }
              },
              {
                "type": "TemplateElement",
                "start": 53,
                "end": 63,
                "tail": false,
                "value": {
                  "cooked": "321 123",
                  "raw": "321 123"
                }
              },
              {
                "type": "TemplateElement",
                "start": 85,
                "end": 90,
                "tail": true,
                "value": {
                  "cooked": "321",
                  "raw": "321"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
