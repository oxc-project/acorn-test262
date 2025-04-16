__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 958,
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
      "end": 165,
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
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 163,
            "computed": false,
            "optional": true,
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
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 156,
                "end": 162
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
      "start": 167,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 191,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 174,
                "end": 191,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 176,
                    "end": 189,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 179,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 182,
                        "end": 188
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
      "start": 192,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 200,
            "end": 211,
            "properties": [
              {
                "type": "Property",
                "start": 202,
                "end": 209,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 205,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 209,
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
      "start": 214,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 227,
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
          "start": 228,
          "end": 232,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 232,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 231,
              "end": 232,
              "typeName": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
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
      "start": 235,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
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
          "start": 249,
          "end": 253,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 253,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 253,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
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
      "start": 265,
      "end": 290,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 278,
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
          "start": 279,
          "end": 285,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 280,
            "end": 285,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 282,
              "end": 285
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 287,
        "end": 290,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 292,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 305,
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
          "start": 306,
          "end": 317,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 307,
            "end": 317,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 309,
              "end": 317,
              "exprName": {
                "type": "Identifier",
                "start": 316,
                "end": 317,
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
      "start": 320,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 333,
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
          "start": 334,
          "end": 345,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 335,
            "end": 345,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 337,
              "end": 345,
              "exprName": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
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
      "start": 357,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 370,
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
          "start": 371,
          "end": 377,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 377,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 374,
              "end": 377
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 379,
        "end": 382,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 384,
      "end": 404,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 397,
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
          "start": 398,
          "end": 402,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 399,
            "end": 402,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 401,
              "end": 402,
              "typeName": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
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
      "start": 405,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 418,
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
          "start": 419,
          "end": 423,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 423,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 423,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
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
      "start": 432,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 445,
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
          "start": 446,
          "end": 452,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 447,
            "end": 452,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 449,
              "end": 452
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 454,
        "end": 457,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 459,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 472,
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
          "start": 473,
          "end": 477,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 474,
            "end": 477,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 476,
              "end": 477,
              "typeName": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
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
      "start": 480,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 493,
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
          "start": 494,
          "end": 505,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 495,
            "end": 505,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 497,
              "end": 505,
              "exprName": {
                "type": "Identifier",
                "start": 504,
                "end": 505,
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
      "start": 514,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 527,
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
          "start": 528,
          "end": 534,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 529,
            "end": 534,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 531,
              "end": 534
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 536,
        "end": 539,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 541,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 554,
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
          "start": 555,
          "end": 559,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 556,
            "end": 559,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 558,
              "end": 559,
              "typeName": {
                "type": "Identifier",
                "start": 558,
                "end": 559,
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
      "start": 562,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 575,
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
          "start": 576,
          "end": 580,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 577,
            "end": 580,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 579,
              "end": 580,
              "typeName": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
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
      "start": 589,
      "end": 614,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 602,
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
          "start": 603,
          "end": 609,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 604,
            "end": 609,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 606,
              "end": 609
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 611,
        "end": 614,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 616,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 625,
        "end": 630,
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
          "start": 631,
          "end": 635,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 632,
            "end": 635,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 634,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 634,
                "end": 635,
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
      "start": 638,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 652,
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
          "start": 653,
          "end": 664,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 654,
            "end": 664,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 656,
              "end": 664,
              "exprName": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
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
      "start": 673,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 687,
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
          "start": 688,
          "end": 694,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 689,
            "end": 694,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 691,
              "end": 694
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 696,
        "end": 699,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 701,
      "end": 722,
      "id": {
        "type": "Identifier",
        "start": 710,
        "end": 715,
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
          "start": 716,
          "end": 720,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 717,
            "end": 720,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 719,
              "end": 720,
              "typeName": {
                "type": "Identifier",
                "start": 719,
                "end": 720,
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
      "start": 723,
      "end": 752,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 737,
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
          "start": 738,
          "end": 750,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 739,
            "end": 750,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 741,
              "end": 750,
              "typeName": {
                "type": "Identifier",
                "start": 741,
                "end": 742,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 742,
                "end": 750,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 743,
                    "end": 749
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
      "start": 759,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 773,
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
          "start": 774,
          "end": 780,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 775,
            "end": 780,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 777,
              "end": 780
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 782,
        "end": 785,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 787,
      "end": 808,
      "id": {
        "type": "Identifier",
        "start": 796,
        "end": 801,
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
          "start": 802,
          "end": 806,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 803,
            "end": 806,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 806,
              "typeName": {
                "type": "Identifier",
                "start": 805,
                "end": 806,
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
      "start": 809,
      "end": 837,
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 823,
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
          "start": 824,
          "end": 835,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 835,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 827,
              "end": 835,
              "exprName": {
                "type": "Identifier",
                "start": 834,
                "end": 835,
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
      "start": 847,
      "end": 873,
      "id": {
        "type": "Identifier",
        "start": 856,
        "end": 861,
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
          "start": 862,
          "end": 868,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 863,
            "end": 868,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 865,
              "end": 868
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 870,
        "end": 873,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 875,
      "end": 896,
      "id": {
        "type": "Identifier",
        "start": 884,
        "end": 889,
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
          "start": 890,
          "end": 894,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 891,
            "end": 894,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 893,
              "end": 894,
              "typeName": {
                "type": "Identifier",
                "start": 893,
                "end": 894,
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
      "start": 897,
      "end": 925,
      "id": {
        "type": "Identifier",
        "start": 906,
        "end": 911,
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
          "start": 912,
          "end": 923,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 913,
            "end": 923,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 915,
              "end": 923,
              "exprName": {
                "type": "Identifier",
                "start": 922,
                "end": 923,
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
      "start": 932,
      "end": 958,
      "id": {
        "type": "Identifier",
        "start": 941,
        "end": 946,
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
          "start": 947,
          "end": 953,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 948,
            "end": 953,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 950,
              "end": 953
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 955,
        "end": 958,
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
