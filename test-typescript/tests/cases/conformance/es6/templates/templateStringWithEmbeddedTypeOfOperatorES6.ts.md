__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 49,
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
            "start": 25,
            "end": 49,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 32,
                "end": 43,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 39,
                  "end": 43,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 44,
                "end": 49,
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
