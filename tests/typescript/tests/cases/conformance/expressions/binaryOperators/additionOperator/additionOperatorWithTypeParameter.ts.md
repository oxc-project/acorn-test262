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
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
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
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 107,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 889,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 132,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 131,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 128,
                      "end": 131
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
            "start": 137,
            "end": 152,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 151,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 144,
                      "end": 151
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
            "start": 157,
            "end": 171,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 161,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 170,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 164,
                      "end": 170
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
            "start": 176,
            "end": 190,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 180,
                "end": 189,
                "id": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 183,
                      "end": 189
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
            "start": 195,
            "end": 209,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 208,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Object",
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
            "start": 214,
            "end": 223,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 218,
                "end": 222,
                "id": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
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
                        "decorators": [],
                        "name": "E",
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
            "start": 228,
            "end": 240,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 232,
                "end": 239,
                "id": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 239,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 239,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 235,
                      "end": 239
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
            "end": 304,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 288,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 292,
                      "end": 295
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 298,
                  "end": 303,
                  "left": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "a",
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
            "start": 335,
            "end": 350,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 339,
                "end": 349,
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 344,
                  "end": 349,
                  "left": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "decorators": [],
                    "name": "b",
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
            "start": 355,
            "end": 370,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 369,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 361,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 364,
                  "end": 369,
                  "left": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "c",
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
            "start": 375,
            "end": 390,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 389,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 381,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 384,
                  "end": 389,
                  "left": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 385,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "d",
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
            "start": 424,
            "end": 439,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 428,
                "end": 438,
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 430,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 433,
                  "end": 438,
                  "left": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "decorators": [],
                    "name": "e",
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
            "start": 444,
            "end": 459,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 448,
                "end": 458,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 453,
                  "end": 458,
                  "left": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "decorators": [],
                    "name": "g",
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
            "end": 479,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 478,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 470,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 473,
                  "end": 478,
                  "left": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "decorators": [],
                    "name": "f",
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
            "start": 524,
            "end": 539,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 528,
                "end": 538,
                "id": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 533,
                  "end": 538,
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 534,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "decorators": [],
                    "name": "t",
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
            "start": 570,
            "end": 585,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 574,
                "end": 584,
                "id": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 576,
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 579,
                  "end": 584,
                  "left": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 580,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "decorators": [],
                    "name": "t",
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
            "start": 590,
            "end": 606,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 594,
                "end": 605,
                "id": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 600,
                  "end": 605,
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 601,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 604,
                    "end": 605,
                    "decorators": [],
                    "name": "t",
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
            "start": 611,
            "end": 627,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 615,
                "end": 626,
                "id": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 618,
                  "decorators": [],
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 621,
                  "end": 626,
                  "left": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 622,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "decorators": [],
                    "name": "t",
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
            "start": 661,
            "end": 677,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 665,
                "end": 676,
                "id": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 668,
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 671,
                  "end": 676,
                  "left": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 672,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 675,
                    "end": 676,
                    "decorators": [],
                    "name": "t",
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
            "start": 682,
            "end": 698,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 686,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 689,
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 692,
                  "end": 697,
                  "left": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "t",
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
            "start": 703,
            "end": 719,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 718,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 710,
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 713,
                  "end": 718,
                  "left": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "decorators": [],
                    "name": "t",
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
            "start": 744,
            "end": 763,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 748,
                "end": 762,
                "id": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 751,
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 754,
                  "end": 762,
                  "left": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 755,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 768,
            "end": 792,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 772,
                "end": 791,
                "id": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 775,
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 778,
                  "end": 791,
                  "left": {
                    "type": "Identifier",
                    "start": 778,
                    "end": 779,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 791,
                    "decorators": [],
                    "name": "undefined",
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
            "start": 797,
            "end": 813,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 801,
                "end": 812,
                "id": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 804,
                  "decorators": [],
                  "name": "r17",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 807,
                  "end": 812,
                  "left": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 808,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 812,
                    "decorators": [],
                    "name": "t",
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
            "start": 818,
            "end": 834,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 822,
                "end": 833,
                "id": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 825,
                  "decorators": [],
                  "name": "r18",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 828,
                  "end": 833,
                  "left": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 829,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "decorators": [],
                    "name": "u",
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
            "start": 839,
            "end": 865,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 843,
                "end": 864,
                "id": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 846,
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 849,
                  "end": 864,
                  "left": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 850,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 854,
                    "end": 863,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 860,
                      "end": 863,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 870,
            "end": 887,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 874,
                "end": 886,
                "id": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 877,
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 880,
                  "end": 886,
                  "left": {
                    "type": "Identifier",
                    "start": 880,
                    "end": 881,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
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
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
