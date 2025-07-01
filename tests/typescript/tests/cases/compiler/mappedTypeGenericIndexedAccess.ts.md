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
        "name": "Types",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 32
      },
      "typeParameters": null,
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
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 46
            },
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
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 54,
                          "end": 58
                        },
                        "start": 54,
                        "end": 58
                      },
                      "start": 52,
                      "end": 58
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 58
                  }
                ],
                "start": 48,
                "end": 60
              },
              "start": 46,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 61
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 72
            },
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
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 78
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 80,
                          "end": 84
                        },
                        "start": 80,
                        "end": 84
                      },
                      "start": 78,
                      "end": 84
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 76,
                    "end": 84
                  }
                ],
                "start": 74,
                "end": 86
              },
              "start": 72,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 87
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "third",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
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
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 103
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 105,
                          "end": 109
                        },
                        "start": 105,
                        "end": 109
                      },
                      "start": 103,
                      "end": 109
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 101,
                    "end": 109
                  }
                ],
                "start": 99,
                "end": 111
              },
              "start": 97,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 112
          }
        ],
        "start": 35,
        "end": 114
      },
      "declare": false,
      "start": 22,
      "end": 114
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 126
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
              "type": "Identifier",
              "decorators": [],
              "name": "entries",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Types",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 161
                    },
                    "typeArguments": null,
                    "start": 156,
                    "end": 161
                  },
                  "start": 150,
                  "end": 161
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 170
                      },
                      "typeArguments": null,
                      "start": 165,
                      "end": 170
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 171,
                      "end": 172
                    },
                    "start": 165,
                    "end": 173
                  },
                  "start": 165,
                  "end": 175
                },
                "optional": true,
                "readonly": null,
                "start": 142,
                "end": 177
              },
              "start": 140,
              "end": 177
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
            "start": 133,
            "end": 178
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
              "start": 184,
              "end": 195
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 208,
                          "end": 212
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entries",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 220
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 220
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 223,
                        "end": 225
                      },
                      "start": 208,
                      "end": 225
                    },
                    "directive": null,
                    "start": 208,
                    "end": 226
                  }
                ],
                "start": 198,
                "end": 232
              },
              "expression": false,
              "start": 195,
              "end": 232
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 184,
            "end": 232
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addEntry",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 246
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 247,
                      "end": 248
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 268
                        },
                        "typeArguments": null,
                        "start": 263,
                        "end": 268
                      },
                      "start": 257,
                      "end": 268
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 247,
                    "end": 268
                  }
                ],
                "start": 246,
                "end": 269
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
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
                        "start": 276,
                        "end": 277
                      },
                      "typeArguments": null,
                      "start": 276,
                      "end": 277
                    },
                    "start": 274,
                    "end": 277
                  },
                  "start": 270,
                  "end": 277
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 286,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 286,
                        "end": 291
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 293
                        },
                        "typeArguments": null,
                        "start": 292,
                        "end": 293
                      },
                      "start": 286,
                      "end": 294
                    },
                    "start": 284,
                    "end": 294
                  },
                  "start": 279,
                  "end": 294
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 311,
                            "end": 315
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entries",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 316,
                            "end": 323
                          },
                          "optional": false,
                          "computed": false,
                          "start": 311,
                          "end": 323
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 324,
                          "end": 328
                        },
                        "optional": false,
                        "computed": true,
                        "start": 311,
                        "end": 329
                      },
                      "prefix": true,
                      "start": 310,
                      "end": 329
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 345,
                                  "end": 349
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entries",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 350,
                                  "end": 357
                                },
                                "optional": false,
                                "computed": false,
                                "start": 345,
                                "end": 357
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 358,
                                "end": 362
                              },
                              "optional": false,
                              "computed": true,
                              "start": 345,
                              "end": 363
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 366,
                              "end": 368
                            },
                            "start": 345,
                            "end": 368
                          },
                          "directive": null,
                          "start": 345,
                          "end": 369
                        }
                      ],
                      "start": 331,
                      "end": 379
                    },
                    "alternate": null,
                    "start": 306,
                    "end": 379
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 388,
                                "end": 392
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entries",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 393,
                                "end": 400
                              },
                              "optional": false,
                              "computed": false,
                              "start": 388,
                              "end": 400
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 405
                            },
                            "optional": false,
                            "computed": true,
                            "start": 388,
                            "end": 406
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "push",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 412
                          },
                          "optional": true,
                          "computed": false,
                          "start": 388,
                          "end": 412
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 413,
                            "end": 418
                          }
                        ],
                        "optional": false,
                        "start": 388,
                        "end": 419
                      },
                      "start": 388,
                      "end": 419
                    },
                    "directive": null,
                    "start": 388,
                    "end": 420
                  }
                ],
                "start": 296,
                "end": 426
              },
              "expression": false,
              "start": 246,
              "end": 426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 426
          }
        ],
        "start": 127,
        "end": 428
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 428
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypesMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 465
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 475,
              "end": 476
            },
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
                      "start": 481,
                      "end": 484
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "'bar'",
                          "start": 486,
                          "end": 491
                        },
                        "start": 486,
                        "end": 491
                      },
                      "start": 484,
                      "end": 491
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 481,
                    "end": 492
                  }
                ],
                "start": 479,
                "end": 494
              },
              "start": 477,
              "end": 494
            },
            "accessibility": null,
            "static": false,
            "start": 474,
            "end": 495
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 501,
              "end": 502
            },
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 508
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 510,
                          "end": 513
                        },
                        "start": 510,
                        "end": 513
                      },
                      "start": 508,
                      "end": 513
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 507,
                    "end": 514
                  }
                ],
                "start": 505,
                "end": 516
              },
              "start": 503,
              "end": 516
            },
            "accessibility": null,
            "static": false,
            "start": 500,
            "end": 517
          }
        ],
        "start": 468,
        "end": 519
      },
      "declare": false,
      "start": 452,
      "end": 520
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 528
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
              "start": 529,
              "end": 530
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypesMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 545,
                  "end": 553
                },
                "typeArguments": null,
                "start": 545,
                "end": 553
              },
              "start": 539,
              "end": 553
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 529,
            "end": 553
          }
        ],
        "start": 528,
        "end": 554
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 560
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
                      "start": 562,
                      "end": 563
                    },
                    "typeArguments": null,
                    "start": 562,
                    "end": 563
                  },
                  "start": 560,
                  "end": 563
                },
                "accessibility": null,
                "static": false,
                "start": 559,
                "end": 564
              }
            ],
            "start": 557,
            "end": 566
          },
          {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypesMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 577
              },
              "typeArguments": null,
              "start": 569,
              "end": 577
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 579
              },
              "typeArguments": null,
              "start": 578,
              "end": 579
            },
            "start": 569,
            "end": 580
          }
        ],
        "start": 557,
        "end": 580
      },
      "declare": false,
      "start": 522,
      "end": 581
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeHandlers",
        "optional": false,
        "typeAnnotation": null,
        "start": 588,
        "end": 600
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 611
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypesMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 629
            },
            "typeArguments": null,
            "start": 621,
            "end": 629
          },
          "start": 615,
          "end": 629
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 638
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
                          "start": 639,
                          "end": 640
                        },
                        "typeArguments": null,
                        "start": 639,
                        "end": 640
                      }
                    ],
                    "start": 638,
                    "end": 641
                  },
                  "start": 637,
                  "end": 641
                },
                "start": 635,
                "end": 641
              },
              "start": 634,
              "end": 641
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 646,
              "end": 650
            },
            "start": 643,
            "end": 650
          },
          "start": 633,
          "end": 650
        },
        "optional": true,
        "readonly": null,
        "start": 603,
        "end": 653
      },
      "declare": false,
      "start": 583,
      "end": 654
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
            "name": "typeHandlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeHandlers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 688
                },
                "typeArguments": null,
                "start": 676,
                "end": 688
              },
              "start": 674,
              "end": 688
            },
            "start": 662,
            "end": 688
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 698,
                  "end": 699
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 704
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 716
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 720
                      },
                      "optional": false,
                      "computed": false,
                      "start": 709,
                      "end": 720
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 721,
                          "end": 722
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 723,
                          "end": 726
                        },
                        "optional": false,
                        "computed": false,
                        "start": 721,
                        "end": 726
                      }
                    ],
                    "optional": false,
                    "start": 709,
                    "end": 727
                  },
                  "id": null,
                  "generator": false,
                  "start": 702,
                  "end": 727
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 697,
                "end": 727
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 734,
                  "end": 735
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 740
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 745,
                        "end": 752
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 753,
                        "end": 756
                      },
                      "optional": false,
                      "computed": false,
                      "start": 745,
                      "end": 756
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 757,
                          "end": 758
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 759,
                          "end": 760
                        },
                        "optional": false,
                        "computed": false,
                        "start": 757,
                        "end": 760
                      }
                    ],
                    "optional": false,
                    "start": 745,
                    "end": 761
                  },
                  "id": null,
                  "generator": false,
                  "start": 738,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 733,
                "end": 761
              }
            ],
            "start": 691,
            "end": 764
          },
          "definite": false,
          "start": 662,
          "end": 764
        }
      ],
      "declare": false,
      "start": 656,
      "end": 765
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
            "name": "onSomeEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 784
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
                    "start": 788,
                    "end": 789
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypesMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 804,
                        "end": 812
                      },
                      "typeArguments": null,
                      "start": 804,
                      "end": 812
                    },
                    "start": 798,
                    "end": 812
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 788,
                  "end": 812
                }
              ],
              "start": 787,
              "end": 813
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 818
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
                            "start": 819,
                            "end": 820
                          },
                          "typeArguments": null,
                          "start": 819,
                          "end": 820
                        }
                      ],
                      "start": 818,
                      "end": 821
                    },
                    "start": 817,
                    "end": 821
                  },
                  "start": 815,
                  "end": 821
                },
                "start": 814,
                "end": 821
              }
            ],
            "returnType": null,
            "body": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "typeHandlers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 842
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 844
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 845,
                      "end": 846
                    },
                    "optional": false,
                    "computed": false,
                    "start": 843,
                    "end": 846
                  },
                  "optional": false,
                  "computed": true,
                  "start": 830,
                  "end": 847
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 850,
                    "end": 851
                  }
                ],
                "optional": true,
                "start": 830,
                "end": 852
              },
              "start": 830,
              "end": 852
            },
            "id": null,
            "generator": false,
            "start": 787,
            "end": 852
          },
          "definite": false,
          "start": 773,
          "end": 852
        }
      ],
      "declare": false,
      "start": 767,
      "end": 853
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 853
}
```
