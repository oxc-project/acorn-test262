additionOperatorWithTypeParameter.ts
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
      "body": {
        "type": "TSEnumBody",
        "start": 74,
        "end": 82,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 76,
            "end": 77,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 79,
            "end": 80,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 889,
      "async": false,
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 344,
                  "end": 349,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 361,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 364,
                  "end": 369,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 381,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 384,
                  "end": 389,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 385,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 430,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 433,
                  "end": 438,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "decorators": [],
                  "name": "r6",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 453,
                  "end": 458,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 470,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 473,
                  "end": 478,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "decorators": [],
                  "name": "r8",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 533,
                  "end": 538,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 534,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 576,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 579,
                  "end": 584,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 580,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
                  "decorators": [],
                  "name": "r10",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 600,
                  "end": 605,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 601,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 604,
                    "end": 605,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 618,
                  "decorators": [],
                  "name": "r11",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 621,
                  "end": 626,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 622,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 668,
                  "decorators": [],
                  "name": "r12",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 671,
                  "end": 676,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 672,
                    "decorators": [],
                    "name": "e",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 675,
                    "end": 676,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 689,
                  "decorators": [],
                  "name": "r13",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 692,
                  "end": 697,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 710,
                  "decorators": [],
                  "name": "r14",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 713,
                  "end": 718,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 751,
                  "decorators": [],
                  "name": "r15",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 754,
                  "end": 762,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 755,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 758,
                    "end": 762,
                    "raw": "null",
                    "value": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 775,
                  "decorators": [],
                  "name": "r16",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 778,
                  "end": 791,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 778,
                    "end": 779,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 791,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 804,
                  "decorators": [],
                  "name": "r17",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 807,
                  "end": 812,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 808,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 812,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 825,
                  "decorators": [],
                  "name": "r18",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 828,
                  "end": 833,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 829,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 846,
                  "decorators": [],
                  "name": "r19",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 849,
                  "end": 864,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 850,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 854,
                    "end": 863,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 860,
                      "end": 863,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 877,
                  "decorators": [],
                  "name": "r20",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 880,
                  "end": 886,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 880,
                    "end": 881,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 884,
                    "end": 886,
                    "elements": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "foo",
        "optional": false
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
                "optional": false
              }
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
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 96,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 97,
            "end": 98,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
