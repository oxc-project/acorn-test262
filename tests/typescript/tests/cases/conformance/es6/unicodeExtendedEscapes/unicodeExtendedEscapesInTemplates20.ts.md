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
                  "raw": "\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}",
                  "cooked": "Hello"
                },
                "tail": false,
                "start": 8,
                "end": 41
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}",
                  "cooked": "world"
                },
                "tail": true,
                "start": 74,
                "end": 106
              }
            ],
            "expressions": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\u{20}\\u{020}\\u{0020}\\u{000020}",
                      "cooked": "    "
                    },
                    "tail": true,
                    "start": 41,
                    "end": 74
                  }
                ],
                "expressions": [],
                "start": 41,
                "end": 74
              }
            ],
            "start": 8,
            "end": 106
          },
          "definite": false,
          "start": 4,
          "end": 106
        }
      ],
      "declare": false,
      "start": 0,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
