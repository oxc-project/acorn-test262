__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 130,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 30,
            "end": 128,
            "expressions": [
              {
                "type": "TemplateLiteral",
                "start": 63,
                "end": 96,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 63,
                    "end": 96,
                    "value": {
                      "cooked": "    ",
                      "raw": "\\u{20}\\u{020}\\u{0020}\\u{000020}"
                    },
                    "tail": true
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 30,
                "end": 63,
                "value": {
                  "cooked": "Hello",
                  "raw": "\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 96,
                "end": 128,
                "value": {
                  "cooked": "world",
                  "raw": "\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}"
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
