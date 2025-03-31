__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 26,
            "end": 38,
            "expressions": [
              {
                "type": "Literal",
                "start": 32,
                "end": 33,
                "value": 0,
                "raw": "0"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 32,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 33,
                "end": 38,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
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
