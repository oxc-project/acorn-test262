__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3129,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 878,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
            "start": 14,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "NonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 30,
              "end": 32,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 878,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 59,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 58,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 58,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 50,
                      "end": 58,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      }
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
            "start": 80,
            "end": 104,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 103,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 88,
                      "end": 103,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 88,
                          "end": 96,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 88,
                            "end": 94
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 99,
                          "end": 103
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
            "start": 125,
            "end": 154,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 153,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 153,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 133,
                      "end": 153,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 133,
                          "end": 141,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 144,
                          "end": 153
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
            "start": 179,
            "end": 215,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 183,
                "end": 214,
                "id": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 214,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 214,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 187,
                      "end": 214,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 187,
                          "end": 195,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 187,
                            "end": 193
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 198,
                          "end": 207
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 210,
                          "end": 214
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
            "start": 240,
            "end": 258,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 244,
                "end": 257,
                "id": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 257,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 247,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 249,
                      "end": 257,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 249,
                        "end": 255
                      }
                    }
                  }
                },
                "init": null,
                "definite": true
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 283,
            "end": 295,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 287,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 294,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 289,
                    "end": 294,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 291,
                      "end": 294
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
            "start": 320,
            "end": 336,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 335,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 335,
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 328,
                      "end": 335
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
            "start": 361,
            "end": 371,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 365,
                "end": 370,
                "id": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 370,
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 369,
                      "end": 370,
                      "typeName": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 370,
                        "decorators": [],
                        "name": "T",
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
            "start": 392,
            "end": 408,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 396,
                "end": 407,
                "id": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 407,
                  "decorators": [],
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 398,
                    "end": 407,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 400,
                      "end": 407,
                      "typeName": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 407,
                        "decorators": [],
                        "name": "NonNull",
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
            "start": 429,
            "end": 446,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 433,
                "end": 445,
                "id": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 445,
                  "decorators": [],
                  "name": "x10",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 436,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 438,
                      "end": 445,
                      "typeName": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 445,
                        "decorators": [],
                        "name": "NonNull",
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
            "start": 471,
            "end": 488,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 475,
                "end": 487,
                "id": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 487,
                  "decorators": [],
                  "name": "x11",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 478,
                    "end": 487,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 480,
                      "end": 487,
                      "typeName": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 487,
                        "decorators": [],
                        "name": "NonNull",
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
            "type": "FunctionDeclaration",
            "start": 514,
            "end": 813,
            "id": {
              "type": "Identifier",
              "start": 523,
              "end": 526,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 529,
              "end": 813,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 539,
                  "end": 555,
                  "expression": {
                    "type": "CallExpression",
                    "start": 539,
                    "end": 554,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 539,
                      "end": 550,
                      "object": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 546,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 547,
                        "end": 550,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 551,
                        "end": 553,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 564,
                  "end": 580,
                  "expression": {
                    "type": "CallExpression",
                    "start": 564,
                    "end": 579,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 564,
                      "end": 575,
                      "object": {
                        "type": "Identifier",
                        "start": 564,
                        "end": 571,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 575,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 576,
                        "end": 578,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 589,
                  "end": 605,
                  "expression": {
                    "type": "CallExpression",
                    "start": 589,
                    "end": 604,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 589,
                      "end": 600,
                      "object": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 596,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 597,
                        "end": 600,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 601,
                        "end": 603,
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 614,
                  "end": 630,
                  "expression": {
                    "type": "CallExpression",
                    "start": 614,
                    "end": 629,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 614,
                      "end": 625,
                      "object": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 621,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 622,
                        "end": 625,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 626,
                        "end": 628,
                        "decorators": [],
                        "name": "x4",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 639,
                  "end": 655,
                  "expression": {
                    "type": "CallExpression",
                    "start": 639,
                    "end": 654,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 639,
                      "end": 650,
                      "object": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 646,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 647,
                        "end": 650,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 651,
                        "end": 653,
                        "decorators": [],
                        "name": "x5",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 664,
                  "end": 680,
                  "expression": {
                    "type": "CallExpression",
                    "start": 664,
                    "end": 679,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 664,
                      "end": 675,
                      "object": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 671,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 672,
                        "end": 675,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 676,
                        "end": 678,
                        "decorators": [],
                        "name": "x6",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 689,
                  "end": 705,
                  "expression": {
                    "type": "CallExpression",
                    "start": 689,
                    "end": 704,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 689,
                      "end": 700,
                      "object": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 696,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 700,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 701,
                        "end": 703,
                        "decorators": [],
                        "name": "x7",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 714,
                  "end": 730,
                  "expression": {
                    "type": "CallExpression",
                    "start": 714,
                    "end": 729,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 714,
                      "end": 725,
                      "object": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 721,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 722,
                        "end": 725,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 726,
                        "end": 728,
                        "decorators": [],
                        "name": "x8",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 739,
                  "end": 755,
                  "expression": {
                    "type": "CallExpression",
                    "start": 739,
                    "end": 754,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 739,
                      "end": 750,
                      "object": {
                        "type": "Identifier",
                        "start": 739,
                        "end": 746,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 747,
                        "end": 750,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 751,
                        "end": 753,
                        "decorators": [],
                        "name": "x9",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 764,
                  "end": 781,
                  "expression": {
                    "type": "CallExpression",
                    "start": 764,
                    "end": 780,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 764,
                      "end": 775,
                      "object": {
                        "type": "Identifier",
                        "start": 764,
                        "end": 771,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 775,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 776,
                        "end": 779,
                        "decorators": [],
                        "name": "x10",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 790,
                  "end": 807,
                  "expression": {
                    "type": "CallExpression",
                    "start": 790,
                    "end": 806,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 790,
                      "end": 801,
                      "object": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 797,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 798,
                        "end": 801,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 802,
                        "end": 805,
                        "decorators": [],
                        "name": "x11",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 818,
            "end": 865,
            "id": {
              "type": "Identifier",
              "start": 827,
              "end": 830,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 833,
              "end": 865,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 843,
                  "end": 859,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 843,
                    "end": 858,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 843,
                      "end": 846,
                      "decorators": [],
                      "name": "x11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "start": 849,
                      "end": 858,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 849,
                        "end": 851,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 855,
                        "end": 858
                      }
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 870,
            "end": 876,
            "expression": {
              "type": "CallExpression",
              "start": 870,
              "end": 875,
              "callee": {
                "type": "Identifier",
                "start": 870,
                "end": 873,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 880,
      "end": 1497,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 891,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 891,
        "end": 914,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 892,
            "end": 893,
            "name": {
              "type": "Identifier",
              "start": 892,
              "end": 893,
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
            "start": 895,
            "end": 913,
            "name": {
              "type": "Identifier",
              "start": 895,
              "end": 902,
              "decorators": [],
              "name": "NonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 911,
              "end": 913,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 917,
        "end": 1497,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 923,
            "end": 940,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 927,
                "end": 939,
                "id": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 939,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 929,
                    "end": 939,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 931,
                      "end": 939,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 931,
                        "end": 937
                      }
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
            "start": 961,
            "end": 985,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 965,
                "end": 984,
                "id": {
                  "type": "Identifier",
                  "start": 965,
                  "end": 984,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 967,
                    "end": 984,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 969,
                      "end": 984,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 969,
                          "end": 977,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 969,
                            "end": 975
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 980,
                          "end": 984
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
            "start": 1006,
            "end": 1035,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1010,
                "end": 1034,
                "id": {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1034,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1012,
                    "end": 1034,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1014,
                      "end": 1034,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 1014,
                          "end": 1022,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 1014,
                            "end": 1020
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1025,
                          "end": 1034
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
            "start": 1060,
            "end": 1096,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1064,
                "end": 1095,
                "id": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1095,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1066,
                    "end": 1095,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1068,
                      "end": 1095,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 1068,
                          "end": 1076,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 1068,
                            "end": 1074
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1079,
                          "end": 1088
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 1091,
                          "end": 1095
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
            "start": 1121,
            "end": 1139,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1125,
                "end": 1138,
                "id": {
                  "type": "Identifier",
                  "start": 1125,
                  "end": 1138,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1128,
                    "end": 1138,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1130,
                      "end": 1138,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      }
                    }
                  }
                },
                "init": null,
                "definite": true
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1164,
            "end": 1176,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1168,
                "end": 1175,
                "id": {
                  "type": "Identifier",
                  "start": 1168,
                  "end": 1175,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1170,
                    "end": 1175,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1172,
                      "end": 1175
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
            "start": 1201,
            "end": 1217,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1205,
                "end": 1216,
                "id": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1216,
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1207,
                    "end": 1216,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1209,
                      "end": 1216
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
            "start": 1242,
            "end": 1252,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1246,
                "end": 1251,
                "id": {
                  "type": "Identifier",
                  "start": 1246,
                  "end": 1251,
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1248,
                    "end": 1251,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1250,
                      "end": 1251,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1250,
                        "end": 1251,
                        "decorators": [],
                        "name": "T",
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
            "start": 1273,
            "end": 1289,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1277,
                "end": 1288,
                "id": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1288,
                  "decorators": [],
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1279,
                    "end": 1288,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1281,
                      "end": 1288,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1281,
                        "end": 1288,
                        "decorators": [],
                        "name": "NonNull",
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
            "type": "ExpressionStatement",
            "start": 1311,
            "end": 1327,
            "expression": {
              "type": "CallExpression",
              "start": 1311,
              "end": 1326,
              "callee": {
                "type": "MemberExpression",
                "start": 1311,
                "end": 1322,
                "object": {
                  "type": "Identifier",
                  "start": 1311,
                  "end": 1318,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1322,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1325,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1332,
            "end": 1348,
            "expression": {
              "type": "CallExpression",
              "start": 1332,
              "end": 1347,
              "callee": {
                "type": "MemberExpression",
                "start": 1332,
                "end": 1343,
                "object": {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1339,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1340,
                  "end": 1343,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1346,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1353,
            "end": 1369,
            "expression": {
              "type": "CallExpression",
              "start": 1353,
              "end": 1368,
              "callee": {
                "type": "MemberExpression",
                "start": 1353,
                "end": 1364,
                "object": {
                  "type": "Identifier",
                  "start": 1353,
                  "end": 1360,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1364,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1365,
                  "end": 1367,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1374,
            "end": 1390,
            "expression": {
              "type": "CallExpression",
              "start": 1374,
              "end": 1389,
              "callee": {
                "type": "MemberExpression",
                "start": 1374,
                "end": 1385,
                "object": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1381,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1382,
                  "end": 1385,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1386,
                  "end": 1388,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1395,
            "end": 1411,
            "expression": {
              "type": "CallExpression",
              "start": 1395,
              "end": 1410,
              "callee": {
                "type": "MemberExpression",
                "start": 1395,
                "end": 1406,
                "object": {
                  "type": "Identifier",
                  "start": 1395,
                  "end": 1402,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1403,
                  "end": 1406,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1409,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1416,
            "end": 1432,
            "expression": {
              "type": "CallExpression",
              "start": 1416,
              "end": 1431,
              "callee": {
                "type": "MemberExpression",
                "start": 1416,
                "end": 1427,
                "object": {
                  "type": "Identifier",
                  "start": 1416,
                  "end": 1423,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1424,
                  "end": 1427,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1430,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1437,
            "end": 1453,
            "expression": {
              "type": "CallExpression",
              "start": 1437,
              "end": 1452,
              "callee": {
                "type": "MemberExpression",
                "start": 1437,
                "end": 1448,
                "object": {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1444,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1445,
                  "end": 1448,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1451,
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1458,
            "end": 1474,
            "expression": {
              "type": "CallExpression",
              "start": 1458,
              "end": 1473,
              "callee": {
                "type": "MemberExpression",
                "start": 1458,
                "end": 1469,
                "object": {
                  "type": "Identifier",
                  "start": 1458,
                  "end": 1465,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1466,
                  "end": 1469,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1470,
                  "end": 1472,
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1479,
            "end": 1495,
            "expression": {
              "type": "CallExpression",
              "start": 1479,
              "end": 1494,
              "callee": {
                "type": "MemberExpression",
                "start": 1479,
                "end": 1490,
                "object": {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1486,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1490,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1491,
                  "end": 1493,
                  "decorators": [],
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1499,
      "end": 1616,
      "id": {
        "type": "Identifier",
        "start": 1508,
        "end": 1510,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1513,
        "end": 1616,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1519,
            "end": 1535,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1523,
                "end": 1534,
                "id": {
                  "type": "Identifier",
                  "start": 1523,
                  "end": 1534,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1524,
                    "end": 1534,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1526,
                      "end": 1534,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1526,
                        "end": 1532
                      }
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
            "type": "FunctionDeclaration",
            "start": 1559,
            "end": 1603,
            "id": {
              "type": "Identifier",
              "start": 1568,
              "end": 1571,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1574,
              "end": 1603,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1584,
                  "end": 1597,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1584,
                    "end": 1596,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1584,
                      "end": 1594,
                      "object": {
                        "type": "Identifier",
                        "start": 1584,
                        "end": 1585,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1586,
                        "end": 1594,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1608,
            "end": 1614,
            "expression": {
              "type": "CallExpression",
              "start": 1608,
              "end": 1613,
              "callee": {
                "type": "Identifier",
                "start": 1608,
                "end": 1611,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1618,
      "end": 1750,
      "id": {
        "type": "Identifier",
        "start": 1627,
        "end": 1629,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1632,
        "end": 1750,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1638,
            "end": 1652,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1642,
                "end": 1651,
                "id": {
                  "type": "Identifier",
                  "start": 1642,
                  "end": 1651,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1643,
                    "end": 1651,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1645,
                      "end": 1651
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
            "type": "ReturnStatement",
            "start": 1674,
            "end": 1748,
            "argument": {
              "type": "ObjectExpression",
              "start": 1681,
              "end": 1747,
              "properties": [
                {
                  "type": "Property",
                  "start": 1691,
                  "end": 1741,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1691,
                    "end": 1694,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1694,
                    "end": 1741,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1697,
                      "end": 1741,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1711,
                          "end": 1731,
                          "argument": {
                            "type": "CallExpression",
                            "start": 1718,
                            "end": 1730,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1718,
                              "end": 1728,
                              "object": {
                                "type": "Identifier",
                                "start": 1718,
                                "end": 1719,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1720,
                                "end": 1728,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1752,
      "end": 1774,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1764,
          "end": 1773,
          "id": {
            "type": "Identifier",
            "start": 1764,
            "end": 1773,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1765,
              "end": 1773,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1767,
                "end": 1773
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 1796,
      "end": 1831,
      "id": {
        "type": "Identifier",
        "start": 1805,
        "end": 1807,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1810,
        "end": 1831,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1816,
            "end": 1829,
            "expression": {
              "type": "CallExpression",
              "start": 1816,
              "end": 1828,
              "callee": {
                "type": "MemberExpression",
                "start": 1816,
                "end": 1826,
                "object": {
                  "type": "Identifier",
                  "start": 1816,
                  "end": 1817,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1818,
                  "end": 1826,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 1832,
      "end": 1850,
      "declaration": {
        "type": "ObjectExpression",
        "start": 1847,
        "end": 1849,
        "properties": []
      },
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1852,
      "end": 1967,
      "id": {
        "type": "Identifier",
        "start": 1861,
        "end": 1863,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1866,
        "end": 1967,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1872,
            "end": 1888,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1876,
                "end": 1887,
                "id": {
                  "type": "Identifier",
                  "start": 1876,
                  "end": 1887,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1879,
                    "end": 1887,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1881,
                      "end": 1887
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
            "type": "ForInStatement",
            "start": 1916,
            "end": 1965,
            "left": {
              "type": "Identifier",
              "start": 1921,
              "end": 1924,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 1928,
              "end": 1930,
              "properties": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 1932,
              "end": 1965,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1942,
                  "end": 1959,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1942,
                    "end": 1958,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1942,
                      "end": 1953,
                      "object": {
                        "type": "Identifier",
                        "start": 1942,
                        "end": 1949,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1950,
                        "end": 1953,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1954,
                        "end": 1957,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
      "start": 1969,
      "end": 2084,
      "id": {
        "type": "Identifier",
        "start": 1978,
        "end": 1980,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1983,
        "end": 2084,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1989,
            "end": 2005,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1993,
                "end": 2004,
                "id": {
                  "type": "Identifier",
                  "start": 1993,
                  "end": 2004,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1996,
                    "end": 2004,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1998,
                      "end": 2004
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
            "type": "ForOfStatement",
            "start": 2033,
            "end": 2082,
            "await": false,
            "left": {
              "type": "Identifier",
              "start": 2038,
              "end": 2041,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ArrayExpression",
              "start": 2045,
              "end": 2047,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2049,
              "end": 2082,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2059,
                  "end": 2076,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2059,
                    "end": 2075,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2059,
                      "end": 2070,
                      "object": {
                        "type": "Identifier",
                        "start": 2059,
                        "end": 2066,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2067,
                        "end": 2070,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2071,
                        "end": 2074,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
      "start": 2086,
      "end": 2217,
      "id": {
        "type": "Identifier",
        "start": 2095,
        "end": 2097,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2100,
        "end": 2217,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 2106,
            "end": 2215,
            "id": {
              "type": "Identifier",
              "start": 2115,
              "end": 2117,
              "decorators": [],
              "name": "ff",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 2120,
              "end": 2215,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2130,
                  "end": 2136,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2134,
                      "end": 2135,
                      "id": {
                        "type": "Identifier",
                        "start": 2134,
                        "end": 2135,
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2145,
                  "end": 2158,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2149,
                      "end": 2157,
                      "id": {
                        "type": "Identifier",
                        "start": 2149,
                        "end": 2157,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2153,
                          "end": 2157,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 2155,
                            "end": 2157,
                            "members": []
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
                  "type": "ExpressionStatement",
                  "start": 2188,
                  "end": 2209,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2188,
                    "end": 2208,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 2188,
                      "end": 2200,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 2189,
                          "end": 2190,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "RestElement",
                          "start": 2192,
                          "end": 2199,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 2195,
                            "end": 2199,
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 2203,
                      "end": 2208,
                      "callee": {
                        "type": "Identifier",
                        "start": 2203,
                        "end": 2206,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2218,
      "end": 2264,
      "id": {
        "type": "Identifier",
        "start": 2235,
        "end": 2238,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2240,
        "end": 2263,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 2242,
          "end": 2263,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 2243,
              "end": 2249
            },
            {
              "type": "TSRestType",
              "start": 2251,
              "end": 2262,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2254,
                "end": 2262,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 2254,
                  "end": 2260
                }
              }
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2266,
      "end": 2388,
      "id": {
        "type": "Identifier",
        "start": 2275,
        "end": 2277,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2280,
        "end": 2388,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2288,
            "end": 2304,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2294,
                "end": 2303,
                "id": {
                  "type": "Identifier",
                  "start": 2294,
                  "end": 2303,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2295,
                    "end": 2303,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2297,
                      "end": 2303
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
            "type": "FunctionDeclaration",
            "start": 2339,
            "end": 2384,
            "id": {
              "type": "Identifier",
              "start": 2348,
              "end": 2351,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 2354,
              "end": 2384,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2366,
                  "end": 2376,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2370,
                      "end": 2375,
                      "id": {
                        "type": "Identifier",
                        "start": 2370,
                        "end": 2371,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2374,
                        "end": 2375,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2393,
      "end": 2534,
      "id": {
        "type": "Identifier",
        "start": 2402,
        "end": 2404,
        "decorators": [],
        "name": "rw",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2407,
        "end": 2534,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2413,
            "end": 2427,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2417,
                "end": 2426,
                "id": {
                  "type": "Identifier",
                  "start": 2417,
                  "end": 2426,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2418,
                    "end": 2426,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2420,
                      "end": 2426
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
            "type": "FunctionDeclaration",
            "start": 2449,
            "end": 2518,
            "id": {
              "type": "Identifier",
              "start": 2458,
              "end": 2464,
              "decorators": [],
              "name": "inside",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 2467,
              "end": 2518,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2477,
                  "end": 2481,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 2477,
                    "end": 2480,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 2477,
                      "end": 2478,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2490,
                  "end": 2505,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2490,
                    "end": 2504,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2490,
                      "end": 2501,
                      "object": {
                        "type": "Identifier",
                        "start": 2490,
                        "end": 2497,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2498,
                        "end": 2501,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2502,
                        "end": 2503,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2523,
            "end": 2532,
            "expression": {
              "type": "CallExpression",
              "start": 2523,
              "end": 2531,
              "callee": {
                "type": "Identifier",
                "start": 2523,
                "end": 2529,
                "decorators": [],
                "name": "inside",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2535,
      "end": 2540,
      "expression": {
        "type": "CallExpression",
        "start": 2535,
        "end": 2539,
        "callee": {
          "type": "Identifier",
          "start": 2535,
          "end": 2537,
          "decorators": [],
          "name": "rw",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2542,
      "end": 2705,
      "id": {
        "type": "Identifier",
        "start": 2551,
        "end": 2563,
        "decorators": [],
        "name": "createBinder",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2566,
        "end": 2705,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2572,
            "end": 2589,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2576,
                "end": 2588,
                "id": {
                  "type": "Identifier",
                  "start": 2576,
                  "end": 2588,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2580,
                    "end": 2588,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2582,
                      "end": 2588
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
            "type": "FunctionDeclaration",
            "start": 2617,
            "end": 2703,
            "id": {
              "type": "Identifier",
              "start": 2626,
              "end": 2640,
              "decorators": [],
              "name": "bindSourceFile",
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
                "start": 2641,
                "end": 2650,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2642,
                  "end": 2650,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2644,
                    "end": 2650
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 2652,
              "end": 2703,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2662,
                  "end": 2671,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2662,
                    "end": 2670,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2662,
                      "end": 2666,
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2669,
                      "end": 2670,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2681,
                  "end": 2697,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2681,
                    "end": 2696,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2681,
                      "end": 2694,
                      "object": {
                        "type": "Identifier",
                        "start": 2681,
                        "end": 2685,
                        "decorators": [],
                        "name": "file",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2686,
                        "end": 2694,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2707,
      "end": 3129,
      "id": {
        "type": "Identifier",
        "start": 2716,
        "end": 2736,
        "decorators": [],
        "name": "transformClassFields",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2739,
        "end": 3129,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 2745,
            "end": 2869,
            "id": {
              "type": "Identifier",
              "start": 2750,
              "end": 2780,
              "decorators": [],
              "name": "ClassPropertySubstitutionFlags",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 2781,
              "end": 2869,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 2791,
                  "end": 2812,
                  "id": {
                    "type": "Identifier",
                    "start": 2791,
                    "end": 2803,
                    "decorators": [],
                    "name": "ClassAliases",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2806,
                    "end": 2812,
                    "left": {
                      "type": "Literal",
                      "start": 2806,
                      "end": 2807,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2811,
                      "end": 2812,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2822,
                  "end": 2862,
                  "id": {
                    "type": "Identifier",
                    "start": 2822,
                    "end": 2853,
                    "decorators": [],
                    "name": "ClassStaticThisOrSuperReference",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2856,
                    "end": 2862,
                    "left": {
                      "type": "Literal",
                      "start": 2856,
                      "end": 2857,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2861,
                      "end": 2862,
                      "value": 1,
                      "raw": "1"
                    }
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
            "start": 2875,
            "end": 2932,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2879,
                "end": 2931,
                "id": {
                  "type": "Identifier",
                  "start": 2879,
                  "end": 2931,
                  "decorators": [],
                  "name": "enabledSubstitutions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2899,
                    "end": 2931,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2901,
                      "end": 2931,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2901,
                        "end": 2931,
                        "decorators": [],
                        "name": "ClassPropertySubstitutionFlags",
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
            "type": "FunctionDeclaration",
            "start": 2956,
            "end": 3127,
            "id": {
              "type": "Identifier",
              "start": 2965,
              "end": 2998,
              "decorators": [],
              "name": "enableSubstitutionForClassAliases",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3001,
              "end": 3127,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3011,
                  "end": 3079,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3011,
                    "end": 3078,
                    "operator": "|=",
                    "left": {
                      "type": "Identifier",
                      "start": 3011,
                      "end": 3031,
                      "decorators": [],
                      "name": "enabledSubstitutions",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 3035,
                      "end": 3078,
                      "object": {
                        "type": "Identifier",
                        "start": 3035,
                        "end": 3065,
                        "decorators": [],
                        "name": "ClassPropertySubstitutionFlags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3066,
                        "end": 3078,
                        "decorators": [],
                        "name": "ClassAliases",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3089,
                  "end": 3121,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3089,
                    "end": 3120,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3089,
                      "end": 3118,
                      "object": {
                        "type": "Identifier",
                        "start": 3089,
                        "end": 3109,
                        "decorators": [],
                        "name": "enabledSubstitutions",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3110,
                        "end": 3118,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
