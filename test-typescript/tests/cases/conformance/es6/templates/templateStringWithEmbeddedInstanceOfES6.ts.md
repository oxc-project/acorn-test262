templateStringWithEmbeddedInstanceOfES6.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
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
                "operator": "instanceof",
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 39,
                  "raw": "\"hello\"",
                  "value": "hello"
                },
                "right": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 57,
                  "decorators": [],
                  "name": "String",
                  "optional": false
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 58,
                "end": 63,
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
  "sourceType": "script"
}
```
