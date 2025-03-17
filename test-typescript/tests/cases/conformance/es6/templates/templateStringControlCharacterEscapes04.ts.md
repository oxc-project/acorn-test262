__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 3,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 3,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 11,
            "end": 26,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 11,
                "end": 26,
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
