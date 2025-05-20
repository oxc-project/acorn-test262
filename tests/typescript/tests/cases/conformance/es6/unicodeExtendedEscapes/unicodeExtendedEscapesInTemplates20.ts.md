__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 106,
          "definite": false,
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
            "end": 106,
            "expressions": [
              {
                "type": "TemplateLiteral",
                "start": 41,
                "end": 74,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 41,
                    "end": 74,
                    "tail": true,
                    "value": {
                      "cooked": "    ",
                      "raw": "\\u{20}\\u{020}\\u{0020}\\u{000020}"
                    }
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 41,
                "tail": false,
                "value": {
                  "cooked": "Hello",
                  "raw": "\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}"
                }
              },
              {
                "type": "TemplateElement",
                "start": 74,
                "end": 106,
                "tail": true,
                "value": {
                  "cooked": "world",
                  "raw": "\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}"
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
