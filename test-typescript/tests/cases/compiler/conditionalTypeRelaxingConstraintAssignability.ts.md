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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 22,
          "name": "ElChildren",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
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
                  "name": "ElChildren",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "name": "Void",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
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
                  "name": "ElChildren",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "name": "Text",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
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
      "start": 66,
      "end": 158,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 73,
        "end": 158,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 93,
          "name": "ElChildren",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 94,
          "end": 158,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 98,
              "end": 127,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 105,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "name": "Void",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 117,
                  "end": 126
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
              "start": 130,
              "end": 156,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 137,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 146,
                  "name": "Text",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 149,
                  "end": 155
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 160,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 170,
        "name": "Relax",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 191,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 191,
                "name": "ElChildren",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "name": "ElChildren",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "name": "Text",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
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
              "name": "ElChildren",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 234,
              "end": 238,
              "name": "Text",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 241,
          "end": 242,
          "typeName": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 245,
      "end": 353,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 252,
        "end": 353,
        "id": {
          "type": "Identifier",
          "start": 258,
          "end": 262,
          "name": "Elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 292,
          "end": 353,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 296,
              "end": 351,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 296,
                "end": 307,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 307,
                "end": 351,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "children_",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 330,
                        "end": 340,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 332,
                          "end": 340,
                          "typeName": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 337,
                            "name": "Relax",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "name": "C",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 346,
                  "end": 351,
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 262,
          "end": 291,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 266,
              "end": 286,
              "name": {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 286,
                  "name": "ElChildren",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
      "type": "ExpressionStatement",
      "start": 355,
      "end": 394,
      "expression": {
        "type": "NewExpression",
        "start": 355,
        "end": 393,
        "callee": {
          "type": "Identifier",
          "start": 359,
          "end": 363,
          "name": "Elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 364,
            "end": 392,
            "expression": {
              "type": "Identifier",
              "start": 364,
              "end": 373,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
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
                  "name": "ElChildren",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "name": "Void",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 395,
      "end": 427,
      "expression": {
        "type": "NewExpression",
        "start": 395,
        "end": 426,
        "callee": {
          "type": "Identifier",
          "start": 399,
          "end": 403,
          "name": "Elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 404,
            "end": 425,
            "expression": {
              "type": "Literal",
              "start": 404,
              "end": 406,
              "value": "",
              "raw": "''"
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
                  "name": "ElChildren",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 425,
                  "name": "Text",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 478,
      "expression": {
        "type": "NewExpression",
        "start": 428,
        "end": 477,
        "callee": {
          "type": "Identifier",
          "start": 432,
          "end": 436,
          "name": "Elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 437,
            "end": 476,
            "expression": {
              "type": "Literal",
              "start": 437,
              "end": 439,
              "value": "",
              "raw": "''"
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
                      "name": "ElChildren",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 458,
                      "name": "Void",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
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
                      "name": "ElChildren",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 476,
                      "name": "Text",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 515,
      "expression": {
        "type": "NewExpression",
        "start": 488,
        "end": 514,
        "callee": {
          "type": "Identifier",
          "start": 492,
          "end": 496,
          "name": "Elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 497,
            "end": 513,
            "expression": {
              "type": "Literal",
              "start": 497,
              "end": 499,
              "value": "",
              "raw": "''"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 503,
              "end": 513,
              "typeName": {
                "type": "Identifier",
                "start": 503,
                "end": 513,
                "name": "ElChildren",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 548,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 559,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 562,
              "end": 563,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 563,
              "end": 571,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 565,
                "end": 571
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
      "type": "TSTypeAliasDeclaration",
      "start": 575,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 591,
        "name": "DeepPartial",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 611,
          "end": 617
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 620,
          "end": 656,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 622,
            "end": 634,
            "name": {
              "type": "Identifier",
              "start": 622,
              "end": 623,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 638,
            "end": 655,
            "typeName": {
              "type": "Identifier",
              "start": 638,
              "end": 649,
              "name": "DeepPartial",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 649,
              "end": 655,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 650,
                  "end": 654,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 650,
                    "end": 651,
                    "typeName": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 651,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 653,
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 653,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": true,
          "readonly": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 659,
          "end": 660,
          "typeName": {
            "type": "Identifier",
            "start": 659,
            "end": 660,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 663,
      "end": 719,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 681,
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
          "start": 685,
          "end": 689,
          "name": "t",
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
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 691,
          "end": 714,
          "name": "partial",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 698,
            "end": 714,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 700,
              "end": 714,
              "typeName": {
                "type": "Identifier",
                "start": 700,
                "end": 711,
                "name": "DeepPartial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 681,
        "end": 684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 682,
            "end": 683,
            "name": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 781,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 731,
        "name": "g",
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
          "start": 732,
          "end": 737,
          "name": "p1",
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
                "name": "I",
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
        {
          "type": "Identifier",
          "start": 739,
          "end": 753,
          "name": "p2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 741,
            "end": 753,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 743,
              "end": 753,
              "typeName": {
                "type": "Identifier",
                "start": 743,
                "end": 750,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 771,
                  "end": 773,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
