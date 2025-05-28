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
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 23,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 27,
        "end": 41,
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 39,
          "decorators": [],
          "name": "FormData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 57,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 55,
            "expression": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null
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
