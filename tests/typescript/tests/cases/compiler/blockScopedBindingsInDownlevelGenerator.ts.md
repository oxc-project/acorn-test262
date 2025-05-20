__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 78,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 18,
            "end": 76,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 43,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 49,
                  "end": 60,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 49,
                    "end": 60,
                    "arguments": [],
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 50,
                      "end": 57,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 65,
                  "end": 72,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 65,
                    "end": 72,
                    "argument": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 30,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 30,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "i",
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
              "type": "ArrayExpression",
              "start": 34,
              "end": 41,
              "elements": [
                {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "raw": "3",
                  "value": 3
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
