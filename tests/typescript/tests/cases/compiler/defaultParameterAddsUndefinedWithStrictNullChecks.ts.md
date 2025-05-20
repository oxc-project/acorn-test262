__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1369,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 115,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 115,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 113,
            "argument": {
              "type": "BinaryExpression",
              "start": 69,
              "end": 112,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 69,
                "end": 89,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 82,
                  "decorators": [],
                  "name": "addUndefined1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 89,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "LogicalExpression",
                "start": 93,
                "end": 111,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 106,
                  "decorators": [],
                  "name": "addUndefined2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 110,
                  "end": 111,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 11,
          "end": 30,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 24,
            "decorators": [],
            "name": "addUndefined1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 27,
            "end": 30,
            "raw": "\"J\"",
            "value": "J"
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 32,
          "end": 54,
          "decorators": [],
          "name": "addUndefined2",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 54,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 215,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 167,
        "end": 215,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 173,
            "end": 213,
            "argument": {
              "type": "BinaryExpression",
              "start": 180,
              "end": 212,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 180,
                "end": 199,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 192,
                  "decorators": [],
                  "name": "addUndefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 199,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 202,
                "end": 212,
                "decorators": [],
                "name": "addDefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 127,
          "end": 145,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 127,
            "end": 139,
            "decorators": [],
            "name": "addUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 142,
            "end": 145,
            "raw": "\"J\"",
            "value": "J"
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 147,
          "end": 165,
          "decorators": [],
          "name": "addDefined",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 165,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 159,
              "end": 165
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "decorators": [],
            "name": "total",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 228,
            "end": 270,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 228,
              "end": 252,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 228,
                "end": 243,
                "operator": "+",
                "left": {
                  "type": "CallExpression",
                  "start": 228,
                  "end": 231,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "right": {
                  "type": "CallExpression",
                  "start": 234,
                  "end": 243,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 236,
                      "end": 239,
                      "raw": "'a'",
                      "value": "a"
                    },
                    {
                      "type": "Literal",
                      "start": 241,
                      "end": 242,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 246,
                "end": 252,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 248,
                    "end": 251,
                    "raw": "'b'",
                    "value": "b"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "right": {
              "type": "CallExpression",
              "start": 255,
              "end": 270,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 266,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 268,
                  "end": 269,
                  "raw": "2",
                  "value": 2
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 308,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 277,
          "decorators": [],
          "name": "total",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 280,
          "end": 307,
          "operator": "+",
          "left": {
            "type": "CallExpression",
            "start": 280,
            "end": 289,
            "arguments": [
              {
                "type": "Literal",
                "start": 282,
                "end": 285,
                "raw": "'c'",
                "value": "c"
              },
              {
                "type": "Literal",
                "start": 287,
                "end": 288,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "right": {
            "type": "CallExpression",
            "start": 292,
            "end": 307,
            "arguments": [
              {
                "type": "Identifier",
                "start": 294,
                "end": 303,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 305,
                "end": 306,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 310,
      "end": 374,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 374,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 372,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 363,
              "end": 371,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 365,
                "end": 371,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 324,
          "end": 344,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 324,
            "end": 333,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 333,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 327,
                "end": 333
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 336,
            "end": 344,
            "raw": "\"string\"",
            "value": "string"
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 346,
          "end": 355,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 347,
            "end": 355,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 349,
              "end": 355
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 456,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 456,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 421,
            "end": 430,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 421,
              "end": 429,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 421,
                "end": 422,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 423,
                "end": 429,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 389,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 390,
          "end": 402,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 394,
            "end": 402,
            "raw": "\"string\"",
            "value": "string"
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 404,
          "end": 413,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 413,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 407,
              "end": 413
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 458,
      "end": 577,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 517,
        "end": 577,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 532,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 523,
              "end": 531,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 525,
                "end": 531,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 561,
            "end": 575,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 561,
              "end": 574,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 561,
                "end": 562,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 565,
                "end": 574,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 471,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 472,
          "end": 504,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 472,
            "end": 493,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 493,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 475,
                "end": 493,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 475,
                    "end": 481
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 484,
                    "end": 493
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 496,
            "end": 504,
            "raw": "\"string\"",
            "value": "string"
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 506,
          "end": 515,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 507,
            "end": 515,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 509,
              "end": 515
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 579,
      "end": 700,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 639,
        "end": 700,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 645,
            "end": 647,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 684,
            "end": 698,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 684,
              "end": 697,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 684,
                "end": 685,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 688,
                "end": 697,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 588,
        "end": 592,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 593,
          "end": 626,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 593,
            "end": 614,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 614,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 596,
                "end": 614,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 596,
                    "end": 602
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 605,
                    "end": 614
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 617,
            "end": 626,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 628,
          "end": 637,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 629,
            "end": 637,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 631,
              "end": 637
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 702,
      "end": 758,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 729,
        "decorators": [],
        "name": "OptionalNullableString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 732,
        "end": 757,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 732,
            "end": 738
          },
          {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 748,
            "end": 757
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 759,
      "end": 873,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 813,
        "end": 873,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 819,
            "end": 830,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 819,
              "end": 829,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 819,
                "end": 822,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 825,
                "end": 829,
                "raw": "null",
                "value": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 835,
            "end": 871,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 835,
              "end": 870,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 835,
                "end": 838,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 841,
                "end": 870,
                "raw": "'string and null are both ok'",
                "value": "string and null are both ok"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 778,
        "decorators": [],
        "name": "allowsNull",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 779,
          "end": 811,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 779,
            "end": 806,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 782,
              "end": 806,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 784,
                "end": 806,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 806,
                  "decorators": [],
                  "name": "OptionalNullableString",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 809,
            "end": 811,
            "raw": "\"\"",
            "value": ""
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 874,
      "end": 891,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 874,
        "end": 890,
        "arguments": [
          {
            "type": "Literal",
            "start": 885,
            "end": 889,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 874,
          "end": 884,
          "decorators": [],
          "name": "allowsNull",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 996,
      "end": 1015,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 996,
        "end": 1014,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1001,
            "end": 1010,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 1012,
            "end": 1013,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 996,
          "end": 1000,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1016,
      "end": 1035,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1016,
        "end": 1034,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1021,
            "end": 1030,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 1032,
            "end": 1033,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1016,
          "end": 1020,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1036,
      "end": 1055,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1036,
        "end": 1054,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1041,
            "end": 1050,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 1052,
            "end": 1053,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1036,
          "end": 1040,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1056,
      "end": 1075,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1056,
        "end": 1074,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1061,
            "end": 1070,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 1072,
            "end": 1073,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1056,
          "end": 1060,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1078,
      "end": 1174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1124,
        "end": 1174,
        "body": [
          {
            "type": "IfStatement",
            "start": 1130,
            "end": 1172,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1147,
              "end": 1172,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1157,
                  "end": 1166,
                  "argument": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1165,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1134,
              "end": 1145,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1134,
                "end": 1135,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1140,
                "end": 1145,
                "raw": "false",
                "value": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1087,
        "end": 1113,
        "decorators": [],
        "name": "removeUndefinedButNotFalse",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1114,
          "end": 1122,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 1114,
            "end": 1115,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 1118,
            "end": 1122,
            "raw": "true",
            "value": true
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1176,
      "end": 1204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1190,
          "end": 1203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1190,
            "end": 1203,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1194,
              "end": 1203,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1196,
                "end": 1203
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1205,
      "end": 1369,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1257,
        "end": 1369,
        "body": [
          {
            "type": "IfStatement",
            "start": 1263,
            "end": 1350,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1284,
              "end": 1350,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1294,
                  "end": 1344,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1311,
                    "end": 1344,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1325,
                        "end": 1334,
                        "argument": {
                          "type": "Identifier",
                          "start": 1332,
                          "end": 1333,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1298,
                    "end": 1309,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1298,
                      "end": 1299,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1304,
                      "end": 1309,
                      "raw": "false",
                      "value": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1267,
              "end": 1282,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 1267,
                "end": 1268,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1273,
                "end": 1282,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1355,
            "end": 1367,
            "argument": {
              "type": "Literal",
              "start": 1362,
              "end": 1366,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1227,
        "decorators": [],
        "name": "removeNothing",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1228,
          "end": 1255,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 1228,
            "end": 1229,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ConditionalExpression",
            "start": 1232,
            "end": 1255,
            "alternate": {
              "type": "Identifier",
              "start": 1246,
              "end": 1255,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Literal",
              "start": 1239,
              "end": 1243,
              "raw": "true",
              "value": true
            },
            "test": {
              "type": "Identifier",
              "start": 1232,
              "end": 1236,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
