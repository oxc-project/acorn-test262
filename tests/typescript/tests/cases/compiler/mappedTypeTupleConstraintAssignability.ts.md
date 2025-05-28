__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 81,
  "end": 1172,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 95,
        "decorators": [],
        "name": "Writeable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 101,
        "end": 135,
        "key": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 119,
          "end": 126,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 125,
            "end": 126,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 129,
          "end": 133,
          "objectType": {
            "type": "TSTypeReference",
            "start": 129,
            "end": 130,
            "typeName": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": "-"
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 137,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 152,
        "decorators": [],
        "name": "EnumValues",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 155,
        "end": 176,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 156,
            "end": 162
          },
          {
            "type": "TSRestType",
            "start": 164,
            "end": 175,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 167,
              "end": 175,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 178,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 189,
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 189,
        "end": 211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 190,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 210,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 210,
                "decorators": [],
                "name": "EnumValues",
                "optional": false,
                "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 214,
        "end": 238,
        "key": {
          "type": "Identifier",
          "start": 217,
          "end": 218,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "start": 222,
          "end": 231,
          "objectType": {
            "type": "TSTypeReference",
            "start": 222,
            "end": 223,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSNumberKeyword",
            "start": 224,
            "end": 230
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 234,
          "end": 235,
          "typeName": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 323,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 262,
        "decorators": [],
        "name": "ZodEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 262,
        "end": 295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 294,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 273,
              "end": 294,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 274,
                  "end": 280
                },
                {
                  "type": "TSRestType",
                  "start": 282,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 285,
                    "end": 293,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 285,
                      "end": 291
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 296,
        "end": 323,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 300,
            "end": 321,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 308,
              "decorators": [],
              "name": "enum",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 308,
              "end": 321,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 310,
                "end": 321,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 312,
                  "end": 321,
                  "typeName": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 318,
                    "decorators": [],
                    "name": "Values",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 318,
                    "end": 321,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 319,
                        "end": 320,
                        "typeName": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 325,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 355,
        "decorators": [],
        "name": "createZodEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 355,
        "end": 406,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 356,
            "end": 372,
            "name": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 366,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 374,
            "end": 405,
            "name": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 405,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 392,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 392,
                "end": 405,
                "params": [
                  {
                    "type": "TSTupleType",
                    "start": 393,
                    "end": 404,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 394,
                        "end": 395,
                        "typeName": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 395,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSRestType",
                        "start": 397,
                        "end": 403,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 400,
                          "end": 403,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 400,
                            "end": 401,
                            "typeName": {
                              "type": "Identifier",
                              "start": 400,
                              "end": 401,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
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
          "start": 407,
          "end": 416,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "T",
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
        "start": 417,
        "end": 440,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 419,
          "end": 440,
          "typeName": {
            "type": "Identifier",
            "start": 419,
            "end": 426,
            "decorators": [],
            "name": "ZodEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 426,
            "end": 440,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 427,
                "end": 439,
                "typeName": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 436,
                  "decorators": [],
                  "name": "Writeable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 436,
                  "end": 439,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 437,
                      "end": 438,
                      "typeName": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 438,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 524,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 534,
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 534,
        "end": 537,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 535,
            "end": 536,
            "name": {
              "type": "Identifier",
              "start": 535,
              "end": 536,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSUnionType",
        "start": 540,
        "end": 560,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 540,
            "end": 541,
            "typeName": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSNullKeyword",
            "start": 544,
            "end": 548
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 551,
            "end": 560
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 562,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 575,
        "decorators": [],
        "name": "AnyTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 578,
        "end": 601,
        "elementTypes": [
          {
            "type": "TSUnknownKeyword",
            "start": 579,
            "end": 586
          },
          {
            "type": "TSRestType",
            "start": 588,
            "end": 600,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 591,
              "end": 600,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 591,
                "end": 598
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 603,
      "end": 641,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 617,
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 620,
        "end": 640,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 622,
            "end": 638,
            "parameters": [
              {
                "type": "Identifier",
                "start": 623,
                "end": 632,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 624,
                  "end": 632,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 633,
              "end": 638,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 635,
                "end": 638
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 642,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 652,
        "decorators": [],
        "name": "Flags",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 655,
        "end": 669,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 655,
            "end": 658,
            "literal": {
              "type": "Literal",
              "start": 655,
              "end": 658,
              "value": "s",
              "raw": "\"s\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 661,
            "end": 664,
            "literal": {
              "type": "Literal",
              "start": 661,
              "end": 664,
              "value": "d",
              "raw": "\"d\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 667,
            "end": 669,
            "literal": {
              "type": "Literal",
              "start": 667,
              "end": 669,
              "value": "",
              "raw": "\"\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 672,
      "end": 802,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 689,
        "decorators": [],
        "name": "ISchema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 689,
        "end": 733,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 690,
            "end": 691,
            "name": {
              "type": "Identifier",
              "start": 690,
              "end": 691,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 693,
            "end": 700,
            "name": {
              "type": "Identifier",
              "start": 693,
              "end": 694,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 702,
            "end": 723,
            "name": {
              "type": "Identifier",
              "start": 702,
              "end": 703,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 712,
              "end": 717,
              "typeName": {
                "type": "Identifier",
                "start": 712,
                "end": 717,
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 720,
              "end": 723
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 725,
            "end": 732,
            "name": {
              "type": "Identifier",
              "start": 725,
              "end": 726,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 729,
              "end": 732
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 734,
        "end": 802,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 738,
            "end": 749,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 745,
              "decorators": [],
              "name": "__flags",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 745,
              "end": 748,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 747,
                "end": 748,
                "typeName": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 748,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 752,
            "end": 765,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 761,
              "decorators": [],
              "name": "__context",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 761,
              "end": 764,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 763,
                "end": 764,
                "typeName": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 764,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 768,
            "end": 784,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 768,
              "end": 780,
              "decorators": [],
              "name": "__outputType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 780,
              "end": 783,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 782,
                "end": 783,
                "typeName": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 787,
            "end": 800,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 787,
              "end": 796,
              "decorators": [],
              "name": "__default",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 799,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 798,
                "end": 799,
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 799,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ClassDeclaration",
      "start": 804,
      "end": 1027,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 829,
        "decorators": [],
        "name": "TupleSchema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 829,
        "end": 964,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 833,
            "end": 885,
            "name": {
              "type": "Identifier",
              "start": 833,
              "end": 838,
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 847,
              "end": 862,
              "typeName": {
                "type": "Identifier",
                "start": 847,
                "end": 852,
                "decorators": [],
                "name": "Maybe",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 852,
                "end": 862,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 853,
                    "end": 861,
                    "typeName": {
                      "type": "Identifier",
                      "start": 853,
                      "end": 861,
                      "decorators": [],
                      "name": "AnyTuple",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": {
              "type": "TSUnionType",
              "start": 865,
              "end": 885,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 865,
                  "end": 873,
                  "typeName": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 873,
                    "decorators": [],
                    "name": "AnyTuple",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 876,
                  "end": 885
                }
              ]
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 889,
            "end": 909,
            "name": {
              "type": "Identifier",
              "start": 889,
              "end": 897,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 900,
              "end": 909,
              "typeName": {
                "type": "Identifier",
                "start": 900,
                "end": 909,
                "decorators": [],
                "name": "AnyObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 913,
            "end": 933,
            "name": {
              "type": "Identifier",
              "start": 913,
              "end": 921,
              "decorators": [],
              "name": "TDefault",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 924,
              "end": 933
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 937,
            "end": 962,
            "name": {
              "type": "Identifier",
              "start": 937,
              "end": 943,
              "decorators": [],
              "name": "TFlags",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 952,
              "end": 957,
              "typeName": {
                "type": "Identifier",
                "start": 952,
                "end": 957,
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSLiteralType",
              "start": 960,
              "end": 962,
              "literal": {
                "type": "Literal",
                "start": 960,
                "end": 962,
                "value": "",
                "raw": "\"\""
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 965,
        "end": 1027,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 969,
            "end": 1025,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 969,
              "end": 980,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 980,
              "end": 1025,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 981,
                  "end": 1023,
                  "decorators": [],
                  "name": "schemas",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 988,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 990,
                      "end": 1023,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 991,
                          "end": 1003,
                          "typeName": {
                            "type": "Identifier",
                            "start": 991,
                            "end": 998,
                            "decorators": [],
                            "name": "ISchema",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 998,
                            "end": 1003,
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 999,
                                "end": 1002
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSRestType",
                          "start": 1005,
                          "end": 1022,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 1008,
                            "end": 1022,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 1008,
                              "end": 1020,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1008,
                                "end": 1015,
                                "decorators": [],
                                "name": "ISchema",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1015,
                                "end": 1020,
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1016,
                                    "end": 1019
                                  }
                                ]
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1029,
      "end": 1172,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1036,
        "end": 1172,
        "id": {
          "type": "Identifier",
          "start": 1045,
          "end": 1051,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1051,
          "end": 1071,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1052,
              "end": 1070,
              "name": {
                "type": "Identifier",
                "start": 1052,
                "end": 1053,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1062,
                "end": 1070,
                "typeName": {
                  "type": "Identifier",
                  "start": 1062,
                  "end": 1070,
                  "decorators": [],
                  "name": "AnyTuple",
                  "optional": false,
                  "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 1072,
            "end": 1117,
            "decorators": [],
            "name": "schemas",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1079,
              "end": 1117,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 1081,
                "end": 1117,
                "key": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1087,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1091,
                  "end": 1098,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1097,
                    "end": 1098,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1097,
                      "end": 1098,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1101,
                  "end": 1114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1108,
                    "decorators": [],
                    "name": "ISchema",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1108,
                    "end": 1114,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 1109,
                        "end": 1113,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1109,
                          "end": 1110,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1109,
                            "end": 1110,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1111,
                          "end": 1112,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1111,
                            "end": 1112,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                },
                "optional": false,
                "readonly": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 1119,
          "end": 1172,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1123,
              "end": 1170,
              "argument": {
                "type": "NewExpression",
                "start": 1130,
                "end": 1169,
                "callee": {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1145,
                  "decorators": [],
                  "name": "TupleSchema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1145,
                  "end": 1160,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1146,
                      "end": 1159,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1146,
                          "end": 1147,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1150,
                          "end": 1159
                        }
                      ]
                    }
                  ]
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1161,
                    "end": 1168,
                    "decorators": [],
                    "name": "schemas",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
