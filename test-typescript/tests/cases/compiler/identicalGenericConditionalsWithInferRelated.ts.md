__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 808,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 14,
          "end": 20,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 20,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 20,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "X",
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
        "start": 22,
        "end": 260,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 28,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "name": "Cond1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 41,
              "end": 72,
              "checkType": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTupleType",
                "start": 51,
                "end": 60,
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "start": 52,
                    "end": 59,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 58,
                      "end": 59,
                      "name": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                ]
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 67,
                "end": 72
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 78,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 88,
              "name": "Cond2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 91,
              "end": 122,
              "checkType": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTupleType",
                "start": 101,
                "end": 110,
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "start": 102,
                    "end": 109,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 108,
                      "end": 109,
                      "name": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                ]
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 117,
                "end": 122
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 129,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 133,
                "end": 155,
                "id": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 141,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 141,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 141,
                        "name": "Cond1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 144,
                  "end": 155,
                  "expression": {
                    "type": "Literal",
                    "start": 144,
                    "end": 148,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 152,
                    "end": 155
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 161,
            "end": 188,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 165,
                "end": 187,
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 173,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 173,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 173,
                        "name": "Cond2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 176,
                  "end": 187,
                  "expression": {
                    "type": "Literal",
                    "start": 176,
                    "end": 180,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 184,
                    "end": 187
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 193,
            "end": 199,
            "expression": {
              "type": "AssignmentExpression",
              "start": 193,
              "end": 198,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 197,
                "end": 198,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 234,
            "expression": {
              "type": "AssignmentExpression",
              "start": 228,
              "end": 233,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 329,
      "end": 383,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 336,
        "end": 383,
        "id": {
          "type": "Identifier",
          "start": 341,
          "end": 352,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 352,
          "end": 355,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 353,
              "end": 354,
              "name": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 358,
          "end": 383,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 363,
              "end": 377,
              "argument": {
                "type": "Identifier",
                "start": 366,
                "end": 370,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 370,
                "end": 377,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 372,
                  "end": 377,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 372,
                    "end": 375
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 383,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
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
      "start": 384,
      "end": 517,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 391,
        "end": 517,
        "id": {
          "type": "Identifier",
          "start": 396,
          "end": 408,
          "name": "MappedResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 408,
          "end": 411,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 409,
              "end": 410,
              "name": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 418,
          "end": 517,
          "checkType": {
            "type": "TSTypeReference",
            "start": 418,
            "end": 419,
            "typeName": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 428,
            "end": 435,
            "typeName": {
              "type": "Identifier",
              "start": 428,
              "end": 435,
              "name": "Boolean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 438,
            "end": 445
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 452,
            "end": 517,
            "checkType": {
              "type": "TSTypeReference",
              "start": 452,
              "end": 453,
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 453,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 462,
              "end": 468,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 468,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSNumberKeyword",
              "start": 471,
              "end": 477
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 484,
              "end": 517,
              "checkType": {
                "type": "TSTypeReference",
                "start": 484,
                "end": 485,
                "typeName": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 494,
                "end": 500,
                "typeName": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 500,
                  "name": "String",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 503,
                "end": 509
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 516,
                "end": 517,
                "typeName": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 517,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 520,
      "end": 641,
      "id": {
        "type": "Identifier",
        "start": 530,
        "end": 531,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 532,
        "end": 641,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 538,
            "end": 639,
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 544,
              "name": "decode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 544,
              "end": 572,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 545,
                  "end": 571,
                  "name": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 546,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 555,
                    "end": 571,
                    "typeName": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 566,
                      "name": "Constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 566,
                      "end": 571,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 567,
                          "end": 570
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 573,
                "end": 580,
                "name": "ctor",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 577,
                  "end": 580,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 579,
                    "end": 580,
                    "typeName": {
                      "type": "Identifier",
                      "start": 579,
                      "end": 580,
                      "name": "C",
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
              "start": 581,
              "end": 639,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 583,
                "end": 639,
                "typeName": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 595,
                  "name": "MappedResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 595,
                  "end": 639,
                  "params": [
                    {
                      "type": "TSConditionalType",
                      "start": 596,
                      "end": 638,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 596,
                        "end": 597,
                        "typeName": {
                          "type": "Identifier",
                          "start": 596,
                          "end": 597,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "start": 606,
                        "end": 626,
                        "typeName": {
                          "type": "Identifier",
                          "start": 606,
                          "end": 617,
                          "name": "Constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 617,
                          "end": 626,
                          "params": [
                            {
                              "type": "TSInferType",
                              "start": 618,
                              "end": 625,
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "start": 624,
                                "end": 625,
                                "name": {
                                  "type": "Identifier",
                                  "start": 624,
                                  "end": 625,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            }
                          ]
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 629,
                        "end": 630,
                        "typeName": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 633,
                        "end": 638
                      }
                    }
                  ]
                }
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
    {
      "type": "ClassDeclaration",
      "start": 643,
      "end": 807,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 650,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 664,
        "end": 807,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 670,
            "end": 805,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 670,
              "end": 676,
              "name": "decode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 676,
              "end": 805,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 705,
                  "end": 712,
                  "name": "ctor",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 709,
                    "end": 712,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 711,
                      "end": 712,
                      "typeName": {
                        "type": "Identifier",
                        "start": 711,
                        "end": 712,
                        "name": "C",
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
                "start": 772,
                "end": 805,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 782,
                    "end": 799,
                    "argument": {
                      "type": "NewExpression",
                      "start": 788,
                      "end": 799,
                      "callee": {
                        "type": "Identifier",
                        "start": 792,
                        "end": 797,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 676,
                "end": 704,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 677,
                    "end": 703,
                    "name": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 678,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 687,
                      "end": 703,
                      "typeName": {
                        "type": "Identifier",
                        "start": 687,
                        "end": 698,
                        "name": "Constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 698,
                        "end": 703,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 699,
                            "end": 702
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 713,
                "end": 771,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 715,
                  "end": 771,
                  "typeName": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 727,
                    "name": "MappedResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 727,
                    "end": 771,
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "start": 728,
                        "end": 770,
                        "checkType": {
                          "type": "TSTypeReference",
                          "start": 728,
                          "end": 729,
                          "typeName": {
                            "type": "Identifier",
                            "start": 728,
                            "end": 729,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "extendsType": {
                          "type": "TSTypeReference",
                          "start": 738,
                          "end": 758,
                          "typeName": {
                            "type": "Identifier",
                            "start": 738,
                            "end": 749,
                            "name": "Constructor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 749,
                            "end": 758,
                            "params": [
                              {
                                "type": "TSInferType",
                                "start": 750,
                                "end": 757,
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "start": 756,
                                  "end": 757,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 756,
                                    "end": 757,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              }
                            ]
                          }
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "start": 761,
                          "end": 762,
                          "typeName": {
                            "type": "Identifier",
                            "start": 761,
                            "end": 762,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 765,
                          "end": 770
                        }
                      }
                    ]
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 662,
          "end": 663,
          "expression": {
            "type": "Identifier",
            "start": 662,
            "end": 663,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
