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
      "async": false,
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
            "body": {
              "type": "BlockStatement",
              "start": 45,
              "end": 201,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 55,
                  "end": 101,
                  "alternate": null,
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
                  "test": {
                    "type": "BinaryExpression",
                    "start": 59,
                    "end": 66,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 65,
                      "end": 66,
                      "raw": "0",
                      "value": 0
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 151,
                  "end": 195,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 151,
                    "end": 194,
                    "arguments": [],
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 152,
                      "end": 191,
                      "async": false,
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
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 33,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
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
              "start": 37,
              "end": 43,
              "elements": [
                {
                  "type": "Literal",
                  "start": 38,
                  "end": 39,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Literal",
                  "start": 41,
                  "end": 42,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
