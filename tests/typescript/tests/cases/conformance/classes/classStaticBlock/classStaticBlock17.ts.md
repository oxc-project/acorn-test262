__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "friendA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getX",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15,
                      "end": 19
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 23,
                              "end": 24
                            },
                            "typeArguments": null,
                            "start": 23,
                            "end": 24
                          },
                          "start": 21,
                          "end": 24
                        },
                        "start": 20,
                        "end": 24
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 27,
                        "end": 33
                      },
                      "start": 25,
                      "end": 33
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 15,
                    "end": 34
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setX",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 39
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 43,
                              "end": 44
                            },
                            "typeArguments": null,
                            "start": 43,
                            "end": 44
                          },
                          "start": 41,
                          "end": 44
                        },
                        "start": 40,
                        "end": 44
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 49,
                            "end": 55
                          },
                          "start": 47,
                          "end": 55
                        },
                        "start": 46,
                        "end": 55
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 58,
                        "end": 62
                      },
                      "start": 56,
                      "end": 62
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 35,
                    "end": 62
                  }
                ],
                "start": 13,
                "end": 64
              },
              "start": 11,
              "end": 64
            },
            "start": 4,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 64
        }
      ],
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 79,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 79,
            "end": 90
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 105
            },
            "value": {
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    },
                    "start": 108,
                    "end": 116
                  },
                  "start": 107,
                  "end": 116
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "start": 129,
                          "end": 131
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 131
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 135
                      },
                      "start": 124,
                      "end": 135
                    },
                    "directive": null,
                    "start": 124,
                    "end": 136
                  }
                ],
                "start": 118,
                "end": 140
              },
              "expression": false,
              "start": 106,
              "end": 140
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 94,
            "end": 140
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getX",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 148
            },
            "value": {
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 165,
                        "end": 169
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "x",
                        "start": 170,
                        "end": 172
                      },
                      "optional": false,
                      "computed": false,
                      "start": 165,
                      "end": 172
                    },
                    "start": 158,
                    "end": 173
                  }
                ],
                "start": 152,
                "end": 177
              },
              "expression": false,
              "start": 149,
              "end": 177
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 144,
            "end": 177
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "friendA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 201
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 216
                        },
                        "value": {
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
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 217,
                              "end": 220
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 231,
                                    "end": 234
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "x",
                                    "start": 235,
                                    "end": 237
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 231,
                                  "end": 237
                                },
                                "start": 224,
                                "end": 237
                              }
                            ],
                            "start": 222,
                            "end": 239
                          },
                          "expression": false,
                          "start": 216,
                          "end": 239
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 212,
                        "end": 239
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "setX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 251
                        },
                        "value": {
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
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 252,
                              "end": 255
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 257,
                              "end": 262
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
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
                                      "name": "obj",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 266,
                                      "end": 269
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "x",
                                      "start": 270,
                                      "end": 272
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 266,
                                    "end": 272
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 275,
                                    "end": 280
                                  },
                                  "start": 266,
                                  "end": 280
                                },
                                "directive": null,
                                "start": 266,
                                "end": 280
                              }
                            ],
                            "start": 264,
                            "end": 282
                          },
                          "expression": false,
                          "start": 251,
                          "end": 282
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 247,
                        "end": 282
                      }
                    ],
                    "start": 204,
                    "end": 288
                  },
                  "start": 194,
                  "end": 288
                },
                "directive": null,
                "start": 194,
                "end": 289
              }
            ],
            "start": 181,
            "end": 293
          }
        ],
        "start": 75,
        "end": 295
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 295
    },
    {
      "type": "EmptyStatement",
      "start": 295,
      "end": 296
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 304,
        "end": 305
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 321
            },
            "value": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "typeArguments": null,
                      "start": 325,
                      "end": 326
                    },
                    "start": 323,
                    "end": 326
                  },
                  "start": 322,
                  "end": 326
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 340,
                          "end": 341
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "friendA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 344,
                              "end": 351
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getX",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 356
                            },
                            "optional": false,
                            "computed": false,
                            "start": 344,
                            "end": 356
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 357,
                              "end": 358
                            }
                          ],
                          "optional": false,
                          "start": 344,
                          "end": 359
                        },
                        "definite": false,
                        "start": 340,
                        "end": 359
                      }
                    ],
                    "declare": false,
                    "start": 334,
                    "end": 360
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
                          "name": "friendA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 378
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "setX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 383
                        },
                        "optional": false,
                        "computed": false,
                        "start": 371,
                        "end": 383
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        },
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 388
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 391,
                            "end": 392
                          },
                          "start": 387,
                          "end": 392
                        }
                      ],
                      "optional": false,
                      "start": 371,
                      "end": 393
                    },
                    "directive": null,
                    "start": 371,
                    "end": 394
                  }
                ],
                "start": 328,
                "end": 404
              },
              "expression": false,
              "start": 321,
              "end": 404
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 310,
            "end": 404
          }
        ],
        "start": 306,
        "end": 406
      },
      "abstract": false,
      "declare": false,
      "start": 298,
      "end": 406
    },
    {
      "type": "EmptyStatement",
      "start": 406,
      "end": 407
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 416
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 41,
                "raw": "41",
                "start": 425,
                "end": 427
              }
            ],
            "start": 419,
            "end": 428
          },
          "definite": false,
          "start": 415,
          "end": 428
        }
      ],
      "declare": false,
      "start": 409,
      "end": 429
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 437
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              }
            ],
            "start": 440,
            "end": 448
          },
          "definite": false,
          "start": 436,
          "end": 448
        }
      ],
      "declare": false,
      "start": 430,
      "end": 449
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
            "start": 450,
            "end": 451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 456
          },
          "optional": false,
          "computed": false,
          "start": 450,
          "end": 456
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 450,
        "end": 458
      },
      "directive": null,
      "start": 450,
      "end": 459
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 459
}
```
