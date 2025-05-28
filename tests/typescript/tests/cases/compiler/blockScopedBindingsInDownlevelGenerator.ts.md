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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
            "left": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 30,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 30,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "i",
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
              "type": "ArrayExpression",
              "start": 34,
              "end": 41,
              "elements": [
                {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "value": 3,
                  "raw": "3"
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 43,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 49,
                  "end": 60,
                  "expression": {
                    "type": "CallExpression",
                    "start": 49,
                    "end": 60,
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 50,
                      "end": 57,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 65,
                  "end": 72,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 65,
                    "end": 72,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
