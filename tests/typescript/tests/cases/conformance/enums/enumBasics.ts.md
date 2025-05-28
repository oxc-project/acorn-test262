__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 1479,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 82,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 90,
        "end": 113,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 103,
            "end": 104,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 110,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 172,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 164,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "A",
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
      "type": "VariableDeclaration",
      "start": 260,
      "end": 271,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "E1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 383,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 382,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 382,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 382,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 279,
                "end": 382,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 285,
                    "end": 302,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 295,
                      "end": 301,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 297,
                        "end": 301,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 297,
                          "end": 301,
                          "left": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 299,
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 301,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 307,
                    "end": 324,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 317,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 317,
                      "end": 323,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 319,
                        "end": 323,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 319,
                          "end": 323,
                          "left": {
                            "type": "Identifier",
                            "start": 319,
                            "end": 321,
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 323,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 329,
                    "end": 346,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 339,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 339,
                      "end": 345,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 341,
                        "end": 345,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 341,
                          "end": 345,
                          "left": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 343,
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 344,
                            "end": 345,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 351,
                    "end": 380,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 361,
                        "end": 370,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 362,
                          "end": 370,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 364,
                            "end": 370
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 371,
                      "end": 379,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 373,
                        "end": 379
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 384,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 400,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 400,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 391,
                "end": 400,
                "exprName": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 400,
                  "decorators": [],
                  "name": "E1",
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
      "start": 463,
      "end": 479,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 468,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 471,
            "end": 478,
            "object": {
              "type": "Identifier",
              "start": 471,
              "end": 473,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 474,
              "end": 477,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 493,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 493,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 487,
                "end": 493
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
      "type": "TSEnumDeclaration",
      "start": 532,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 539,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 540,
        "end": 567,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 546,
            "end": 551,
            "id": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 550,
              "end": 551,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 553,
            "end": 558,
            "id": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 557,
              "end": 558,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 560,
            "end": 565,
            "id": {
              "type": "Identifier",
              "start": 560,
              "end": 561,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 564,
              "end": 565,
              "value": 3,
              "raw": "3"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 604,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 611,
        "decorators": [],
        "name": "E3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 612,
        "end": 659,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 618,
            "end": 634,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 619,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 622,
              "end": 634,
              "object": {
                "type": "Literal",
                "start": 622,
                "end": 627,
                "value": "foo",
                "raw": "'foo'"
              },
              "property": {
                "type": "Identifier",
                "start": 628,
                "end": 634,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 636,
            "end": 645,
            "id": {
              "type": "Identifier",
              "start": 636,
              "end": 637,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 640,
              "end": 645,
              "left": {
                "type": "Literal",
                "start": 640,
                "end": 641,
                "value": 4,
                "raw": "4"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 644,
                "end": 645,
                "value": 3,
                "raw": "3"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 647,
            "end": 657,
            "id": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 651,
              "end": 657,
              "operator": "+",
              "argument": {
                "type": "Literal",
                "start": 652,
                "end": 657,
                "value": "foo",
                "raw": "'foo'"
              },
              "prefix": true
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 720,
      "end": 762,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 727,
        "decorators": [],
        "name": "E4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 728,
        "end": 762,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 734,
            "end": 739,
            "id": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 738,
              "end": 739,
              "value": 0,
              "raw": "0"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 741,
            "end": 742,
            "id": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 744,
            "end": 760,
            "id": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 748,
              "end": 760,
              "object": {
                "type": "Literal",
                "start": 748,
                "end": 753,
                "value": "foo",
                "raw": "'foo'"
              },
              "property": {
                "type": "Identifier",
                "start": 754,
                "end": 760,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 876,
      "end": 916,
      "id": {
        "type": "Identifier",
        "start": 881,
        "end": 883,
        "decorators": [],
        "name": "E5",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 884,
        "end": 916,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 890,
            "end": 891,
            "id": {
              "type": "Identifier",
              "start": 890,
              "end": 891,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 897,
            "end": 902,
            "id": {
              "type": "Identifier",
              "start": 897,
              "end": 898,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 901,
              "end": 902,
              "value": 3,
              "raw": "3"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 908,
            "end": 909,
            "id": {
              "type": "Identifier",
              "start": 908,
              "end": 909,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 918,
      "end": 958,
      "id": {
        "type": "Identifier",
        "start": 923,
        "end": 925,
        "decorators": [],
        "name": "E6",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 926,
        "end": 958,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 932,
            "end": 933,
            "id": {
              "type": "Identifier",
              "start": 932,
              "end": 933,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 939,
            "end": 944,
            "id": {
              "type": "Identifier",
              "start": 939,
              "end": 940,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 943,
              "end": 944,
              "value": 0,
              "raw": "0"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 950,
            "end": 951,
            "id": {
              "type": "Identifier",
              "start": 950,
              "end": 951,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1015,
      "end": 1047,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1022,
        "decorators": [],
        "name": "E7",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1023,
        "end": 1047,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1029,
            "end": 1045,
            "id": {
              "type": "Identifier",
              "start": 1029,
              "end": 1030,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 1033,
              "end": 1045,
              "object": {
                "type": "Literal",
                "start": 1033,
                "end": 1038,
                "value": "foo",
                "raw": "'foo'"
              },
              "property": {
                "type": "Literal",
                "start": 1039,
                "end": 1044,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1105,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 1110,
        "end": 1112,
        "decorators": [],
        "name": "E8",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1113,
        "end": 1137,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1119,
            "end": 1135,
            "id": {
              "type": "Identifier",
              "start": 1119,
              "end": 1120,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 1123,
              "end": 1135,
              "object": {
                "type": "Literal",
                "start": 1123,
                "end": 1128,
                "value": "foo",
                "raw": "'foo'"
              },
              "property": {
                "type": "Literal",
                "start": 1129,
                "end": 1134,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1196,
      "end": 1224,
      "id": {
        "type": "Identifier",
        "start": 1201,
        "end": 1203,
        "decorators": [],
        "name": "E9",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1204,
        "end": 1224,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1210,
            "end": 1211,
            "id": {
              "type": "Identifier",
              "start": 1210,
              "end": 1211,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1217,
            "end": 1222,
            "id": {
              "type": "Identifier",
              "start": 1217,
              "end": 1218,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1296,
      "end": 1360,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1300,
          "end": 1359,
          "id": {
            "type": "Identifier",
            "start": 1300,
            "end": 1314,
            "decorators": [],
            "name": "doNotPropagate",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1317,
            "end": 1359,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 1323,
                "end": 1327,
                "object": {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1325,
                  "decorators": [],
                  "name": "E8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1326,
                  "end": 1327,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1329,
                "end": 1333,
                "object": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1331,
                  "decorators": [],
                  "name": "E7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1333,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1335,
                "end": 1339,
                "object": {
                  "type": "Identifier",
                  "start": 1335,
                  "end": 1337,
                  "decorators": [],
                  "name": "E4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1338,
                  "end": 1339,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1341,
                "end": 1345,
                "object": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1343,
                  "decorators": [],
                  "name": "E3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1345,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1347,
                "end": 1351,
                "object": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1349,
                  "decorators": [],
                  "name": "E3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1351,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1353,
                "end": 1357,
                "object": {
                  "type": "Identifier",
                  "start": 1353,
                  "end": 1355,
                  "decorators": [],
                  "name": "E3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1356,
                  "end": 1357,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1405,
      "end": 1478,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1409,
          "end": 1477,
          "id": {
            "type": "Identifier",
            "start": 1409,
            "end": 1420,
            "decorators": [],
            "name": "doPropagate",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1423,
            "end": 1477,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 1429,
                "end": 1433,
                "object": {
                  "type": "Identifier",
                  "start": 1429,
                  "end": 1431,
                  "decorators": [],
                  "name": "E9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1433,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1435,
                "end": 1439,
                "object": {
                  "type": "Identifier",
                  "start": 1435,
                  "end": 1437,
                  "decorators": [],
                  "name": "E9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1439,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1441,
                "end": 1445,
                "object": {
                  "type": "Identifier",
                  "start": 1441,
                  "end": 1443,
                  "decorators": [],
                  "name": "E6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1444,
                  "end": 1445,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1447,
                "end": 1451,
                "object": {
                  "type": "Identifier",
                  "start": 1447,
                  "end": 1449,
                  "decorators": [],
                  "name": "E6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1451,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1453,
                "end": 1457,
                "object": {
                  "type": "Identifier",
                  "start": 1453,
                  "end": 1455,
                  "decorators": [],
                  "name": "E6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1456,
                  "end": 1457,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1459,
                "end": 1463,
                "object": {
                  "type": "Identifier",
                  "start": 1459,
                  "end": 1461,
                  "decorators": [],
                  "name": "E5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1462,
                  "end": 1463,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1465,
                "end": 1469,
                "object": {
                  "type": "Identifier",
                  "start": 1465,
                  "end": 1467,
                  "decorators": [],
                  "name": "E5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1468,
                  "end": 1469,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 1471,
                "end": 1475,
                "object": {
                  "type": "Identifier",
                  "start": 1471,
                  "end": 1473,
                  "decorators": [],
                  "name": "E5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1475,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
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
