__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 25
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 38
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 41,
                        "end": 43
                      },
                      "definite": false,
                      "start": 35,
                      "end": 43
                    }
                  ],
                  "declare": false,
                  "start": 31,
                  "end": 44
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 51,
                        "end": 52
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 55,
                        "end": 56
                      },
                      "definite": false,
                      "start": 51,
                      "end": 56
                    }
                  ],
                  "declare": false,
                  "start": 47,
                  "end": 57
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 68
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 80
                      },
                      "definite": false,
                      "start": 64,
                      "end": 80
                    }
                  ],
                  "declare": false,
                  "start": 60,
                  "end": 81
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 91
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 98
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 105
                        },
                        "optional": false,
                        "computed": false,
                        "start": 94,
                        "end": 105
                      },
                      "definite": false,
                      "start": 88,
                      "end": 105
                    }
                  ],
                  "declare": false,
                  "start": 84,
                  "end": 106
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 119
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 122,
                            "end": 126
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 128
                          },
                          "optional": false,
                          "computed": true,
                          "start": 122,
                          "end": 129
                        },
                        "definite": false,
                        "start": 118,
                        "end": 129
                      }
                    ],
                    "declare": false,
                    "start": 114,
                    "end": 129
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 138
                    },
                    "start": 131,
                    "end": 138
                  },
                  "update": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 148
                      },
                      "property": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "start": 149,
                        "end": 152
                      },
                      "optional": false,
                      "computed": true,
                      "start": 144,
                      "end": 153
                    },
                    "start": 140,
                    "end": 153
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "str",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 161,
                            "end": 164
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": " ",
                              "raw": "' '",
                              "start": 168,
                              "end": 171
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 174,
                              "end": 175
                            },
                            "start": 168,
                            "end": 175
                          },
                          "start": 161,
                          "end": 175
                        },
                        "directive": null,
                        "start": 161,
                        "end": 176
                      }
                    ],
                    "start": 155,
                    "end": 180
                  },
                  "start": 109,
                  "end": 180
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 193
                  },
                  "start": 183,
                  "end": 194
                }
              ],
              "start": 27,
              "end": 196
            },
            "expression": false,
            "start": 15,
            "end": 196
          },
          "definite": false,
          "start": 6,
          "end": 196
        }
      ],
      "declare": false,
      "start": 0,
      "end": 197
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "debuglog",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 213
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "format",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 244
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "apply",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 245,
                        "end": 250
                      },
                      "optional": false,
                      "computed": false,
                      "start": 238,
                      "end": 250
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 251,
                        "end": 255
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 266
                      }
                    ],
                    "optional": false,
                    "start": 238,
                    "end": 267
                  },
                  "start": 231,
                  "end": 268
                }
              ],
              "start": 227,
              "end": 270
            },
            "expression": false,
            "start": 216,
            "end": 270
          },
          "definite": false,
          "start": 205,
          "end": 270
        }
      ],
      "declare": false,
      "start": 199,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
