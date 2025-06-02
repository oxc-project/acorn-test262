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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 106,
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
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 41,
                "value": {
                  "raw": "\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}",
                  "cooked": "Hello"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 74,
                "end": 106,
                "value": {
                  "raw": "\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}",
                  "cooked": "world"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TemplateLiteral",
                "start": 41,
                "end": 74,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 41,
                    "end": 74,
                    "value": {
                      "raw": "\\u{20}\\u{020}\\u{0020}\\u{000020}",
                      "cooked": "    "
                    },
                    "tail": true
                  }
                ],
                "expressions": []
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
