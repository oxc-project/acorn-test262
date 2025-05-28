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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
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
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 41,
                "end": 46,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 15,
                "end": 40,
                "left": {
                  "type": "Literal",
                  "start": 15,
                  "end": 22,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "operator": "instanceof",
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
