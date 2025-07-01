__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 15
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 22
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 23
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 5,
        "end": 23
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "FormData",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [],
        "start": 27,
        "end": 41
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 54
            },
            "directive": null,
            "start": 49,
            "end": 55
          }
        ],
        "start": 43,
        "end": 57
      },
      "start": 0,
      "end": 57
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 57
}
```
