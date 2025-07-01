__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeArguments": null,
              "start": 31,
              "end": 32
            },
            "start": 29,
            "end": 32
          },
          "start": 24,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "typeArguments": null,
          "start": 35,
          "end": 36
        },
        "start": 33,
        "end": 36
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id2",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 58
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 73,
                      "end": 76
                    },
                    "start": 71,
                    "end": 76
                  },
                  "start": 70,
                  "end": 76
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 81,
                  "end": 84
                },
                "start": 78,
                "end": 84
              },
              "start": 69,
              "end": 84
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 84
          }
        ],
        "start": 58,
        "end": 85
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              "typeArguments": null,
              "start": 93,
              "end": 94
            },
            "start": 91,
            "end": 94
          },
          "start": 86,
          "end": 94
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "typeArguments": null,
          "start": 97,
          "end": 98
        },
        "start": 95,
        "end": 98
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 99
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id3",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 137,
                            "end": 140
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 142,
                              "end": 145
                            },
                            "start": 140,
                            "end": 145
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 137,
                          "end": 145
                        }
                      ],
                      "start": 135,
                      "end": 147
                    },
                    "start": 133,
                    "end": 147
                  },
                  "start": 132,
                  "end": 147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 152,
                  "end": 155
                },
                "start": 149,
                "end": 155
              },
              "start": 131,
              "end": 155
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 155
          }
        ],
        "start": 120,
        "end": 156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "typeArguments": null,
              "start": 164,
              "end": 165
            },
            "start": 162,
            "end": 165
          },
          "start": 157,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "typeArguments": null,
          "start": 168,
          "end": 169
        },
        "start": 166,
        "end": 169
      },
      "body": null,
      "expression": false,
      "start": 100,
      "end": 170
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id4",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 211
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 214,
                              "end": 220
                            },
                            "start": 212,
                            "end": 220
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 208,
                          "end": 220
                        }
                      ],
                      "start": 206,
                      "end": 222
                    },
                    "start": 204,
                    "end": 222
                  },
                  "start": 203,
                  "end": 222
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 227,
                  "end": 230
                },
                "start": 224,
                "end": 230
              },
              "start": 202,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 230
          }
        ],
        "start": 191,
        "end": 231
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "typeArguments": null,
              "start": 239,
              "end": 240
            },
            "start": 237,
            "end": 240
          },
          "start": 232,
          "end": 240
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "typeArguments": null,
          "start": 243,
          "end": 244
        },
        "start": 241,
        "end": 244
      },
      "body": null,
      "expression": false,
      "start": 171,
      "end": 245
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id5",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 266
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 282,
                      "end": 288
                    },
                    "start": 280,
                    "end": 288
                  },
                  "start": 278,
                  "end": 288
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 293,
                  "end": 296
                },
                "start": 290,
                "end": 296
              },
              "start": 277,
              "end": 296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 296
          }
        ],
        "start": 266,
        "end": 297
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 306
              },
              "typeArguments": null,
              "start": 305,
              "end": 306
            },
            "start": 303,
            "end": 306
          },
          "start": 298,
          "end": 306
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 310
          },
          "typeArguments": null,
          "start": 309,
          "end": 310
        },
        "start": 307,
        "end": 310
      },
      "body": null,
      "expression": false,
      "start": 246,
      "end": 311
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 322
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
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 340
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 340
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 343,
                        "end": 345
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 345
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 337,
                    "end": 345
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 347
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 361
                  },
                  "start": 351,
                  "end": 361
                }
              ],
              "start": 349,
              "end": 363
            },
            "expression": false,
            "start": 325,
            "end": 363
          },
          "definite": false,
          "start": 319,
          "end": 363
        }
      ],
      "declare": false,
      "start": 313,
      "end": 364
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 380
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 396
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 393,
                            "end": 396
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 399,
                            "end": 401
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 401
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 393,
                        "end": 401
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 403
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 417
                      },
                      "start": 407,
                      "end": 417
                    }
                  ],
                  "start": 405,
                  "end": 419
                },
                "expression": false,
                "start": 381,
                "end": 419
              }
            ],
            "optional": false,
            "start": 377,
            "end": 420
          },
          "definite": false,
          "start": 371,
          "end": 420
        }
      ],
      "declare": false,
      "start": 365,
      "end": 421
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 431
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 437
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 453
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 453
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 456,
                            "end": 458
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 458
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 450,
                        "end": 458
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 460
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 474
                      },
                      "start": 464,
                      "end": 474
                    }
                  ],
                  "start": 462,
                  "end": 476
                },
                "expression": false,
                "start": 438,
                "end": 476
              }
            ],
            "optional": false,
            "start": 434,
            "end": 477
          },
          "definite": false,
          "start": 428,
          "end": 477
        }
      ],
      "declare": false,
      "start": 422,
      "end": 478
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id3",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 494
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 510
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 507,
                            "end": 510
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 513,
                            "end": 515
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 515
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 507,
                        "end": 515
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 517
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 528,
                        "end": 531
                      },
                      "start": 521,
                      "end": 531
                    }
                  ],
                  "start": 519,
                  "end": 533
                },
                "expression": false,
                "start": 495,
                "end": 533
              }
            ],
            "optional": false,
            "start": 491,
            "end": 534
          },
          "definite": false,
          "start": 485,
          "end": 534
        }
      ],
      "declare": false,
      "start": 479,
      "end": 535
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
            "name": "f14",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id4",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 551
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 564,
                          "end": 567
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 567
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 570,
                            "end": 572
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 564,
                          "end": 572
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 564,
                        "end": 572
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 574
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 588
                      },
                      "start": 578,
                      "end": 588
                    }
                  ],
                  "start": 576,
                  "end": 590
                },
                "expression": false,
                "start": 552,
                "end": 590
              }
            ],
            "optional": false,
            "start": 548,
            "end": 591
          },
          "definite": false,
          "start": 542,
          "end": 591
        }
      ],
      "declare": false,
      "start": 536,
      "end": 592
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
            "name": "f20",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 603
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 619
                },
                "right": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 622,
                  "end": 624
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 624
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 638
                  },
                  "start": 628,
                  "end": 638
                }
              ],
              "start": 626,
              "end": 640
            },
            "expression": false,
            "start": 606,
            "end": 640
          },
          "definite": false,
          "start": 600,
          "end": 640
        }
      ],
      "declare": false,
      "start": 594,
      "end": 641
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
            "name": "f21",
            "optional": false,
            "typeAnnotation": null,
            "start": 648,
            "end": 651
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 657
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 671
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 674,
                      "end": 676
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 676
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 687,
                        "end": 690
                      },
                      "start": 680,
                      "end": 690
                    }
                  ],
                  "start": 678,
                  "end": 692
                },
                "expression": false,
                "start": 658,
                "end": 692
              }
            ],
            "optional": false,
            "start": 654,
            "end": 693
          },
          "definite": false,
          "start": 648,
          "end": 693
        }
      ],
      "declare": false,
      "start": 642,
      "end": 694
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
            "name": "f22",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 704
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 710
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 724
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 727,
                      "end": 729
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 729
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 740,
                        "end": 743
                      },
                      "start": 733,
                      "end": 743
                    }
                  ],
                  "start": 731,
                  "end": 745
                },
                "expression": false,
                "start": 711,
                "end": 745
              }
            ],
            "optional": false,
            "start": 707,
            "end": 746
          },
          "definite": false,
          "start": 701,
          "end": 746
        }
      ],
      "declare": false,
      "start": 695,
      "end": 747
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
            "name": "f25",
            "optional": false,
            "typeAnnotation": null,
            "start": 754,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id5",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 763
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 774,
                      "end": 777
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 780,
                      "end": 782
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 774,
                    "end": 782
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 793,
                        "end": 796
                      },
                      "start": 786,
                      "end": 796
                    }
                  ],
                  "start": 784,
                  "end": 798
                },
                "expression": false,
                "start": 764,
                "end": 798
              }
            ],
            "optional": false,
            "start": 760,
            "end": 799
          },
          "definite": false,
          "start": 754,
          "end": 799
        }
      ],
      "declare": false,
      "start": 748,
      "end": 800
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 810
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 818,
                  "end": 819
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 819
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 824,
              "end": 825
            },
            "id": null,
            "generator": false,
            "start": 813,
            "end": 825
          },
          "definite": false,
          "start": 808,
          "end": 825
        }
      ],
      "declare": false,
      "start": 802,
      "end": 826
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 848,
                "end": 851
              },
              "start": 846,
              "end": 851
            },
            "start": 844,
            "end": 851
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 856
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 859,
                  "end": 860
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 860
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 865,
              "end": 866
            },
            "id": null,
            "generator": false,
            "start": 854,
            "end": 866
          },
          "definite": false,
          "start": 844,
          "end": 866
        }
      ],
      "declare": false,
      "start": 838,
      "end": 867
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 889,
                "end": 896
              },
              "start": 887,
              "end": 896
            },
            "start": 885,
            "end": 896
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 901
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 904,
                  "end": 905
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 905
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 910,
              "end": 911
            },
            "id": null,
            "generator": false,
            "start": 899,
            "end": 911
          },
          "definite": false,
          "start": 885,
          "end": 911
        }
      ],
      "declare": false,
      "start": 879,
      "end": 912
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 934,
                  "end": 942
                },
                "typeArguments": null,
                "start": 934,
                "end": 942
              },
              "start": 932,
              "end": 942
            },
            "start": 930,
            "end": 942
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 947
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 950,
                  "end": 951
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 951
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 956,
              "end": 957
            },
            "id": null,
            "generator": false,
            "start": 945,
            "end": 957
          },
          "definite": false,
          "start": 930,
          "end": 957
        }
      ],
      "declare": false,
      "start": 924,
      "end": 958
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 984,
                      "end": 988
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 990,
                          "end": 993
                        },
                        "start": 990,
                        "end": 995
                      },
                      "start": 988,
                      "end": 995
                    },
                    "value": null,
                    "start": 981,
                    "end": 995
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1000,
                    "end": 1003
                  },
                  "start": 997,
                  "end": 1003
                },
                "start": 980,
                "end": 1003
              },
              "start": 978,
              "end": 1003
            },
            "start": 976,
            "end": 1003
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1007,
                  "end": 1008
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1011,
                  "end": 1012
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1012
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1017,
              "end": 1018
            },
            "id": null,
            "generator": false,
            "start": 1006,
            "end": 1018
          },
          "definite": false,
          "start": 976,
          "end": 1018
        }
      ],
      "declare": false,
      "start": 970,
      "end": 1019
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
            "name": "f6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1044,
                    "end": 1047
                  },
                  "start": 1041,
                  "end": 1047
                },
                "start": 1038,
                "end": 1047
              },
              "start": 1036,
              "end": 1047
            },
            "start": 1034,
            "end": 1047
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1051,
                  "end": 1052
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1055,
                  "end": 1056
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1056
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1061,
              "end": 1062
            },
            "id": null,
            "generator": false,
            "start": 1050,
            "end": 1062
          },
          "definite": false,
          "start": 1034,
          "end": 1062
        }
      ],
      "declare": false,
      "start": 1028,
      "end": 1063
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1091,
                    "end": 1094
                  },
                  "start": 1088,
                  "end": 1094
                },
                "start": 1085,
                "end": 1094
              },
              "start": 1083,
              "end": 1094
            },
            "start": 1081,
            "end": 1094
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1100
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1105,
              "end": 1106
            },
            "id": null,
            "generator": false,
            "start": 1097,
            "end": 1106
          },
          "definite": false,
          "start": 1081,
          "end": 1106
        }
      ],
      "declare": false,
      "start": 1075,
      "end": 1107
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1147,
                    "end": 1150
                  },
                  "start": 1144,
                  "end": 1150
                },
                "start": 1141,
                "end": 1150
              },
              "start": 1139,
              "end": 1150
            },
            "start": 1137,
            "end": 1150
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1158
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1154,
                "end": 1158
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1163,
              "end": 1164
            },
            "id": null,
            "generator": false,
            "start": 1153,
            "end": 1164
          },
          "definite": false,
          "start": 1137,
          "end": 1164
        }
      ],
      "declare": false,
      "start": 1131,
      "end": 1165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1193
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1195
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1194,
            "end": 1195
          }
        ],
        "start": 1193,
        "end": 1196
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1201
              },
              "typeArguments": null,
              "start": 1200,
              "end": 1201
            },
            "start": 1198,
            "end": 1201
          },
          "start": 1197,
          "end": 1201
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1204,
            "end": 1205
          },
          "typeArguments": null,
          "start": 1204,
          "end": 1205
        },
        "start": 1202,
        "end": 1205
      },
      "body": null,
      "expression": false,
      "start": 1174,
      "end": 1206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1226
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 1237,
              "end": 1240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1227,
            "end": 1240
          }
        ],
        "start": 1226,
        "end": 1241
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1246
              },
              "typeArguments": null,
              "start": 1245,
              "end": 1246
            },
            "start": 1243,
            "end": 1246
          },
          "start": 1242,
          "end": 1246
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1249,
            "end": 1250
          },
          "typeArguments": null,
          "start": 1249,
          "end": 1250
        },
        "start": 1247,
        "end": 1250
      },
      "body": null,
      "expression": false,
      "start": 1207,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1269,
        "end": 1271
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1273
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 1282,
              "end": 1289
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1272,
            "end": 1289
          }
        ],
        "start": 1271,
        "end": 1290
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1294,
                "end": 1295
              },
              "typeArguments": null,
              "start": 1294,
              "end": 1295
            },
            "start": 1292,
            "end": 1295
          },
          "start": 1291,
          "end": 1295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1298,
            "end": 1299
          },
          "typeArguments": null,
          "start": 1298,
          "end": 1299
        },
        "start": 1296,
        "end": 1299
      },
      "body": null,
      "expression": false,
      "start": 1252,
      "end": 1300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1320
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1322
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1339
              },
              "typeArguments": null,
              "start": 1331,
              "end": 1339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1321,
            "end": 1339
          }
        ],
        "start": 1320,
        "end": 1340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1345
              },
              "typeArguments": null,
              "start": 1344,
              "end": 1345
            },
            "start": 1342,
            "end": 1345
          },
          "start": 1341,
          "end": 1345
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1348,
            "end": 1349
          },
          "typeArguments": null,
          "start": 1348,
          "end": 1349
        },
        "start": 1346,
        "end": 1349
      },
      "body": null,
      "expression": false,
      "start": 1301,
      "end": 1350
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1370
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1372
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1385,
                    "end": 1389
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1391,
                        "end": 1394
                      },
                      "start": 1391,
                      "end": 1396
                    },
                    "start": 1389,
                    "end": 1396
                  },
                  "value": null,
                  "start": 1382,
                  "end": 1396
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1401,
                  "end": 1404
                },
                "start": 1398,
                "end": 1404
              },
              "start": 1381,
              "end": 1404
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1371,
            "end": 1404
          }
        ],
        "start": 1370,
        "end": 1405
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1409,
                "end": 1410
              },
              "typeArguments": null,
              "start": 1409,
              "end": 1410
            },
            "start": 1407,
            "end": 1410
          },
          "start": 1406,
          "end": 1410
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1413,
            "end": 1414
          },
          "typeArguments": null,
          "start": 1413,
          "end": 1414
        },
        "start": 1411,
        "end": 1414
      },
      "body": null,
      "expression": false,
      "start": 1351,
      "end": 1415
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1433,
        "end": 1435
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1436,
              "end": 1437
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1452,
                  "end": 1455
                },
                "start": 1449,
                "end": 1455
              },
              "start": 1446,
              "end": 1455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1436,
            "end": 1455
          }
        ],
        "start": 1435,
        "end": 1456
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1461
              },
              "typeArguments": null,
              "start": 1460,
              "end": 1461
            },
            "start": 1458,
            "end": 1461
          },
          "start": 1457,
          "end": 1461
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1464,
            "end": 1465
          },
          "typeArguments": null,
          "start": 1464,
          "end": 1465
        },
        "start": 1462,
        "end": 1465
      },
      "body": null,
      "expression": false,
      "start": 1416,
      "end": 1466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1468,
          "end": 1470
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1473
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1476,
                  "end": 1477
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1477
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1482,
              "end": 1483
            },
            "id": null,
            "generator": false,
            "start": 1471,
            "end": 1483
          }
        ],
        "optional": false,
        "start": 1468,
        "end": 1484
      },
      "directive": null,
      "start": 1468,
      "end": 1485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1497,
          "end": 1499
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1502
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1505,
                  "end": 1506
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1506
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1511,
              "end": 1512
            },
            "id": null,
            "generator": false,
            "start": 1500,
            "end": 1512
          }
        ],
        "optional": false,
        "start": 1497,
        "end": 1513
      },
      "directive": null,
      "start": 1497,
      "end": 1514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1526,
          "end": 1528
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1530,
                  "end": 1531
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1534,
                  "end": 1535
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1530,
                "end": 1535
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1540,
              "end": 1541
            },
            "id": null,
            "generator": false,
            "start": 1529,
            "end": 1541
          }
        ],
        "optional": false,
        "start": 1526,
        "end": 1542
      },
      "directive": null,
      "start": 1526,
      "end": 1543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1555,
          "end": 1557
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1559,
                  "end": 1560
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1563,
                  "end": 1564
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1559,
                "end": 1564
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1569,
              "end": 1570
            },
            "id": null,
            "generator": false,
            "start": 1558,
            "end": 1570
          }
        ],
        "optional": false,
        "start": 1555,
        "end": 1571
      },
      "directive": null,
      "start": 1555,
      "end": 1572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1588,
                  "end": 1589
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1592,
                  "end": 1593
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1593
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1598,
              "end": 1599
            },
            "id": null,
            "generator": false,
            "start": 1587,
            "end": 1599
          }
        ],
        "optional": false,
        "start": 1584,
        "end": 1600
      },
      "directive": null,
      "start": 1584,
      "end": 1601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1610,
          "end": 1612
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1614,
                  "end": 1615
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1618,
                  "end": 1619
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1614,
                "end": 1619
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1624,
              "end": 1625
            },
            "id": null,
            "generator": false,
            "start": 1613,
            "end": 1625
          }
        ],
        "optional": false,
        "start": 1610,
        "end": 1626
      },
      "directive": null,
      "start": 1610,
      "end": 1627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1639,
          "end": 1641
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": null,
                "start": 1643,
                "end": 1645
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1650,
              "end": 1651
            },
            "id": null,
            "generator": false,
            "start": 1642,
            "end": 1651
          }
        ],
        "optional": false,
        "start": 1639,
        "end": 1652
      },
      "directive": null,
      "start": 1639,
      "end": 1653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1680,
          "end": 1682
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1687,
                  "end": 1688
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1684,
                "end": 1688
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1693,
              "end": 1694
            },
            "id": null,
            "generator": false,
            "start": 1683,
            "end": 1694
          }
        ],
        "optional": false,
        "start": 1680,
        "end": 1695
      },
      "directive": null,
      "start": 1680,
      "end": 1696
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1739
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1740,
              "end": 1741
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1740,
            "end": 1741
          }
        ],
        "start": 1739,
        "end": 1742
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1751
              },
              "typeArguments": null,
              "start": 1750,
              "end": 1751
            },
            "start": 1748,
            "end": 1751
          },
          "start": 1743,
          "end": 1751
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1754,
            "end": 1755
          },
          "typeArguments": null,
          "start": 1754,
          "end": 1755
        },
        "start": 1752,
        "end": 1755
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "input",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1770
            },
            "start": 1758,
            "end": 1770
          }
        ],
        "start": 1756,
        "end": 1772
      },
      "expression": false,
      "start": 1728,
      "end": 1772
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1783,
        "end": 1789
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1793,
                "end": 1796
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1793,
                  "end": 1796
                },
                "right": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1799,
                  "end": 1801
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1793,
                "end": 1801
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1793,
              "end": 1801
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1791,
          "end": 1803
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1819
            },
            "start": 1809,
            "end": 1820
          }
        ],
        "start": 1805,
        "end": 1822
      },
      "expression": false,
      "start": 1774,
      "end": 1822
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
            "name": "newGetFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1830,
            "end": 1839
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1844
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1845,
                "end": 1851
              }
            ],
            "optional": false,
            "start": 1842,
            "end": 1852
          },
          "definite": false,
          "start": 1830,
          "end": 1852
        }
      ],
      "declare": false,
      "start": 1824,
      "end": 1853
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
            "name": "newGetFoo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1860,
            "end": 1870
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1873,
              "end": 1875
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1885,
                  "end": 1891
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1895,
                          "end": 1898
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1895,
                            "end": 1898
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1901,
                            "end": 1903
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1895,
                          "end": 1903
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1895,
                        "end": 1903
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1893,
                    "end": 1905
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1918,
                        "end": 1921
                      },
                      "start": 1911,
                      "end": 1922
                    }
                  ],
                  "start": 1907,
                  "end": 1924
                },
                "expression": false,
                "start": 1876,
                "end": 1924
              }
            ],
            "optional": false,
            "start": 1873,
            "end": 1925
          },
          "definite": false,
          "start": 1860,
          "end": 1925
        }
      ],
      "declare": false,
      "start": 1854,
      "end": 1926
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "memoize",
        "optional": false,
        "typeAnnotation": null,
        "start": 1978,
        "end": 1985
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1986,
              "end": 1987
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1996,
                "end": 2004
              },
              "typeArguments": null,
              "start": 1996,
              "end": 2004
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1986,
            "end": 2004
          }
        ],
        "start": 1985,
        "end": 2005
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 2012,
                "end": 2013
              },
              "typeArguments": null,
              "start": 2012,
              "end": 2013
            },
            "start": 2010,
            "end": 2013
          },
          "start": 2006,
          "end": 2013
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2017
          },
          "typeArguments": null,
          "start": 2016,
          "end": 2017
        },
        "start": 2014,
        "end": 2017
      },
      "body": null,
      "expression": false,
      "start": 1961,
      "end": 2018
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2032
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2036,
              "end": 2042
            },
            "start": 2034,
            "end": 2042
          },
          "start": 2033,
          "end": 2042
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 2044,
            "end": 2045
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 2048,
            "end": 2049
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2044,
          "end": 2049
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2052,
          "end": 2058
        },
        "start": 2050,
        "end": 2058
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2072,
                "end": 2073
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2076,
                "end": 2077
              },
              "start": 2072,
              "end": 2077
            },
            "start": 2065,
            "end": 2078
          }
        ],
        "start": 2059,
        "end": 2080
      },
      "expression": false,
      "start": 2020,
      "end": 2080
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
            "name": "memoizedAdd",
            "optional": false,
            "typeAnnotation": null,
            "start": 2087,
            "end": 2098
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "memoize",
              "optional": false,
              "typeAnnotation": null,
              "start": 2101,
              "end": 2108
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 2109,
                "end": 2112
              }
            ],
            "optional": false,
            "start": 2101,
            "end": 2113
          },
          "definite": false,
          "start": 2087,
          "end": 2113
        }
      ],
      "declare": false,
      "start": 2081,
      "end": 2114
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
            "name": "add2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2122,
            "end": 2126
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2133,
                    "end": 2139
                  },
                  "start": 2131,
                  "end": 2139
                },
                "start": 2130,
                "end": 2139
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2141,
                  "end": 2142
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2145,
                  "end": 2146
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2141,
                "end": 2146
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2149,
                "end": 2155
              },
              "start": 2147,
              "end": 2155
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2159,
                "end": 2160
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2163,
                "end": 2164
              },
              "start": 2159,
              "end": 2164
            },
            "id": null,
            "generator": false,
            "start": 2129,
            "end": 2164
          },
          "definite": false,
          "start": 2122,
          "end": 2164
        }
      ],
      "declare": false,
      "start": 2116,
      "end": 2165
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
            "name": "memoizedAdd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2172,
            "end": 2184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "memoize",
              "optional": false,
              "typeAnnotation": null,
              "start": 2187,
              "end": 2194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "add2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2195,
                "end": 2199
              }
            ],
            "optional": false,
            "start": 2187,
            "end": 2200
          },
          "definite": false,
          "start": 2172,
          "end": 2200
        }
      ],
      "declare": false,
      "start": 2166,
      "end": 2201
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
            "name": "memoizedAdd3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2209,
            "end": 2221
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "memoize",
              "optional": false,
              "typeAnnotation": null,
              "start": 2224,
              "end": 2231
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2236,
                        "end": 2242
                      },
                      "start": 2234,
                      "end": 2242
                    },
                    "start": 2233,
                    "end": 2242
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2245
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2248,
                      "end": 2249
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2244,
                    "end": 2249
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2252,
                    "end": 2258
                  },
                  "start": 2250,
                  "end": 2258
                },
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2262,
                    "end": 2263
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2266,
                    "end": 2267
                  },
                  "start": 2262,
                  "end": 2267
                },
                "id": null,
                "generator": false,
                "start": 2232,
                "end": 2267
              }
            ],
            "optional": false,
            "start": 2224,
            "end": 2268
          },
          "definite": false,
          "start": 2209,
          "end": 2268
        }
      ],
      "declare": false,
      "start": 2203,
      "end": 2269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "execute",
        "optional": false,
        "typeAnnotation": null,
        "start": 2310,
        "end": 2317
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "script",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2326,
                  "end": 2332
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2335,
                    "end": 2343
                  },
                  "typeArguments": null,
                  "start": 2335,
                  "end": 2343
                }
              ],
              "start": 2326,
              "end": 2343
            },
            "start": 2324,
            "end": 2343
          },
          "start": 2318,
          "end": 2343
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2346,
            "end": 2353
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2354,
                "end": 2360
              }
            ],
            "start": 2353,
            "end": 2361
          },
          "start": 2346,
          "end": 2361
        },
        "start": 2344,
        "end": 2361
      },
      "body": null,
      "expression": false,
      "start": 2293,
      "end": 2362
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "executeSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2382,
          "end": 2398
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
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "execute",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2421
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "root",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "HTMLElement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2429,
                              "end": 2440
                            },
                            "typeArguments": null,
                            "start": 2429,
                            "end": 2440
                          },
                          "start": 2427,
                          "end": 2440
                        },
                        "start": 2423,
                        "end": 2440
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "debug",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2442,
                          "end": 2447
                        },
                        "right": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 2450,
                          "end": 2454
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2442,
                        "end": 2454
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "debug",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2473,
                            "end": 2478
                          },
                          "consequent": {
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
                                      "name": "root",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2494,
                                      "end": 2498
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "innerHTML",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2499,
                                      "end": 2508
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2494,
                                    "end": 2508
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''",
                                    "start": 2511,
                                    "end": 2513
                                  },
                                  "start": 2494,
                                  "end": 2513
                                },
                                "directive": null,
                                "start": 2494,
                                "end": 2514
                              }
                            ],
                            "start": 2480,
                            "end": 2524
                          },
                          "alternate": null,
                          "start": 2469,
                          "end": 2524
                        }
                      ],
                      "start": 2459,
                      "end": 2530
                    },
                    "id": null,
                    "generator": false,
                    "start": 2422,
                    "end": 2530
                  }
                ],
                "optional": false,
                "start": 2414,
                "end": 2531
              },
              "start": 2407,
              "end": 2532
            }
          ],
          "start": 2401,
          "end": 2534
        },
        "expression": false,
        "start": 2373,
        "end": 2534
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2366,
      "end": 2534
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
            "name": "fz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2542,
            "end": 2545
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2549,
                  "end": 2554
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2557,
                  "end": 2561
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2549,
                "end": 2561
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 2566,
              "end": 2571
            },
            "id": null,
            "generator": false,
            "start": 2548,
            "end": 2571
          },
          "definite": false,
          "start": 2542,
          "end": 2571
        }
      ],
      "declare": false,
      "start": 2536,
      "end": 2572
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
            "name": "fz2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2584,
                  "end": 2592
                },
                "typeArguments": null,
                "start": 2584,
                "end": 2592
              },
              "start": 2582,
              "end": 2592
            },
            "start": 2579,
            "end": 2592
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2596,
                  "end": 2601
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2604,
                  "end": 2608
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2596,
                "end": 2608
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 2613,
              "end": 2618
            },
            "id": null,
            "generator": false,
            "start": 2595,
            "end": 2618
          },
          "definite": false,
          "start": 2579,
          "end": 2618
        }
      ],
      "declare": false,
      "start": 2573,
      "end": 2619
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2619
}
```
