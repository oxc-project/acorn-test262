__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "123",
                  "cooked": "123"
                },
                "tail": false,
                "start": 8,
                "end": 14
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "321 123",
                  "cooked": "321 123"
                },
                "tail": false,
                "start": 36,
                "end": 46
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "321",
                  "cooked": "321"
                },
                "tail": true,
                "start": 68,
                "end": 73
              }
            ],
            "expressions": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "456 ",
                      "cooked": "456 "
                    },
                    "tail": false,
                    "start": 15,
                    "end": 22
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " 654",
                      "cooked": " 654"
                    },
                    "tail": true,
                    "start": 29,
                    "end": 35
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": " | ",
                    "raw": "\" | \"",
                    "start": 23,
                    "end": 28
                  }
                ],
                "start": 15,
                "end": 35
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "456 ",
                      "cooked": "456 "
                    },
                    "tail": false,
                    "start": 47,
                    "end": 54
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " 654",
                      "cooked": " 654"
                    },
                    "tail": true,
                    "start": 61,
                    "end": 67
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": " | ",
                    "raw": "\" | \"",
                    "start": 55,
                    "end": 60
                  }
                ],
                "start": 47,
                "end": 67
              }
            ],
            "start": 8,
            "end": 73
          },
          "definite": false,
          "start": 4,
          "end": 73
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
