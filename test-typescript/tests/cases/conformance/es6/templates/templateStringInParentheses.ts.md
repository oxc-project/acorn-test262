__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 10,
            "end": 22,
            "expressions": [
              {
                "type": "Literal",
                "start": 16,
                "end": 17,
                "value": 0,
                "raw": "0"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 10,
                "end": 16,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 17,
                "end": 22,
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
