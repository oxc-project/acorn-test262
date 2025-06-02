__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 222,
  "end": 241,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 241,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 230,
            "end": 240,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 230,
                "end": 240,
                "value": {
                  "raw": "\\u{DC00}",
                  "cooked": "\udc00"
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
