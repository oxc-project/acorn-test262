__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 8,
            "end": 26,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 21,
                "end": 26,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 15,
                "end": 20,
                "left": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "/",
                "right": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
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
