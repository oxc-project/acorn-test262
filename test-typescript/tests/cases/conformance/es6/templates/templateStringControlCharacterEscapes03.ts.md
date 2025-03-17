__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 3,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 3,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 29,
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
            "end": 29,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 11,
                "end": 29,
                "value": {
                  "cooked": "\u001f\u001f 1F 1f",
                  "raw": "\\x1F\\u001f 1F 1f"
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
