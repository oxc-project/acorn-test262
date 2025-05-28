__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 119,
  "end": 731,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 145,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 133,
            "end": 143,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 174,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 172,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 171,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 165,
                "end": 171
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 196,
          "end": 197,
          "expression": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 198,
        "end": 216,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 204,
            "end": 214,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 213,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
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
      "start": 218,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 240,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 241,
        "end": 259,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 247,
            "end": 257,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
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
      "start": 261,
      "end": 345,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 268,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 280,
          "end": 281,
          "expression": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 345,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 288,
            "end": 298,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 297,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 291,
                "end": 297
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 303,
            "end": 313,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 328,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 327,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 321,
                "end": 327
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 333,
            "end": 343,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 336,
                "end": 342
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 356,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 355,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "decorators": [],
                  "name": "A",
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 369,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 368,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 365,
            "end": 368,
            "object": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 405,
      "end": 731,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 413,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 414,
        "end": 731,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 420,
            "end": 452,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 427,
              "end": 430,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 428,
                  "end": 429,
                  "name": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 431,
              "end": 452,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 441,
                  "end": 446,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 445,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "decorators": [],
                        "name": "T",
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
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 458,
            "end": 491,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 464,
              "end": 466,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 466,
              "end": 469,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 467,
                  "end": 468,
                  "name": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 470,
              "end": 491,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 480,
                  "end": 485,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 484,
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 497,
            "end": 546,
            "id": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 508,
              "end": 511,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 509,
                  "end": 510,
                  "name": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 510,
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
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 520,
                "end": 524,
                "expression": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 521,
                  "end": 524,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 522,
                      "end": 523,
                      "typeName": {
                        "type": "Identifier",
                        "start": 522,
                        "end": 523,
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
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 525,
              "end": 546,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 535,
                  "end": 540,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 536,
                    "end": 539,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 538,
                      "end": 539,
                      "typeName": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 552,
            "end": 607,
            "id": {
              "type": "Identifier",
              "start": 562,
              "end": 563,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 563,
              "end": 566,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 564,
                  "end": 565,
                  "name": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 565,
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
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 575,
                "end": 585,
                "expression": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 577,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 577,
                  "end": 585,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 578,
                      "end": 584
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 586,
              "end": 607,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 596,
                  "end": 601,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 596,
                    "end": 597,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 597,
                    "end": 600,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 599,
                      "end": 600,
                      "typeName": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
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
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 613,
            "end": 729,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 619,
              "end": 620,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 632,
                "end": 642,
                "expression": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 633,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 633,
                  "end": 642,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 634,
                      "end": 641
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 643,
              "end": 729,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 653,
                  "end": 664,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 654,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 663,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 656,
                      "end": 663
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 673,
                  "end": 683,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 674,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 674,
                    "end": 682,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 676,
                      "end": 682
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 692,
                  "end": 703,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 693,
                    "end": 702,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 695,
                      "end": 702
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 712,
                  "end": 723,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 713,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 713,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 715,
                      "end": 722
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
