__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 25
            },
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
                  "start": 27,
                  "end": 28
                },
                "typeArguments": null,
                "start": 27,
                "end": 28
              },
              "start": 25,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 46
      },
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
              "start": 47,
              "end": 48
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 48
          }
        ],
        "start": 46,
        "end": 49
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "typeArguments": null,
            "start": 70,
            "end": 71
          },
          "start": 64,
          "end": 71
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 77
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "typeArguments": null,
                  "start": 78,
                  "end": 79
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "typeArguments": null,
                  "start": 80,
                  "end": 81
                },
                "start": 78,
                "end": 82
              }
            ],
            "start": 77,
            "end": 83
          },
          "start": 74,
          "end": 83
        },
        "optional": false,
        "readonly": null,
        "start": 52,
        "end": 86
      },
      "declare": false,
      "start": 33,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
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
              "start": 101,
              "end": 102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 101,
            "end": 102
          }
        ],
        "start": 100,
        "end": 103
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
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 105,
            "end": 108
          },
          "start": 104,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 114
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 116
                },
                "typeArguments": null,
                "start": 115,
                "end": 116
              }
            ],
            "start": 114,
            "end": 117
          },
          "start": 111,
          "end": 117
        },
        "start": 109,
        "end": 117
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 138
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 133,
                  "end": 141
                }
              ],
              "start": 131,
              "end": 143
            },
            "start": 124,
            "end": 144
          }
        ],
        "start": 118,
        "end": 146
      },
      "expression": false,
      "start": 88,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 162
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
              "start": 163,
              "end": 164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 164
          }
        ],
        "start": 162,
        "end": 165
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
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 172
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 174
                  }
                ],
                "start": 172,
                "end": 175
              },
              "start": 169,
              "end": 175
            },
            "start": 167,
            "end": 175
          },
          "start": 166,
          "end": 175
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
            "start": 178,
            "end": 179
          },
          "typeArguments": null,
          "start": 178,
          "end": 179
        },
        "start": 176,
        "end": 179
      },
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 200
              },
              "optional": false,
              "computed": false,
              "start": 193,
              "end": 200
            },
            "start": 186,
            "end": 201
          }
        ],
        "start": 180,
        "end": 203
      },
      "expression": false,
      "start": 148,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 220
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
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          }
        ],
        "start": 220,
        "end": 223
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "start": 227,
            "end": 230
          },
          "start": 224,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 241
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 243
                },
                "typeArguments": null,
                "start": 242,
                "end": 243
              }
            ],
            "start": 241,
            "end": 244
          },
          "start": 233,
          "end": 244
        },
        "start": 231,
        "end": 244
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 261
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 264,
                    "end": 266
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boxified",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 278
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 280
                          },
                          "typeArguments": null,
                          "start": 279,
                          "end": 280
                        }
                      ],
                      "start": 278,
                      "end": 281
                    },
                    "start": 270,
                    "end": 281
                  },
                  "start": 264,
                  "end": 281
                },
                "definite": false,
                "start": 255,
                "end": 281
              }
            ],
            "declare": false,
            "start": 251,
            "end": 282
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "init": null,
                  "definite": false,
                  "start": 296,
                  "end": 297
                }
              ],
              "declare": false,
              "start": 292,
              "end": 297
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 304
            },
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 322
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 324
                      },
                      "optional": false,
                      "computed": true,
                      "start": 316,
                      "end": 325
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "box",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 331
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 335
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 336,
                            "end": 337
                          },
                          "optional": false,
                          "computed": true,
                          "start": 332,
                          "end": 338
                        }
                      ],
                      "optional": false,
                      "start": 328,
                      "end": 339
                    },
                    "start": 316,
                    "end": 339
                  },
                  "directive": null,
                  "start": 316,
                  "end": 340
                }
              ],
              "start": 306,
              "end": 346
            },
            "start": 287,
            "end": 346
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 364
            },
            "start": 351,
            "end": 365
          }
        ],
        "start": 245,
        "end": 367
      },
      "expression": false,
      "start": 205,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 386
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
              "start": 387,
              "end": 388
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 397,
              "end": 403
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 403
          }
        ],
        "start": 386,
        "end": 404
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 418
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 419,
                    "end": 420
                  }
                ],
                "start": 418,
                "end": 421
              },
              "start": 410,
              "end": 421
            },
            "start": 408,
            "end": 421
          },
          "start": 405,
          "end": 421
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
            "start": 424,
            "end": 425
          },
          "typeArguments": null,
          "start": 424,
          "end": 425
        },
        "start": 422,
        "end": 425
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 442
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 445,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 451,
                    "end": 452
                  },
                  "start": 445,
                  "end": 452
                },
                "definite": false,
                "start": 436,
                "end": 452
              }
            ],
            "declare": false,
            "start": 432,
            "end": 453
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "init": null,
                  "definite": false,
                  "start": 467,
                  "end": 468
                }
              ],
              "declare": false,
              "start": 463,
              "end": 468
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 475
            },
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 493
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 495
                      },
                      "optional": false,
                      "computed": true,
                      "start": 487,
                      "end": 496
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unbox",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 504
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 505,
                            "end": 508
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 509,
                            "end": 510
                          },
                          "optional": false,
                          "computed": true,
                          "start": 505,
                          "end": 511
                        }
                      ],
                      "optional": false,
                      "start": 499,
                      "end": 512
                    },
                    "start": 487,
                    "end": 512
                  },
                  "directive": null,
                  "start": 487,
                  "end": 513
                }
              ],
              "start": 477,
              "end": 519
            },
            "start": 458,
            "end": 519
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 537
            },
            "start": 524,
            "end": 538
          }
        ],
        "start": 426,
        "end": 540
      },
      "expression": false,
      "start": 369,
      "end": 540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignBoxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 565
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
              "start": 566,
              "end": 567
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 566,
            "end": 567
          }
        ],
        "start": 565,
        "end": 568
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 583,
                      "end": 584
                    },
                    "typeArguments": null,
                    "start": 583,
                    "end": 584
                  }
                ],
                "start": 582,
                "end": 585
              },
              "start": 574,
              "end": 585
            },
            "start": 572,
            "end": 585
          },
          "start": 569,
          "end": 585
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
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
                "start": 595,
                "end": 596
              },
              "typeArguments": null,
              "start": 595,
              "end": 596
            },
            "start": 593,
            "end": 596
          },
          "start": 587,
          "end": 596
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 613,
                    "end": 614
                  },
                  "init": null,
                  "definite": false,
                  "start": 613,
                  "end": 614
                }
              ],
              "declare": false,
              "start": 609,
              "end": 614
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 624
            },
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 639
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 641
                        },
                        "optional": false,
                        "computed": true,
                        "start": 636,
                        "end": 642
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 643,
                        "end": 648
                      },
                      "optional": false,
                      "computed": false,
                      "start": 636,
                      "end": 648
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 657
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 658,
                        "end": 659
                      },
                      "optional": false,
                      "computed": true,
                      "start": 651,
                      "end": 660
                    },
                    "start": 636,
                    "end": 660
                  },
                  "directive": null,
                  "start": 636,
                  "end": 661
                }
              ],
              "start": 626,
              "end": 667
            },
            "start": 604,
            "end": 667
          }
        ],
        "start": 598,
        "end": 669
      },
      "expression": false,
      "start": 542,
      "end": 669
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 680,
        "end": 682
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 696
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 710
                      },
                      "value": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 712,
                        "end": 714
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 709,
                      "end": 714
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 724,
                        "end": 725
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 727,
                        "end": 734
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 724,
                      "end": 734
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 745
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 747,
                        "end": 751
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 744,
                      "end": 751
                    }
                  ],
                  "start": 699,
                  "end": 757
                },
                "definite": false,
                "start": 695,
                "end": 757
              }
            ],
            "declare": false,
            "start": 691,
            "end": 758
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 768
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 771,
                    "end": 777
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 779
                    }
                  ],
                  "optional": false,
                  "start": 771,
                  "end": 780
                },
                "definite": false,
                "start": 767,
                "end": 780
              }
            ],
            "declare": false,
            "start": 763,
            "end": 781
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 793,
                      "end": 799
                    },
                    "start": 791,
                    "end": 799
                  },
                  "start": 790,
                  "end": 799
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 802,
                      "end": 803
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 805
                    },
                    "optional": false,
                    "computed": false,
                    "start": 802,
                    "end": 805
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 811
                  },
                  "optional": false,
                  "computed": false,
                  "start": 802,
                  "end": 811
                },
                "definite": false,
                "start": 790,
                "end": 811
              }
            ],
            "declare": false,
            "start": 786,
            "end": 812
          }
        ],
        "start": 685,
        "end": 814
      },
      "expression": false,
      "start": 671,
      "end": 814
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 827
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 841
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 854,
                        "end": 855
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 860
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 861,
                            "end": 863
                          }
                        ],
                        "optional": false,
                        "start": 857,
                        "end": 864
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 854,
                      "end": 864
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 875
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 880
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 881,
                            "end": 888
                          }
                        ],
                        "optional": false,
                        "start": 877,
                        "end": 889
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 874,
                      "end": 889
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 899,
                        "end": 900
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 902,
                          "end": 905
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 906,
                            "end": 910
                          }
                        ],
                        "optional": false,
                        "start": 902,
                        "end": 911
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 899,
                      "end": 911
                    }
                  ],
                  "start": 844,
                  "end": 917
                },
                "definite": false,
                "start": 840,
                "end": 917
              }
            ],
            "declare": false,
            "start": 836,
            "end": 918
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 928
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 931,
                    "end": 939
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 940,
                      "end": 941
                    }
                  ],
                  "optional": false,
                  "start": 931,
                  "end": 942
                },
                "definite": false,
                "start": 927,
                "end": 942
              }
            ],
            "declare": false,
            "start": 923,
            "end": 943
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 955,
                      "end": 961
                    },
                    "start": 953,
                    "end": 961
                  },
                  "start": 952,
                  "end": 961
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 964,
                    "end": 965
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 967
                  },
                  "optional": false,
                  "computed": false,
                  "start": 964,
                  "end": 967
                },
                "definite": false,
                "start": 952,
                "end": 967
              }
            ],
            "declare": false,
            "start": 948,
            "end": 968
          }
        ],
        "start": 830,
        "end": 970
      },
      "expression": false,
      "start": 816,
      "end": 970
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 981,
        "end": 983
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 997
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1010,
                        "end": 1011
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1013,
                          "end": 1016
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1017,
                            "end": 1019
                          }
                        ],
                        "optional": false,
                        "start": 1013,
                        "end": 1020
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1010,
                      "end": 1020
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1031
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1033,
                          "end": 1036
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 1037,
                            "end": 1044
                          }
                        ],
                        "optional": false,
                        "start": 1033,
                        "end": 1045
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1030,
                      "end": 1045
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1055,
                        "end": 1056
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1058,
                          "end": 1061
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1062,
                            "end": 1066
                          }
                        ],
                        "optional": false,
                        "start": 1058,
                        "end": 1067
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1055,
                      "end": 1067
                    }
                  ],
                  "start": 1000,
                  "end": 1073
                },
                "definite": false,
                "start": 996,
                "end": 1073
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1074
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assignBoxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 1079,
                "end": 1093
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1094,
                  "end": 1095
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1099,
                        "end": 1100
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1102,
                        "end": 1107
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1099,
                      "end": 1107
                    }
                  ],
                  "start": 1097,
                  "end": 1109
                }
              ],
              "optional": false,
              "start": 1079,
              "end": 1110
            },
            "directive": null,
            "start": 1079,
            "end": 1111
          }
        ],
        "start": 986,
        "end": 1113
      },
      "expression": false,
      "start": 972,
      "end": 1113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1124,
        "end": 1126
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1140
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1153,
                        "end": 1154
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1156,
                          "end": 1159
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1160,
                            "end": 1162
                          }
                        ],
                        "optional": false,
                        "start": 1156,
                        "end": 1163
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1153,
                      "end": 1163
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1174
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1176,
                          "end": 1179
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 1180,
                            "end": 1187
                          }
                        ],
                        "optional": false,
                        "start": 1176,
                        "end": 1188
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1173,
                      "end": 1188
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1199
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1201,
                          "end": 1204
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1205,
                            "end": 1209
                          }
                        ],
                        "optional": false,
                        "start": 1201,
                        "end": 1210
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1198,
                      "end": 1210
                    }
                  ],
                  "start": 1143,
                  "end": 1216
                },
                "definite": false,
                "start": 1139,
                "end": 1216
              }
            ],
            "declare": false,
            "start": 1135,
            "end": 1217
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1223
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boxify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1232
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unboxify",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1241
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1242,
                        "end": 1243
                      }
                    ],
                    "optional": false,
                    "start": 1233,
                    "end": 1244
                  }
                ],
                "optional": false,
                "start": 1226,
                "end": 1245
              },
              "start": 1222,
              "end": 1245
            },
            "directive": null,
            "start": 1222,
            "end": 1246
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1251,
                "end": 1252
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unboxify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1263
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boxify",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1264,
                      "end": 1270
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1271,
                        "end": 1272
                      }
                    ],
                    "optional": false,
                    "start": 1264,
                    "end": 1273
                  }
                ],
                "optional": false,
                "start": 1255,
                "end": 1274
              },
              "start": 1251,
              "end": 1274
            },
            "directive": null,
            "start": 1251,
            "end": 1275
          }
        ],
        "start": 1129,
        "end": 1277
      },
      "expression": false,
      "start": 1115,
      "end": 1277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1298
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
              "start": 1299,
              "end": 1300
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1299,
            "end": 1300
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1312,
              "end": 1318
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1302,
            "end": 1318
          }
        ],
        "start": 1298,
        "end": 1319
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1329
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1333,
                "end": 1334
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1337,
                  "end": 1338
                },
                "typeArguments": null,
                "start": 1337,
                "end": 1338
              },
              "optional": false,
              "readonly": null,
              "start": 1325,
              "end": 1340
            },
            "start": 1323,
            "end": 1340
          },
          "start": 1320,
          "end": 1340
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1355,
              "end": 1358
            },
            "start": 1348,
            "end": 1359
          }
        ],
        "start": 1342,
        "end": 1361
      },
      "expression": false,
      "start": 1279,
      "end": 1361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1372,
        "end": 1374
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1378,
              "end": 1384
            },
            "start": 1376,
            "end": 1384
          },
          "start": 1375,
          "end": 1384
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1397
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "makeRecord",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1400,
                    "end": 1410
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1421,
                            "end": 1422
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1424,
                              "end": 1427
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 1428,
                                "end": 1430
                              }
                            ],
                            "optional": false,
                            "start": 1424,
                            "end": 1431
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1421,
                          "end": 1431
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1441,
                            "end": 1442
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1444,
                              "end": 1447
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 1448,
                                "end": 1455
                              }
                            ],
                            "optional": false,
                            "start": 1444,
                            "end": 1456
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1441,
                          "end": 1456
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1466,
                            "end": 1467
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1469,
                              "end": 1472
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 1473,
                                "end": 1477
                              }
                            ],
                            "optional": false,
                            "start": 1469,
                            "end": 1478
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1466,
                          "end": 1478
                        }
                      ],
                      "start": 1411,
                      "end": 1484
                    }
                  ],
                  "optional": false,
                  "start": 1400,
                  "end": 1485
                },
                "definite": false,
                "start": 1396,
                "end": 1485
              }
            ],
            "declare": false,
            "start": 1392,
            "end": 1486
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1495,
                  "end": 1496
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1499,
                    "end": 1507
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1509
                    }
                  ],
                  "optional": false,
                  "start": 1499,
                  "end": 1510
                },
                "definite": false,
                "start": 1495,
                "end": 1510
              }
            ],
            "declare": false,
            "start": 1491,
            "end": 1511
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1523,
                          "end": 1529
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1532,
                          "end": 1538
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1541,
                          "end": 1548
                        }
                      ],
                      "start": 1523,
                      "end": 1548
                    },
                    "start": 1521,
                    "end": 1548
                  },
                  "start": 1520,
                  "end": 1548
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1551,
                    "end": 1552
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1553,
                    "end": 1554
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1551,
                  "end": 1554
                },
                "definite": false,
                "start": 1520,
                "end": 1554
              }
            ],
            "declare": false,
            "start": 1516,
            "end": 1555
          }
        ],
        "start": 1386,
        "end": 1557
      },
      "expression": false,
      "start": 1363,
      "end": 1557
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeDictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 1568,
        "end": 1582
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
              "start": 1583,
              "end": 1584
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1583,
            "end": 1584
          }
        ],
        "start": 1582,
        "end": 1585
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1597,
                          "end": 1603
                        },
                        "start": 1595,
                        "end": 1603
                      },
                      "start": 1594,
                      "end": 1603
                    }
                  ],
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
                        "start": 1606,
                        "end": 1607
                      },
                      "typeArguments": null,
                      "start": 1606,
                      "end": 1607
                    },
                    "start": 1604,
                    "end": 1607
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1593,
                  "end": 1607
                }
              ],
              "start": 1591,
              "end": 1609
            },
            "start": 1589,
            "end": 1609
          },
          "start": 1586,
          "end": 1609
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1627
            },
            "start": 1617,
            "end": 1628
          }
        ],
        "start": 1611,
        "end": 1630
      },
      "expression": false,
      "start": 1559,
      "end": 1630
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1643
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1647,
              "end": 1653
            },
            "start": 1645,
            "end": 1653
          },
          "start": 1644,
          "end": 1653
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1665,
                  "end": 1666
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "makeDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1669,
                    "end": 1683
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1694,
                            "end": 1695
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1697,
                              "end": 1700
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 1701,
                                "end": 1703
                              }
                            ],
                            "optional": false,
                            "start": 1697,
                            "end": 1704
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1694,
                          "end": 1704
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1714,
                            "end": 1715
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1717,
                              "end": 1720
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 1721,
                                "end": 1728
                              }
                            ],
                            "optional": false,
                            "start": 1717,
                            "end": 1729
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1714,
                          "end": 1729
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1739,
                            "end": 1740
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1742,
                              "end": 1745
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 1746,
                                "end": 1750
                              }
                            ],
                            "optional": false,
                            "start": 1742,
                            "end": 1751
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1739,
                          "end": 1751
                        }
                      ],
                      "start": 1684,
                      "end": 1757
                    }
                  ],
                  "optional": false,
                  "start": 1669,
                  "end": 1758
                },
                "definite": false,
                "start": 1665,
                "end": 1758
              }
            ],
            "declare": false,
            "start": 1661,
            "end": 1759
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1769
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1772,
                    "end": 1780
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1781,
                      "end": 1782
                    }
                  ],
                  "optional": false,
                  "start": 1772,
                  "end": 1783
                },
                "definite": false,
                "start": 1768,
                "end": 1783
              }
            ],
            "declare": false,
            "start": 1764,
            "end": 1784
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1814,
                          "end": 1821
                        }
                      ],
                      "start": 1796,
                      "end": 1821
                    },
                    "start": 1794,
                    "end": 1821
                  },
                  "start": 1793,
                  "end": 1821
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1824,
                    "end": 1825
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1826,
                    "end": 1827
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1824,
                  "end": 1828
                },
                "definite": false,
                "start": 1793,
                "end": 1828
              }
            ],
            "declare": false,
            "start": 1789,
            "end": 1829
          }
        ],
        "start": 1655,
        "end": 1831
      },
      "expression": false,
      "start": 1632,
      "end": 1831
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1850,
        "end": 1858
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
              "start": 1859,
              "end": 1860
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1859,
            "end": 1860
          }
        ],
        "start": 1858,
        "end": 1861
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1871
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1882
                  },
                  "typeArguments": null,
                  "start": 1881,
                  "end": 1882
                },
                "start": 1875,
                "end": 1882
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1887
                  },
                  "typeArguments": null,
                  "start": 1886,
                  "end": 1887
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1889
                  },
                  "typeArguments": null,
                  "start": 1888,
                  "end": 1889
                },
                "start": 1886,
                "end": 1890
              },
              "optional": true,
              "readonly": null,
              "start": 1867,
              "end": 1892
            },
            "start": 1865,
            "end": 1892
          },
          "start": 1862,
          "end": 1892
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
            "start": 1895,
            "end": 1896
          },
          "typeArguments": null,
          "start": 1895,
          "end": 1896
        },
        "start": 1893,
        "end": 1896
      },
      "body": null,
      "expression": false,
      "start": 1833,
      "end": 1897
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clone",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1920
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
              "start": 1921,
              "end": 1922
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1921,
            "end": 1922
          }
        ],
        "start": 1920,
        "end": 1923
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1941,
                "end": 1942
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1952,
                    "end": 1953
                  },
                  "typeArguments": null,
                  "start": 1952,
                  "end": 1953
                },
                "start": 1946,
                "end": 1953
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1957
                  },
                  "typeArguments": null,
                  "start": 1956,
                  "end": 1957
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1958,
                    "end": 1959
                  },
                  "typeArguments": null,
                  "start": 1958,
                  "end": 1959
                },
                "start": 1956,
                "end": 1960
              },
              "optional": false,
              "readonly": true,
              "start": 1929,
              "end": 1962
            },
            "start": 1927,
            "end": 1962
          },
          "start": 1924,
          "end": 1962
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
            "start": 1965,
            "end": 1966
          },
          "typeArguments": null,
          "start": 1965,
          "end": 1966
        },
        "start": 1963,
        "end": 1966
      },
      "body": null,
      "expression": false,
      "start": 1898,
      "end": 1967
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateAndClone",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 2001
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
              "start": 2002,
              "end": 2003
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2002,
            "end": 2003
          }
        ],
        "start": 2001,
        "end": 2004
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2022,
                "end": 2023
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2033,
                    "end": 2034
                  },
                  "typeArguments": null,
                  "start": 2033,
                  "end": 2034
                },
                "start": 2027,
                "end": 2034
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2038,
                    "end": 2039
                  },
                  "typeArguments": null,
                  "start": 2038,
                  "end": 2039
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2040,
                    "end": 2041
                  },
                  "typeArguments": null,
                  "start": 2040,
                  "end": 2041
                },
                "start": 2038,
                "end": 2042
              },
              "optional": true,
              "readonly": true,
              "start": 2010,
              "end": 2044
            },
            "start": 2008,
            "end": 2044
          },
          "start": 2005,
          "end": 2044
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
            "start": 2047,
            "end": 2048
          },
          "typeArguments": null,
          "start": 2047,
          "end": 2048
        },
        "start": 2045,
        "end": 2048
      },
      "body": null,
      "expression": false,
      "start": 1968,
      "end": 2049
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2056,
        "end": 2059
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2068,
              "end": 2069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2072,
                "end": 2078
              },
              "start": 2070,
              "end": 2078
            },
            "accessibility": null,
            "static": false,
            "start": 2068,
            "end": 2079
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2093,
              "end": 2094
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2096,
                "end": 2102
              },
              "start": 2094,
              "end": 2102
            },
            "accessibility": null,
            "static": false,
            "start": 2084,
            "end": 2103
          }
        ],
        "start": 2062,
        "end": 2105
      },
      "declare": false,
      "start": 2051,
      "end": 2105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2116,
        "end": 2119
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2125,
                "end": 2128
              },
              "typeArguments": null,
              "start": 2125,
              "end": 2128
            },
            "start": 2123,
            "end": 2128
          },
          "start": 2120,
          "end": 2128
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2141
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2144,
                    "end": 2152
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2153,
                      "end": 2156
                    }
                  ],
                  "optional": false,
                  "start": 2144,
                  "end": 2157
                },
                "definite": false,
                "start": 2140,
                "end": 2157
              }
            ],
            "declare": false,
            "start": 2136,
            "end": 2158
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2205,
                  "end": 2206
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2209,
                    "end": 2214
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2215,
                      "end": 2218
                    }
                  ],
                  "optional": false,
                  "start": 2209,
                  "end": 2219
                },
                "definite": false,
                "start": 2205,
                "end": 2219
              }
            ],
            "declare": false,
            "start": 2201,
            "end": 2220
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2259,
                  "end": 2260
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validateAndClone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2263,
                    "end": 2279
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2280,
                      "end": 2283
                    }
                  ],
                  "optional": false,
                  "start": 2263,
                  "end": 2284
                },
                "definite": false,
                "start": 2259,
                "end": 2284
              }
            ],
            "declare": false,
            "start": 2255,
            "end": 2285
          }
        ],
        "start": 2130,
        "end": 2316
      },
      "expression": false,
      "start": 2107,
      "end": 2316
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 2345,
        "end": 2349
      },
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
              "start": 2350,
              "end": 2351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2350,
            "end": 2351
          }
        ],
        "start": 2349,
        "end": 2352
      },
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
              "start": 2359,
              "end": 2363
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2365,
                  "end": 2368
                },
                "start": 2365,
                "end": 2370
              },
              "start": 2363,
              "end": 2370
            },
            "value": null,
            "start": 2356,
            "end": 2370
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
              "start": 2375,
              "end": 2376
            },
            "typeArguments": null,
            "start": 2375,
            "end": 2376
          },
          "start": 2372,
          "end": 2376
        },
        "start": 2355,
        "end": 2376
      },
      "declare": false,
      "start": 2340,
      "end": 2377
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2387
      },
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
              "start": 2388,
              "end": 2389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2388,
            "end": 2389
          }
        ],
        "start": 2387,
        "end": 2390
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2400,
          "end": 2401
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2411,
              "end": 2412
            },
            "typeArguments": null,
            "start": 2411,
            "end": 2412
          },
          "start": 2405,
          "end": 2412
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null,
                "start": 2415,
                "end": 2419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2420,
                        "end": 2421
                      },
                      "typeArguments": null,
                      "start": 2420,
                      "end": 2421
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2422,
                        "end": 2423
                      },
                      "typeArguments": null,
                      "start": 2422,
                      "end": 2423
                    },
                    "start": 2420,
                    "end": 2424
                  }
                ],
                "start": 2419,
                "end": 2425
              },
              "start": 2415,
              "end": 2425
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "typeAnnotation": null,
                "start": 2428,
                "end": 2432
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2433,
                        "end": 2434
                      },
                      "typeArguments": null,
                      "start": 2433,
                      "end": 2434
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2435,
                        "end": 2436
                      },
                      "typeArguments": null,
                      "start": 2435,
                      "end": 2436
                    },
                    "start": 2433,
                    "end": 2437
                  }
                ],
                "start": 2432,
                "end": 2438
              },
              "start": 2428,
              "end": 2438
            }
          ],
          "start": 2415,
          "end": 2438
        },
        "optional": false,
        "readonly": null,
        "start": 2393,
        "end": 2442
      },
      "declare": false,
      "start": 2378,
      "end": 2443
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "applySpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 2709,
        "end": 2718
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
              "start": 2719,
              "end": 2720
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2719,
            "end": 2720
          }
        ],
        "start": 2718,
        "end": 2721
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "typeAnnotation": null,
                "start": 2727,
                "end": 2731
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2732,
                      "end": 2733
                    },
                    "typeArguments": null,
                    "start": 2732,
                    "end": 2733
                  }
                ],
                "start": 2731,
                "end": 2734
              },
              "start": 2727,
              "end": 2734
            },
            "start": 2725,
            "end": 2734
          },
          "start": 2722,
          "end": 2734
        }
      ],
      "returnType": {
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
                "start": 2741,
                "end": 2745
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2747,
                    "end": 2750
                  },
                  "start": 2747,
                  "end": 2752
                },
                "start": 2745,
                "end": 2752
              },
              "value": null,
              "start": 2738,
              "end": 2752
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
                "start": 2757,
                "end": 2758
              },
              "typeArguments": null,
              "start": 2757,
              "end": 2758
            },
            "start": 2754,
            "end": 2758
          },
          "start": 2737,
          "end": 2758
        },
        "start": 2735,
        "end": 2758
      },
      "body": null,
      "expression": false,
      "start": 2692,
      "end": 2759
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2840,
            "end": 2842
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "applySpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 2845,
              "end": 2854
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2861,
                      "end": 2864
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "type": "TSAnyKeyword",
                              "start": 2870,
                              "end": 2873
                            },
                            "start": 2868,
                            "end": 2873
                          },
                          "start": 2867,
                          "end": 2873
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2878,
                        "end": 2879
                      },
                      "id": null,
                      "generator": false,
                      "start": 2866,
                      "end": 2879
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2861,
                    "end": 2879
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2885,
                      "end": 2891
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mul",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2903,
                            "end": 2906
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2912,
                                    "end": 2915
                                  },
                                  "start": 2910,
                                  "end": 2915
                                },
                                "start": 2909,
                                "end": 2915
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "n",
                              "raw": "\"n\"",
                              "start": 2920,
                              "end": 2923
                            },
                            "id": null,
                            "generator": false,
                            "start": 2908,
                            "end": 2923
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2903,
                          "end": 2923
                        }
                      ],
                      "start": 2893,
                      "end": 2929
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2885,
                    "end": 2929
                  }
                ],
                "start": 2855,
                "end": 2931
              }
            ],
            "optional": false,
            "start": 2845,
            "end": 2932
          },
          "definite": false,
          "start": 2840,
          "end": 2932
        }
      ],
      "declare": false,
      "start": 2836,
      "end": 2933
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3008,
            "end": 3010
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "applySpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 3013,
              "end": 3022
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 3025,
                      "end": 3028
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3032,
                            "end": 3035
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "baz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3039,
                                  "end": 3042
                                },
                                "value": {
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
                                          "type": "TSAnyKeyword",
                                          "start": 3048,
                                          "end": 3051
                                        },
                                        "start": 3046,
                                        "end": 3051
                                      },
                                      "start": 3045,
                                      "end": 3051
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 3056,
                                    "end": 3060
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 3044,
                                  "end": 3060
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 3039,
                                "end": 3060
                              }
                            ],
                            "start": 3037,
                            "end": 3062
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3032,
                          "end": 3062
                        }
                      ],
                      "start": 3030,
                      "end": 3064
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3025,
                    "end": 3064
                  }
                ],
                "start": 3023,
                "end": 3066
              }
            ],
            "optional": false,
            "start": 3013,
            "end": 3067
          },
          "definite": false,
          "start": 3008,
          "end": 3067
        }
      ],
      "declare": false,
      "start": 3004,
      "end": 3068
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3098,
            "end": 3101
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 3105,
                    "end": 3106
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3105,
                  "end": 3106
                }
              ],
              "start": 3104,
              "end": 3107
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
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
                      "start": 3116,
                      "end": 3117
                    },
                    "typeArguments": null,
                    "start": 3116,
                    "end": 3117
                  },
                  "start": 3114,
                  "end": 3117
                },
                "start": 3108,
                "end": 3117
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "partial",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3128,
                      "end": 3135
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3136,
                            "end": 3137
                          },
                          "typeArguments": null,
                          "start": 3136,
                          "end": 3137
                        }
                      ],
                      "start": 3135,
                      "end": 3138
                    },
                    "start": 3128,
                    "end": 3138
                  },
                  "start": 3126,
                  "end": 3138
                },
                "start": 3119,
                "end": 3138
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 3143,
              "end": 3149
            },
            "id": null,
            "generator": false,
            "start": 3104,
            "end": 3149
          },
          "definite": false,
          "start": 3098,
          "end": 3149
        }
      ],
      "declare": false,
      "start": 3092,
      "end": 3150
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 3155,
            "end": 3156
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3160,
                  "end": 3161
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 3163,
                  "end": 3164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3160,
                "end": 3164
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3166,
                  "end": 3167
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 3169,
                  "end": 3170
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3166,
                "end": 3170
              }
            ],
            "start": 3159,
            "end": 3171
          },
          "definite": false,
          "start": 3155,
          "end": 3171
        }
      ],
      "declare": false,
      "start": 3151,
      "end": 3172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 3173,
          "end": 3176
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 3177,
            "end": 3178
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3181,
                  "end": 3182
                },
                "value": {
                  "type": "Literal",
                  "value": 9,
                  "raw": "9",
                  "start": 3184,
                  "end": 3185
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3181,
                "end": 3185
              }
            ],
            "start": 3180,
            "end": 3186
          }
        ],
        "optional": false,
        "start": 3173,
        "end": 3187
      },
      "directive": null,
      "start": 3173,
      "end": 3188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 3189,
          "end": 3190
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3193,
            "end": 3196
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 3197,
              "end": 3198
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3201,
                    "end": 3202
                  },
                  "value": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 3204,
                    "end": 3205
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3201,
                  "end": 3205
                }
              ],
              "start": 3200,
              "end": 3206
            }
          ],
          "optional": false,
          "start": 3193,
          "end": 3207
        },
        "start": 3189,
        "end": 3207
      },
      "directive": null,
      "start": 3189,
      "end": 3208
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 3353,
        "end": 3356
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
              "start": 3357,
              "end": 3358
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3357,
            "end": 3358
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3360,
              "end": 3361
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3376,
                  "end": 3377
                },
                "typeArguments": null,
                "start": 3376,
                "end": 3377
              },
              "start": 3370,
              "end": 3377
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3360,
            "end": 3377
          }
        ],
        "start": 3356,
        "end": 3378
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3384,
                "end": 3388
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3389,
                      "end": 3390
                    },
                    "typeArguments": null,
                    "start": 3389,
                    "end": 3390
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3392,
                      "end": 3393
                    },
                    "typeArguments": null,
                    "start": 3392,
                    "end": 3393
                  }
                ],
                "start": 3388,
                "end": 3394
              },
              "start": 3384,
              "end": 3394
            },
            "start": 3382,
            "end": 3394
          },
          "start": 3379,
          "end": 3394
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
            "start": 3397,
            "end": 3398
          },
          "typeArguments": null,
          "start": 3397,
          "end": 3398
        },
        "start": 3395,
        "end": 3398
      },
      "body": null,
      "expression": false,
      "start": 3336,
      "end": 3399
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 3417,
        "end": 3420
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
              "start": 3421,
              "end": 3422
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3421,
            "end": 3422
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3425
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3440,
                  "end": 3441
                },
                "typeArguments": null,
                "start": 3440,
                "end": 3441
              },
              "start": 3434,
              "end": 3441
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3424,
            "end": 3441
          }
        ],
        "start": 3420,
        "end": 3442
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3448,
                "end": 3452
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3453,
                      "end": 3454
                    },
                    "typeArguments": null,
                    "start": 3453,
                    "end": 3454
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3456,
                      "end": 3457
                    },
                    "typeArguments": null,
                    "start": 3456,
                    "end": 3457
                  }
                ],
                "start": 3452,
                "end": 3458
              },
              "start": 3448,
              "end": 3458
            },
            "start": 3446,
            "end": 3458
          },
          "start": 3443,
          "end": 3458
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 3461,
            "end": 3462
          },
          "typeArguments": null,
          "start": 3461,
          "end": 3462
        },
        "start": 3459,
        "end": 3462
      },
      "body": null,
      "expression": false,
      "start": 3400,
      "end": 3463
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 3481,
        "end": 3484
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
              "start": 3485,
              "end": 3486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3485,
            "end": 3486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3488,
              "end": 3489
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3504,
                  "end": 3505
                },
                "typeArguments": null,
                "start": 3504,
                "end": 3505
              },
              "start": 3498,
              "end": 3505
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3488,
            "end": 3505
          }
        ],
        "start": 3484,
        "end": 3506
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 3512,
                "end": 3520
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3521,
                      "end": 3525
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3526,
                            "end": 3527
                          },
                          "typeArguments": null,
                          "start": 3526,
                          "end": 3527
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3529,
                            "end": 3530
                          },
                          "typeArguments": null,
                          "start": 3529,
                          "end": 3530
                        }
                      ],
                      "start": 3525,
                      "end": 3531
                    },
                    "start": 3521,
                    "end": 3531
                  }
                ],
                "start": 3520,
                "end": 3532
              },
              "start": 3512,
              "end": 3532
            },
            "start": 3510,
            "end": 3532
          },
          "start": 3507,
          "end": 3532
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
            "start": 3535,
            "end": 3536
          },
          "typeArguments": null,
          "start": 3535,
          "end": 3536
        },
        "start": 3533,
        "end": 3536
      },
      "body": null,
      "expression": false,
      "start": 3464,
      "end": 3537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 3555,
        "end": 3558
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
              "start": 3559,
              "end": 3560
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3559,
            "end": 3560
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3562,
              "end": 3563
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3578,
                  "end": 3579
                },
                "typeArguments": null,
                "start": 3578,
                "end": 3579
              },
              "start": 3572,
              "end": 3579
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3562,
            "end": 3579
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3581,
              "end": 3582
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3592
              },
              "typeArguments": null,
              "start": 3591,
              "end": 3592
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3581,
            "end": 3592
          }
        ],
        "start": 3558,
        "end": 3593
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3599,
                "end": 3603
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3604,
                      "end": 3605
                    },
                    "typeArguments": null,
                    "start": 3604,
                    "end": 3605
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3607,
                      "end": 3608
                    },
                    "typeArguments": null,
                    "start": 3607,
                    "end": 3608
                  }
                ],
                "start": 3603,
                "end": 3609
              },
              "start": 3599,
              "end": 3609
            },
            "start": 3597,
            "end": 3609
          },
          "start": 3594,
          "end": 3609
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
            "start": 3612,
            "end": 3613
          },
          "typeArguments": null,
          "start": 3612,
          "end": 3613
        },
        "start": 3610,
        "end": 3613
      },
      "body": null,
      "expression": false,
      "start": 3538,
      "end": 3614
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null,
        "start": 3632,
        "end": 3635
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
              "start": 3636,
              "end": 3637
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3636,
            "end": 3637
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3639,
              "end": 3640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3639,
            "end": 3640
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3642,
              "end": 3643
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3658,
                      "end": 3659
                    },
                    "typeArguments": null,
                    "start": 3658,
                    "end": 3659
                  },
                  "start": 3652,
                  "end": 3659
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3668,
                      "end": 3669
                    },
                    "typeArguments": null,
                    "start": 3668,
                    "end": 3669
                  },
                  "start": 3662,
                  "end": 3669
                }
              ],
              "start": 3652,
              "end": 3669
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3642,
            "end": 3669
          }
        ],
        "start": 3635,
        "end": 3670
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3676,
                "end": 3680
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3681,
                          "end": 3682
                        },
                        "typeArguments": null,
                        "start": 3681,
                        "end": 3682
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3685,
                          "end": 3686
                        },
                        "typeArguments": null,
                        "start": 3685,
                        "end": 3686
                      }
                    ],
                    "start": 3681,
                    "end": 3686
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3688,
                      "end": 3689
                    },
                    "typeArguments": null,
                    "start": 3688,
                    "end": 3689
                  }
                ],
                "start": 3680,
                "end": 3690
              },
              "start": 3676,
              "end": 3690
            },
            "start": 3674,
            "end": 3690
          },
          "start": 3671,
          "end": 3690
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3693,
                "end": 3694
              },
              "typeArguments": null,
              "start": 3693,
              "end": 3694
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3697,
                "end": 3698
              },
              "typeArguments": null,
              "start": 3697,
              "end": 3698
            }
          ],
          "start": 3693,
          "end": 3698
        },
        "start": 3691,
        "end": 3698
      },
      "body": null,
      "expression": false,
      "start": 3615,
      "end": 3699
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": null,
            "start": 3705,
            "end": 3707
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f20",
              "optional": false,
              "typeAnnotation": null,
              "start": 3710,
              "end": 3713
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 3716,
                      "end": 3719
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3721,
                      "end": 3723
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3716,
                    "end": 3723
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3725,
                      "end": 3728
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3730,
                      "end": 3737
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3725,
                    "end": 3737
                  }
                ],
                "start": 3714,
                "end": 3739
              }
            ],
            "optional": false,
            "start": 3710,
            "end": 3740
          },
          "definite": false,
          "start": 3705,
          "end": 3740
        }
      ],
      "declare": false,
      "start": 3701,
      "end": 3741
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3746,
            "end": 3748
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f21",
              "optional": false,
              "typeAnnotation": null,
              "start": 3751,
              "end": 3754
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 3757,
                      "end": 3760
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3762,
                      "end": 3764
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3757,
                    "end": 3764
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3766,
                      "end": 3769
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3771,
                      "end": 3778
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3766,
                    "end": 3778
                  }
                ],
                "start": 3755,
                "end": 3780
              }
            ],
            "optional": false,
            "start": 3751,
            "end": 3781
          },
          "definite": false,
          "start": 3746,
          "end": 3781
        }
      ],
      "declare": false,
      "start": 3742,
      "end": 3782
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3787,
            "end": 3789
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f22",
              "optional": false,
              "typeAnnotation": null,
              "start": 3792,
              "end": 3795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 3798,
                      "end": 3801
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3805,
                            "end": 3810
                          },
                          "value": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 3812,
                            "end": 3814
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3805,
                          "end": 3814
                        }
                      ],
                      "start": 3803,
                      "end": 3815
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3798,
                    "end": 3815
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3818,
                      "end": 3821
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3825,
                            "end": 3830
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 3832,
                            "end": 3839
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3825,
                          "end": 3839
                        }
                      ],
                      "start": 3823,
                      "end": 3841
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3818,
                    "end": 3841
                  }
                ],
                "start": 3796,
                "end": 3843
              }
            ],
            "optional": false,
            "start": 3792,
            "end": 3844
          },
          "definite": false,
          "start": 3787,
          "end": 3844
        }
      ],
      "declare": false,
      "start": 3783,
      "end": 3845
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3850,
            "end": 3852
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f23",
              "optional": false,
              "typeAnnotation": null,
              "start": 3855,
              "end": 3858
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 3861,
                      "end": 3864
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3866,
                      "end": 3868
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3861,
                    "end": 3868
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3870,
                      "end": 3873
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3875,
                      "end": 3882
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3870,
                    "end": 3882
                  }
                ],
                "start": 3859,
                "end": 3884
              }
            ],
            "optional": false,
            "start": 3855,
            "end": 3885
          },
          "definite": false,
          "start": 3850,
          "end": 3885
        }
      ],
      "declare": false,
      "start": 3846,
      "end": 3886
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3891,
            "end": 3893
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f24",
              "optional": false,
              "typeAnnotation": null,
              "start": 3896,
              "end": 3899
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
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
                      "start": 3902,
                      "end": 3905
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3907,
                      "end": 3909
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3902,
                    "end": 3909
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3911,
                      "end": 3914
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3916,
                      "end": 3923
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3911,
                    "end": 3923
                  }
                ],
                "start": 3900,
                "end": 3925
              }
            ],
            "optional": false,
            "start": 3896,
            "end": 3926
          },
          "definite": false,
          "start": 3891,
          "end": 3926
        }
      ],
      "declare": false,
      "start": 3887,
      "end": 3927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3960,
        "end": 3968
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
              "start": 3969,
              "end": 3970
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3969,
            "end": 3970
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3972,
              "end": 3973
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3988,
                  "end": 3989
                },
                "typeArguments": null,
                "start": 3988,
                "end": 3989
              },
              "start": 3982,
              "end": 3989
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3972,
            "end": 3989
          }
        ],
        "start": 3968,
        "end": 3990
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 3996,
                "end": 3997
              },
              "typeArguments": null,
              "start": 3996,
              "end": 3997
            },
            "start": 3994,
            "end": 3997
          },
          "start": 3991,
          "end": 3997
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4005,
                  "end": 4006
                },
                "typeArguments": null,
                "start": 4005,
                "end": 4006
              },
              "start": 4005,
              "end": 4008
            },
            "start": 4003,
            "end": 4008
          },
          "start": 3999,
          "end": 4008
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4011,
            "end": 4015
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4016,
                  "end": 4017
                },
                "typeArguments": null,
                "start": 4016,
                "end": 4017
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4019,
                  "end": 4020
                },
                "typeArguments": null,
                "start": 4019,
                "end": 4020
              }
            ],
            "start": 4015,
            "end": 4021
          },
          "start": 4011,
          "end": 4021
        },
        "start": 4009,
        "end": 4021
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 4035,
                "end": 4037
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4041,
                "end": 4044
              },
              "start": 4035,
              "end": 4044
            },
            "start": 4028,
            "end": 4045
          }
        ],
        "start": 4022,
        "end": 4047
      },
      "expression": false,
      "start": 3951,
      "end": 4047
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
            "name": "myAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4062,
                "end": 4065
              },
              "start": 4060,
              "end": 4065
            },
            "start": 4055,
            "end": 4065
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 4068,
            "end": 4070
          },
          "definite": false,
          "start": 4055,
          "end": 4070
        }
      ],
      "declare": false,
      "start": 4049,
      "end": 4071
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4079,
            "end": 4081
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 4084,
              "end": 4092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 4093,
                "end": 4098
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 4101,
                    "end": 4106
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 4108,
                    "end": 4113
                  }
                ],
                "start": 4100,
                "end": 4114
              }
            ],
            "optional": false,
            "start": 4084,
            "end": 4115
          },
          "definite": false,
          "start": 4079,
          "end": 4115
        }
      ],
      "declare": false,
      "start": 4073,
      "end": 4116
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
            "name": "o2",
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
                      "start": 4130,
                      "end": 4133
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4135,
                        "end": 4138
                      },
                      "start": 4133,
                      "end": 4138
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4130,
                    "end": 4139
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4140,
                      "end": 4143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4145,
                        "end": 4148
                      },
                      "start": 4143,
                      "end": 4148
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4140,
                    "end": 4148
                  }
                ],
                "start": 4128,
                "end": 4150
              },
              "start": 4126,
              "end": 4150
            },
            "start": 4124,
            "end": 4150
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 4153,
              "end": 4161
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 4162,
                "end": 4167
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 4170,
                    "end": 4175
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 4177,
                    "end": 4182
                  }
                ],
                "start": 4169,
                "end": 4183
              }
            ],
            "optional": false,
            "start": 4153,
            "end": 4184
          },
          "definite": false,
          "start": 4124,
          "end": 4184
        }
      ],
      "declare": false,
      "start": 4118,
      "end": 4185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4185
}
```
