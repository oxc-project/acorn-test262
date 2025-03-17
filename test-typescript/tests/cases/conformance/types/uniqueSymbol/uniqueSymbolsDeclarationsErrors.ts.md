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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 30,
            "name": "s",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 67,
              "name": "readonlyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 294,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 137,
        "end": 294,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 293,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 162,
                    "name": "method1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 162,
                    "end": 211,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 163,
                        "end": 174,
                        "name": "p",
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
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
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
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 217,
                  "end": 291,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 224,
                    "name": "method2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 224,
                    "end": 291,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 225,
                        "end": 245,
                        "name": "p",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 226,
                          "end": 245,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 228,
                            "end": 245,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 228,
                              "end": 229,
                              "typeName": {
                                "type": "Identifier",
                                "start": 228,
                                "end": 229,
                                "name": "I",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "start": 230,
                              "end": 244,
                              "literal": {
                                "type": "Literal",
                                "start": 230,
                                "end": 244,
                                "value": "readonlyType",
                                "raw": "\"readonlyType\""
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 265,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 248,
                        "end": 265,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 248,
                          "end": 249,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 249,
                            "name": "I",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 250,
                          "end": 264,
                          "literal": {
                            "type": "Literal",
                            "start": 250,
                            "end": 264,
                            "value": "readonlyType",
                            "raw": "\"readonlyType\""
                          }
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 296,
      "end": 477,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 303,
        "end": 477,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 309,
            "end": 476,
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 324,
              "name": "classExpression",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ClassExpression",
              "start": 327,
              "end": 476,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 333,
                "end": 476,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 339,
                    "end": 395,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 346,
                      "name": "method1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 346,
                      "end": 395,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 347,
                          "end": 358,
                          "name": "p",
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
                                "name": "s",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 400,
                    "end": 474,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 407,
                      "name": "method2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 407,
                      "end": 474,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 408,
                          "end": 428,
                          "name": "p",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 409,
                            "end": 428,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 411,
                              "end": 428,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 411,
                                "end": 412,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 411,
                                  "end": 412,
                                  "name": "I",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 413,
                                "end": 427,
                                "literal": {
                                  "type": "Literal",
                                  "start": 413,
                                  "end": 427,
                                  "value": "readonlyType",
                                  "raw": "\"readonlyType\""
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 429,
                        "end": 448,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 431,
                          "end": 448,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 431,
                            "end": 432,
                            "typeName": {
                              "type": "Identifier",
                              "start": 431,
                              "end": 432,
                              "name": "I",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 433,
                            "end": 447,
                            "literal": {
                              "type": "Literal",
                              "start": 433,
                              "end": 447,
                              "value": "readonlyType",
                              "raw": "\"readonlyType\""
                            }
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 479,
      "end": 573,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 486,
        "end": 573,
        "id": {
          "type": "Identifier",
          "start": 495,
          "end": 517,
          "name": "funcInferredReturnType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 518,
            "end": 552,
            "name": "obj",
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
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 532,
                        "end": 543,
                        "name": "p",
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
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 575,
      "end": 645,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 582,
        "end": 645,
        "id": {
          "type": "Identifier",
          "start": 592,
          "end": 627,
          "name": "InterfaceWithPrivateNamedProperties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 628,
          "end": 645,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 634,
              "end": 643,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 635,
                "end": 636,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 637,
                "end": 642,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 639,
                  "end": 642
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 647,
      "end": 716,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 654,
        "end": 716,
        "id": {
          "type": "Identifier",
          "start": 664,
          "end": 696,
          "name": "InterfaceWithPrivateNamedMethods",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 697,
          "end": 716,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 703,
              "end": 714,
              "key": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
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
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 718,
      "end": 787,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 725,
        "end": 787,
        "id": {
          "type": "Identifier",
          "start": 730,
          "end": 767,
          "name": "TypeLiteralWithPrivateNamedProperties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 770,
          "end": 787,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 776,
              "end": 785,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 777,
                "end": 778,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 779,
                "end": 784,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 781,
                  "end": 784
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 789,
      "end": 857,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 796,
        "end": 857,
        "id": {
          "type": "Identifier",
          "start": 801,
          "end": 835,
          "name": "TypeLiteralWithPrivateNamedMethods",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 838,
          "end": 857,
          "members": [
            {
              "type": "TSMethodSignature",
              "start": 844,
              "end": 855,
              "key": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
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
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 859,
      "end": 942,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 866,
        "end": 942,
        "id": {
          "type": "Identifier",
          "start": 872,
          "end": 903,
          "name": "ClassWithPrivateNamedProperties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 904,
          "end": 942,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 910,
              "end": 919,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 924,
              "end": 940,
              "static": true,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 944,
      "end": 1022,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 951,
        "end": 1022,
        "id": {
          "type": "Identifier",
          "start": 957,
          "end": 985,
          "name": "ClassWithPrivateNamedMethods",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 986,
          "end": 1022,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 992,
              "end": 1000,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 993,
                "end": 994,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 995,
                "end": 1000,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 998,
                  "end": 1000,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1005,
              "end": 1020,
              "static": true,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1015,
                "end": 1020,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1018,
                  "end": 1020,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1024,
      "end": 1215,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1031,
        "end": 1215,
        "id": {
          "type": "Identifier",
          "start": 1037,
          "end": 1067,
          "name": "ClassWithPrivateNamedAccessors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 1068,
          "end": 1215,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1074,
              "end": 1110,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1079,
                "end": 1080,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1081,
                "end": 1110,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1083,
                  "end": 1088,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1085,
                    "end": 1088
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1115,
              "end": 1134,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1120,
                "end": 1121,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 1122,
                "end": 1134,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1123,
                    "end": 1129,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1124,
                      "end": 1129,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1126,
                        "end": 1129
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1131,
                  "end": 1134,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1139,
              "end": 1182,
              "static": true,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1151,
                "end": 1152,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1153,
                "end": 1182,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1155,
                  "end": 1160,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1157,
                    "end": 1160
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1187,
              "end": 1213,
              "static": true,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 1199,
                "end": 1200,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 1201,
                "end": 1213,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1202,
                    "end": 1208,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1203,
                      "end": 1208,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1205,
                        "end": 1208
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1210,
                  "end": 1213,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
