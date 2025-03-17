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
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 48,
            "id": {
              "type": "ArrayPattern",
              "start": 36,
              "end": 48,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 47,
                  "name": "entry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 52,
        "end": 66,
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 64,
          "name": "FormData",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 82,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 80,
            "expression": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "name": "entry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
