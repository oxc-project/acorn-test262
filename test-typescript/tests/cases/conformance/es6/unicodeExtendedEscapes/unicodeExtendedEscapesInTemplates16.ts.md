__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 30,
            "end": 64,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 30,
                "end": 64,
                "tail": true,
                "value": {
                  "cooked": "ꯍ㑖碐",
                  "raw": "\\u{ABCD}\\u{EF12}\\u{3456}\\u{7890}"
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
