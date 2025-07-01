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
        "start": 64,
        "end": 69
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
              "start": 84,
              "end": 89
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
                    "start": 96,
                    "end": 103
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
                                    "start": 110,
                                    "end": 118
                                  },
                                  "typeArguments": null,
                                  "start": 110,
                                  "end": 118
                                },
                                "start": 109,
                                "end": 118
                              },
                              "start": 108,
                              "end": 118
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
                                  "start": 123,
                                  "end": 131
                                },
                                "typeArguments": null,
                                "start": 123,
                                "end": 131
                              },
                              "start": 123,
                              "end": 133
                            },
                            "start": 120,
                            "end": 133
                          },
                          "start": 107,
                          "end": 133
                        },
                        "start": 106,
                        "end": 133
                      },
                      "start": 104,
                      "end": 133
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 137,
                        "end": 140
                      },
                      "start": 137,
                      "end": 142
                    },
                    "start": 135,
                    "end": 142
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 96,
                  "end": 143
                }
              ],
              "start": 90,
              "end": 147
            },
            "declare": false,
            "start": 74,
            "end": 147
          }
        ],
        "start": 70,
        "end": 149
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 49,
      "end": 149
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
            "start": 156,
            "end": 159
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 164,
                "end": 167
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 173
              },
              "start": 163,
              "end": 173
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 184
            },
            "optional": false,
            "computed": false,
            "start": 162,
            "end": 184
          },
          "definite": false,
          "start": 156,
          "end": 184
        }
      ],
      "declare": false,
      "start": 152,
      "end": 185
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
            "start": 186,
            "end": 189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "collect",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 186,
          "end": 197
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
              "start": 210,
              "end": 212
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
                      "start": 224,
                      "end": 227
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 230,
                      "end": 232
                    },
                    "definite": false,
                    "start": 224,
                    "end": 232
                  }
                ],
                "declare": false,
                "start": 220,
                "end": 233
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
                        "start": 247,
                        "end": 248
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 251,
                        "end": 252
                      },
                      "definite": false,
                      "start": 247,
                      "end": 252
                    }
                  ],
                  "declare": false,
                  "start": 243,
                  "end": 252
                },
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "operator": "<",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 258,
                      "end": 262
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 269
                    },
                    "optional": false,
                    "computed": false,
                    "start": 258,
                    "end": 269
                  },
                  "start": 254,
                  "end": 269
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
                    "start": 273,
                    "end": 274
                  },
                  "start": 271,
                  "end": 274
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
                            "start": 290,
                            "end": 293
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 296,
                              "end": 298
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 299,
                                  "end": 303
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 304,
                                  "end": 305
                                },
                                "optional": false,
                                "computed": true,
                                "start": 299,
                                "end": 306
                              }
                            ],
                            "optional": false,
                            "start": 296,
                            "end": 307
                          },
                          "definite": false,
                          "start": 290,
                          "end": 307
                        }
                      ],
                      "declare": false,
                      "start": 286,
                      "end": 308
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
                              "start": 326,
                              "end": 327
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 330,
                              "end": 331
                            },
                            "definite": false,
                            "start": 326,
                            "end": 331
                          }
                        ],
                        "declare": false,
                        "start": 322,
                        "end": 331
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 334
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
                            "start": 337,
                            "end": 340
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 341,
                            "end": 347
                          },
                          "optional": false,
                          "computed": false,
                          "start": 337,
                          "end": 347
                        },
                        "start": 333,
                        "end": 347
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
                          "start": 351,
                          "end": 352
                        },
                        "start": 349,
                        "end": 352
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
                                  "start": 368,
                                  "end": 371
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "push",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 372,
                                  "end": 376
                                },
                                "optional": false,
                                "computed": false,
                                "start": 368,
                                "end": 376
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
                                    "start": 377,
                                    "end": 380
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 381,
                                    "end": 382
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 377,
                                  "end": 383
                                }
                              ],
                              "optional": false,
                              "start": 368,
                              "end": 384
                            },
                            "directive": null,
                            "start": 368,
                            "end": 385
                          }
                        ],
                        "start": 354,
                        "end": 395
                      },
                      "start": 317,
                      "end": 395
                    }
                  ],
                  "start": 276,
                  "end": 401
                },
                "start": 238,
                "end": 401
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 416
                },
                "start": 406,
                "end": 417
              }
            ],
            "start": 214,
            "end": 419
          },
          "expression": false,
          "start": 200,
          "end": 419
        },
        "start": 186,
        "end": 419
      },
      "directive": null,
      "start": 186,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 420
}
```
