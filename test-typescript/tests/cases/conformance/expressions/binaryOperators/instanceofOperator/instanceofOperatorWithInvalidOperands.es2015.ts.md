__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1301,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 23,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 23,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "VariableDeclaration",
      "start": 27,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 37,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 37,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
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
      "start": 156,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
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
      "start": 172,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 187,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 187,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 180,
                "end": 187
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
      "start": 189,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 203,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
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
      "start": 205,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 217,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 217,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 213,
                "end": 217
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
      "start": 220,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "name": "ra1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 230,
            "end": 245,
            "left": {
              "type": "Identifier",
              "start": 230,
              "end": 232,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 254,
            "name": "ra2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 257,
            "end": 272,
            "left": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 281,
            "name": "ra3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 284,
            "end": 299,
            "left": {
              "type": "Identifier",
              "start": 284,
              "end": 286,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 308,
            "name": "ra4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 311,
            "end": 326,
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 313,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 335,
            "name": "ra5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 338,
            "end": 352,
            "left": {
              "type": "Literal",
              "start": 338,
              "end": 339,
              "value": 0,
              "raw": "0"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "name": "ra6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 364,
            "end": 381,
            "left": {
              "type": "Literal",
              "start": 364,
              "end": 368,
              "value": true,
              "raw": "true"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
            "name": "ra7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 393,
            "end": 408,
            "left": {
              "type": "Literal",
              "start": 393,
              "end": 395,
              "value": "",
              "raw": "''"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 417,
            "name": "ra8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 420,
            "end": 437,
            "left": {
              "type": "Literal",
              "start": 420,
              "end": 424,
              "value": null,
              "raw": "null"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 446,
            "name": "ra9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 449,
            "end": 471,
            "left": {
              "type": "Identifier",
              "start": 449,
              "end": 458,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 598,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 598,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 598,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 592,
                "end": 598
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
      "start": 600,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 604,
            "end": 615,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 615,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 608,
                "end": 615
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
      "start": 617,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 631,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 631,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 625,
                "end": 631
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
      "start": 633,
      "end": 646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 637,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 637,
            "end": 645,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 639,
              "end": 645,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 641,
                "end": 645
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
      "start": 647,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 657,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 657,
            "name": "o1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 657,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 655,
                "end": 657,
                "members": []
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
      "start": 659,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 663,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 673,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 673,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 667,
                "end": 673,
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 673,
                  "name": "Object",
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
      "start": 675,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 684,
            "name": "o3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 681,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 683,
                "end": 684,
                "typeName": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 684,
                  "name": "C",
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
      "start": 687,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 694,
            "name": "rb1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 697,
            "end": 712,
            "left": {
              "type": "Identifier",
              "start": 697,
              "end": 698,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 710,
              "end": 712,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 714,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 721,
            "name": "rb2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 724,
            "end": 739,
            "left": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 737,
              "end": 739,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 741,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 748,
            "name": "rb3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 751,
            "end": 766,
            "left": {
              "type": "Identifier",
              "start": 751,
              "end": 752,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 764,
              "end": 766,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 794,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 793,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 775,
            "name": "rb4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 778,
            "end": 793,
            "left": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 791,
              "end": 793,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 799,
          "end": 819,
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 802,
            "name": "rb5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 805,
            "end": 819,
            "left": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "start": 818,
              "end": 819,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 825,
          "end": 848,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 828,
            "name": "rb6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 831,
            "end": 848,
            "left": {
              "type": "Identifier",
              "start": 831,
              "end": 832,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "start": 844,
              "end": 848,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 850,
      "end": 876,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 875,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 857,
            "name": "rb7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 860,
            "end": 875,
            "left": {
              "type": "Identifier",
              "start": 860,
              "end": 861,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "start": 873,
              "end": 875,
              "value": "",
              "raw": "''"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 877,
      "end": 903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 902,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 884,
            "name": "rb8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 887,
            "end": 902,
            "left": {
              "type": "Identifier",
              "start": 887,
              "end": 888,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 900,
              "end": 902,
              "name": "o1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 904,
      "end": 930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 908,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 908,
            "end": 911,
            "name": "rb9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 914,
            "end": 929,
            "left": {
              "type": "Identifier",
              "start": 914,
              "end": 915,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 927,
              "end": 929,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 958,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 935,
          "end": 957,
          "id": {
            "type": "Identifier",
            "start": 935,
            "end": 939,
            "name": "rb10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 942,
            "end": 957,
            "left": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 955,
              "end": 957,
              "name": "o3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 989,
      "end": 1016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 993,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 996,
            "name": "rc1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 999,
            "end": 1015,
            "left": {
              "type": "Literal",
              "start": 999,
              "end": 1001,
              "value": "",
              "raw": "''"
            },
            "operator": "instanceof",
            "right": {
              "type": "ObjectExpression",
              "start": 1013,
              "end": 1015,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1049,
      "end": 1112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1053,
          "end": 1111,
          "id": {
            "type": "Identifier",
            "start": 1053,
            "end": 1111,
            "name": "o4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1055,
              "end": 1111,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1057,
                "end": 1111,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1058,
                    "end": 1110,
                    "key": {
                      "type": "MemberExpression",
                      "start": 1059,
                      "end": 1077,
                      "object": {
                        "type": "Identifier",
                        "start": 1059,
                        "end": 1065,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1077,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1099,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1084,
                          "end": 1099,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1086,
                            "end": 1099,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1088,
                                "end": 1097,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1088,
                                  "end": 1089,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1089,
                                  "end": 1097,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1091,
                                    "end": 1097
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1100,
                      "end": 1109,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1102,
                        "end": 1109
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 1113,
      "end": 1135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1117,
          "end": 1134,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1134,
            "name": "o5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1119,
              "end": 1134,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1121,
                "end": 1134,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1123,
                    "end": 1132,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1124,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1124,
                      "end": 1132,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1126,
                        "end": 1132
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
      "start": 1136,
      "end": 1164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1140,
          "end": 1163,
          "id": {
            "type": "Identifier",
            "start": 1140,
            "end": 1144,
            "name": "ra10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1147,
            "end": 1163,
            "left": {
              "type": "Identifier",
              "start": 1147,
              "end": 1149,
              "name": "o5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 1161,
              "end": 1163,
              "name": "o4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1217,
      "end": 1273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1221,
          "end": 1272,
          "id": {
            "type": "Identifier",
            "start": 1221,
            "end": 1272,
            "name": "o6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1223,
              "end": 1272,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1225,
                "end": 1272,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1226,
                    "end": 1271,
                    "key": {
                      "type": "MemberExpression",
                      "start": 1227,
                      "end": 1245,
                      "object": {
                        "type": "Identifier",
                        "start": 1227,
                        "end": 1233,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1234,
                        "end": 1245,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1247,
                        "end": 1261,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1252,
                          "end": 1261,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1254,
                            "end": 1261
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1262,
                      "end": 1270,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1264,
                        "end": 1270
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 1274,
      "end": 1301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1278,
          "end": 1300,
          "id": {
            "type": "Identifier",
            "start": 1278,
            "end": 1282,
            "name": "rb11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1285,
            "end": 1300,
            "left": {
              "type": "Identifier",
              "start": 1285,
              "end": 1286,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 1298,
              "end": 1300,
              "name": "o6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
