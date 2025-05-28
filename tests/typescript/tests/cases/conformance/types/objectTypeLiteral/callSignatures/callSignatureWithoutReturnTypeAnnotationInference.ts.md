__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 1597,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "foo",
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
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 144,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 133,
            "end": 142,
            "argument": {
              "type": "Literal",
              "start": 140,
              "end": 141,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 153,
            "end": 159,
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "decorators": [],
        "name": "foo2",
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
          "start": 176,
          "end": 177,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 201,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 185,
            "end": 199,
            "argument": {
              "type": "CallExpression",
              "start": 192,
              "end": 198,
              "callee": {
                "type": "Identifier",
                "start": 192,
                "end": 195,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 219,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 211,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 216,
                "end": 217,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 221,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 234,
        "decorators": [],
        "name": "foo3",
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
        "start": 237,
        "end": 259,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 243,
            "end": 257,
            "argument": {
              "type": "CallExpression",
              "start": 250,
              "end": 256,
              "callee": {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 276,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 266,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 269,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 291,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 291,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 292,
            "end": 293,
            "name": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 299,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "T",
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
        "start": 301,
        "end": 318,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 307,
            "end": 316,
            "argument": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 336,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 328,
            "end": 335,
            "callee": {
              "type": "Identifier",
              "start": 328,
              "end": 332,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 333,
                "end": 334,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 351,
        "decorators": [],
        "name": "foo5",
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
          "start": 352,
          "end": 353,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 355,
        "end": 429,
        "body": [
          {
            "type": "IfStatement",
            "start": 361,
            "end": 427,
            "test": {
              "type": "Literal",
              "start": 365,
              "end": 369,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 371,
              "end": 396,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 381,
                  "end": 390,
                  "argument": {
                    "type": "Literal",
                    "start": 388,
                    "end": 389,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 402,
              "end": 427,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 412,
                  "end": 421,
                  "argument": {
                    "type": "Literal",
                    "start": 419,
                    "end": 420,
                    "value": 2,
                    "raw": "2"
                  }
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
      "start": 430,
      "end": 447,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 436,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 439,
            "end": 446,
            "callee": {
              "type": "Identifier",
              "start": 439,
              "end": 443,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 444,
                "end": 445,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 462,
        "decorators": [],
        "name": "foo6",
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
          "start": 463,
          "end": 464,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 466,
        "end": 565,
        "body": [
          {
            "type": "TryStatement",
            "start": 472,
            "end": 563,
            "block": {
              "type": "BlockStatement",
              "start": 476,
              "end": 483,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 488,
              "end": 524,
              "param": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 498,
                "end": 524,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 508,
                    "end": 518,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 515,
                      "end": 517,
                      "elements": []
                    }
                  }
                ]
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 537,
              "end": 563,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 547,
                  "end": 557,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 554,
                    "end": 556,
                    "elements": []
                  }
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
      "start": 566,
      "end": 583,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 572,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 575,
            "end": 582,
            "callee": {
              "type": "Identifier",
              "start": 575,
              "end": 579,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 580,
                "end": 581,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 585,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 598,
        "decorators": [],
        "name": "foo7",
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
          "start": 599,
          "end": 600,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 602,
        "end": 626,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 608,
            "end": 624,
            "argument": {
              "type": "UnaryExpression",
              "start": 615,
              "end": 623,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 644,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 643,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 633,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 636,
            "end": 643,
            "callee": {
              "type": "Identifier",
              "start": 636,
              "end": 640,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 641,
                "end": 642,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 662,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 675,
        "decorators": [],
        "name": "foo8",
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
          "start": 676,
          "end": 685,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 677,
            "end": 685,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 679,
              "end": 685
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 687,
        "end": 711,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 693,
            "end": 709,
            "argument": {
              "type": "ObjectExpression",
              "start": 700,
              "end": 708,
              "properties": [
                {
                  "type": "Property",
                  "start": 702,
                  "end": 706,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 703,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 706,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
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
      "start": 712,
      "end": 729,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 716,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 718,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 721,
            "end": 728,
            "callee": {
              "type": "Identifier",
              "start": 721,
              "end": 725,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 726,
                "end": 727,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 731,
      "end": 763,
      "id": {
        "type": "Identifier",
        "start": 741,
        "end": 742,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 743,
        "end": 763,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 749,
            "end": 761,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 749,
              "end": 752,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 752,
              "end": 760,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 754,
                "end": 760
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
      "type": "FunctionDeclaration",
      "start": 764,
      "end": 824,
      "id": {
        "type": "Identifier",
        "start": 773,
        "end": 777,
        "decorators": [],
        "name": "foo9",
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
          "start": 778,
          "end": 787,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 779,
            "end": 787,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 781,
              "end": 787
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 789,
        "end": 824,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 795,
            "end": 804,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 799,
                "end": 803,
                "id": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 803,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 800,
                    "end": 803,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 802,
                      "end": 803,
                      "typeName": {
                        "type": "Identifier",
                        "start": 802,
                        "end": 803,
                        "decorators": [],
                        "name": "I",
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
            "type": "ReturnStatement",
            "start": 809,
            "end": 818,
            "argument": {
              "type": "Identifier",
              "start": 816,
              "end": 817,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 825,
      "end": 842,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 829,
          "end": 841,
          "id": {
            "type": "Identifier",
            "start": 829,
            "end": 831,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 834,
            "end": 841,
            "callee": {
              "type": "Identifier",
              "start": 834,
              "end": 838,
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 839,
                "end": 840,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 844,
      "end": 872,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 850,
        "end": 851,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 852,
        "end": 872,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 858,
            "end": 870,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 861,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 861,
              "end": 869,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 863,
                "end": 869
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 873,
      "end": 930,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 887,
        "decorators": [],
        "name": "foo10",
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
          "start": 888,
          "end": 897,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 889,
            "end": 897,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 891,
              "end": 897
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 899,
        "end": 930,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 905,
            "end": 914,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 909,
                "end": 913,
                "id": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 913,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 910,
                    "end": 913,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 912,
                      "end": 913,
                      "typeName": {
                        "type": "Identifier",
                        "start": 912,
                        "end": 913,
                        "decorators": [],
                        "name": "C",
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
            "type": "ReturnStatement",
            "start": 919,
            "end": 928,
            "argument": {
              "type": "Identifier",
              "start": 926,
              "end": 927,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 950,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 935,
          "end": 949,
          "id": {
            "type": "Identifier",
            "start": 935,
            "end": 938,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 941,
            "end": 949,
            "callee": {
              "type": "Identifier",
              "start": 941,
              "end": 946,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 947,
                "end": 948,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 952,
      "end": 1021,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 960,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 961,
        "end": 1021,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 967,
            "end": 984,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 974,
              "end": 984,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 978,
                  "end": 983,
                  "id": {
                    "type": "Identifier",
                    "start": 978,
                    "end": 979,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 982,
                    "end": 983,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 989,
            "end": 1019,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 996,
              "end": 1019,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1002,
                "end": 1003,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1004,
                "end": 1019,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 1006,
                    "end": 1017,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1006,
                      "end": 1009,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1009,
                      "end": 1017,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1011,
                        "end": 1017
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
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1022,
      "end": 1056,
      "id": {
        "type": "Identifier",
        "start": 1031,
        "end": 1036,
        "decorators": [],
        "name": "foo11",
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
        "start": 1039,
        "end": 1056,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1045,
            "end": 1054,
            "argument": {
              "type": "Identifier",
              "start": 1052,
              "end": 1053,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1057,
      "end": 1075,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1061,
          "end": 1074,
          "id": {
            "type": "Identifier",
            "start": 1061,
            "end": 1064,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1067,
            "end": 1074,
            "callee": {
              "type": "Identifier",
              "start": 1067,
              "end": 1072,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1100,
      "end": 1131,
      "id": {
        "type": "Identifier",
        "start": 1110,
        "end": 1112,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1113,
        "end": 1131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1119,
            "end": 1129,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1119,
              "end": 1120,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1120,
              "end": 1128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1122,
                "end": 1128
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
      "type": "TSInterfaceDeclaration",
      "start": 1132,
      "end": 1163,
      "id": {
        "type": "Identifier",
        "start": 1142,
        "end": 1144,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1145,
        "end": 1163,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1151,
            "end": 1161,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1151,
              "end": 1152,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1152,
              "end": 1160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1154,
                "end": 1160
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
      "type": "FunctionDeclaration",
      "start": 1164,
      "end": 1215,
      "id": {
        "type": "Identifier",
        "start": 1173,
        "end": 1178,
        "decorators": [],
        "name": "foo12",
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
        "start": 1181,
        "end": 1215,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1187,
            "end": 1198,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1191,
                "end": 1197,
                "id": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1197,
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1193,
                    "end": 1197,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1195,
                      "end": 1197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1195,
                        "end": 1197,
                        "decorators": [],
                        "name": "I2",
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
            "type": "ReturnStatement",
            "start": 1203,
            "end": 1213,
            "argument": {
              "type": "Identifier",
              "start": 1210,
              "end": 1212,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1216,
      "end": 1234,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1220,
          "end": 1233,
          "id": {
            "type": "Identifier",
            "start": 1220,
            "end": 1223,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1226,
            "end": 1233,
            "callee": {
              "type": "Identifier",
              "start": 1226,
              "end": 1231,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1236,
      "end": 1263,
      "id": {
        "type": "Identifier",
        "start": 1245,
        "end": 1247,
        "decorators": [],
        "name": "m1",
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
        "start": 1250,
        "end": 1263,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1252,
            "end": 1261,
            "argument": {
              "type": "Literal",
              "start": 1259,
              "end": 1260,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1264,
      "end": 1295,
      "id": {
        "type": "Identifier",
        "start": 1271,
        "end": 1273,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1274,
        "end": 1295,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1276,
            "end": 1293,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1283,
              "end": 1293,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1287,
                  "end": 1292,
                  "id": {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1288,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1291,
                    "end": 1292,
                    "value": 2,
                    "raw": "2"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1296,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1305,
        "end": 1310,
        "decorators": [],
        "name": "foo13",
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
        "start": 1313,
        "end": 1331,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1319,
            "end": 1329,
            "argument": {
              "type": "Identifier",
              "start": 1326,
              "end": 1328,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1332,
      "end": 1350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1336,
          "end": 1349,
          "id": {
            "type": "Identifier",
            "start": 1336,
            "end": 1339,
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1342,
            "end": 1349,
            "callee": {
              "type": "Identifier",
              "start": 1342,
              "end": 1347,
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1352,
      "end": 1404,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1360,
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1361,
        "end": 1404,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1367,
            "end": 1379,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1367,
              "end": 1370,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1370,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1372,
                "end": 1378
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1384,
            "end": 1402,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1384,
              "end": 1395,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1395,
              "end": 1402,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1397,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1399,
                "end": 1402,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1405,
      "end": 1440,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1414,
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1415,
        "end": 1440,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1421,
            "end": 1438,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1428,
              "end": 1438,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1432,
                  "end": 1437,
                  "id": {
                    "type": "Identifier",
                    "start": 1432,
                    "end": 1433,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1436,
                    "end": 1437,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1441,
      "end": 1476,
      "id": {
        "type": "Identifier",
        "start": 1450,
        "end": 1455,
        "decorators": [],
        "name": "foo14",
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
        "start": 1458,
        "end": 1476,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1464,
            "end": 1474,
            "argument": {
              "type": "Identifier",
              "start": 1471,
              "end": 1473,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1477,
      "end": 1495,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1481,
          "end": 1494,
          "id": {
            "type": "Identifier",
            "start": 1481,
            "end": 1484,
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1487,
            "end": 1494,
            "callee": {
              "type": "Identifier",
              "start": 1487,
              "end": 1492,
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1497,
      "end": 1510,
      "id": {
        "type": "Identifier",
        "start": 1502,
        "end": 1504,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1505,
        "end": 1510,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1507,
            "end": 1508,
            "id": {
              "type": "Identifier",
              "start": 1507,
              "end": 1508,
              "decorators": [],
              "name": "A",
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
      "type": "TSModuleDeclaration",
      "start": 1511,
      "end": 1542,
      "id": {
        "type": "Identifier",
        "start": 1518,
        "end": 1520,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1521,
        "end": 1542,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1523,
            "end": 1540,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1530,
              "end": 1540,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1534,
                  "end": 1539,
                  "id": {
                    "type": "Identifier",
                    "start": 1534,
                    "end": 1535,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1538,
                    "end": 1539,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1543,
      "end": 1578,
      "id": {
        "type": "Identifier",
        "start": 1552,
        "end": 1557,
        "decorators": [],
        "name": "foo15",
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
        "start": 1560,
        "end": 1578,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1566,
            "end": 1576,
            "argument": {
              "type": "Identifier",
              "start": 1573,
              "end": 1575,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1579,
      "end": 1597,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1583,
          "end": 1596,
          "id": {
            "type": "Identifier",
            "start": 1583,
            "end": 1586,
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1589,
            "end": 1596,
            "callee": {
              "type": "Identifier",
              "start": 1589,
              "end": 1594,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
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
