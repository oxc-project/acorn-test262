templateStringWithEmbeddedNewOperatorES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 54,
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
            "end": 54,
            "expressions": [
              {
                "type": "NewExpression",
                "start": 32,
                "end": 48,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 43,
                    "end": 47,
                    "raw": "\"Hi\"",
                    "value": "Hi"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 42,
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
                "start": 49,
                "end": 54,
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
