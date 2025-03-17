__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 26,
            "end": 41,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 41,
                "value": {
                  "cooked": "   20",
                  "raw": "\\x20\\u0020 20"
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
