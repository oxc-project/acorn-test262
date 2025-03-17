__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 133,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 141,
            "end": 152,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 141,
                "end": 152,
                "value": {
                  "cooked": "𐀀",
                  "raw": "\\u{10000}"
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
