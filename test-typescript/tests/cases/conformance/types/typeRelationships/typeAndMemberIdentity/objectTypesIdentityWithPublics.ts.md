__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 1684,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 79,
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
        "end": 79,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
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
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            },
            "accessibility": "public"
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
      "start": 81,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 95,
            "end": 114,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
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
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            },
            "accessibility": "public"
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
      "start": 118,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
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
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 125,
        "end": 128,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 126,
            "end": 127,
            "name": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
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
      "start": 153,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 183,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 174,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
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
      "start": 187,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 210,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 194,
                "end": 210,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 196,
                    "end": 208,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 199,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
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
      "start": 211,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 219,
            "end": 230,
            "properties": [
              {
                "type": "Property",
                "start": 221,
                "end": 228,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 224,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 226,
                  "end": 228,
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
      "type": "TSDeclareFunction",
      "start": 254,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 267,
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
          "start": 268,
          "end": 272,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 272,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 271,
              "end": 272,
              "typeName": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
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
      "start": 284,
      "end": 309,
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
          "end": 304,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 304,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 301,
              "end": 304
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 309,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 311,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 325,
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
          "start": 326,
          "end": 330,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 330,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
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
      "start": 333,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 347,
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
          "start": 348,
          "end": 352,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 351,
              "end": 352,
              "typeName": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
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
      "start": 364,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 378,
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
          "start": 379,
          "end": 385,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 385,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 382,
              "end": 385
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 387,
        "end": 390,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 392,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 406,
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
          "start": 407,
          "end": 419,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 419,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 419,
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 411,
                "end": 419,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 412,
                    "end": 418
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
      "start": 422,
      "end": 451,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 436,
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
          "start": 437,
          "end": 449,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 449,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 449,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 441,
                "end": 449,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
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
      "start": 461,
      "end": 487,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 475,
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
          "start": 476,
          "end": 482,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 482,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 479,
              "end": 482
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 484,
        "end": 487,
        "body": []
      },
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
      "type": "TSDeclareFunction",
      "start": 510,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 519,
        "end": 523,
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
          "start": 524,
          "end": 528,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 525,
            "end": 528,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 527,
              "end": 528,
              "typeName": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
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
      "start": 540,
      "end": 565,
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
          "end": 560,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 555,
            "end": 560,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 557,
              "end": 560
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 562,
        "end": 565,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 567,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 576,
        "end": 580,
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
          "start": 581,
          "end": 592,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 582,
            "end": 592,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 584,
              "end": 592,
              "exprName": {
                "type": "Identifier",
                "start": 591,
                "end": 592,
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
      "start": 595,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 608,
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
          "start": 609,
          "end": 620,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 610,
            "end": 620,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 612,
              "end": 620,
              "exprName": {
                "type": "Identifier",
                "start": 619,
                "end": 620,
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
      "start": 632,
      "end": 657,
      "id": {
        "type": "Identifier",
        "start": 641,
        "end": 645,
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
          "start": 646,
          "end": 652,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 647,
            "end": 652,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 649,
              "end": 652
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 654,
        "end": 657,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 659,
      "end": 686,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 672,
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
          "start": 673,
          "end": 684,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 674,
            "end": 684,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 676,
              "end": 684,
              "exprName": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
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
      "start": 687,
      "end": 714,
      "id": {
        "type": "Identifier",
        "start": 696,
        "end": 700,
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
          "start": 701,
          "end": 712,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 702,
            "end": 712,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 704,
              "end": 712,
              "exprName": {
                "type": "Identifier",
                "start": 711,
                "end": 712,
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
      "start": 724,
      "end": 749,
      "id": {
        "type": "Identifier",
        "start": 733,
        "end": 737,
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
          "start": 738,
          "end": 744,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 739,
            "end": 744,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 741,
              "end": 744
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 746,
        "end": 749,
        "body": []
      },
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
      "start": 772,
      "end": 792,
      "id": {
        "type": "Identifier",
        "start": 781,
        "end": 785,
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
          "start": 786,
          "end": 790,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 787,
            "end": 790,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 789,
              "end": 790,
              "typeName": {
                "type": "Identifier",
                "start": 789,
                "end": 790,
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
      "start": 802,
      "end": 827,
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
          "end": 822,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 817,
            "end": 822,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 819,
              "end": 822
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 824,
        "end": 827,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 829,
      "end": 850,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 843,
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
          "start": 844,
          "end": 848,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 845,
            "end": 848,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 847,
              "end": 848,
              "typeName": {
                "type": "Identifier",
                "start": 847,
                "end": 848,
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
      "start": 851,
      "end": 880,
      "id": {
        "type": "Identifier",
        "start": 860,
        "end": 865,
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
          "start": 866,
          "end": 878,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 867,
            "end": 878,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 869,
              "end": 878,
              "typeName": {
                "type": "Identifier",
                "start": 869,
                "end": 870,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 870,
                "end": 878,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 871,
                    "end": 877
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
      "start": 890,
      "end": 916,
      "id": {
        "type": "Identifier",
        "start": 899,
        "end": 904,
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
          "start": 905,
          "end": 911,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 906,
            "end": 911,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 908,
              "end": 911
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 913,
        "end": 916,
        "body": []
      },
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
      "start": 939,
      "end": 959,
      "id": {
        "type": "Identifier",
        "start": 948,
        "end": 952,
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
          "start": 953,
          "end": 957,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 954,
            "end": 957,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 956,
              "end": 957,
              "typeName": {
                "type": "Identifier",
                "start": 956,
                "end": 957,
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
      "start": 969,
      "end": 994,
      "id": {
        "type": "Identifier",
        "start": 978,
        "end": 982,
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
          "start": 983,
          "end": 989,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 984,
            "end": 989,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 986,
              "end": 989
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 991,
        "end": 994,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 996,
      "end": 1016,
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
          "end": 1014,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1014,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1013,
              "end": 1014,
              "typeName": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
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
      "start": 1017,
      "end": 1044,
      "id": {
        "type": "Identifier",
        "start": 1026,
        "end": 1030,
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
          "start": 1031,
          "end": 1042,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1032,
            "end": 1042,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1034,
              "end": 1042,
              "exprName": {
                "type": "Identifier",
                "start": 1041,
                "end": 1042,
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
      "start": 1054,
      "end": 1079,
      "id": {
        "type": "Identifier",
        "start": 1063,
        "end": 1067,
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
          "start": 1068,
          "end": 1074,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1069,
            "end": 1074,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1071,
              "end": 1074
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1076,
        "end": 1079,
        "body": []
      },
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
      "start": 1102,
      "end": 1122,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1115,
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
          "start": 1116,
          "end": 1120,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1117,
            "end": 1120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1119,
              "end": 1120,
              "typeName": {
                "type": "Identifier",
                "start": 1119,
                "end": 1120,
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
      "start": 1132,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1145,
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
          "start": 1146,
          "end": 1152,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1147,
            "end": 1152,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1149,
              "end": 1152
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1154,
        "end": 1157,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1159,
      "end": 1179,
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
          "end": 1177,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1174,
            "end": 1177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1176,
              "end": 1177,
              "typeName": {
                "type": "Identifier",
                "start": 1176,
                "end": 1177,
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
      "start": 1180,
      "end": 1208,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1193,
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
          "start": 1194,
          "end": 1206,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1195,
            "end": 1206,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1197,
              "end": 1206,
              "typeName": {
                "type": "Identifier",
                "start": 1197,
                "end": 1198,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1198,
                "end": 1206,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1199,
                    "end": 1205
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
      "start": 1218,
      "end": 1243,
      "id": {
        "type": "Identifier",
        "start": 1227,
        "end": 1231,
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
          "start": 1232,
          "end": 1238,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1233,
            "end": 1238,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1235,
              "end": 1238
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1240,
        "end": 1243,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1245,
      "end": 1266,
      "id": {
        "type": "Identifier",
        "start": 1254,
        "end": 1259,
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
          "start": 1260,
          "end": 1264,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1261,
            "end": 1264,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1263,
              "end": 1264,
              "typeName": {
                "type": "Identifier",
                "start": 1263,
                "end": 1264,
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
      "start": 1267,
      "end": 1295,
      "id": {
        "type": "Identifier",
        "start": 1276,
        "end": 1281,
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
          "start": 1282,
          "end": 1293,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1283,
            "end": 1293,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1285,
              "end": 1293,
              "exprName": {
                "type": "Identifier",
                "start": 1292,
                "end": 1293,
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
      "start": 1305,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1314,
        "end": 1319,
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
          "start": 1320,
          "end": 1326,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1321,
            "end": 1326,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1323,
              "end": 1326
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1328,
        "end": 1331,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1333,
      "end": 1354,
      "id": {
        "type": "Identifier",
        "start": 1342,
        "end": 1347,
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
          "start": 1348,
          "end": 1352,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1349,
            "end": 1352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1351,
              "end": 1352,
              "typeName": {
                "type": "Identifier",
                "start": 1351,
                "end": 1352,
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
      "start": 1355,
      "end": 1383,
      "id": {
        "type": "Identifier",
        "start": 1364,
        "end": 1369,
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
          "start": 1370,
          "end": 1381,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1371,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1373,
              "end": 1381,
              "exprName": {
                "type": "Identifier",
                "start": 1380,
                "end": 1381,
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
      "start": 1393,
      "end": 1419,
      "id": {
        "type": "Identifier",
        "start": 1402,
        "end": 1407,
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
          "start": 1408,
          "end": 1414,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1409,
            "end": 1414,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1411,
              "end": 1414
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1416,
        "end": 1419,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1421,
      "end": 1442,
      "id": {
        "type": "Identifier",
        "start": 1430,
        "end": 1435,
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
          "start": 1436,
          "end": 1440,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1437,
            "end": 1440,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1439,
              "end": 1440,
              "typeName": {
                "type": "Identifier",
                "start": 1439,
                "end": 1440,
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
      "start": 1443,
      "end": 1472,
      "id": {
        "type": "Identifier",
        "start": 1452,
        "end": 1457,
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
          "start": 1458,
          "end": 1470,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1459,
            "end": 1470,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1461,
              "end": 1470,
              "typeName": {
                "type": "Identifier",
                "start": 1461,
                "end": 1462,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1462,
                "end": 1470,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1463,
                    "end": 1469
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
      "start": 1482,
      "end": 1508,
      "id": {
        "type": "Identifier",
        "start": 1491,
        "end": 1496,
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
          "start": 1497,
          "end": 1503,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1498,
            "end": 1503,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1500,
              "end": 1503
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1505,
        "end": 1508,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1510,
      "end": 1531,
      "id": {
        "type": "Identifier",
        "start": 1519,
        "end": 1524,
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
          "start": 1525,
          "end": 1529,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1526,
            "end": 1529,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1528,
              "end": 1529,
              "typeName": {
                "type": "Identifier",
                "start": 1528,
                "end": 1529,
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
      "start": 1532,
      "end": 1560,
      "id": {
        "type": "Identifier",
        "start": 1541,
        "end": 1546,
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
          "start": 1547,
          "end": 1558,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1548,
            "end": 1558,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1550,
              "end": 1558,
              "exprName": {
                "type": "Identifier",
                "start": 1557,
                "end": 1558,
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
      "start": 1570,
      "end": 1596,
      "id": {
        "type": "Identifier",
        "start": 1579,
        "end": 1584,
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
          "start": 1585,
          "end": 1591,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1586,
            "end": 1591,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1588,
              "end": 1591
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1593,
        "end": 1596,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1598,
      "end": 1619,
      "id": {
        "type": "Identifier",
        "start": 1607,
        "end": 1612,
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
          "start": 1613,
          "end": 1617,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1614,
            "end": 1617,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1616,
              "end": 1617,
              "typeName": {
                "type": "Identifier",
                "start": 1616,
                "end": 1617,
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
      "start": 1620,
      "end": 1648,
      "id": {
        "type": "Identifier",
        "start": 1629,
        "end": 1634,
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
          "start": 1635,
          "end": 1646,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1636,
            "end": 1646,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1638,
              "end": 1646,
              "exprName": {
                "type": "Identifier",
                "start": 1645,
                "end": 1646,
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
      "start": 1658,
      "end": 1684,
      "id": {
        "type": "Identifier",
        "start": 1667,
        "end": 1672,
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
          "start": 1673,
          "end": 1679,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1674,
            "end": 1679,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1676,
              "end": 1679
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1681,
        "end": 1684,
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
