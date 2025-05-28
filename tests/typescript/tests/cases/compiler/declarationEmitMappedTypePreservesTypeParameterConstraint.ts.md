__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 1483,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 93,
        "decorators": [],
        "name": "requiredKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 104,
              "end": 110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 114,
        "end": 180,
        "objectType": {
          "type": "TSMappedType",
          "start": 114,
          "end": 171,
          "key": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 124,
            "end": 131,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
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
            "type": "TSConditionalType",
            "start": 134,
            "end": 168,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 134,
              "end": 143
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 152,
              "end": 156,
              "objectType": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 153,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 159,
              "end": 164
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 167,
              "end": 168,
              "typeName": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "optional": false,
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 172,
          "end": 179,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 178,
            "end": 179,
            "typeName": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 212,
        "decorators": [],
        "name": "addQuestionMarks",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 212,
        "end": 273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 232,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 226,
              "end": 232
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 236,
            "end": 271,
            "name": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 246,
              "end": 253,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 253,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 256,
              "end": 271,
              "typeName": {
                "type": "Identifier",
                "start": 256,
                "end": 268,
                "decorators": [],
                "name": "requiredKeys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 268,
                "end": 271,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 269,
                    "end": 270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 276,
        "end": 309,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 276,
            "end": 296,
            "typeName": {
              "type": "Identifier",
              "start": 276,
              "end": 280,
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 280,
              "end": 296,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 281,
                  "end": 292,
                  "typeName": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 289,
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 289,
                    "end": 292,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 290,
                        "end": 291,
                        "typeName": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 294,
                  "end": 295,
                  "typeName": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 299,
            "end": 309,
            "typeName": {
              "type": "Identifier",
              "start": 299,
              "end": 306,
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 306,
              "end": 309,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 307,
                  "end": 308,
                  "typeName": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
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
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 312,
      "end": 341,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 333,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 333,
        "end": 336,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 334,
            "end": 335,
            "name": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
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
        "type": "TSTypeReference",
        "start": 339,
        "end": 340,
        "typeName": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 343,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 363,
        "decorators": [],
        "name": "flatten",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 363,
        "end": 366,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 364,
            "end": 365,
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
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
        "type": "TSTypeReference",
        "start": 369,
        "end": 406,
        "typeName": {
          "type": "Identifier",
          "start": 369,
          "end": 377,
          "decorators": [],
          "name": "identity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 377,
          "end": 406,
          "params": [
            {
              "type": "TSMappedType",
              "start": 378,
              "end": 405,
              "key": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 388,
                "end": 395,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 394,
                  "end": 395,
                  "typeName": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 395,
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
                "start": 398,
                "end": 402,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 398,
                  "end": 399,
                  "typeName": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 400,
                  "end": 401,
                  "typeName": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          ]
        }
      },
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 409,
      "end": 492,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 416,
        "end": 492,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 439,
          "end": 446,
          "decorators": [],
          "name": "ZodType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 446,
          "end": 460,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 447,
              "end": 459,
              "name": {
                "type": "Identifier",
                "start": 447,
                "end": 453,
                "decorators": [],
                "name": "Output",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 456,
                "end": 459
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
          "start": 461,
          "end": 492,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 465,
              "end": 490,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 474,
                "end": 481,
                "decorators": [],
                "name": "_output",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 481,
                "end": 489,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 483,
                  "end": 489,
                  "typeName": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 489,
                    "decorators": [],
                    "name": "Output",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            }
          ]
        },
        "abstract": true,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 494,
      "end": 550,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 501,
        "end": 550,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 515,
          "end": 525,
          "decorators": [],
          "name": "ZodLiteral",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 525,
          "end": 528,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 526,
              "end": 527,
              "name": {
                "type": "Identifier",
                "start": 526,
                "end": 527,
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
        "superClass": {
          "type": "Identifier",
          "start": 537,
          "end": 544,
          "decorators": [],
          "name": "ZodType",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 544,
          "end": 547,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 545,
              "end": 546,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 548,
          "end": 550,
          "body": []
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 552,
      "end": 598,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 559,
        "end": 598,
        "id": {
          "type": "Identifier",
          "start": 572,
          "end": 582,
          "decorators": [],
          "name": "ZodTypeAny",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 585,
          "end": 597,
          "typeName": {
            "type": "Identifier",
            "start": 585,
            "end": 592,
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 592,
            "end": 597,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 593,
                "end": 596
              }
            ]
          }
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 600,
      "end": 717,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 607,
        "end": 717,
        "id": {
          "type": "Identifier",
          "start": 620,
          "end": 640,
          "decorators": [],
          "name": "baseObjectOutputType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 640,
          "end": 667,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 641,
              "end": 666,
              "name": {
                "type": "Identifier",
                "start": 641,
                "end": 646,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 655,
                "end": 666,
                "typeName": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 666,
                  "decorators": [],
                  "name": "ZodRawShape",
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
          "start": 670,
          "end": 716,
          "key": {
            "type": "Identifier",
            "start": 675,
            "end": 676,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 680,
            "end": 691,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 686,
              "end": 691,
              "typeName": {
                "type": "Identifier",
                "start": 686,
                "end": 691,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 694,
            "end": 713,
            "objectType": {
              "type": "TSIndexedAccessType",
              "start": 694,
              "end": 702,
              "objectType": {
                "type": "TSTypeReference",
                "start": 694,
                "end": 699,
                "typeName": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 699,
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 700,
                "end": 701,
                "typeName": {
                  "type": "Identifier",
                  "start": 700,
                  "end": 701,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 703,
              "end": 712,
              "literal": {
                "type": "Literal",
                "start": 703,
                "end": 712,
                "value": "_output",
                "raw": "\"_output\""
              }
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 719,
      "end": 844,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 726,
        "end": 844,
        "id": {
          "type": "Identifier",
          "start": 739,
          "end": 755,
          "decorators": [],
          "name": "objectOutputType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 755,
          "end": 782,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 756,
              "end": 781,
              "name": {
                "type": "Identifier",
                "start": 756,
                "end": 761,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 770,
                "end": 781,
                "typeName": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 781,
                  "decorators": [],
                  "name": "ZodRawShape",
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
          "type": "TSTypeReference",
          "start": 785,
          "end": 843,
          "typeName": {
            "type": "Identifier",
            "start": 785,
            "end": 792,
            "decorators": [],
            "name": "flatten",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 792,
            "end": 843,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 796,
                "end": 841,
                "typeName": {
                  "type": "Identifier",
                  "start": 796,
                  "end": 812,
                  "decorators": [],
                  "name": "addQuestionMarks",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 812,
                  "end": 841,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 813,
                      "end": 840,
                      "typeName": {
                        "type": "Identifier",
                        "start": 813,
                        "end": 833,
                        "decorators": [],
                        "name": "baseObjectOutputType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 833,
                        "end": 840,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 834,
                            "end": 839,
                            "typeName": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 839,
                              "decorators": [],
                              "name": "Shape",
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
            ]
          }
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 846,
      "end": 911,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 853,
        "end": 911,
        "id": {
          "type": "Identifier",
          "start": 866,
          "end": 877,
          "decorators": [],
          "name": "ZodRawShape",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 880,
          "end": 910,
          "members": [
            {
              "type": "TSIndexSignature",
              "start": 884,
              "end": 908,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 885,
                  "end": 894,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 886,
                    "end": 894,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 888,
                      "end": 894
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 895,
                "end": 907,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 897,
                  "end": 907,
                  "typeName": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 907,
                    "decorators": [],
                    "name": "ZodTypeAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 913,
      "end": 1039,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 920,
        "end": 1039,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 926,
            "end": 1038,
            "id": {
              "type": "Identifier",
              "start": 926,
              "end": 937,
              "decorators": [],
              "name": "buildSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 940,
              "end": 1038,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 940,
                "end": 958,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 941,
                    "end": 957,
                    "name": {
                      "type": "Identifier",
                      "start": 941,
                      "end": 942,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 951,
                      "end": 957
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
                  "start": 962,
                  "end": 972,
                  "decorators": [],
                  "name": "version",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 969,
                    "end": 972,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 971,
                      "end": 972,
                      "typeName": {
                        "type": "Identifier",
                        "start": 971,
                        "end": 972,
                        "decorators": [],
                        "name": "V",
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
                "start": 974,
                "end": 1023,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 976,
                  "end": 1023,
                  "typeName": {
                    "type": "Identifier",
                    "start": 976,
                    "end": 992,
                    "decorators": [],
                    "name": "objectOutputType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 992,
                    "end": 1023,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 993,
                        "end": 1022,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 997,
                            "end": 1020,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 997,
                              "end": 1004,
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1004,
                              "end": 1019,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1006,
                                "end": 1019,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1006,
                                  "end": 1016,
                                  "decorators": [],
                                  "name": "ZodLiteral",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 1016,
                                  "end": 1019,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1017,
                                      "end": 1018,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1017,
                                        "end": 1018,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "TSAsExpression",
                "start": 1028,
                "end": 1037,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1028,
                  "end": 1030,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1034,
                  "end": 1037
                }
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1109,
      "end": 1162,
      "id": {
        "type": "Identifier",
        "start": 1114,
        "end": 1122,
        "decorators": [],
        "name": "evaluate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1122,
        "end": 1125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1123,
            "end": 1124,
            "name": {
              "type": "Identifier",
              "start": 1123,
              "end": 1124,
              "decorators": [],
              "name": "t",
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
        "type": "TSIntersectionType",
        "start": 1128,
        "end": 1162,
        "types": [
          {
            "type": "TSMappedType",
            "start": 1128,
            "end": 1152,
            "key": {
              "type": "Identifier",
              "start": 1131,
              "end": 1132,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1136,
              "end": 1143,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1142,
                "end": 1143,
                "typeName": {
                  "type": "Identifier",
                  "start": 1142,
                  "end": 1143,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 1146,
              "end": 1150,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1146,
                "end": 1147,
                "typeName": {
                  "type": "Identifier",
                  "start": 1146,
                  "end": 1147,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1148,
                "end": 1149,
                "typeName": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1149,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "readonly": null
          },
          {
            "type": "TSUnknownKeyword",
            "start": 1155,
            "end": 1162
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1164,
      "end": 1325,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1171,
        "end": 1325,
        "id": {
          "type": "Identifier",
          "start": 1176,
          "end": 1183,
          "decorators": [],
          "name": "entryOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1183,
          "end": 1186,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1184,
              "end": 1185,
              "name": {
                "type": "Identifier",
                "start": 1184,
                "end": 1185,
                "decorators": [],
                "name": "o",
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
          "type": "TSTypeReference",
          "start": 1189,
          "end": 1325,
          "typeName": {
            "type": "Identifier",
            "start": 1189,
            "end": 1197,
            "decorators": [],
            "name": "evaluate",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1197,
            "end": 1325,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1203,
                "end": 1323,
                "objectType": {
                  "type": "TSMappedType",
                  "start": 1203,
                  "end": 1248,
                  "key": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1207,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1211,
                    "end": 1218,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1217,
                      "end": 1218,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1217,
                        "end": 1218,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 1223,
                    "end": 1246,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 1224,
                        "end": 1225,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1224,
                          "end": 1225,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 1227,
                        "end": 1245,
                        "types": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 1227,
                            "end": 1231,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 1227,
                              "end": 1228,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1227,
                                "end": 1228,
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 1229,
                              "end": 1230,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1229,
                                "end": 1230,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSUnionType",
                            "start": 1235,
                            "end": 1244,
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "start": 1235,
                                "end": 1237,
                                "members": []
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 1240,
                                "end": 1244
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "optional": "-",
                  "readonly": null
                },
                "indexType": {
                  "type": "TSConditionalType",
                  "start": 1249,
                  "end": 1322,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 1249,
                    "end": 1250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1249,
                      "end": 1250,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSTypeOperator",
                    "start": 1259,
                    "end": 1277,
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1268,
                      "end": 1277,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1268,
                        "end": 1275
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSIntersectionType",
                    "start": 1288,
                    "end": 1304,
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "start": 1288,
                        "end": 1295,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1294,
                          "end": 1295,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1294,
                            "end": 1295,
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1298,
                        "end": 1304
                      }
                    ]
                  },
                  "falseType": {
                    "type": "TSTypeOperator",
                    "start": 1315,
                    "end": 1322,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1321,
                      "end": 1322,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1322,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1327,
      "end": 1391,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1334,
        "end": 1391,
        "id": {
          "type": "Identifier",
          "start": 1339,
          "end": 1348,
          "decorators": [],
          "name": "entriesOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1348,
          "end": 1366,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1349,
              "end": 1365,
              "name": {
                "type": "Identifier",
                "start": 1349,
                "end": 1350,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1359,
                "end": 1365
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1369,
          "end": 1391,
          "typeName": {
            "type": "Identifier",
            "start": 1369,
            "end": 1377,
            "decorators": [],
            "name": "evaluate",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1377,
            "end": 1391,
            "params": [
              {
                "type": "TSArrayType",
                "start": 1378,
                "end": 1390,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1378,
                  "end": 1388,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1378,
                    "end": 1385,
                    "decorators": [],
                    "name": "entryOf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1385,
                    "end": 1388,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1386,
                        "end": 1387,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1386,
                          "end": 1387,
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1393,
      "end": 1483,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1400,
        "end": 1483,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1406,
            "end": 1483,
            "id": {
              "type": "Identifier",
              "start": 1406,
              "end": 1415,
              "decorators": [],
              "name": "entriesOf",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1418,
              "end": 1483,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1418,
                "end": 1436,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1419,
                    "end": 1435,
                    "name": {
                      "type": "Identifier",
                      "start": 1419,
                      "end": 1420,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSObjectKeyword",
                      "start": 1429,
                      "end": 1435
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
                  "start": 1437,
                  "end": 1441,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1438,
                    "end": 1441,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1440,
                      "end": 1441,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1440,
                        "end": 1441,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "start": 1450,
                "end": 1483,
                "expression": {
                  "type": "CallExpression",
                  "start": 1450,
                  "end": 1467,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1450,
                    "end": 1464,
                    "object": {
                      "type": "Identifier",
                      "start": 1450,
                      "end": 1456,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1457,
                      "end": 1464,
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1465,
                      "end": 1466,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1471,
                  "end": 1483,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1471,
                    "end": 1480,
                    "decorators": [],
                    "name": "entriesOf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1480,
                    "end": 1483,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1481,
                        "end": 1482,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1482,
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
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
