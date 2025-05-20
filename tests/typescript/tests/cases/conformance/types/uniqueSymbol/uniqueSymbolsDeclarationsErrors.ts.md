__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1215,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 30,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 17,
                "end": 30,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 24,
                  "end": 30
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 85,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 67,
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 69,
                "end": 82,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 76,
                  "end": 82
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 294,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 137,
        "end": 294,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 293,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 149,
              "end": 293,
              "properties": [
                {
                  "type": "Property",
                  "start": 155,
                  "end": 211,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 162,
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 162,
                    "end": 211,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 186,
                      "end": 211,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 196,
                          "end": 205,
                          "argument": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 204,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 163,
                        "end": 174,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 174,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 166,
                            "end": 174,
                            "exprName": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 174,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 177,
                        "end": 185,
                        "exprName": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 185,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 217,
                  "end": 291,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 224,
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 224,
                    "end": 291,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 266,
                      "end": 291,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 276,
                          "end": 285,
                          "argument": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 284,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 225,
                        "end": 245,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 226,
                          "end": 245,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 228,
                            "end": 245,
                            "indexType": {
                              "type": "TSLiteralType",
                              "start": 230,
                              "end": 244,
                              "literal": {
                                "type": "Literal",
                                "start": 230,
                                "end": 244,
                                "raw": "\"readonlyType\"",
                                "value": "readonlyType"
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 228,
                              "end": 229,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 228,
                                "end": 229,
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 265,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 248,
                        "end": 265,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 250,
                          "end": 264,
                          "literal": {
                            "type": "Literal",
                            "start": 250,
                            "end": 264,
                            "raw": "\"readonlyType\"",
                            "value": "readonlyType"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 248,
                          "end": 249,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 249,
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 296,
      "end": 477,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 303,
        "end": 477,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 309,
            "end": 476,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 324,
              "decorators": [],
              "name": "classExpression",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ClassExpression",
              "start": 327,
              "end": 476,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 333,
                "end": 476,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 339,
                    "end": 395,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 346,
                      "decorators": [],
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 346,
                      "end": 395,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 370,
                        "end": 395,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 380,
                            "end": 389,
                            "argument": {
                              "type": "Identifier",
                              "start": 387,
                              "end": 388,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 347,
                          "end": 358,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 348,
                            "end": 358,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 350,
                              "end": 358,
                              "exprName": {
                                "type": "Identifier",
                                "start": 357,
                                "end": 358,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 359,
                        "end": 369,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 361,
                          "end": 369,
                          "exprName": {
                            "type": "Identifier",
                            "start": 368,
                            "end": 369,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 400,
                    "end": 474,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 407,
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 407,
                      "end": 474,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 449,
                        "end": 474,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 459,
                            "end": 468,
                            "argument": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 467,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 408,
                          "end": 428,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 409,
                            "end": 428,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 411,
                              "end": 428,
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 413,
                                "end": 427,
                                "literal": {
                                  "type": "Literal",
                                  "start": 413,
                                  "end": 427,
                                  "raw": "\"readonlyType\"",
                                  "value": "readonlyType"
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 411,
                                "end": 412,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 411,
                                  "end": 412,
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 429,
                        "end": 448,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 431,
                          "end": 448,
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 433,
                            "end": 447,
                            "literal": {
                              "type": "Literal",
                              "start": 433,
                              "end": 447,
                              "raw": "\"readonlyType\"",
                              "value": "readonlyType"
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 431,
                            "end": 432,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 431,
                              "end": 432,
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 479,
      "end": 573,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 486,
        "end": 573,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 554,
          "end": 573,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 560,
              "end": 571,
              "argument": {
                "type": "Identifier",
                "start": 567,
                "end": 570,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 495,
          "end": 517,
          "decorators": [],
          "name": "funcInferredReturnType",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 518,
            "end": 552,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 552,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 523,
                "end": 552,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 525,
                    "end": 550,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 532,
                        "end": 543,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 533,
                          "end": 543,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 535,
                            "end": 543,
                            "exprName": {
                              "type": "Identifier",
                              "start": 542,
                              "end": 543,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 550,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 546,
                        "end": 550
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 575,
      "end": 645,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 582,
        "end": 645,
        "body": {
          "type": "TSInterfaceBody",
          "start": 628,
          "end": 645,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 634,
              "end": 643,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 635,
                "end": 636,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 637,
                "end": 642,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 639,
                  "end": 642
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 592,
          "end": 627,
          "decorators": [],
          "name": "InterfaceWithPrivateNamedProperties",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 647,
      "end": 716,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 654,
        "end": 716,
        "body": {
          "type": "TSInterfaceBody",
          "start": 697,
          "end": 716,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 703,
              "end": 714,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 708,
                "end": 713,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 710,
                  "end": 713
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 664,
          "end": 696,
          "decorators": [],
          "name": "InterfaceWithPrivateNamedMethods",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 718,
      "end": 787,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 725,
        "end": 787,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 730,
          "end": 767,
          "decorators": [],
          "name": "TypeLiteralWithPrivateNamedProperties",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 770,
          "end": 787,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 776,
              "end": 785,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 777,
                "end": 778,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 779,
                "end": 784,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 781,
                  "end": 784
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 789,
      "end": 857,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 796,
        "end": 857,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 801,
          "end": 835,
          "decorators": [],
          "name": "TypeLiteralWithPrivateNamedMethods",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 838,
          "end": 857,
          "members": [
            {
              "type": "TSMethodSignature",
              "start": 844,
              "end": 855,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 849,
                "end": 854,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 851,
                  "end": 854
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 859,
      "end": 942,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 866,
        "end": 942,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 904,
          "end": 942,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 910,
              "end": 919,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 913,
                "end": 918,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 915,
                  "end": 918
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 924,
              "end": 940,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 934,
                "end": 939,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 936,
                  "end": 939
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 872,
          "end": 903,
          "decorators": [],
          "name": "ClassWithPrivateNamedProperties",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 944,
      "end": 1022,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 951,
        "end": 1022,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 986,
          "end": 1022,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 992,
              "end": 1000,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 993,
                "end": 994,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 995,
                "end": 1000,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 998,
                  "end": 1000,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1005,
              "end": 1020,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1015,
                "end": 1020,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1018,
                  "end": 1020,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 957,
          "end": 985,
          "decorators": [],
          "name": "ClassWithPrivateNamedMethods",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1024,
      "end": 1215,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1031,
        "end": 1215,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 1068,
          "end": 1215,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1074,
              "end": 1110,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1079,
                "end": 1080,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1081,
                "end": 1110,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1089,
                  "end": 1110,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1091,
                      "end": 1108,
                      "argument": {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1107,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1083,
                  "end": 1088,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1085,
                    "end": 1088
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1115,
              "end": 1134,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1120,
                "end": 1121,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1122,
                "end": 1134,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1131,
                  "end": 1134,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1123,
                    "end": 1129,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1124,
                      "end": 1129,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1126,
                        "end": 1129
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1139,
              "end": 1182,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1151,
                "end": 1152,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1153,
                "end": 1182,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1161,
                  "end": 1182,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1163,
                      "end": 1180,
                      "argument": {
                        "type": "Identifier",
                        "start": 1170,
                        "end": 1179,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1155,
                  "end": 1160,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1157,
                    "end": 1160
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1187,
              "end": 1213,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1199,
                "end": 1200,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1201,
                "end": 1213,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1210,
                  "end": 1213,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1202,
                    "end": 1208,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1203,
                      "end": 1208,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1205,
                        "end": 1208
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1037,
          "end": 1067,
          "decorators": [],
          "name": "ClassWithPrivateNamedAccessors",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
