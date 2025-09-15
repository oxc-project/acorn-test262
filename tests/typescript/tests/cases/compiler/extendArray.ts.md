__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 9,
                "end": 10
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 11,
                "end": 12
              }
            ],
            "start": 8,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 24
          },
          "optional": false,
          "computed": false,
          "start": 15,
          "end": 24
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 42,
              "end": 44
            },
            "expression": false,
            "start": 25,
            "end": 44
          }
        ],
        "optional": false,
        "start": 15,
        "end": 45
      },
      "directive": null,
      "start": 15,
      "end": 46
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Core",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 72
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 92
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "collect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 106
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_element",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 113,
                                    "end": 121
                                  },
                                  "typeArguments": null,
                                  "start": 113,
                                  "end": 121
                                },
                                "start": 112,
                                "end": 121
                              },
                              "start": 111,
                              "end": 121
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_element",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 126,
                                  "end": 134
                                },
                                "typeArguments": null,
                                "start": 126,
                                "end": 134
                              },
                              "start": 126,
                              "end": 136
                            },
                            "start": 123,
                            "end": 136
                          },
                          "start": 110,
                          "end": 136
                        },
                        "start": 109,
                        "end": 136
                      },
                      "start": 107,
                      "end": 136
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 140,
                        "end": 143
                      },
                      "start": 140,
                      "end": 145
                    },
                    "start": 138,
                    "end": 145
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 99,
                  "end": 146
                }
              ],
              "start": 93,
              "end": 150
            },
            "declare": false,
            "start": 77,
            "end": 150
          }
        ],
        "start": 73,
        "end": 152
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 49,
      "end": 152
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 167,
                "end": 170
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 176
              },
              "start": 166,
              "end": 176
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 187
            },
            "optional": false,
            "computed": false,
            "start": 165,
            "end": 187
          },
          "definite": false,
          "start": 159,
          "end": 187
        }
      ],
      "declare": false,
      "start": 155,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "collect",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 200
          },
          "optional": false,
          "computed": false,
          "start": 189,
          "end": 200
        },
        "right": {
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 215
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
                      "name": "res",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 230
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 233,
                      "end": 235
                    },
                    "definite": false,
                    "start": 227,
                    "end": 235
                  }
                ],
                "declare": false,
                "start": 223,
                "end": 236
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 251
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 254,
                        "end": 255
                      },
                      "definite": false,
                      "start": 250,
                      "end": 255
                    }
                  ],
                  "declare": false,
                  "start": 246,
                  "end": 255
                },
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 258
                  },
                  "operator": "<",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 261,
                      "end": 265
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 272
                    },
                    "optional": false,
                    "computed": false,
                    "start": 261,
                    "end": 272
                  },
                  "start": 257,
                  "end": 272
                },
                "update": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "start": 274,
                  "end": 277
                },
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
                            "name": "tmp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 293,
                            "end": 296
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 299,
                              "end": 301
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 302,
                                  "end": 306
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 307,
                                  "end": 308
                                },
                                "optional": false,
                                "computed": true,
                                "start": 302,
                                "end": 309
                              }
                            ],
                            "optional": false,
                            "start": 299,
                            "end": 310
                          },
                          "definite": false,
                          "start": 293,
                          "end": 310
                        }
                      ],
                      "declare": false,
                      "start": 289,
                      "end": 311
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
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 329,
                              "end": 330
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 333,
                              "end": 334
                            },
                            "definite": false,
                            "start": 329,
                            "end": 334
                          }
                        ],
                        "declare": false,
                        "start": 325,
                        "end": 334
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 336,
                          "end": 337
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tmp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 343
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 350
                          },
                          "optional": false,
                          "computed": false,
                          "start": 340,
                          "end": 350
                        },
                        "start": 336,
                        "end": 350
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 354,
                          "end": 355
                        },
                        "start": 352,
                        "end": 355
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "res",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 371,
                                  "end": 374
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "push",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 375,
                                  "end": 379
                                },
                                "optional": false,
                                "computed": false,
                                "start": 371,
                                "end": 379
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 380,
                                    "end": 383
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 384,
                                    "end": 385
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 380,
                                  "end": 386
                                }
                              ],
                              "optional": false,
                              "start": 371,
                              "end": 387
                            },
                            "directive": null,
                            "start": 371,
                            "end": 388
                          }
                        ],
                        "start": 357,
                        "end": 398
                      },
                      "start": 320,
                      "end": 398
                    }
                  ],
                  "start": 279,
                  "end": 404
                },
                "start": 241,
                "end": 404
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 419
                },
                "start": 409,
                "end": 420
              }
            ],
            "start": 217,
            "end": 422
          },
          "expression": false,
          "start": 203,
          "end": 422
        },
        "start": 189,
        "end": 422
      },
      "directive": null,
      "start": 189,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
