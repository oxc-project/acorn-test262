__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 33,
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
            "start": 9,
            "end": 33,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 16,
                "end": 27,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 23,
                  "end": 27,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 28,
                "end": 33,
                "value": {
                  "cooked": "def",
                  "raw": "def"
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
