__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 9,
            "end": 47,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 16,
                "end": 41,
                "operator": "instanceof",
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 23,
                  "raw": "\"hello\"",
                  "value": "hello"
                },
                "right": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 41,
                  "decorators": [],
                  "name": "String",
                  "optional": false
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 42,
                "end": 47,
                "tail": true,
                "value": {
                  "cooked": "def",
                  "raw": "def"
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
