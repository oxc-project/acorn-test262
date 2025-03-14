templateStringInArrowFunction.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 28,
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
            "type": "ArrowFunctionExpression",
            "start": 9,
            "end": 28,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 14,
              "end": 28,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 14,
                  "end": 20,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 23,
                  "end": 28,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 9,
                "end": 10,
                "decorators": [],
                "name": "x",
                "optional": false
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
