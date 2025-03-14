templateStringWithEmbeddedNewOperator.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 38,
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
            "end": 38,
            "expressions": [
              {
                "type": "NewExpression",
                "start": 16,
                "end": 32,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 27,
                    "end": 31,
                    "raw": "\"Hi\"",
                    "value": "Hi"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 26,
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
                "start": 33,
                "end": 38,
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
