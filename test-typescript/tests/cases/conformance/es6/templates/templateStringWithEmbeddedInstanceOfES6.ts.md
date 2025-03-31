__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 64,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 63,
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
            "end": 63,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 32,
                "end": 57,
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 39,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 57,
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
                "start": 58,
                "end": 63,
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
