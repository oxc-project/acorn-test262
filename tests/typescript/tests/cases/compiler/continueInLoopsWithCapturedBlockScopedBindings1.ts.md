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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
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
                    "start": 32,
                    "end": 33
                  },
                  "init": null,
                  "definite": false,
                  "start": 32,
                  "end": 33
                }
              ],
              "declare": false,
              "start": 26,
              "end": 33
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 38,
                  "end": 39
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 41,
                  "end": 42
                }
              ],
              "start": 37,
              "end": 43
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 60
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 65,
                      "end": 66
                    },
                    "start": 59,
                    "end": 66
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 82,
                        "end": 91
                      }
                    ],
                    "start": 68,
                    "end": 101
                  },
                  "alternate": null,
                  "start": 55,
                  "end": 101
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 180
                            },
                            "start": 172,
                            "end": 181
                          }
                        ],
                        "start": 158,
                        "end": 191
                      },
                      "id": null,
                      "generator": false,
                      "start": 152,
                      "end": 191
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 151,
                    "end": 194
                  },
                  "directive": null,
                  "start": 151,
                  "end": 195
                }
              ],
              "start": 45,
              "end": 201
            },
            "start": 21,
            "end": 201
          }
        ],
        "start": 15,
        "end": 203
      },
      "expression": false,
      "start": 0,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
