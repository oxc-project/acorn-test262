__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "typeArguments": null,
              "start": 19,
              "end": 20
            },
            "start": 17,
            "end": 20
          },
          "start": 14,
          "end": 20
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "typeArguments": null,
                "start": 41,
                "end": 42
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 59
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 58,
                      "end": 59
                    },
                    "start": 52,
                    "end": 59
                  }
                ],
                "start": 51,
                "end": 60
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 67,
                "end": 72
              },
              "start": 41,
              "end": 72
            },
            "declare": false,
            "start": 28,
            "end": 73
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 88
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 109
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 108,
                      "end": 109
                    },
                    "start": 102,
                    "end": 109
                  }
                ],
                "start": 101,
                "end": 110
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 117,
                "end": 122
              },
              "start": 91,
              "end": 122
            },
            "declare": false,
            "start": 78,
            "end": 123
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cond1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 141
                      },
                      "typeArguments": null,
                      "start": 136,
                      "end": 141
                    },
                    "start": 134,
                    "end": 141
                  },
                  "start": 133,
                  "end": 141
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 144,
                    "end": 148
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 152,
                    "end": 155
                  },
                  "start": 144,
                  "end": 155
                },
                "definite": false,
                "start": 133,
                "end": 155
              }
            ],
            "declare": false,
            "start": 129,
            "end": 156
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cond2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 173
                    },
                    "start": 166,
                    "end": 173
                  },
                  "start": 165,
                  "end": 173
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 176,
                    "end": 180
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 184,
                    "end": 187
                  },
                  "start": 176,
                  "end": 187
                },
                "definite": false,
                "start": 165,
                "end": 187
              }
            ],
            "declare": false,
            "start": 161,
            "end": 188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "start": 193,
              "end": 198
            },
            "directive": null,
            "start": 193,
            "end": 199
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "start": 228,
              "end": 233
            },
            "directive": null,
            "start": 228,
            "end": 234
          }
        ],
        "start": 22,
        "end": 260
      },
      "expression": false,
      "start": 0,
      "end": 260
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 352
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
                "start": 353,
                "end": 354
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 353,
              "end": 354
            }
          ],
          "start": 352,
          "end": 355
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
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
                "start": 366,
                "end": 370
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 372,
                    "end": 375
                  },
                  "start": 372,
                  "end": 377
                },
                "start": 370,
                "end": 377
              },
              "value": null,
              "start": 363,
              "end": 377
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
                "start": 382,
                "end": 383
              },
              "typeArguments": null,
              "start": 382,
              "end": 383
            },
            "start": 379,
            "end": 383
          },
          "start": 358,
          "end": 383
        },
        "declare": false,
        "start": 336,
        "end": 383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 329,
      "end": 383
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MappedResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 408
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
                "start": 409,
                "end": 410
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 409,
              "end": 410
            }
          ],
          "start": 408,
          "end": 411
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 419
            },
            "typeArguments": null,
            "start": 418,
            "end": 419
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 435
            },
            "typeArguments": null,
            "start": 428,
            "end": 435
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 438,
            "end": 445
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 453
              },
              "typeArguments": null,
              "start": 452,
              "end": 453
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 468
              },
              "typeArguments": null,
              "start": 462,
              "end": 468
            },
            "trueType": {
              "type": "TSNumberKeyword",
              "start": 471,
              "end": 477
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 500
                },
                "typeArguments": null,
                "start": 494,
                "end": 500
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 503,
                "end": 509
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 517
                },
                "typeArguments": null,
                "start": 516,
                "end": 517
              },
              "start": 484,
              "end": 517
            },
            "start": 452,
            "end": 517
          },
          "start": 418,
          "end": 517
        },
        "declare": false,
        "start": 391,
        "end": 517
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 384,
      "end": 517
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 531
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
              "name": "decode",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 544
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 546
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 566
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 567,
                          "end": 570
                        }
                      ],
                      "start": 566,
                      "end": 571
                    },
                    "start": 555,
                    "end": 571
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 545,
                  "end": 571
                }
              ],
              "start": 544,
              "end": 572
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor",
                "optional": false,
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
                      "start": 579,
                      "end": 580
                    },
                    "typeArguments": null,
                    "start": 579,
                    "end": 580
                  },
                  "start": 577,
                  "end": 580
                },
                "start": 573,
                "end": 580
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 595
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 596,
                          "end": 597
                        },
                        "typeArguments": null,
                        "start": 596,
                        "end": 597
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 617
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 624,
                                  "end": 625
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 624,
                                "end": 625
                              },
                              "start": 618,
                              "end": 625
                            }
                          ],
                          "start": 617,
                          "end": 626
                        },
                        "start": 606,
                        "end": 626
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 630
                        },
                        "typeArguments": null,
                        "start": 629,
                        "end": 630
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 633,
                        "end": 638
                      },
                      "start": 596,
                      "end": 638
                    }
                  ],
                  "start": 595,
                  "end": 639
                },
                "start": 583,
                "end": 639
              },
              "start": 581,
              "end": 639
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 538,
            "end": 639
          }
        ],
        "start": 532,
        "end": 641
      },
      "declare": false,
      "start": 520,
      "end": 641
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 650
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 663
          },
          "typeArguments": null,
          "start": 662,
          "end": 663
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "decode",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 676
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 678
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 687,
                        "end": 698
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 699,
                            "end": 702
                          }
                        ],
                        "start": 698,
                        "end": 703
                      },
                      "start": 687,
                      "end": 703
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 677,
                    "end": 703
                  }
                ],
                "start": 676,
                "end": 704
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctor",
                  "optional": false,
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
                        "start": 711,
                        "end": 712
                      },
                      "typeArguments": null,
                      "start": 711,
                      "end": 712
                    },
                    "start": 709,
                    "end": 712
                  },
                  "start": 705,
                  "end": 712
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MappedResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 727
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 728,
                            "end": 729
                          },
                          "typeArguments": null,
                          "start": 728,
                          "end": 729
                        },
                        "extendsType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 738,
                            "end": 749
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 756,
                                    "end": 757
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 756,
                                  "end": 757
                                },
                                "start": 750,
                                "end": 757
                              }
                            ],
                            "start": 749,
                            "end": 758
                          },
                          "start": 738,
                          "end": 758
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 761,
                            "end": 762
                          },
                          "typeArguments": null,
                          "start": 761,
                          "end": 762
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 765,
                          "end": 770
                        },
                        "start": 728,
                        "end": 770
                      }
                    ],
                    "start": 727,
                    "end": 771
                  },
                  "start": 715,
                  "end": 771
                },
                "start": 713,
                "end": 771
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 797
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 788,
                      "end": 799
                    },
                    "start": 782,
                    "end": 799
                  }
                ],
                "start": 772,
                "end": 805
              },
              "expression": false,
              "start": 676,
              "end": 805
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 670,
            "end": 805
          }
        ],
        "start": 664,
        "end": 807
      },
      "abstract": false,
      "declare": false,
      "start": 643,
      "end": 807
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 807
}
```
