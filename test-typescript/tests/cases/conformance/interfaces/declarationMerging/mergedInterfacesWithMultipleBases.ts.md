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
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 133,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "a",
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
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
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
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 172,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "b",
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
              "start": 163,
              "end": 171,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 165,
                "end": 171
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 196,
          "end": 197,
          "expression": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 240,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 268,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 345,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 288,
            "end": 298,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "a",
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
              "start": 289,
              "end": 297,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 291,
                "end": 297
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 303,
            "end": 313,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "name": "b",
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
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 328,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "name": "y",
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
              "start": 319,
              "end": 327,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 321,
                "end": 327
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 333,
            "end": 343,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "name": "z",
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
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 336,
                "end": 342
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 280,
          "end": 281,
          "expression": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "name": "A",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 355,
            "name": "a",
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
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 368,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 365,
            "end": 368,
            "object": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 426,
              "end": 427,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 431,
              "end": 452,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 441,
                  "end": 446,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "name": "a",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 458,
            "end": 491,
            "id": {
              "type": "Identifier",
              "start": 464,
              "end": 466,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 470,
              "end": 491,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 480,
                  "end": 485,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "name": "b",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 497,
            "end": 546,
            "id": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            ],
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 619,
              "end": 620,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 643,
              "end": 729,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 653,
                  "end": 664,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 654,
                    "name": "a",
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
                    "start": 654,
                    "end": 663,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 656,
                      "end": 663
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 673,
                  "end": 683,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 674,
                    "name": "b",
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
                    "start": 674,
                    "end": 682,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 676,
                      "end": 682
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 692,
                  "end": 703,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "name": "y",
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
                    "start": 693,
                    "end": 702,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 695,
                      "end": 702
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 712,
                  "end": 723,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 713,
                    "name": "z",
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
                    "start": 713,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 715,
                      "end": 722
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 632,
                "end": 642,
                "expression": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 633,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
