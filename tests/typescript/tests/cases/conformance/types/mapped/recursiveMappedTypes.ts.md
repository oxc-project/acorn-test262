__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 2229,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 59,
        "decorators": [],
        "name": "Recurse",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 62,
        "end": 102,
        "key": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 74,
          "end": 87,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 80,
            "end": 87,
            "typeName": {
              "type": "Identifier",
              "start": 80,
              "end": 87,
              "decorators": [],
              "name": "Recurse",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 90,
          "end": 100,
          "objectType": {
            "type": "TSTypeReference",
            "start": 90,
            "end": 97,
            "typeName": {
              "type": "Identifier",
              "start": 90,
              "end": 97,
              "decorators": [],
              "name": "Recurse",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 98,
            "end": 99,
            "typeName": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 104,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 117,
        "decorators": [],
        "name": "Recurse1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 120,
        "end": 162,
        "key": {
          "type": "Identifier",
          "start": 127,
          "end": 128,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 132,
          "end": 146,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 138,
            "end": 146,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 146,
              "decorators": [],
              "name": "Recurse2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 149,
          "end": 160,
          "objectType": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 157,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 157,
              "decorators": [],
              "name": "Recurse2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 158,
            "end": 159,
            "typeName": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 164,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 177,
        "decorators": [],
        "name": "Recurse2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 180,
        "end": 222,
        "key": {
          "type": "Identifier",
          "start": 187,
          "end": 188,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 192,
          "end": 206,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 198,
            "end": 206,
            "typeName": {
              "type": "Identifier",
              "start": 198,
              "end": 206,
              "decorators": [],
              "name": "Recurse1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 209,
          "end": 220,
          "objectType": {
            "type": "TSTypeReference",
            "start": 209,
            "end": 217,
            "typeName": {
              "type": "Identifier",
              "start": 209,
              "end": 217,
              "decorators": [],
              "name": "Recurse1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 218,
            "end": 219,
            "typeName": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 246,
      "end": 302,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 253,
        "end": 302,
        "id": {
          "type": "Identifier",
          "start": 258,
          "end": 266,
          "decorators": [],
          "name": "Circular",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 266,
          "end": 269,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 267,
              "end": 268,
              "name": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
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
          "start": 272,
          "end": 301,
          "key": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 279,
            "end": 286,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 285,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
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
            "start": 289,
            "end": 300,
            "typeName": {
              "type": "Identifier",
              "start": 289,
              "end": 297,
              "decorators": [],
              "name": "Circular",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 297,
              "end": 300,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 298,
                  "end": 299,
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
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
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 303,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "decorators": [],
        "name": "tup",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 314,
        "end": 346,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 315,
            "end": 321
          },
          {
            "type": "TSNumberKeyword",
            "start": 323,
            "end": 329
          },
          {
            "type": "TSNumberKeyword",
            "start": 331,
            "end": 337
          },
          {
            "type": "TSNumberKeyword",
            "start": 339,
            "end": 345
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 349,
      "end": 404,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 361,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 362,
          "end": 380,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 380,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 367,
              "end": 380,
              "typeName": {
                "type": "Identifier",
                "start": 367,
                "end": 375,
                "decorators": [],
                "name": "Circular",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 375,
                "end": 380,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 376,
                    "end": 379,
                    "typeName": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 379,
                      "decorators": [],
                      "name": "tup",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 381,
        "end": 386,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 383,
          "end": 386,
          "typeName": {
            "type": "Identifier",
            "start": 383,
            "end": 386,
            "decorators": [],
            "name": "tup",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 387,
        "end": 404,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 391,
            "end": 402,
            "argument": {
              "type": "Identifier",
              "start": 398,
              "end": 401,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 428,
      "end": 536,
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 440,
        "decorators": [],
        "name": "DeepMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 440,
        "end": 464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 441,
            "end": 460,
            "name": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 451,
              "end": 460,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 451,
                "end": 458
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 462,
            "end": 463,
            "name": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "decorators": [],
              "name": "R",
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
        "start": 467,
        "end": 535,
        "key": {
          "type": "Identifier",
          "start": 472,
          "end": 473,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 477,
          "end": 484,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 483,
            "end": 484,
            "typeName": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
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
          "start": 487,
          "end": 532,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 487,
            "end": 491,
            "objectType": {
              "type": "TSTypeReference",
              "start": 487,
              "end": 488,
              "typeName": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 489,
              "end": 490,
              "typeName": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSArrayType",
            "start": 500,
            "end": 509,
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 500,
              "end": 507
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 512,
            "end": 528,
            "typeName": {
              "type": "Identifier",
              "start": 512,
              "end": 519,
              "decorators": [],
              "name": "DeepMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 519,
              "end": 528,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 520,
                  "end": 524,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 520,
                    "end": 521,
                    "typeName": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 521,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 522,
                    "end": 523,
                    "typeName": {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 526,
                  "end": 527,
                  "typeName": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
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
          "falseType": {
            "type": "TSTypeReference",
            "start": 531,
            "end": 532,
            "typeName": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 538,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 543,
        "end": 546,
        "decorators": [],
        "name": "tpl",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 549,
        "end": 577,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 550,
            "end": 556
          },
          {
            "type": "TSTupleType",
            "start": 558,
            "end": 576,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 559,
                "end": 565
              },
              {
                "type": "TSTupleType",
                "start": 567,
                "end": 575,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 568,
                    "end": 574
                  }
                ]
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 579,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 587,
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 590,
        "end": 600,
        "elementType": {
          "type": "TSArrayType",
          "start": 590,
          "end": 598,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 590,
            "end": 596
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 603,
      "end": 634,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 610,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 613,
        "end": 633,
        "typeName": {
          "type": "Identifier",
          "start": 613,
          "end": 620,
          "decorators": [],
          "name": "DeepMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 620,
          "end": 633,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 621,
              "end": 624,
              "typeName": {
                "type": "Identifier",
                "start": 621,
                "end": 624,
                "decorators": [],
                "name": "tpl",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSNumberKeyword",
              "start": 626,
              "end": 632
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 668,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 675,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 678,
        "end": 698,
        "typeName": {
          "type": "Identifier",
          "start": 678,
          "end": 685,
          "decorators": [],
          "name": "DeepMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 685,
          "end": 698,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 686,
              "end": 689,
              "typeName": {
                "type": "Identifier",
                "start": 686,
                "end": 689,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSNumberKeyword",
              "start": 691,
              "end": 697
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 738,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 752,
        "decorators": [],
        "name": "Transform",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 752,
        "end": 755,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 753,
            "end": 754,
            "name": {
              "type": "Identifier",
              "start": 753,
              "end": 754,
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
        "start": 758,
        "end": 793,
        "key": {
          "type": "Identifier",
          "start": 761,
          "end": 762,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 766,
          "end": 773,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 772,
            "end": 773,
            "typeName": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
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
          "start": 776,
          "end": 791,
          "typeName": {
            "type": "Identifier",
            "start": 776,
            "end": 785,
            "decorators": [],
            "name": "Transform",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 785,
            "end": 791,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 786,
                "end": 790,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 786,
                  "end": 787,
                  "typeName": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 788,
                  "end": 789,
                  "typeName": {
                    "type": "Identifier",
                    "start": 788,
                    "end": 789,
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
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 796,
      "end": 834,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 810,
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 811,
        "end": 834,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 817,
            "end": 832,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 817,
              "end": 823,
              "decorators": [],
              "name": "avatar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 823,
              "end": 831,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 825,
                "end": 831
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
      "type": "TSInterfaceDeclaration",
      "start": 836,
      "end": 880,
      "id": {
        "type": "Identifier",
        "start": 846,
        "end": 851,
        "decorators": [],
        "name": "Guest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 852,
        "end": 880,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 858,
            "end": 878,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 869,
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 869,
              "end": 877,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 871,
                "end": 877
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
      "type": "TSInterfaceDeclaration",
      "start": 882,
      "end": 932,
      "id": {
        "type": "Identifier",
        "start": 892,
        "end": 899,
        "decorators": [],
        "name": "Product",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 900,
        "end": 932,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 906,
            "end": 930,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 906,
              "end": 911,
              "decorators": [],
              "name": "users",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 911,
              "end": 929,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 913,
                "end": 929,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 914,
                  "end": 926,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 914,
                      "end": 918,
                      "typeName": {
                        "type": "Identifier",
                        "start": 914,
                        "end": 918,
                        "decorators": [],
                        "name": "User",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 921,
                      "end": 926,
                      "typeName": {
                        "type": "Identifier",
                        "start": 921,
                        "end": 926,
                        "decorators": [],
                        "name": "Guest",
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 934,
      "end": 974,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 946,
          "end": 973,
          "id": {
            "type": "Identifier",
            "start": 946,
            "end": 973,
            "decorators": [],
            "name": "product",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 953,
              "end": 973,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 955,
                "end": 973,
                "typeName": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 964,
                  "decorators": [],
                  "name": "Transform",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 964,
                  "end": 973,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 965,
                      "end": 972,
                      "typeName": {
                        "type": "Identifier",
                        "start": 965,
                        "end": 972,
                        "decorators": [],
                        "name": "Product",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 975,
      "end": 989,
      "expression": {
        "type": "MemberExpression",
        "start": 975,
        "end": 988,
        "object": {
          "type": "Identifier",
          "start": 975,
          "end": 982,
          "decorators": [],
          "name": "product",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 983,
          "end": 988,
          "decorators": [],
          "name": "users",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1056,
      "end": 1107,
      "id": {
        "type": "Identifier",
        "start": 1061,
        "end": 1067,
        "decorators": [],
        "name": "Remap1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1067,
        "end": 1070,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1068,
            "end": 1069,
            "name": {
              "type": "Identifier",
              "start": 1068,
              "end": 1069,
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
        "start": 1073,
        "end": 1106,
        "key": {
          "type": "Identifier",
          "start": 1076,
          "end": 1077,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1081,
          "end": 1088,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1087,
            "end": 1088,
            "typeName": {
              "type": "Identifier",
              "start": 1087,
              "end": 1088,
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
          "start": 1091,
          "end": 1103,
          "typeName": {
            "type": "Identifier",
            "start": 1091,
            "end": 1097,
            "decorators": [],
            "name": "Remap1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1097,
            "end": 1103,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1098,
                "end": 1102,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1098,
                  "end": 1099,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1099,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1100,
                  "end": 1101,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1100,
                    "end": 1101,
                    "decorators": [],
                    "name": "P",
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
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1108,
      "end": 1182,
      "id": {
        "type": "Identifier",
        "start": 1113,
        "end": 1119,
        "decorators": [],
        "name": "Remap2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1119,
        "end": 1122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1120,
            "end": 1121,
            "name": {
              "type": "Identifier",
              "start": 1120,
              "end": 1121,
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
        "type": "TSConditionalType",
        "start": 1125,
        "end": 1181,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1125,
          "end": 1126,
          "typeName": {
            "type": "Identifier",
            "start": 1125,
            "end": 1126,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 1135,
          "end": 1141
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 1144,
          "end": 1177,
          "key": {
            "type": "Identifier",
            "start": 1147,
            "end": 1148,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1152,
            "end": 1159,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1158,
              "end": 1159,
              "typeName": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
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
            "start": 1162,
            "end": 1174,
            "typeName": {
              "type": "Identifier",
              "start": 1162,
              "end": 1168,
              "decorators": [],
              "name": "Remap2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1168,
              "end": 1174,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1169,
                  "end": 1173,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1169,
                    "end": 1170,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1171,
                    "end": 1172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1171,
                      "end": 1172,
                      "decorators": [],
                      "name": "P",
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
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1180,
          "end": 1181,
          "typeName": {
            "type": "Identifier",
            "start": 1180,
            "end": 1181,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1186,
      "end": 1212,
      "id": {
        "type": "Identifier",
        "start": 1191,
        "end": 1192,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1195,
        "end": 1211,
        "typeName": {
          "type": "Identifier",
          "start": 1195,
          "end": 1201,
          "decorators": [],
          "name": "Remap1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1201,
          "end": 1211,
          "params": [
            {
              "type": "TSArrayType",
              "start": 1202,
              "end": 1210,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1202,
                "end": 1208
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1226,
      "end": 1252,
      "id": {
        "type": "Identifier",
        "start": 1231,
        "end": 1232,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1235,
        "end": 1251,
        "typeName": {
          "type": "Identifier",
          "start": 1235,
          "end": 1241,
          "decorators": [],
          "name": "Remap2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1241,
          "end": 1251,
          "params": [
            {
              "type": "TSArrayType",
              "start": 1242,
              "end": 1250,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1242,
                "end": 1248
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1289,
      "end": 1379,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1309,
        "decorators": [],
        "name": "NonOptionalKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1309,
        "end": 1312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1310,
            "end": 1311,
            "name": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
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
        "type": "TSIndexedAccessType",
        "start": 1315,
        "end": 1378,
        "objectType": {
          "type": "TSMappedType",
          "start": 1315,
          "end": 1369,
          "key": {
            "type": "Identifier",
            "start": 1318,
            "end": 1319,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1323,
            "end": 1330,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1329,
              "end": 1330,
              "typeName": {
                "type": "Identifier",
                "start": 1329,
                "end": 1330,
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
            "start": 1333,
            "end": 1367,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1333,
              "end": 1342
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 1351,
              "end": 1355,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1351,
                "end": 1352,
                "typeName": {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1352,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1353,
                "end": 1354,
                "typeName": {
                  "type": "Identifier",
                  "start": 1353,
                  "end": 1354,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 1358,
              "end": 1363
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 1366,
              "end": 1367,
              "typeName": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "decorators": [],
                "name": "P",
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
          "start": 1370,
          "end": 1377,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1376,
            "end": 1377,
            "typeName": {
              "type": "Identifier",
              "start": 1376,
              "end": 1377,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1380,
      "end": 1431,
      "id": {
        "type": "Identifier",
        "start": 1385,
        "end": 1390,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1390,
        "end": 1393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1391,
            "end": 1392,
            "name": {
              "type": "Identifier",
              "start": 1391,
              "end": 1392,
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
        "start": 1396,
        "end": 1431,
        "key": {
          "type": "Identifier",
          "start": 1399,
          "end": 1400,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 1404,
          "end": 1422,
          "typeName": {
            "type": "Identifier",
            "start": 1404,
            "end": 1419,
            "decorators": [],
            "name": "NonOptionalKeys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1419,
            "end": 1422,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1420,
                "end": 1421,
                "typeName": {
                  "type": "Identifier",
                  "start": 1420,
                  "end": 1421,
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
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1425,
          "end": 1429,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1425,
            "end": 1426,
            "typeName": {
              "type": "Identifier",
              "start": 1425,
              "end": 1426,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1427,
            "end": 1428,
            "typeName": {
              "type": "Identifier",
              "start": 1427,
              "end": 1428,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1433,
      "end": 1641,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1440,
        "end": 1641,
        "id": {
          "type": "Identifier",
          "start": 1450,
          "end": 1460,
          "decorators": [],
          "name": "ListWidget",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 1461,
          "end": 1641,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1467,
              "end": 1482,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1467,
                "end": 1473,
                "value": "type",
                "raw": "\"type\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1473,
                "end": 1481,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1475,
                  "end": 1481,
                  "literal": {
                    "type": "Literal",
                    "start": 1475,
                    "end": 1481,
                    "value": "list",
                    "raw": "\"list\""
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1487,
              "end": 1511,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1487,
                "end": 1502,
                "value": "minimum_count",
                "raw": "\"minimum_count\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1502,
                "end": 1510,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1504,
                  "end": 1510
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1516,
              "end": 1540,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1516,
                "end": 1531,
                "value": "maximum_count",
                "raw": "\"maximum_count\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1531,
                "end": 1539,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1533,
                  "end": 1539
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1545,
              "end": 1569,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1545,
                "end": 1558,
                "value": "collapsable",
                "raw": "\"collapsable\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1559,
                "end": 1568,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1561,
                  "end": 1568
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1613,
              "end": 1639,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1613,
                "end": 1619,
                "value": "each",
                "raw": "\"each\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1619,
                "end": 1638,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1621,
                  "end": 1638,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1621,
                    "end": 1626,
                    "decorators": [],
                    "name": "Child",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1626,
                    "end": 1638,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1627,
                        "end": 1637,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1637,
                          "decorators": [],
                          "name": "ListWidget",
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
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1643,
      "end": 1677,
      "id": {
        "type": "Identifier",
        "start": 1648,
        "end": 1657,
        "decorators": [],
        "name": "ListChild",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1660,
        "end": 1677,
        "typeName": {
          "type": "Identifier",
          "start": 1660,
          "end": 1665,
          "decorators": [],
          "name": "Child",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1665,
          "end": 1677,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1666,
              "end": 1676,
              "typeName": {
                "type": "Identifier",
                "start": 1666,
                "end": 1676,
                "decorators": [],
                "name": "ListWidget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1679,
      "end": 1704,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1691,
          "end": 1703,
          "id": {
            "type": "Identifier",
            "start": 1691,
            "end": 1703,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1692,
              "end": 1703,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1694,
                "end": 1703,
                "typeName": {
                  "type": "Identifier",
                  "start": 1694,
                  "end": 1703,
                  "decorators": [],
                  "name": "ListChild",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1705,
      "end": 1712,
      "expression": {
        "type": "MemberExpression",
        "start": 1705,
        "end": 1711,
        "object": {
          "type": "Identifier",
          "start": 1705,
          "end": 1706,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 1707,
          "end": 1711,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1737,
      "end": 1822,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1744,
        "end": 1822,
        "id": {
          "type": "Identifier",
          "start": 1749,
          "end": 1751,
          "decorators": [],
          "name": "TV",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1751,
          "end": 1773,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1752,
              "end": 1753,
              "name": {
                "type": "Identifier",
                "start": 1752,
                "end": 1753,
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
              "start": 1755,
              "end": 1772,
              "name": {
                "type": "Identifier",
                "start": 1755,
                "end": 1756,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1765,
                "end": 1772,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1771,
                  "end": 1772,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1771,
                    "end": 1772,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
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
          "start": 1776,
          "end": 1821,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 1776,
            "end": 1780,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1776,
              "end": 1777,
              "typeName": {
                "type": "Identifier",
                "start": 1776,
                "end": 1777,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1778,
              "end": 1779,
              "typeName": {
                "type": "Identifier",
                "start": 1778,
                "end": 1779,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1789,
            "end": 1809,
            "typeName": {
              "type": "Identifier",
              "start": 1789,
              "end": 1795,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1795,
              "end": 1809,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 1796,
                  "end": 1803,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1802,
                    "end": 1803,
                    "name": {
                      "type": "Identifier",
                      "start": 1802,
                      "end": 1803,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 1805,
                  "end": 1808
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1812,
            "end": 1813,
            "typeName": {
              "type": "Identifier",
              "start": 1812,
              "end": 1813,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1816,
            "end": 1821
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
      "start": 1824,
      "end": 1928,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1831,
        "end": 1928,
        "id": {
          "type": "Identifier",
          "start": 1836,
          "end": 1849,
          "decorators": [],
          "name": "ObjectOrArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1849,
          "end": 1885,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1850,
              "end": 1851,
              "name": {
                "type": "Identifier",
                "start": 1850,
                "end": 1851,
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
              "start": 1853,
              "end": 1884,
              "name": {
                "type": "Identifier",
                "start": 1853,
                "end": 1854,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1863,
                "end": 1872,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1869,
                  "end": 1872
                }
              },
              "default": {
                "type": "TSTypeOperator",
                "start": 1875,
                "end": 1884,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1881,
                  "end": 1884
                }
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1888,
          "end": 1927,
          "types": [
            {
              "type": "TSArrayType",
              "start": 1888,
              "end": 1891,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1888,
                "end": 1889,
                "typeName": {
                  "type": "Identifier",
                  "start": 1888,
                  "end": 1889,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1894,
              "end": 1927,
              "typeName": {
                "type": "Identifier",
                "start": 1894,
                "end": 1900,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1900,
                "end": 1927,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1901,
                    "end": 1902,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1901,
                      "end": 1902,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnionType",
                    "start": 1904,
                    "end": 1926,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1904,
                        "end": 1905,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1904,
                          "end": 1905,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1908,
                        "end": 1920,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1914,
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1914,
                          "end": 1920,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1915,
                              "end": 1916,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1915,
                                "end": 1916,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1918,
                              "end": 1919,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1918,
                                "end": 1919,
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
                        "type": "TSArrayType",
                        "start": 1923,
                        "end": 1926,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1923,
                          "end": 1924,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1923,
                            "end": 1924,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
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
      "start": 1929,
      "end": 2160,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1936,
        "end": 2160,
        "id": {
          "type": "Identifier",
          "start": 1941,
          "end": 1951,
          "decorators": [],
          "name": "ThemeValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1951,
          "end": 2001,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1952,
              "end": 1977,
              "name": {
                "type": "Identifier",
                "start": 1952,
                "end": 1953,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1962,
                "end": 1977,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1968,
                  "end": 1977,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1968,
                    "end": 1977,
                    "decorators": [],
                    "name": "ThemeType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1979,
              "end": 1988,
              "name": {
                "type": "Identifier",
                "start": 1979,
                "end": 1988,
                "decorators": [],
                "name": "ThemeType",
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
              "start": 1990,
              "end": 2000,
              "name": {
                "type": "Identifier",
                "start": 1990,
                "end": 1994,
                "decorators": [],
                "name": "TVal",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 1997,
                "end": 2000
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 2008,
          "end": 2159,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 2008,
            "end": 2020,
            "objectType": {
              "type": "TSTypeReference",
              "start": 2008,
              "end": 2017,
              "typeName": {
                "type": "Identifier",
                "start": 2008,
                "end": 2017,
                "decorators": [],
                "name": "ThemeType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 2018,
              "end": 2019,
              "typeName": {
                "type": "Identifier",
                "start": 2018,
                "end": 2019,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSArrayType",
            "start": 2029,
            "end": 2035,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2029,
              "end": 2033,
              "typeName": {
                "type": "Identifier",
                "start": 2029,
                "end": 2033,
                "decorators": [],
                "name": "TVal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 2038,
            "end": 2044
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 2051,
            "end": 2159,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 2051,
              "end": 2063,
              "objectType": {
                "type": "TSTypeReference",
                "start": 2051,
                "end": 2060,
                "typeName": {
                  "type": "Identifier",
                  "start": 2051,
                  "end": 2060,
                  "decorators": [],
                  "name": "ThemeType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 2061,
                "end": 2062,
                "typeName": {
                  "type": "Identifier",
                  "start": 2061,
                  "end": 2062,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 2072,
              "end": 2093,
              "typeName": {
                "type": "Identifier",
                "start": 2072,
                "end": 2078,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2078,
                "end": 2093,
                "params": [
                  {
                    "type": "TSInferType",
                    "start": 2079,
                    "end": 2086,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 2085,
                      "end": 2086,
                      "name": {
                        "type": "Identifier",
                        "start": 2085,
                        "end": 2086,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2088,
                    "end": 2092,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2088,
                      "end": 2092,
                      "decorators": [],
                      "name": "TVal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 2096,
              "end": 2097,
              "typeName": {
                "type": "Identifier",
                "start": 2096,
                "end": 2097,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 2104,
              "end": 2159,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 2104,
                "end": 2116,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2104,
                  "end": 2113,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2104,
                    "end": 2113,
                    "decorators": [],
                    "name": "ThemeType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2114,
                  "end": 2115,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2114,
                    "end": 2115,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 2125,
                "end": 2147,
                "typeName": {
                  "type": "Identifier",
                  "start": 2125,
                  "end": 2138,
                  "decorators": [],
                  "name": "ObjectOrArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2138,
                  "end": 2147,
                  "params": [
                    {
                      "type": "TSInferType",
                      "start": 2139,
                      "end": 2146,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 2145,
                        "end": 2146,
                        "name": {
                          "type": "Identifier",
                          "start": 2145,
                          "end": 2146,
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null
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
                "start": 2150,
                "end": 2151,
                "typeName": {
                  "type": "Identifier",
                  "start": 2150,
                  "end": 2151,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 2154,
                "end": 2159
              }
            }
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
      "start": 2162,
      "end": 2229,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2169,
        "end": 2229,
        "id": {
          "type": "Identifier",
          "start": 2174,
          "end": 2177,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2177,
          "end": 2180,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2178,
              "end": 2179,
              "name": {
                "type": "Identifier",
                "start": 2178,
                "end": 2179,
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
          "type": "TSConditionalType",
          "start": 2183,
          "end": 2228,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2183,
            "end": 2184,
            "typeName": {
              "type": "Identifier",
              "start": 2183,
              "end": 2184,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSMappedType",
            "start": 2193,
            "end": 2216,
            "key": {
              "type": "Identifier",
              "start": 2196,
              "end": 2197,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSInferType",
              "start": 2201,
              "end": 2208,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2207,
                "end": 2208,
                "name": {
                  "type": "Identifier",
                  "start": 2207,
                  "end": 2208,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2211,
              "end": 2214
            },
            "optional": false,
            "readonly": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2219,
            "end": 2220,
            "typeName": {
              "type": "Identifier",
              "start": 2219,
              "end": 2220,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2223,
            "end": 2228
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
