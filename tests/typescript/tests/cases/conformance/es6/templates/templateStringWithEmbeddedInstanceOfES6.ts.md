__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
          "definite": false,
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
            "end": 46,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 15,
                "end": 40,
                "operator": "instanceof",
                "left": {
                  "type": "Literal",
                  "start": 15,
                  "end": 22,
                  "raw": "\"hello\"",
                  "value": "hello"
                },
                "right": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 40,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 41,
                "end": 46,
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
