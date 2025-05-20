__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 131,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 119,
            "end": 130,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 119,
                "end": 130,
                "tail": true,
                "value": {
                  "cooked": "𐀀",
                  "raw": "\\u{10000}"
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
