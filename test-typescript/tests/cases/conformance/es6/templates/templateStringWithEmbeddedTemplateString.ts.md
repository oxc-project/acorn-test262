templateStringWithEmbeddedTemplateString.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
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
                    "raw": "\" | \"",
                    "value": " | "
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 16,
                    "end": 23,
                    "tail": false,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 30,
                    "end": 36,
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
                "start": 48,
                "end": 68,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 56,
                    "end": 61,
                    "raw": "\" | \"",
                    "value": " | "
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 48,
                    "end": 55,
                    "tail": false,
                    "value": {
                      "cooked": "456 ",
                      "raw": "456 "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 62,
                    "end": 68,
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
                "start": 9,
                "end": 15,
                "tail": false,
                "value": {
                  "cooked": "123",
                  "raw": "123"
                }
              },
              {
                "type": "TemplateElement",
                "start": 37,
                "end": 47,
                "tail": false,
                "value": {
                  "cooked": "321 123",
                  "raw": "321 123"
                }
              },
              {
                "type": "TemplateElement",
                "start": 69,
                "end": 74,
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
  "sourceType": "script"
}
```
