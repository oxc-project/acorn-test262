__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2274,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 80,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "name": "foo",
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
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            },
            "accessibility": "private"
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
      "start": 82,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "name": "foo",
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
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              }
            },
            "accessibility": "private"
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
      "start": 120,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 137,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "name": "foo",
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
              "start": 148,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 127,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
      "start": 156,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 168,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 174,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
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
      "start": 190,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 198,
        "name": "PA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 212,
        "body": []
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
      "start": 214,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 222,
        "name": "PB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 236,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 261,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 245,
                "end": 261,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 247,
                    "end": 259,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 250,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 250,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 252,
                        "end": 258
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 262,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 270,
            "end": 281,
            "properties": [
              {
                "type": "Property",
                "start": 272,
                "end": 279,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 275,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 277,
                  "end": 279,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 284,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 297,
        "name": "foo1",
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
          "start": 298,
          "end": 302,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 302,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 301,
              "end": 302,
              "typeName": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 305,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 318,
        "name": "foo1",
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
          "start": 319,
          "end": 323,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 320,
            "end": 323,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 322,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 335,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 348,
        "name": "foo1",
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
          "start": 349,
          "end": 355,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 350,
            "end": 355,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 352,
              "end": 355
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 360,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 362,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 376,
        "name": "foo1b",
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
          "start": 377,
          "end": 381,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 378,
            "end": 381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 380,
              "end": 381,
              "typeName": {
                "type": "Identifier",
                "start": 380,
                "end": 381,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 384,
      "end": 405,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 398,
        "name": "foo1b",
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
          "start": 399,
          "end": 403,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 400,
            "end": 403,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 402,
              "end": 403,
              "typeName": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 415,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 429,
        "name": "foo1b",
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
          "start": 430,
          "end": 436,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 431,
            "end": 436,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 433,
              "end": 436
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 438,
        "end": 441,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 443,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 457,
        "name": "foo1c",
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
          "start": 458,
          "end": 470,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 470,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 470,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 462,
                "end": 470,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 463,
                    "end": 469
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 473,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 482,
        "end": 487,
        "name": "foo1c",
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
          "start": 488,
          "end": 500,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 489,
            "end": 500,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 491,
              "end": 500,
              "typeName": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 492,
                "end": 500,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 493,
                    "end": 499
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 512,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 526,
        "name": "foo1c",
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
          "start": 527,
          "end": 533,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 528,
            "end": 533,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 530,
              "end": 533
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 535,
        "end": 538,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 540,
      "end": 560,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 553,
        "name": "foo2",
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
          "start": 554,
          "end": 558,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 555,
            "end": 558,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 557,
              "end": 558,
              "typeName": {
                "type": "Identifier",
                "start": 557,
                "end": 558,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 561,
      "end": 581,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 574,
        "name": "foo2",
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
          "start": 575,
          "end": 579,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 576,
            "end": 579,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 578,
              "end": 579,
              "typeName": {
                "type": "Identifier",
                "start": 578,
                "end": 579,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 591,
      "end": 616,
      "id": {
        "type": "Identifier",
        "start": 600,
        "end": 604,
        "name": "foo2",
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
          "start": 605,
          "end": 611,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 606,
            "end": 611,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 608,
              "end": 611
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 613,
        "end": 616,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 618,
      "end": 645,
      "id": {
        "type": "Identifier",
        "start": 627,
        "end": 631,
        "name": "foo3",
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
          "start": 632,
          "end": 643,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 633,
            "end": 643,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 635,
              "end": 643,
              "exprName": {
                "type": "Identifier",
                "start": 642,
                "end": 643,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 646,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 659,
        "name": "foo3",
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
          "start": 660,
          "end": 671,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 671,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 663,
              "end": 671,
              "exprName": {
                "type": "Identifier",
                "start": 670,
                "end": 671,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 683,
      "end": 708,
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 696,
        "name": "foo3",
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
          "start": 697,
          "end": 703,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 698,
            "end": 703,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 700,
              "end": 703
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 705,
        "end": 708,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 710,
      "end": 737,
      "id": {
        "type": "Identifier",
        "start": 719,
        "end": 723,
        "name": "foo4",
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
          "start": 724,
          "end": 735,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 725,
            "end": 735,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 727,
              "end": 735,
              "exprName": {
                "type": "Identifier",
                "start": 734,
                "end": 735,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 738,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 747,
        "end": 751,
        "name": "foo4",
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
          "start": 752,
          "end": 763,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 753,
            "end": 763,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 755,
              "end": 763,
              "exprName": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 775,
      "end": 800,
      "id": {
        "type": "Identifier",
        "start": 784,
        "end": 788,
        "name": "foo4",
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
          "start": 789,
          "end": 795,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 790,
            "end": 795,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 792,
              "end": 795
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 797,
        "end": 800,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 802,
      "end": 822,
      "id": {
        "type": "Identifier",
        "start": 811,
        "end": 815,
        "name": "foo5",
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
          "start": 816,
          "end": 820,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 817,
            "end": 820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 819,
              "end": 820,
              "typeName": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 823,
      "end": 843,
      "id": {
        "type": "Identifier",
        "start": 832,
        "end": 836,
        "name": "foo5",
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
          "start": 837,
          "end": 841,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 838,
            "end": 841,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 840,
              "end": 841,
              "typeName": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 856,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 865,
        "end": 869,
        "name": "foo5",
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
          "start": 870,
          "end": 876,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 871,
            "end": 876,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 873,
              "end": 876
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 878,
        "end": 881,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 883,
      "end": 904,
      "id": {
        "type": "Identifier",
        "start": 892,
        "end": 897,
        "name": "foo5b",
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
          "start": 898,
          "end": 902,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 899,
            "end": 902,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 901,
              "end": 902,
              "typeName": {
                "type": "Identifier",
                "start": 901,
                "end": 902,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 905,
      "end": 934,
      "id": {
        "type": "Identifier",
        "start": 914,
        "end": 919,
        "name": "foo5b",
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
          "start": 920,
          "end": 932,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 921,
            "end": 932,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 923,
              "end": 932,
              "typeName": {
                "type": "Identifier",
                "start": 923,
                "end": 924,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 924,
                "end": 932,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 925,
                    "end": 931
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 947,
      "end": 973,
      "id": {
        "type": "Identifier",
        "start": 956,
        "end": 961,
        "name": "foo5b",
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
          "start": 962,
          "end": 968,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 963,
            "end": 968,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 965,
              "end": 968
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 970,
        "end": 973,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 975,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 984,
        "end": 989,
        "name": "foo5c",
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
          "start": 990,
          "end": 994,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 991,
            "end": 994,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 993,
              "end": 994,
              "typeName": {
                "type": "Identifier",
                "start": 993,
                "end": 994,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 997,
      "end": 1019,
      "id": {
        "type": "Identifier",
        "start": 1006,
        "end": 1011,
        "name": "foo5c",
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
          "start": 1012,
          "end": 1017,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1013,
            "end": 1017,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1015,
              "end": 1017,
              "typeName": {
                "type": "Identifier",
                "start": 1015,
                "end": 1017,
                "name": "PA",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1029,
      "end": 1055,
      "id": {
        "type": "Identifier",
        "start": 1038,
        "end": 1043,
        "name": "foo5c",
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
          "start": 1044,
          "end": 1050,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1045,
            "end": 1050,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1047,
              "end": 1050
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1052,
        "end": 1055,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1057,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1066,
        "end": 1071,
        "name": "foo5d",
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
          "start": 1072,
          "end": 1076,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1073,
            "end": 1076,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1075,
              "end": 1076,
              "typeName": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1101,
      "id": {
        "type": "Identifier",
        "start": 1088,
        "end": 1093,
        "name": "foo5d",
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
          "start": 1094,
          "end": 1099,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1095,
            "end": 1099,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1097,
              "end": 1099,
              "typeName": {
                "type": "Identifier",
                "start": 1097,
                "end": 1099,
                "name": "PB",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1114,
      "end": 1140,
      "id": {
        "type": "Identifier",
        "start": 1123,
        "end": 1128,
        "name": "foo5d",
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
          "start": 1129,
          "end": 1135,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1130,
            "end": 1135,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1132,
              "end": 1135
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1137,
        "end": 1140,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1142,
      "end": 1162,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1155,
        "name": "foo6",
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
          "start": 1156,
          "end": 1160,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1157,
            "end": 1160,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1159,
              "end": 1160,
              "typeName": {
                "type": "Identifier",
                "start": 1159,
                "end": 1160,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1163,
      "end": 1183,
      "id": {
        "type": "Identifier",
        "start": 1172,
        "end": 1176,
        "name": "foo6",
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
          "start": 1177,
          "end": 1181,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1178,
            "end": 1181,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1180,
              "end": 1181,
              "typeName": {
                "type": "Identifier",
                "start": 1180,
                "end": 1181,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1196,
      "end": 1221,
      "id": {
        "type": "Identifier",
        "start": 1205,
        "end": 1209,
        "name": "foo6",
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
          "start": 1210,
          "end": 1216,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1216,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1213,
              "end": 1216
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1218,
        "end": 1221,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1223,
      "end": 1243,
      "id": {
        "type": "Identifier",
        "start": 1232,
        "end": 1236,
        "name": "foo7",
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
          "start": 1237,
          "end": 1241,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1238,
            "end": 1241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1240,
              "end": 1241,
              "typeName": {
                "type": "Identifier",
                "start": 1240,
                "end": 1241,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1244,
      "end": 1271,
      "id": {
        "type": "Identifier",
        "start": 1253,
        "end": 1257,
        "name": "foo7",
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
          "start": 1258,
          "end": 1269,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1259,
            "end": 1269,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1261,
              "end": 1269,
              "exprName": {
                "type": "Identifier",
                "start": 1268,
                "end": 1269,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1284,
      "end": 1309,
      "id": {
        "type": "Identifier",
        "start": 1293,
        "end": 1297,
        "name": "foo7",
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
          "start": 1298,
          "end": 1304,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1299,
            "end": 1304,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1301,
              "end": 1304
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1306,
        "end": 1309,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1311,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1320,
        "end": 1324,
        "name": "foo8",
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
          "start": 1325,
          "end": 1329,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1326,
            "end": 1329,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1328,
              "end": 1329,
              "typeName": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1332,
      "end": 1352,
      "id": {
        "type": "Identifier",
        "start": 1341,
        "end": 1345,
        "name": "foo8",
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
          "start": 1346,
          "end": 1350,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1347,
            "end": 1350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1349,
              "end": 1350,
              "typeName": {
                "type": "Identifier",
                "start": 1349,
                "end": 1350,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1365,
      "end": 1390,
      "id": {
        "type": "Identifier",
        "start": 1374,
        "end": 1378,
        "name": "foo8",
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
          "start": 1379,
          "end": 1385,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1380,
            "end": 1385,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1382,
              "end": 1385
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1387,
        "end": 1390,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1392,
      "end": 1412,
      "id": {
        "type": "Identifier",
        "start": 1401,
        "end": 1405,
        "name": "foo9",
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
          "start": 1406,
          "end": 1410,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1407,
            "end": 1410,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1409,
              "end": 1410,
              "typeName": {
                "type": "Identifier",
                "start": 1409,
                "end": 1410,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1413,
      "end": 1441,
      "id": {
        "type": "Identifier",
        "start": 1422,
        "end": 1426,
        "name": "foo9",
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
          "start": 1427,
          "end": 1439,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1428,
            "end": 1439,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1430,
              "end": 1439,
              "typeName": {
                "type": "Identifier",
                "start": 1430,
                "end": 1431,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1431,
                "end": 1439,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1432,
                    "end": 1438
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1454,
      "end": 1479,
      "id": {
        "type": "Identifier",
        "start": 1463,
        "end": 1467,
        "name": "foo9",
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
          "start": 1468,
          "end": 1474,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1469,
            "end": 1474,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1471,
              "end": 1474
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1476,
        "end": 1479,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1481,
      "end": 1502,
      "id": {
        "type": "Identifier",
        "start": 1490,
        "end": 1495,
        "name": "foo10",
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
          "start": 1496,
          "end": 1500,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1497,
            "end": 1500,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1499,
              "end": 1500,
              "typeName": {
                "type": "Identifier",
                "start": 1499,
                "end": 1500,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1503,
      "end": 1531,
      "id": {
        "type": "Identifier",
        "start": 1512,
        "end": 1517,
        "name": "foo10",
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
          "start": 1518,
          "end": 1529,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1519,
            "end": 1529,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1521,
              "end": 1529,
              "exprName": {
                "type": "Identifier",
                "start": 1528,
                "end": 1529,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1544,
      "end": 1570,
      "id": {
        "type": "Identifier",
        "start": 1553,
        "end": 1558,
        "name": "foo10",
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
          "start": 1559,
          "end": 1565,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1560,
            "end": 1565,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1562,
              "end": 1565
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1567,
        "end": 1570,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1572,
      "end": 1593,
      "id": {
        "type": "Identifier",
        "start": 1581,
        "end": 1586,
        "name": "foo11",
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
          "start": 1587,
          "end": 1591,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1588,
            "end": 1591,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1590,
              "end": 1591,
              "typeName": {
                "type": "Identifier",
                "start": 1590,
                "end": 1591,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1594,
      "end": 1622,
      "id": {
        "type": "Identifier",
        "start": 1603,
        "end": 1608,
        "name": "foo11",
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
          "start": 1609,
          "end": 1620,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1610,
            "end": 1620,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1612,
              "end": 1620,
              "exprName": {
                "type": "Identifier",
                "start": 1619,
                "end": 1620,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1635,
      "end": 1661,
      "id": {
        "type": "Identifier",
        "start": 1644,
        "end": 1649,
        "name": "foo11",
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
          "start": 1650,
          "end": 1656,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1651,
            "end": 1656,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1653,
              "end": 1656
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1658,
        "end": 1661,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1663,
      "end": 1685,
      "id": {
        "type": "Identifier",
        "start": 1672,
        "end": 1678,
        "name": "foo11b",
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
          "start": 1679,
          "end": 1683,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1680,
            "end": 1683,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1682,
              "end": 1683,
              "typeName": {
                "type": "Identifier",
                "start": 1682,
                "end": 1683,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1686,
      "end": 1709,
      "id": {
        "type": "Identifier",
        "start": 1695,
        "end": 1701,
        "name": "foo11b",
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
          "start": 1702,
          "end": 1707,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1703,
            "end": 1707,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1705,
              "end": 1707,
              "typeName": {
                "type": "Identifier",
                "start": 1705,
                "end": 1707,
                "name": "PA",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1722,
      "end": 1749,
      "id": {
        "type": "Identifier",
        "start": 1731,
        "end": 1737,
        "name": "foo11b",
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
          "start": 1738,
          "end": 1744,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1739,
            "end": 1744,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1741,
              "end": 1744
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1746,
        "end": 1749,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1751,
      "end": 1773,
      "id": {
        "type": "Identifier",
        "start": 1760,
        "end": 1766,
        "name": "foo11c",
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
          "start": 1767,
          "end": 1771,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1768,
            "end": 1771,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1770,
              "end": 1771,
              "typeName": {
                "type": "Identifier",
                "start": 1770,
                "end": 1771,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1774,
      "end": 1797,
      "id": {
        "type": "Identifier",
        "start": 1783,
        "end": 1789,
        "name": "foo11c",
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
          "start": 1790,
          "end": 1795,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1791,
            "end": 1795,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1793,
              "end": 1795,
              "typeName": {
                "type": "Identifier",
                "start": 1793,
                "end": 1795,
                "name": "PB",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1807,
      "end": 1834,
      "id": {
        "type": "Identifier",
        "start": 1816,
        "end": 1822,
        "name": "foo11c",
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
          "start": 1823,
          "end": 1829,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1824,
            "end": 1829,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1826,
              "end": 1829
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1831,
        "end": 1834,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1836,
      "end": 1857,
      "id": {
        "type": "Identifier",
        "start": 1845,
        "end": 1850,
        "name": "foo12",
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
          "start": 1851,
          "end": 1855,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1852,
            "end": 1855,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1854,
              "end": 1855,
              "typeName": {
                "type": "Identifier",
                "start": 1854,
                "end": 1855,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1858,
      "end": 1887,
      "id": {
        "type": "Identifier",
        "start": 1867,
        "end": 1872,
        "name": "foo12",
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
          "start": 1873,
          "end": 1885,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1874,
            "end": 1885,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1876,
              "end": 1885,
              "typeName": {
                "type": "Identifier",
                "start": 1876,
                "end": 1877,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1877,
                "end": 1885,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1878,
                    "end": 1884
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1900,
      "end": 1926,
      "id": {
        "type": "Identifier",
        "start": 1909,
        "end": 1914,
        "name": "foo12",
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
          "start": 1915,
          "end": 1921,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1916,
            "end": 1921,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1918,
              "end": 1921
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1923,
        "end": 1926,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1928,
      "end": 1949,
      "id": {
        "type": "Identifier",
        "start": 1937,
        "end": 1942,
        "name": "foo13",
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
          "start": 1943,
          "end": 1947,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1944,
            "end": 1947,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1946,
              "end": 1947,
              "typeName": {
                "type": "Identifier",
                "start": 1946,
                "end": 1947,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1950,
      "end": 1978,
      "id": {
        "type": "Identifier",
        "start": 1959,
        "end": 1964,
        "name": "foo13",
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
          "start": 1965,
          "end": 1976,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1966,
            "end": 1976,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1968,
              "end": 1976,
              "exprName": {
                "type": "Identifier",
                "start": 1975,
                "end": 1976,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1988,
      "end": 2014,
      "id": {
        "type": "Identifier",
        "start": 1997,
        "end": 2002,
        "name": "foo13",
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
          "start": 2003,
          "end": 2009,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2004,
            "end": 2009,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2006,
              "end": 2009
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2011,
        "end": 2014,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2016,
      "end": 2037,
      "id": {
        "type": "Identifier",
        "start": 2025,
        "end": 2030,
        "name": "foo14",
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
          "start": 2031,
          "end": 2035,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2032,
            "end": 2035,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2034,
              "end": 2035,
              "typeName": {
                "type": "Identifier",
                "start": 2034,
                "end": 2035,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2038,
      "end": 2066,
      "id": {
        "type": "Identifier",
        "start": 2047,
        "end": 2052,
        "name": "foo14",
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
          "start": 2053,
          "end": 2064,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2054,
            "end": 2064,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2056,
              "end": 2064,
              "exprName": {
                "type": "Identifier",
                "start": 2063,
                "end": 2064,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2076,
      "end": 2102,
      "id": {
        "type": "Identifier",
        "start": 2085,
        "end": 2090,
        "name": "foo14",
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
          "start": 2091,
          "end": 2097,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2092,
            "end": 2097,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2094,
              "end": 2097
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2099,
        "end": 2102,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2104,
      "end": 2125,
      "id": {
        "type": "Identifier",
        "start": 2113,
        "end": 2118,
        "name": "foo15",
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
          "start": 2119,
          "end": 2123,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2120,
            "end": 2123,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2122,
              "end": 2123,
              "typeName": {
                "type": "Identifier",
                "start": 2122,
                "end": 2123,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2126,
      "end": 2148,
      "id": {
        "type": "Identifier",
        "start": 2135,
        "end": 2140,
        "name": "foo15",
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
          "start": 2141,
          "end": 2146,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2142,
            "end": 2146,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2144,
              "end": 2146,
              "typeName": {
                "type": "Identifier",
                "start": 2144,
                "end": 2146,
                "name": "PA",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2161,
      "end": 2187,
      "id": {
        "type": "Identifier",
        "start": 2170,
        "end": 2175,
        "name": "foo15",
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
          "start": 2176,
          "end": 2182,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2177,
            "end": 2182,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2179,
              "end": 2182
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2184,
        "end": 2187,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2189,
      "end": 2210,
      "id": {
        "type": "Identifier",
        "start": 2198,
        "end": 2203,
        "name": "foo16",
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
          "start": 2204,
          "end": 2208,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2205,
            "end": 2208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2207,
              "end": 2208,
              "typeName": {
                "type": "Identifier",
                "start": 2207,
                "end": 2208,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2211,
      "end": 2233,
      "id": {
        "type": "Identifier",
        "start": 2220,
        "end": 2225,
        "name": "foo16",
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
          "start": 2226,
          "end": 2231,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2227,
            "end": 2231,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2229,
              "end": 2231,
              "typeName": {
                "type": "Identifier",
                "start": 2229,
                "end": 2231,
                "name": "PB",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2246,
      "end": 2272,
      "id": {
        "type": "Identifier",
        "start": 2255,
        "end": 2260,
        "name": "foo16",
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
          "start": 2261,
          "end": 2267,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2262,
            "end": 2267,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2264,
              "end": 2267
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2269,
        "end": 2272,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
