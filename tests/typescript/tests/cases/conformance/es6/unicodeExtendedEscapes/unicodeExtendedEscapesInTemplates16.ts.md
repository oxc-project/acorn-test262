__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 42,
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
            "end": 42,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 42,
                "value": {
                  "raw": "\\u{ABCD}\\u{EF12}\\u{3456}\\u{7890}",
                  "cooked": "ꯍ㑖碐"
                },
                "tail": true
              }
            ],
            "expressions": []
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
