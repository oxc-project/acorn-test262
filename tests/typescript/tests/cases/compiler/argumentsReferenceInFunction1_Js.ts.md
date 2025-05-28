__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 197,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 15,
            "end": 196,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 27,
              "end": 196,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 31,
                  "end": 44,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 35,
                      "end": 43,
                      "id": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 38,
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 41,
                        "end": 43,
                        "value": "",
                        "raw": "''"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 47,
                  "end": 57,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 51,
                      "end": 56,
                      "id": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 55,
                        "end": 56,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 60,
                  "end": 81,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 64,
                      "end": 80,
                      "id": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 68,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 80,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 84,
                  "end": 106,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 105,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 94,
                        "end": 105,
                        "object": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 98,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 105,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ForStatement",
                  "start": 109,
                  "end": 180,
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 129,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 118,
                        "end": 129,
                        "id": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 122,
                          "end": 129,
                          "object": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 126,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 128,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 131,
                    "end": 138,
                    "left": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 138,
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "update": {
                    "type": "AssignmentExpression",
                    "start": 140,
                    "end": 153,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 144,
                      "end": 153,
                      "object": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 148,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "UpdateExpression",
                        "start": 149,
                        "end": 152,
                        "operator": "++",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "computed": true
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 155,
                    "end": 180,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 161,
                        "end": 176,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 161,
                          "end": 175,
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "start": 161,
                            "end": 164,
                            "decorators": [],
                            "name": "str",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 168,
                            "end": 175,
                            "left": {
                              "type": "Literal",
                              "start": 168,
                              "end": 171,
                              "value": " ",
                              "raw": "' '"
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 175,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 183,
                  "end": 194,
                  "argument": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 193,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 271,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 213,
            "decorators": [],
            "name": "debuglog",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 216,
            "end": 270,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 227,
              "end": 270,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 231,
                  "end": 268,
                  "argument": {
                    "type": "CallExpression",
                    "start": 238,
                    "end": 267,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 238,
                      "end": 250,
                      "object": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 244,
                        "decorators": [],
                        "name": "format",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 250,
                        "decorators": [],
                        "name": "apply",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 251,
                        "end": 255,
                        "value": null,
                        "raw": "null"
                      },
                      {
                        "type": "Identifier",
                        "start": 257,
                        "end": 266,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
