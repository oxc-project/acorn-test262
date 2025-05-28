__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 119,
  "end": 964,
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
      "type": "ClassDeclaration",
      "start": 176,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 185,
        "end": 203,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 191,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 200,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 194,
                "end": 200
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
      "start": 205,
      "end": 232,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 232,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 220,
            "end": 230,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 229,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 223,
                "end": 229
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
      "start": 235,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 255,
          "end": 256,
          "expression": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 258,
          "end": 260,
          "expression": {
            "type": "Identifier",
            "start": 258,
            "end": 260,
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 261,
        "end": 279,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 267,
            "end": 277,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 276,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
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
      "start": 281,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 292,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 301,
          "end": 303,
          "expression": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 305,
          "end": 307,
          "expression": {
            "type": "Identifier",
            "start": 305,
            "end": 307,
            "decorators": [],
            "name": "C4",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 308,
        "end": 326,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 314,
            "end": 324,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 323,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 317,
                "end": 323
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
      "start": 328,
      "end": 442,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
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
          "start": 347,
          "end": 348,
          "expression": {
            "type": "Identifier",
            "start": 347,
            "end": 348,
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
        "start": 349,
        "end": 442,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 355,
            "end": 365,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 356,
              "end": 364,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 358,
                "end": 364
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
            "start": 370,
            "end": 380,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 379,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 373,
                "end": 379
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
            "start": 385,
            "end": 395,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 386,
              "end": 394,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 388,
                "end": 394
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
            "start": 400,
            "end": 410,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 409,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 403,
                "end": 409
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
            "start": 415,
            "end": 425,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 424,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 418,
                "end": 424
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
            "start": 430,
            "end": 440,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 439,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 433,
                "end": 439
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
      "start": 444,
      "end": 453,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 452,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 452,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 451,
                "end": 452,
                "typeName": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
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
      "start": 454,
      "end": 466,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 459,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 462,
            "end": 465,
            "object": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
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
      "start": 502,
      "end": 964,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 510,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 511,
        "end": 964,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 517,
            "end": 549,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 523,
              "end": 524,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 524,
              "end": 527,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 525,
                  "end": 526,
                  "name": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
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
              "start": 528,
              "end": 549,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 538,
                  "end": 543,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 542,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 541,
                      "end": 542,
                      "typeName": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 542,
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
            "start": 555,
            "end": 588,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 561,
              "end": 563,
              "decorators": [],
              "name": "C2",
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 567,
              "end": 588,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 577,
                  "end": 582,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 578,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 581,
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
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
            "start": 594,
            "end": 627,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 600,
              "end": 602,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 602,
              "end": 605,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 603,
                  "end": 604,
                  "name": {
                    "type": "Identifier",
                    "start": 603,
                    "end": 604,
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
              "start": 606,
              "end": 627,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 616,
                  "end": 621,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 616,
                    "end": 617,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 617,
                    "end": 620,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 619,
                      "end": 620,
                      "typeName": {
                        "type": "Identifier",
                        "start": 619,
                        "end": 620,
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
            "start": 633,
            "end": 666,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 639,
              "end": 641,
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 641,
              "end": 644,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 642,
                  "end": 643,
                  "name": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
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
              "start": 645,
              "end": 666,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 655,
                  "end": 660,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 656,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 656,
                    "end": 659,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 658,
                      "end": 659,
                      "typeName": {
                        "type": "Identifier",
                        "start": 658,
                        "end": 659,
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
            "start": 672,
            "end": 728,
            "id": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 683,
              "end": 686,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 684,
                  "end": 685,
                  "name": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 685,
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
                "start": 695,
                "end": 699,
                "expression": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 696,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 696,
                  "end": 699,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 697,
                      "end": 698,
                      "typeName": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 698,
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
                "type": "TSInterfaceHeritage",
                "start": 701,
                "end": 706,
                "expression": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 703,
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 703,
                  "end": 706,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 704,
                      "end": 705,
                      "typeName": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 705,
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
              "start": 707,
              "end": 728,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 717,
                  "end": 722,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 718,
                    "end": 721,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 720,
                      "end": 721,
                      "typeName": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
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
            "start": 734,
            "end": 801,
            "id": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 745,
              "end": 748,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 746,
                  "end": 747,
                  "name": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 747,
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
                "start": 757,
                "end": 767,
                "expression": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 759,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 759,
                  "end": 767,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 760,
                      "end": 766
                    }
                  ]
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 769,
                "end": 779,
                "expression": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 771,
                  "decorators": [],
                  "name": "C4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 771,
                  "end": 779,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 772,
                      "end": 778
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 780,
              "end": 801,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 790,
                  "end": 795,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 791,
                    "end": 794,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 793,
                      "end": 794,
                      "typeName": {
                        "type": "Identifier",
                        "start": 793,
                        "end": 794,
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
            "start": 807,
            "end": 962,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 813,
              "end": 814,
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
                "start": 826,
                "end": 836,
                "expression": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 827,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 827,
                  "end": 836,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 828,
                      "end": 835
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 837,
              "end": 962,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 847,
                  "end": 858,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 847,
                    "end": 848,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 848,
                    "end": 857,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 850,
                      "end": 857
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
                  "start": 867,
                  "end": 877,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 868,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 868,
                    "end": 876,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 870,
                      "end": 876
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
                  "start": 886,
                  "end": 897,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 886,
                    "end": 887,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 887,
                    "end": 896,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 889,
                      "end": 896
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
                  "start": 906,
                  "end": 916,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 907,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 907,
                    "end": 915,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 909,
                      "end": 915
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
                  "start": 925,
                  "end": 936,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 925,
                    "end": 926,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 926,
                    "end": 935,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 928,
                      "end": 935
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
                  "start": 945,
                  "end": 956,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 945,
                    "end": 946,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 946,
                    "end": 955,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 948,
                      "end": 955
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
