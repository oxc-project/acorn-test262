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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "tail": true,
                "value": {
                  "cooked": "   20",
                  "raw": "\\x20\\u0020 20"
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
