__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 889,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 67,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 76,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 79,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 74,
        "end": 82,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 76,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 79,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "b",
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
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "name": "foo",
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
          "start": 103,
          "end": 107,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 107,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 113,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "U",
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
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 889,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 132,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 131,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 128,
                      "end": 131
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
            "start": 137,
            "end": 152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 151,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 144,
                      "end": 151
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
            "start": 157,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 161,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 170,
                  "name": "c",
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
            "start": 176,
            "end": 190,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 180,
                "end": 189,
                "id": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 183,
                      "end": 189
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
            "start": 195,
            "end": 209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 208,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 200,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 202,
                      "end": 208,
                      "typeName": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 208,
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
            "start": 214,
            "end": 223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 218,
                "end": 222,
                "id": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "name": "g",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 221,
                      "end": 222,
                      "typeName": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "name": "E",
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
            "start": 228,
            "end": 240,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 232,
                "end": 239,
                "id": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 239,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 239,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 235,
                      "end": 239
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
            "start": 284,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 288,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "name": "r1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 292,
                      "end": 295
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 298,
                  "end": 303,
                  "left": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "name": "a",
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
            "start": 335,
            "end": 350,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 339,
                "end": 349,
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 344,
                  "end": 349,
                  "left": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "name": "b",
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
            "start": 355,
            "end": 370,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 369,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 361,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 364,
                  "end": 369,
                  "left": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "name": "c",
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
            "start": 375,
            "end": 390,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 389,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 381,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 384,
                  "end": 389,
                  "left": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 385,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "name": "d",
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
            "start": 424,
            "end": 439,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 428,
                "end": 438,
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 430,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 433,
                  "end": 438,
                  "left": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "name": "e",
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
            "start": 444,
            "end": 459,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 448,
                "end": 458,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 453,
                  "end": 458,
                  "left": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "name": "g",
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
            "start": 464,
            "end": 479,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 478,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 470,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 473,
                  "end": 478,
                  "left": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "name": "f",
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
            "start": 524,
            "end": 539,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 528,
                "end": 538,
                "id": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 533,
                  "end": 538,
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 534,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "name": "t",
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
            "start": 570,
            "end": 585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 574,
                "end": 584,
                "id": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 576,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 579,
                  "end": 584,
                  "left": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 580,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "name": "t",
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
            "start": 590,
            "end": 606,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 594,
                "end": 605,
                "id": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 600,
                  "end": 605,
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 601,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 604,
                    "end": 605,
                    "name": "t",
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
            "start": 611,
            "end": 627,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 615,
                "end": 626,
                "id": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 618,
                  "name": "r11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 621,
                  "end": 626,
                  "left": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 622,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "name": "t",
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
            "start": 661,
            "end": 677,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 665,
                "end": 676,
                "id": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 668,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 671,
                  "end": 676,
                  "left": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 672,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 675,
                    "end": 676,
                    "name": "t",
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
            "start": 682,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 686,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 689,
                  "name": "r13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 692,
                  "end": 697,
                  "left": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "name": "t",
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
            "start": 703,
            "end": 719,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 718,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 710,
                  "name": "r14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 713,
                  "end": 718,
                  "left": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "name": "t",
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
            "start": 744,
            "end": 763,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 748,
                "end": 762,
                "id": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 751,
                  "name": "r15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 754,
                  "end": 762,
                  "left": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 755,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 758,
                    "end": 762,
                    "value": null,
                    "raw": "null"
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
            "end": 792,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 772,
                "end": 791,
                "id": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 775,
                  "name": "r16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 778,
                  "end": 791,
                  "left": {
                    "type": "Identifier",
                    "start": 778,
                    "end": 779,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 791,
                    "name": "undefined",
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
            "start": 797,
            "end": 813,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 801,
                "end": 812,
                "id": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 804,
                  "name": "r17",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 807,
                  "end": 812,
                  "left": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 808,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 812,
                    "name": "t",
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
            "start": 818,
            "end": 834,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 822,
                "end": 833,
                "id": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 825,
                  "name": "r18",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 828,
                  "end": 833,
                  "left": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 829,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "name": "u",
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
            "start": 839,
            "end": 865,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 843,
                "end": 864,
                "id": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 846,
                  "name": "r19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 849,
                  "end": 864,
                  "left": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 850,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 854,
                    "end": 863,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 860,
                      "end": 863,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
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
            "start": 870,
            "end": 887,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 874,
                "end": 886,
                "id": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 877,
                  "name": "r20",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 880,
                  "end": 886,
                  "left": {
                    "type": "Identifier",
                    "start": 880,
                    "end": 881,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "ArrayExpression",
                    "start": 884,
                    "end": 886,
                    "elements": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 96,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 97,
            "end": 98,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "U",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
