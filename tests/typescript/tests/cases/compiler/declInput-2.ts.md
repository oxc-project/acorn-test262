__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 26,
              "end": 29
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 29
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 49,
                "end": 51
              },
              "abstract": false,
              "declare": false,
              "start": 41,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 34,
            "end": 51
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 75
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 76,
                "end": 78
              },
              "declare": false,
              "start": 63,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 56,
            "end": 78
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 96,
              "end": 98
            },
            "declare": false,
            "start": 83,
            "end": 98
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 137
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 140
                        },
                        "typeArguments": null,
                        "start": 139,
                        "end": 140
                      },
                      "start": 137,
                      "end": 140
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 128,
                    "end": 141
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 177
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 179,
                        "end": 185
                      },
                      "start": 177,
                      "end": 185
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 168,
                    "end": 186
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 204
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 206,
                        "end": 212
                      },
                      "start": 204,
                      "end": 212
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 195,
                    "end": 213
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m22",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 232
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 235
                        },
                        "typeArguments": null,
                        "start": 234,
                        "end": 235
                      },
                      "start": 232,
                      "end": 235
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 222,
                    "end": 236
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 273
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 276
                        },
                        "typeArguments": null,
                        "start": 275,
                        "end": 276
                      },
                      "start": 273,
                      "end": 276
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 263,
                    "end": 277
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m24",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 296
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 300
                        },
                        "typeArguments": null,
                        "start": 298,
                        "end": 300
                      },
                      "start": 296,
                      "end": 300
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 286,
                    "end": 301
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m25",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 320
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 324
                        },
                        "typeArguments": null,
                        "start": 322,
                        "end": 324
                      },
                      "start": 320,
                      "end": 324
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 310,
                    "end": 325
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m232",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 363
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 368
                          },
                          "typeArguments": null,
                          "start": 367,
                          "end": 368
                        },
                        "start": 365,
                        "end": 368
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 378,
                              "end": 382
                            },
                            "start": 371,
                            "end": 383
                          }
                        ],
                        "start": 369,
                        "end": 384
                      },
                      "expression": false,
                      "start": 363,
                      "end": 384
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 352,
                    "end": 384
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m242",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 404
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 410
                          },
                          "typeArguments": null,
                          "start": 408,
                          "end": 410
                        },
                        "start": 406,
                        "end": 410
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 420,
                              "end": 424
                            },
                            "start": 413,
                            "end": 425
                          }
                        ],
                        "start": 411,
                        "end": 427
                      },
                      "expression": false,
                      "start": 404,
                      "end": 427
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 393,
                    "end": 427
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m252",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 447
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 451,
                            "end": 453
                          },
                          "typeArguments": null,
                          "start": 451,
                          "end": 453
                        },
                        "start": 449,
                        "end": 453
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 463,
                              "end": 467
                            },
                            "start": 456,
                            "end": 468
                          }
                        ],
                        "start": 454,
                        "end": 470
                      },
                      "expression": false,
                      "start": 447,
                      "end": 470
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 436,
                    "end": 470
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 504,
                      "end": 507
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 510,
                                "end": 512
                              },
                              "typeArguments": null,
                              "start": 510,
                              "end": 512
                            },
                            "start": 509,
                            "end": 512
                          },
                          "start": 508,
                          "end": 512
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 514,
                        "end": 516
                      },
                      "expression": false,
                      "start": 507,
                      "end": 516
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 497,
                    "end": 516
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m262",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 536
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 539,
                                "end": 541
                              },
                              "typeArguments": null,
                              "start": 539,
                              "end": 541
                            },
                            "start": 538,
                            "end": 541
                          },
                          "start": 537,
                          "end": 541
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 543,
                        "end": 545
                      },
                      "expression": false,
                      "start": 536,
                      "end": 545
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 525,
                    "end": 545
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 563
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 567
                          },
                          "typeArguments": null,
                          "start": 566,
                          "end": 567
                        },
                        "start": 565,
                        "end": 567
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 581,
                                "end": 582
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 577,
                              "end": 584
                            },
                            "start": 570,
                            "end": 585
                          }
                        ],
                        "start": 568,
                        "end": 587
                      },
                      "expression": false,
                      "start": 563,
                      "end": 587
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 554,
                    "end": 587
                  }
                ],
                "start": 118,
                "end": 593
              },
              "abstract": false,
              "declare": false,
              "start": 110,
              "end": 593
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 103,
            "end": 593
          }
        ],
        "start": 12,
        "end": 595
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 595
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 595
}
```
