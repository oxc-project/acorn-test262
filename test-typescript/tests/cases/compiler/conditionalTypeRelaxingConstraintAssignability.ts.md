__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 782,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 65,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 22,
          "decorators": [],
          "name": "ElChildren",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 27,
          "end": 64,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 29,
              "end": 44,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 29,
                "end": 44,
                "left": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 39,
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "decorators": [],
                  "name": "Void",
                  "optional": false
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 49,
              "end": 64,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 49,
                "end": 64,
                "left": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 59,
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "Text",
                  "optional": false
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 158,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 73,
        "end": 158,
        "body": {
          "type": "TSModuleBlock",
          "start": 94,
          "end": 158,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 98,
              "end": 127,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 105,
                "end": 127,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "decorators": [],
                  "name": "Void",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 117,
                  "end": 126
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 130,
              "end": 156,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 137,
                "end": 156,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 146,
                  "decorators": [],
                  "name": "Text",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 149,
                  "end": 155
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 93,
          "decorators": [],
          "name": "ElChildren",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 160,
      "end": 243,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 170,
        "decorators": [],
        "name": "Relax",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 195,
        "end": 242,
        "checkType": {
          "type": "TSTypeReference",
          "start": 195,
          "end": 196,
          "typeName": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 205,
          "end": 220,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 205,
            "end": 220,
            "left": {
              "type": "Identifier",
              "start": 205,
              "end": 215,
              "decorators": [],
              "name": "ElChildren",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "decorators": [],
              "name": "Text",
              "optional": false
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 241,
          "end": 242,
          "typeName": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 223,
          "end": 238,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 223,
            "end": 238,
            "left": {
              "type": "Identifier",
              "start": 223,
              "end": 233,
              "decorators": [],
              "name": "ElChildren",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 234,
              "end": 238,
              "decorators": [],
              "name": "Text",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 170,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 191,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 191,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 191,
                "decorators": [],
                "name": "ElChildren",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 245,
      "end": 353,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 252,
        "end": 353,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 292,
          "end": 353,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 296,
              "end": 351,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 296,
                "end": 307,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 307,
                "end": 351,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 346,
                  "end": 351,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 313,
                    "end": 340,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 340,
                      "decorators": [],
                      "name": "children_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 330,
                        "end": 340,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 332,
                          "end": 340,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 337,
                            "end": 340,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 338,
                                "end": 339,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 338,
                                  "end": 339,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 337,
                            "decorators": [],
                            "name": "Relax",
                            "optional": false
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 258,
          "end": 262,
          "decorators": [],
          "name": "Elem",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 262,
          "end": 291,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 266,
              "end": 286,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 286,
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 394,
      "expression": {
        "type": "NewExpression",
        "start": 355,
        "end": 393,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 364,
            "end": 392,
            "expression": {
              "type": "Identifier",
              "start": 364,
              "end": 373,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 392,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 377,
                "end": 392,
                "left": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 387,
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "decorators": [],
                  "name": "Void",
                  "optional": false
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 359,
          "end": 363,
          "decorators": [],
          "name": "Elem",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 395,
      "end": 427,
      "expression": {
        "type": "NewExpression",
        "start": 395,
        "end": 426,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 404,
            "end": 425,
            "expression": {
              "type": "Literal",
              "start": 404,
              "end": 406,
              "raw": "''",
              "value": ""
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 425,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 410,
                "end": 425,
                "left": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 420,
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 425,
                  "decorators": [],
                  "name": "Text",
                  "optional": false
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 399,
          "end": 403,
          "decorators": [],
          "name": "Elem",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 478,
      "expression": {
        "type": "NewExpression",
        "start": 428,
        "end": 477,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 437,
            "end": 476,
            "expression": {
              "type": "Literal",
              "start": 437,
              "end": 439,
              "raw": "''",
              "value": ""
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 443,
              "end": 476,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 443,
                  "end": 458,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 443,
                    "end": 458,
                    "left": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 453,
                      "decorators": [],
                      "name": "ElChildren",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 458,
                      "decorators": [],
                      "name": "Void",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 461,
                  "end": 476,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 461,
                    "end": 476,
                    "left": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 471,
                      "decorators": [],
                      "name": "ElChildren",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 476,
                      "decorators": [],
                      "name": "Text",
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 432,
          "end": 436,
          "decorators": [],
          "name": "Elem",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 515,
      "expression": {
        "type": "NewExpression",
        "start": 488,
        "end": 514,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 497,
            "end": 513,
            "expression": {
              "type": "Literal",
              "start": 497,
              "end": 499,
              "raw": "''",
              "value": ""
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 503,
              "end": 513,
              "typeName": {
                "type": "Identifier",
                "start": 503,
                "end": 513,
                "decorators": [],
                "name": "ElChildren",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 492,
          "end": 496,
          "decorators": [],
          "name": "Elem",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 548,
      "end": 573,
      "body": {
        "type": "TSInterfaceBody",
        "start": 560,
        "end": 573,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 562,
            "end": 571,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 562,
              "end": 563,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 563,
              "end": 571,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 565,
                "end": 571
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 559,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 575,
      "end": 661,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 591,
        "decorators": [],
        "name": "DeepPartial",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 601,
        "end": 660,
        "checkType": {
          "type": "TSTypeReference",
          "start": 601,
          "end": 602,
          "typeName": {
            "type": "Identifier",
            "start": 601,
            "end": 602,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 611,
          "end": 617
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 659,
          "end": 660,
          "typeName": {
            "type": "Identifier",
            "start": 659,
            "end": 660,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 620,
          "end": 656,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 627,
            "end": 634,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 633,
              "end": 634,
              "typeName": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": null,
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 638,
            "end": 655,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 649,
              "end": 655,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 650,
                  "end": 654,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 653,
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 653,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 650,
                    "end": 651,
                    "typeName": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 651,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 638,
              "end": 649,
              "decorators": [],
              "name": "DeepPartial",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 591,
        "end": 594,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 593,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 663,
      "end": 719,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 681,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 685,
          "end": 689,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 686,
            "end": 689,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 688,
              "end": 689,
              "typeName": {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 691,
          "end": 714,
          "decorators": [],
          "name": "partial",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 698,
            "end": 714,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 700,
              "end": 714,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 711,
                "end": 714,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 712,
                    "end": 713,
                    "typeName": {
                      "type": "Identifier",
                      "start": 712,
                      "end": 713,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 700,
                "end": 711,
                "decorators": [],
                "name": "DeepPartial",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 715,
        "end": 718,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 717,
          "end": 718,
          "typeName": {
            "type": "Identifier",
            "start": 717,
            "end": 718,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 681,
        "end": 684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 682,
            "end": 683,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 781,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 758,
        "end": 781,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 762,
            "end": 779,
            "argument": {
              "type": "CallExpression",
              "start": 769,
              "end": 778,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 771,
                  "end": 773,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 731,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 737,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 734,
            "end": 737,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 736,
              "end": 737,
              "typeName": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 739,
          "end": 753,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 741,
            "end": 753,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 743,
              "end": 753,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 750,
                "end": 753,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 751,
                    "end": 752,
                    "typeName": {
                      "type": "Identifier",
                      "start": 751,
                      "end": 752,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 743,
                "end": 750,
                "decorators": [],
                "name": "Partial",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 754,
        "end": 757,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 756,
          "end": 757,
          "typeName": {
            "type": "Identifier",
            "start": 756,
            "end": 757,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
