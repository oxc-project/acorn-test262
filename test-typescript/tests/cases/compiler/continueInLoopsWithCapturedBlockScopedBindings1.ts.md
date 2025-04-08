__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 203,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 21,
            "end": 201,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 37,
              "end": 43,
              "elements": [
                {
                  "type": "Literal",
                  "start": 38,
                  "end": 39,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 41,
                  "end": 42,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 45,
              "end": 201,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 55,
                  "end": 101,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 59,
                    "end": 66,
                    "left": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 65,
                      "end": 66,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 68,
                    "end": 101,
                    "body": [
                      {
                        "type": "ContinueStatement",
                        "start": 82,
                        "end": 91,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 151,
                  "end": 195,
                  "expression": {
                    "type": "CallExpression",
                    "start": 151,
                    "end": 194,
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 152,
                      "end": 191,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 158,
                        "end": 191,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 172,
                            "end": 181,
                            "argument": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 180,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
