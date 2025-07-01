__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 8,
                "end": 14
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true,
                "start": 23,
                "end": 28
              }
            ],
            "expressions": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 15,
                  "end": 17
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 20,
                  "end": 22
                },
                "start": 15,
                "end": 22
              }
            ],
            "start": 8,
            "end": 28
          },
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
