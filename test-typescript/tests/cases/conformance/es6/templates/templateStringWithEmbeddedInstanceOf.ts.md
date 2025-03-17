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
            "end": 47,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 16,
                "end": 41,
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 23,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 41,
                  "name": "String",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "start": 42,
                "end": 47,
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
