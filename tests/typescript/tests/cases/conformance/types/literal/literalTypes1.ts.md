__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1385,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "zero",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 11,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 10,
                "end": 11,
                "literal": {
                  "type": "Literal",
                  "start": 10,
                  "end": 11,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 32,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 27,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 27,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 26,
                "end": 27,
                "literal": {
                  "type": "Literal",
                  "start": 26,
                  "end": 27,
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 48,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 43,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 42,
                "end": 43,
                "literal": {
                  "type": "Literal",
                  "start": 42,
                  "end": 43,
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 46,
            "end": 47,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 80,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 68,
            "decorators": [],
            "name": "oneOrTwo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 68,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 63,
                "end": 68,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 63,
                    "end": 64,
                    "literal": {
                      "type": "Literal",
                      "start": 63,
                      "end": 64,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 67,
                    "end": 68,
                    "literal": {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 71,
            "end": 79,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 72,
              "end": 77,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 72,
                  "end": 73,
                  "literal": {
                    "type": "Literal",
                    "start": 72,
                    "end": 73,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 76,
                  "end": 77,
                  "literal": {
                    "type": "Literal",
                    "start": 76,
                    "end": 77,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            "expression": {
              "type": "Literal",
              "start": 78,
              "end": 79,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 82,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 106,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 95,
            "end": 106,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 97,
              "end": 106,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 97,
                  "end": 98,
                  "literal": {
                    "type": "Literal",
                    "start": 97,
                    "end": 98,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 101,
                  "end": 102,
                  "literal": {
                    "type": "Literal",
                    "start": 101,
                    "end": 102,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 105,
                  "end": 106,
                  "literal": {
                    "type": "Literal",
                    "start": 105,
                    "end": 106,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 323,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 114,
            "end": 321,
            "discriminant": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 135,
                "end": 179,
                "test": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 144,
                  "decorators": [],
                  "name": "zero",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 160,
                    "expression": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 173,
                    "end": 179,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 188,
                "end": 231,
                "test": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 210,
                    "end": 212,
                    "expression": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 225,
                    "end": 231,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 240,
                "end": 283,
                "test": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 248,
                  "decorators": [],
                  "name": "two",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 262,
                    "end": 264,
                    "expression": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 263,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 277,
                    "end": 283,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 292,
                "end": 315,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 313,
                    "end": 315,
                    "expression": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 314,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 336,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 337,
          "end": 349,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 349,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 340,
              "end": 349,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 340,
                  "end": 341,
                  "literal": {
                    "type": "Literal",
                    "start": 340,
                    "end": 341,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 344,
                  "end": 345,
                  "literal": {
                    "type": "Literal",
                    "start": 344,
                    "end": 345,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 348,
                  "end": 349,
                  "literal": {
                    "type": "Literal",
                    "start": 348,
                    "end": 349,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 351,
        "end": 519,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 357,
            "end": 517,
            "discriminant": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 378,
                "end": 422,
                "test": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 387,
                  "decorators": [],
                  "name": "zero",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 401,
                    "end": 403,
                    "expression": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 416,
                    "end": 422,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 431,
                "end": 479,
                "test": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 444,
                  "decorators": [],
                  "name": "oneOrTwo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 458,
                    "end": 460,
                    "expression": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 473,
                    "end": 479,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 488,
                "end": 511,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 509,
                    "end": 511,
                    "expression": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 510,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 521,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 531,
        "decorators": [],
        "name": "Falsy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 534,
        "end": 567,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 534,
            "end": 539,
            "literal": {
              "type": "Literal",
              "start": 534,
              "end": 539,
              "value": false,
              "raw": "false"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 542,
            "end": 543,
            "literal": {
              "type": "Literal",
              "start": 542,
              "end": 543,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 546,
            "end": 548,
            "literal": {
              "type": "Literal",
              "start": 546,
              "end": 548,
              "value": "",
              "raw": "\"\""
            }
          },
          {
            "type": "TSNullKeyword",
            "start": 551,
            "end": 555
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 558,
            "end": 567
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 570,
      "end": 653,
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 581,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 582,
          "end": 590,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 583,
            "end": 590,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 585,
              "end": 590,
              "typeName": {
                "type": "Identifier",
                "start": 585,
                "end": 590,
                "decorators": [],
                "name": "Falsy",
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
        "start": 592,
        "end": 653,
        "body": [
          {
            "type": "IfStatement",
            "start": 598,
            "end": 651,
            "test": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 605,
              "end": 623,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 615,
                  "end": 617,
                  "expression": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 633,
              "end": 651,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 643,
                  "end": 645,
                  "expression": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 644,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 655,
      "end": 1036,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 666,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 667,
          "end": 691,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 668,
            "end": 691,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 670,
              "end": 691,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 670,
                  "end": 671,
                  "literal": {
                    "type": "Literal",
                    "start": 670,
                    "end": 671,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 674,
                  "end": 675,
                  "literal": {
                    "type": "Literal",
                    "start": 674,
                    "end": 675,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 678,
                  "end": 682,
                  "literal": {
                    "type": "Literal",
                    "start": 678,
                    "end": 682,
                    "value": true,
                    "raw": "true"
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 685,
                  "end": 691
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 693,
        "end": 1036,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 699,
            "end": 1034,
            "discriminant": {
              "type": "Identifier",
              "start": 707,
              "end": 708,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 720,
                "end": 761,
                "test": {
                  "type": "Literal",
                  "start": 725,
                  "end": 726,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 740,
                    "end": 742,
                    "expression": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 755,
                    "end": 761,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 770,
                "end": 811,
                "test": {
                  "type": "Literal",
                  "start": 775,
                  "end": 776,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 790,
                    "end": 792,
                    "expression": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 791,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 805,
                    "end": 811,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 820,
                "end": 831,
                "test": {
                  "type": "Literal",
                  "start": 825,
                  "end": 830,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 840,
                "end": 885,
                "test": {
                  "type": "Literal",
                  "start": 845,
                  "end": 850,
                  "value": "def",
                  "raw": "\"def\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 864,
                    "end": 866,
                    "expression": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 865,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 879,
                    "end": 885,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 894,
                "end": 938,
                "test": {
                  "type": "Literal",
                  "start": 899,
                  "end": 903,
                  "value": null,
                  "raw": "null"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 917,
                    "end": 919,
                    "expression": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 918,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 932,
                    "end": 938,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 947,
                "end": 996,
                "test": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 961,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 975,
                    "end": 977,
                    "expression": {
                      "type": "Identifier",
                      "start": 975,
                      "end": 976,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 990,
                    "end": 996,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1005,
                "end": 1028,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1026,
                    "end": 1028,
                    "expression": {
                      "type": "Identifier",
                      "start": 1026,
                      "end": 1027,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1038,
      "end": 1385,
      "id": {
        "type": "Identifier",
        "start": 1047,
        "end": 1049,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1050,
          "end": 1078,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1051,
            "end": 1078,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1053,
              "end": 1078,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1053,
                  "end": 1059
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1062,
                  "end": 1068
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1071,
                  "end": 1078
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1080,
        "end": 1385,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1086,
            "end": 1383,
            "discriminant": {
              "type": "Identifier",
              "start": 1094,
              "end": 1095,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1107,
                "end": 1152,
                "test": {
                  "type": "Literal",
                  "start": 1112,
                  "end": 1117,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1131,
                    "end": 1133,
                    "expression": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1146,
                    "end": 1152,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1161,
                "end": 1168,
                "test": {
                  "type": "Literal",
                  "start": 1166,
                  "end": 1167,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 1177,
                "end": 1218,
                "test": {
                  "type": "Literal",
                  "start": 1182,
                  "end": 1183,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1197,
                    "end": 1199,
                    "expression": {
                      "type": "Identifier",
                      "start": 1197,
                      "end": 1198,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1212,
                    "end": 1218,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1227,
                "end": 1271,
                "test": {
                  "type": "Literal",
                  "start": 1232,
                  "end": 1236,
                  "value": true,
                  "raw": "true"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1250,
                    "end": 1252,
                    "expression": {
                      "type": "Identifier",
                      "start": 1250,
                      "end": 1251,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1265,
                    "end": 1271,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1280,
                "end": 1293,
                "test": {
                  "type": "Literal",
                  "start": 1285,
                  "end": 1292,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 1302,
                "end": 1345,
                "test": {
                  "type": "Literal",
                  "start": 1307,
                  "end": 1310,
                  "value": 123,
                  "raw": "123"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1324,
                    "end": 1326,
                    "expression": {
                      "type": "Identifier",
                      "start": 1324,
                      "end": 1325,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1339,
                    "end": 1345,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1354,
                "end": 1377,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1375,
                    "end": 1377,
                    "expression": {
                      "type": "Identifier",
                      "start": 1375,
                      "end": 1376,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            ]
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
