__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 1521,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 122,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
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
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 170,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 190,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 237,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 257,
        "name": "fn2",
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
          "start": 258,
          "end": 267,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 267,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 261,
              "end": 267
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 268,
        "end": 276,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 270,
          "end": 276
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 340,
        "name": "fn3",
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
          "start": 341,
          "end": 350,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 350,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 344,
              "end": 350
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 351,
        "end": 359,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 353,
          "end": 359
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 361,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 381,
        "name": "fn4",
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
          "start": 382,
          "end": 391,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 383,
            "end": 391,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 385,
              "end": 391
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 393,
          "end": 402,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 394,
            "end": 402,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 403,
        "end": 411,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 405,
          "end": 411
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 459,
      "end": 487,
      "id": {
        "type": "Identifier",
        "start": 476,
        "end": 479,
        "name": "fn5",
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
          "start": 480,
          "end": 481,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 483,
          "end": 485,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 488,
      "end": 513,
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 508,
        "name": "fn6",
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
          "start": 509,
          "end": 511,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 514,
      "end": 548,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 534,
        "name": "fn7",
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
          "start": 535,
          "end": 536,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 538,
          "end": 540,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 542,
          "end": 546,
          "argument": {
            "type": "Identifier",
            "start": 545,
            "end": 546,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 549,
      "end": 590,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 569,
        "name": "fn8",
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
          "start": 570,
          "end": 572,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 574,
          "end": 588,
          "argument": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 578,
            "end": 588,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 580,
              "end": 588,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 580,
                "end": 586
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 591,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 611,
        "name": "fn9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 612,
          "end": 622,
          "argument": {
            "type": "Identifier",
            "start": 615,
            "end": 616,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 616,
            "end": 622,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 618,
              "end": 622,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 618,
                "end": 620,
                "members": []
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 625,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 642,
        "end": 646,
        "name": "fn10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 650,
          "end": 659,
          "argument": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 654,
            "end": 659,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 656,
              "end": 659,
              "elementType": {
                "type": "TSTypeReference",
                "start": 656,
                "end": 657,
                "typeName": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 646,
        "end": 649,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 647,
            "end": 648,
            "name": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
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
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 680,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 694,
        "end": 697,
        "name": "cls",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 698,
        "end": 827,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 704,
            "end": 718,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 704,
              "end": 715,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 715,
              "end": 718,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 723,
            "end": 737,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 723,
              "end": 729,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 729,
              "end": 737,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 731,
                "end": 736,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 733,
                  "end": 736,
                  "typeName": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 736,
                    "name": "cls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 742,
            "end": 767,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 749,
              "end": 755,
              "name": "static",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 755,
              "end": 767,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 758,
                "end": 766,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 760,
                  "end": 766
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 772,
            "end": 781,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 779,
              "end": 780,
              "name": "q",
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
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 786,
            "end": 799,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 794,
              "end": 796,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 796,
              "end": 799,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 804,
            "end": 825,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 819,
              "end": 822,
              "name": "fns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 822,
              "end": 825,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 845,
      "end": 884,
      "id": {
        "type": "Identifier",
        "start": 858,
        "end": 860,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 867,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 867,
            "end": 868,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 874,
          "end": 875,
          "id": {
            "type": "Identifier",
            "start": 874,
            "end": 875,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 881,
          "end": 882,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 882,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 861,
        "end": 884,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 867,
            "end": 868,
            "id": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 874,
            "end": 875,
            "id": {
              "type": "Identifier",
              "start": 874,
              "end": 875,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 881,
            "end": 882,
            "id": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 935,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 948,
        "end": 950,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 957,
          "end": 958,
          "id": {
            "type": "Identifier",
            "start": 957,
            "end": 958,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 964,
          "end": 969,
          "id": {
            "type": "Identifier",
            "start": 964,
            "end": 965,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 968,
            "end": 969,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 975,
          "end": 976,
          "id": {
            "type": "Identifier",
            "start": 975,
            "end": 976,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 982,
          "end": 987,
          "id": {
            "type": "Identifier",
            "start": 982,
            "end": 983,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 986,
            "end": 987,
            "value": 2,
            "raw": "2"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 993,
          "end": 994,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 994,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 951,
        "end": 996,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 957,
            "end": 958,
            "id": {
              "type": "Identifier",
              "start": 957,
              "end": 958,
              "name": "q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 964,
            "end": 969,
            "id": {
              "type": "Identifier",
              "start": 964,
              "end": 965,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 968,
              "end": 969,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 975,
            "end": 976,
            "id": {
              "type": "Identifier",
              "start": 975,
              "end": 976,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 982,
            "end": 987,
            "id": {
              "type": "Identifier",
              "start": 982,
              "end": 983,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 986,
              "end": 987,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 993,
            "end": 994,
            "id": {
              "type": "Identifier",
              "start": 993,
              "end": 994,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1073,
      "end": 1098,
      "id": {
        "type": "Identifier",
        "start": 1086,
        "end": 1088,
        "name": "E3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1095,
          "end": 1096,
          "id": {
            "type": "Identifier",
            "start": 1095,
            "end": 1096,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 1089,
        "end": 1098,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1095,
            "end": 1096,
            "id": {
              "type": "Identifier",
              "start": 1095,
              "end": 1096,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1099,
      "end": 1131,
      "id": {
        "type": "Identifier",
        "start": 1114,
        "end": 1116,
        "name": "E3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1117,
        "end": 1131,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1123,
            "end": 1129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1127,
                "end": 1128,
                "id": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1128,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1132,
      "end": 1145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1136,
          "end": 1144,
          "id": {
            "type": "Identifier",
            "start": 1136,
            "end": 1137,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1140,
            "end": 1144,
            "object": {
              "type": "Identifier",
              "start": 1140,
              "end": 1142,
              "name": "E3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1143,
              "end": 1144,
              "name": "B",
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
      "start": 1165,
      "end": 1224,
      "id": {
        "type": "Identifier",
        "start": 1180,
        "end": 1182,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1183,
        "end": 1224,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1189,
            "end": 1195,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1193,
                "end": 1194,
                "id": {
                  "type": "Identifier",
                  "start": 1193,
                  "end": 1194,
                  "name": "x",
                  "typeAnnotation": null,
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
            "type": "TSDeclareFunction",
            "start": 1200,
            "end": 1222,
            "id": {
              "type": "Identifier",
              "start": 1209,
              "end": 1211,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1215,
                "end": 1221
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1303,
      "end": 1316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1307,
          "end": 1315,
          "id": {
            "type": "Identifier",
            "start": 1307,
            "end": 1308,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1311,
            "end": 1315,
            "object": {
              "type": "Identifier",
              "start": 1311,
              "end": 1313,
              "name": "M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1314,
              "end": 1315,
              "name": "x",
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
      "type": "VariableDeclaration",
      "start": 1317,
      "end": 1333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1321,
          "end": 1332,
          "id": {
            "type": "Identifier",
            "start": 1321,
            "end": 1322,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1325,
            "end": 1332,
            "callee": {
              "type": "MemberExpression",
              "start": 1325,
              "end": 1330,
              "object": {
                "type": "Identifier",
                "start": 1325,
                "end": 1327,
                "name": "M1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1328,
                "end": 1330,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1478,
      "end": 1519,
      "id": {
        "type": "Literal",
        "start": 1493,
        "end": 1504,
        "value": "external1",
        "raw": "'external1'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1505,
        "end": 1519,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1511,
            "end": 1517,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1515,
                "end": 1516,
                "id": {
                  "type": "Identifier",
                  "start": 1515,
                  "end": 1516,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
