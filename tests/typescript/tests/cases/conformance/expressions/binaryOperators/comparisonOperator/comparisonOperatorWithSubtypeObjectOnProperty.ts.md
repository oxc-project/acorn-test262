__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1087,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 90,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 51,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 88,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 100,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 107,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 121,
                  "decorators": [],
                  "name": "Base",
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "Base",
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 201,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 161,
            "end": 176,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 175,
                  "decorators": [],
                  "name": "Base",
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 199,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 198,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 198,
                  "decorators": [],
                  "name": "Derived",
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 230,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 211,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 230,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 228,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 232,
      "end": 270,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 240,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 270,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 258,
            "end": 268,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 283,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "decorators": [],
                  "name": "A1",
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
      "start": 284,
      "end": 295,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 294,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 294,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 294,
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 294,
                  "decorators": [],
                  "name": "A2",
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
      "start": 296,
      "end": 307,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 306,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "B1",
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
      "start": 308,
      "end": 319,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 318,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 318,
                  "decorators": [],
                  "name": "B2",
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
      "start": 335,
      "end": 353,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 342,
            "decorators": [],
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 345,
            "end": 352,
            "left": {
              "type": "Identifier",
              "start": 345,
              "end": 347,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 350,
              "end": 352,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 372,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "decorators": [],
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 364,
            "end": 371,
            "left": {
              "type": "Identifier",
              "start": 364,
              "end": 366,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 369,
              "end": 371,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 391,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 380,
            "decorators": [],
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 383,
            "end": 390,
            "left": {
              "type": "Identifier",
              "start": 383,
              "end": 385,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 388,
              "end": 390,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 410,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 399,
            "decorators": [],
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 402,
            "end": 409,
            "left": {
              "type": "Identifier",
              "start": 402,
              "end": 404,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 407,
              "end": 409,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 444,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 433,
            "decorators": [],
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 436,
            "end": 443,
            "left": {
              "type": "Identifier",
              "start": 436,
              "end": 438,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 441,
              "end": 443,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 462,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 452,
            "decorators": [],
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 455,
            "end": 462,
            "left": {
              "type": "Identifier",
              "start": 455,
              "end": 457,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 460,
              "end": 462,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 482,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 481,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 471,
            "decorators": [],
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 474,
            "end": 481,
            "left": {
              "type": "Identifier",
              "start": 474,
              "end": 476,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 479,
              "end": 481,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 483,
      "end": 501,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 487,
          "end": 500,
          "id": {
            "type": "Identifier",
            "start": 487,
            "end": 490,
            "decorators": [],
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 493,
            "end": 500,
            "left": {
              "type": "Identifier",
              "start": 493,
              "end": 495,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 498,
              "end": 500,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 537,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 536,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 525,
            "decorators": [],
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 528,
            "end": 536,
            "left": {
              "type": "Identifier",
              "start": 528,
              "end": 530,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 534,
              "end": 536,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 557,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "decorators": [],
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 548,
            "end": 556,
            "left": {
              "type": "Identifier",
              "start": 548,
              "end": 550,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 554,
              "end": 556,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 577,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 576,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 565,
            "decorators": [],
            "name": "rc3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 568,
            "end": 576,
            "left": {
              "type": "Identifier",
              "start": 568,
              "end": 570,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 574,
              "end": 576,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 597,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 585,
            "decorators": [],
            "name": "rc4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 588,
            "end": 596,
            "left": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 614,
      "end": 633,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 618,
          "end": 632,
          "id": {
            "type": "Identifier",
            "start": 618,
            "end": 621,
            "decorators": [],
            "name": "rd1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 624,
            "end": 632,
            "left": {
              "type": "Identifier",
              "start": 624,
              "end": 626,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 630,
              "end": 632,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 634,
      "end": 653,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 641,
            "decorators": [],
            "name": "rd2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 644,
            "end": 652,
            "left": {
              "type": "Identifier",
              "start": 644,
              "end": 646,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 650,
              "end": 652,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 654,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 658,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 661,
            "decorators": [],
            "name": "rd3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 664,
            "end": 672,
            "left": {
              "type": "Identifier",
              "start": 664,
              "end": 666,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 670,
              "end": 672,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 674,
      "end": 693,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 692,
          "id": {
            "type": "Identifier",
            "start": 678,
            "end": 681,
            "decorators": [],
            "name": "rd4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 684,
            "end": 692,
            "left": {
              "type": "Identifier",
              "start": 684,
              "end": 686,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 690,
              "end": 692,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 710,
      "end": 729,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 714,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 717,
            "decorators": [],
            "name": "re1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 720,
            "end": 728,
            "left": {
              "type": "Identifier",
              "start": 720,
              "end": 722,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 726,
              "end": 728,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 749,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 748,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 737,
            "decorators": [],
            "name": "re2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 740,
            "end": 748,
            "left": {
              "type": "Identifier",
              "start": 740,
              "end": 742,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 746,
              "end": 748,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 750,
      "end": 769,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 754,
          "end": 768,
          "id": {
            "type": "Identifier",
            "start": 754,
            "end": 757,
            "decorators": [],
            "name": "re3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 760,
            "end": 768,
            "left": {
              "type": "Identifier",
              "start": 760,
              "end": 762,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 766,
              "end": 768,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 770,
      "end": 789,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 788,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 777,
            "decorators": [],
            "name": "re4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 780,
            "end": 788,
            "left": {
              "type": "Identifier",
              "start": 780,
              "end": 782,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 786,
              "end": 788,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 806,
      "end": 825,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 810,
          "end": 824,
          "id": {
            "type": "Identifier",
            "start": 810,
            "end": 813,
            "decorators": [],
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 816,
            "end": 824,
            "left": {
              "type": "Identifier",
              "start": 816,
              "end": 818,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 822,
              "end": 824,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 826,
      "end": 845,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 830,
          "end": 844,
          "id": {
            "type": "Identifier",
            "start": 830,
            "end": 833,
            "decorators": [],
            "name": "rf2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 836,
            "end": 844,
            "left": {
              "type": "Identifier",
              "start": 836,
              "end": 838,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 842,
              "end": 844,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 846,
      "end": 865,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 850,
          "end": 864,
          "id": {
            "type": "Identifier",
            "start": 850,
            "end": 853,
            "decorators": [],
            "name": "rf3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 856,
            "end": 864,
            "left": {
              "type": "Identifier",
              "start": 856,
              "end": 858,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 862,
              "end": 864,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 866,
      "end": 885,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 873,
            "decorators": [],
            "name": "rf4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 876,
            "end": 884,
            "left": {
              "type": "Identifier",
              "start": 876,
              "end": 878,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 882,
              "end": 884,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 903,
      "end": 923,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 907,
          "end": 922,
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 910,
            "decorators": [],
            "name": "rg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 913,
            "end": 922,
            "left": {
              "type": "Identifier",
              "start": 913,
              "end": 915,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 920,
              "end": 922,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 924,
      "end": 944,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 928,
          "end": 943,
          "id": {
            "type": "Identifier",
            "start": 928,
            "end": 931,
            "decorators": [],
            "name": "rg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 934,
            "end": 943,
            "left": {
              "type": "Identifier",
              "start": 934,
              "end": 936,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 941,
              "end": 943,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 945,
      "end": 965,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 949,
          "end": 964,
          "id": {
            "type": "Identifier",
            "start": 949,
            "end": 952,
            "decorators": [],
            "name": "rg3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 955,
            "end": 964,
            "left": {
              "type": "Identifier",
              "start": 955,
              "end": 957,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 962,
              "end": 964,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 966,
      "end": 986,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 970,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 970,
            "end": 973,
            "decorators": [],
            "name": "rg4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 976,
            "end": 985,
            "left": {
              "type": "Identifier",
              "start": 976,
              "end": 978,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 983,
              "end": 985,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1004,
      "end": 1024,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1008,
          "end": 1023,
          "id": {
            "type": "Identifier",
            "start": 1008,
            "end": 1011,
            "decorators": [],
            "name": "rh1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1014,
            "end": 1023,
            "left": {
              "type": "Identifier",
              "start": 1014,
              "end": 1016,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1021,
              "end": 1023,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1025,
      "end": 1045,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1029,
          "end": 1044,
          "id": {
            "type": "Identifier",
            "start": 1029,
            "end": 1032,
            "decorators": [],
            "name": "rh2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1035,
            "end": 1044,
            "left": {
              "type": "Identifier",
              "start": 1035,
              "end": 1037,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1042,
              "end": 1044,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1046,
      "end": 1066,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1050,
          "end": 1065,
          "id": {
            "type": "Identifier",
            "start": 1050,
            "end": 1053,
            "decorators": [],
            "name": "rh3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1056,
            "end": 1065,
            "left": {
              "type": "Identifier",
              "start": 1056,
              "end": 1058,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1063,
              "end": 1065,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1067,
      "end": 1087,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1071,
          "end": 1086,
          "id": {
            "type": "Identifier",
            "start": 1071,
            "end": 1074,
            "decorators": [],
            "name": "rh4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1077,
            "end": 1086,
            "left": {
              "type": "Identifier",
              "start": 1077,
              "end": 1079,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1084,
              "end": 1086,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
