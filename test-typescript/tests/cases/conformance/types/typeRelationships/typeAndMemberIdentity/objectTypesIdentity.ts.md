__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 1663,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 72,
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
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
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
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
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
      "start": 74,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 102,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 100,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
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
              "start": 91,
              "end": 99,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 93,
                "end": 99
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
      "start": 104,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 121,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
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
              "start": 124,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
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
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
      "start": 132,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 164,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 162,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
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
      "start": 166,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 189,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 173,
                "end": 189,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 175,
                    "end": 187,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 178,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
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
      "start": 190,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 198,
            "end": 209,
            "properties": [
              {
                "type": "Property",
                "start": 200,
                "end": 207,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 203,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 205,
                  "end": 207,
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
      "start": 212,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 225,
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
          "start": 226,
          "end": 230,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
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
      "start": 233,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 246,
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
          "start": 247,
          "end": 251,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 251,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
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
      "start": 263,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
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
          "start": 277,
          "end": 283,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 278,
            "end": 283,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 280,
              "end": 283
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 285,
        "end": 288,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 290,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 304,
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
          "start": 305,
          "end": 309,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 309,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 308,
              "end": 309,
              "typeName": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
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
      "start": 312,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 326,
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
          "start": 327,
          "end": 331,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 328,
            "end": 331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 330,
              "end": 331,
              "typeName": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
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
      "start": 343,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 357,
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
          "start": 358,
          "end": 364,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 359,
            "end": 364,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 361,
              "end": 364
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 366,
        "end": 369,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 371,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 385,
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
          "start": 386,
          "end": 398,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 398,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 389,
              "end": 398,
              "typeName": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 390,
                "end": 398,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 391,
                    "end": 397
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
      "start": 401,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 415,
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
          "start": 416,
          "end": 428,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 417,
            "end": 428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 419,
              "end": 428,
              "typeName": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 420,
                "end": 428,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 421,
                    "end": 427
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
      "start": 440,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 454,
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
          "start": 455,
          "end": 461,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 456,
            "end": 461,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 458,
              "end": 461
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 463,
        "end": 466,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 468,
      "end": 488,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 481,
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
          "start": 482,
          "end": 486,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 483,
            "end": 486,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 485,
              "end": 486,
              "typeName": {
                "type": "Identifier",
                "start": 485,
                "end": 486,
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
      "start": 489,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 502,
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
          "start": 503,
          "end": 507,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 504,
            "end": 507,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 506,
              "end": 507,
              "typeName": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
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
      "start": 519,
      "end": 544,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 532,
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
          "start": 533,
          "end": 539,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 534,
            "end": 539,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 536,
              "end": 539
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 541,
        "end": 544,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 546,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 559,
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
          "start": 560,
          "end": 571,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 561,
            "end": 571,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 563,
              "end": 571,
              "exprName": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
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
      "start": 574,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 587,
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
          "start": 588,
          "end": 599,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 589,
            "end": 599,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 591,
              "end": 599,
              "exprName": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
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
      "start": 611,
      "end": 636,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 624,
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
          "start": 625,
          "end": 631,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 631,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 628,
              "end": 631
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 633,
        "end": 636,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 638,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 651,
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
          "start": 652,
          "end": 663,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 653,
            "end": 663,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 655,
              "end": 663,
              "exprName": {
                "type": "Identifier",
                "start": 662,
                "end": 663,
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
      "start": 666,
      "end": 693,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 679,
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
          "start": 680,
          "end": 691,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 681,
            "end": 691,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 683,
              "end": 691,
              "exprName": {
                "type": "Identifier",
                "start": 690,
                "end": 691,
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
      "start": 703,
      "end": 728,
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 716,
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
          "start": 717,
          "end": 723,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 718,
            "end": 723,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 720,
              "end": 723
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 725,
        "end": 728,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 730,
      "end": 750,
      "id": {
        "type": "Identifier",
        "start": 739,
        "end": 743,
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
          "start": 744,
          "end": 748,
          "name": "x",
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
      "start": 751,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 760,
        "end": 764,
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
          "start": 765,
          "end": 769,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 766,
            "end": 769,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 768,
              "end": 769,
              "typeName": {
                "type": "Identifier",
                "start": 768,
                "end": 769,
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
      "start": 781,
      "end": 806,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 794,
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
          "start": 795,
          "end": 801,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 796,
            "end": 801,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 798,
              "end": 801
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 803,
        "end": 806,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 808,
      "end": 829,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 822,
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
          "start": 823,
          "end": 827,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 824,
            "end": 827,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 826,
              "end": 827,
              "typeName": {
                "type": "Identifier",
                "start": 826,
                "end": 827,
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
      "start": 830,
      "end": 859,
      "id": {
        "type": "Identifier",
        "start": 839,
        "end": 844,
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
          "start": 845,
          "end": 857,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 846,
            "end": 857,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 848,
              "end": 857,
              "typeName": {
                "type": "Identifier",
                "start": 848,
                "end": 849,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 849,
                "end": 857,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 850,
                    "end": 856
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
      "start": 869,
      "end": 895,
      "id": {
        "type": "Identifier",
        "start": 878,
        "end": 883,
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
          "start": 884,
          "end": 890,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 885,
            "end": 890,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 887,
              "end": 890
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 892,
        "end": 895,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 897,
      "end": 917,
      "id": {
        "type": "Identifier",
        "start": 906,
        "end": 910,
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
          "start": 911,
          "end": 915,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 912,
            "end": 915,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 914,
              "end": 915,
              "typeName": {
                "type": "Identifier",
                "start": 914,
                "end": 915,
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
      "start": 918,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 927,
        "end": 931,
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
          "start": 932,
          "end": 936,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 933,
            "end": 936,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 935,
              "end": 936,
              "typeName": {
                "type": "Identifier",
                "start": 935,
                "end": 936,
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
      "start": 948,
      "end": 973,
      "id": {
        "type": "Identifier",
        "start": 957,
        "end": 961,
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
      "end": 995,
      "id": {
        "type": "Identifier",
        "start": 984,
        "end": 988,
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
          "start": 989,
          "end": 993,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 990,
            "end": 993,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 992,
              "end": 993,
              "typeName": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
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
      "start": 996,
      "end": 1023,
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1009,
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
          "start": 1010,
          "end": 1021,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1021,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1013,
              "end": 1021,
              "exprName": {
                "type": "Identifier",
                "start": 1020,
                "end": 1021,
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
      "start": 1033,
      "end": 1058,
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1046,
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
          "start": 1047,
          "end": 1053,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1048,
            "end": 1053,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1050,
              "end": 1053
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1055,
        "end": 1058,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1060,
      "end": 1080,
      "id": {
        "type": "Identifier",
        "start": 1069,
        "end": 1073,
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
          "start": 1074,
          "end": 1078,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1075,
            "end": 1078,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1077,
              "end": 1078,
              "typeName": {
                "type": "Identifier",
                "start": 1077,
                "end": 1078,
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
      "start": 1081,
      "end": 1101,
      "id": {
        "type": "Identifier",
        "start": 1090,
        "end": 1094,
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
          "start": 1095,
          "end": 1099,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1096,
            "end": 1099,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1098,
              "end": 1099,
              "typeName": {
                "type": "Identifier",
                "start": 1098,
                "end": 1099,
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
      "start": 1111,
      "end": 1136,
      "id": {
        "type": "Identifier",
        "start": 1120,
        "end": 1124,
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
          "start": 1125,
          "end": 1131,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1126,
            "end": 1131,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1128,
              "end": 1131
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1133,
        "end": 1136,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1138,
      "end": 1158,
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1151,
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
          "start": 1152,
          "end": 1156,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1153,
            "end": 1156,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1155,
              "end": 1156,
              "typeName": {
                "type": "Identifier",
                "start": 1155,
                "end": 1156,
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
      "start": 1159,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 1168,
        "end": 1172,
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
          "start": 1173,
          "end": 1185,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1174,
            "end": 1185,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1176,
              "end": 1185,
              "typeName": {
                "type": "Identifier",
                "start": 1176,
                "end": 1177,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1177,
                "end": 1185,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1178,
                    "end": 1184
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
      "start": 1197,
      "end": 1222,
      "id": {
        "type": "Identifier",
        "start": 1206,
        "end": 1210,
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
          "start": 1211,
          "end": 1217,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1212,
            "end": 1217,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1214,
              "end": 1217
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1219,
        "end": 1222,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1224,
      "end": 1245,
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1238,
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
          "start": 1239,
          "end": 1243,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1240,
            "end": 1243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1242,
              "end": 1243,
              "typeName": {
                "type": "Identifier",
                "start": 1242,
                "end": 1243,
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
      "start": 1246,
      "end": 1274,
      "id": {
        "type": "Identifier",
        "start": 1255,
        "end": 1260,
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
          "start": 1261,
          "end": 1272,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1262,
            "end": 1272,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1264,
              "end": 1272,
              "exprName": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
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
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1293,
        "end": 1298,
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
          "start": 1299,
          "end": 1305,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1300,
            "end": 1305,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1302,
              "end": 1305
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1307,
        "end": 1310,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1312,
      "end": 1333,
      "id": {
        "type": "Identifier",
        "start": 1321,
        "end": 1326,
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
          "start": 1327,
          "end": 1331,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1328,
            "end": 1331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1330,
              "end": 1331,
              "typeName": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
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
      "start": 1334,
      "end": 1362,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1348,
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
          "start": 1349,
          "end": 1360,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1350,
            "end": 1360,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1352,
              "end": 1360,
              "exprName": {
                "type": "Identifier",
                "start": 1359,
                "end": 1360,
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
      "start": 1372,
      "end": 1398,
      "id": {
        "type": "Identifier",
        "start": 1381,
        "end": 1386,
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
          "start": 1387,
          "end": 1393,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1388,
            "end": 1393,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1390,
              "end": 1393
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1395,
        "end": 1398,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1400,
      "end": 1421,
      "id": {
        "type": "Identifier",
        "start": 1409,
        "end": 1414,
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
          "start": 1415,
          "end": 1419,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1416,
            "end": 1419,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1418,
              "end": 1419,
              "typeName": {
                "type": "Identifier",
                "start": 1418,
                "end": 1419,
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
      "start": 1422,
      "end": 1451,
      "id": {
        "type": "Identifier",
        "start": 1431,
        "end": 1436,
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
          "start": 1437,
          "end": 1449,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1438,
            "end": 1449,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1440,
              "end": 1449,
              "typeName": {
                "type": "Identifier",
                "start": 1440,
                "end": 1441,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1441,
                "end": 1449,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1442,
                    "end": 1448
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
      "start": 1461,
      "end": 1487,
      "id": {
        "type": "Identifier",
        "start": 1470,
        "end": 1475,
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
          "start": 1476,
          "end": 1482,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1477,
            "end": 1482,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1479,
              "end": 1482
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1484,
        "end": 1487,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1489,
      "end": 1510,
      "id": {
        "type": "Identifier",
        "start": 1498,
        "end": 1503,
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
          "start": 1504,
          "end": 1508,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1505,
            "end": 1508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1507,
              "end": 1508,
              "typeName": {
                "type": "Identifier",
                "start": 1507,
                "end": 1508,
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
      "start": 1511,
      "end": 1539,
      "id": {
        "type": "Identifier",
        "start": 1520,
        "end": 1525,
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
          "start": 1526,
          "end": 1537,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1527,
            "end": 1537,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1529,
              "end": 1537,
              "exprName": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
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
      "start": 1549,
      "end": 1575,
      "id": {
        "type": "Identifier",
        "start": 1558,
        "end": 1563,
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
          "start": 1564,
          "end": 1570,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1565,
            "end": 1570,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1567,
              "end": 1570
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1572,
        "end": 1575,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1577,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1586,
        "end": 1591,
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
          "start": 1592,
          "end": 1596,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1593,
            "end": 1596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1595,
              "end": 1596,
              "typeName": {
                "type": "Identifier",
                "start": 1595,
                "end": 1596,
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
      "start": 1599,
      "end": 1627,
      "id": {
        "type": "Identifier",
        "start": 1608,
        "end": 1613,
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
          "start": 1614,
          "end": 1625,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1615,
            "end": 1625,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1617,
              "end": 1625,
              "exprName": {
                "type": "Identifier",
                "start": 1624,
                "end": 1625,
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
      "start": 1637,
      "end": 1663,
      "id": {
        "type": "Identifier",
        "start": 1646,
        "end": 1651,
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
          "start": 1652,
          "end": 1658,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1653,
            "end": 1658,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1655,
              "end": 1658
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1660,
        "end": 1663,
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
