__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "init": null,
                  "definite": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "declare": false,
              "start": 23,
              "end": 30
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 35,
                  "end": 36
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 37,
                  "end": 38
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 39,
                  "end": 40
                }
              ],
              "start": 34,
              "end": 41
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 56,
                        "end": 57
                      },
                      "id": null,
                      "generator": false,
                      "start": 50,
                      "end": 57
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 49,
                    "end": 60
                  },
                  "directive": null,
                  "start": 49,
                  "end": 60
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "start": 65,
                    "end": 72
                  },
                  "directive": null,
                  "start": 65,
                  "end": 72
                }
              ],
              "start": 43,
              "end": 76
            },
            "start": 18,
            "end": 76
          }
        ],
        "start": 14,
        "end": 78
      },
      "expression": false,
      "start": 0,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
