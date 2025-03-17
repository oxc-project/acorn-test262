__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 83,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 25,
      "end": 82,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 82,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 80,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 48,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 36,
              "end": 48,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 47,
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "NewExpression",
        "start": 52,
        "end": 66,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 64,
          "decorators": [],
          "name": "FormData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
