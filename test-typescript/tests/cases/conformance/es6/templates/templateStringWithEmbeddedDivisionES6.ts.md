__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 43,
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
            "end": 43,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 32,
                "end": 37,
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "/",
                "right": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "value": 1,
                  "raw": "1"
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
                "start": 38,
                "end": 43,
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
