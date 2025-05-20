__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 57,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 57,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 55,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
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
        "start": 5,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 11,
              "end": 23,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 12,
                  "end": 15,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 22,
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
        "start": 27,
        "end": 41,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 39,
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
