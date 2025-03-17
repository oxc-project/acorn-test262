__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1370,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 11,
          "end": 30,
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 24,
            "name": "addUndefined1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 27,
            "end": 30,
            "value": "J",
            "raw": "\"J\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 32,
          "end": 54,
          "name": "addUndefined2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 54,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
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
              "left": {
                "type": "MemberExpression",
                "start": 69,
                "end": 89,
                "object": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 82,
                  "name": "addUndefined1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 89,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "LogicalExpression",
                "start": 93,
                "end": 111,
                "left": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 106,
                  "name": "addUndefined2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "start": 110,
                  "end": 111,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 127,
          "end": 145,
          "left": {
            "type": "Identifier",
            "start": 127,
            "end": 139,
            "name": "addUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 142,
            "end": 145,
            "value": "J",
            "raw": "\"J\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 147,
          "end": 165,
          "name": "addDefined",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 165,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 159,
              "end": 165
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "MemberExpression",
                "start": 180,
                "end": 199,
                "object": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 192,
                  "name": "addUndefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 199,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 202,
                "end": 212,
                "name": "addDefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "name": "total",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 228,
            "end": 270,
            "left": {
              "type": "BinaryExpression",
              "start": 228,
              "end": 252,
              "left": {
                "type": "BinaryExpression",
                "start": 228,
                "end": 243,
                "left": {
                  "type": "CallExpression",
                  "start": 228,
                  "end": 231,
                  "callee": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "start": 234,
                  "end": 243,
                  "callee": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 236,
                      "end": 239,
                      "value": "a",
                      "raw": "'a'"
                    },
                    {
                      "type": "Literal",
                      "start": 241,
                      "end": 242,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "start": 246,
                "end": 252,
                "callee": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 248,
                    "end": 251,
                    "value": "b",
                    "raw": "'b'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 255,
              "end": 270,
              "callee": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 266,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 268,
                  "end": 269,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 308,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 277,
          "name": "total",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 280,
          "end": 307,
          "left": {
            "type": "CallExpression",
            "start": 280,
            "end": 289,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 282,
                "end": 285,
                "value": "c",
                "raw": "'c'"
              },
              {
                "type": "Literal",
                "start": 287,
                "end": 288,
                "value": 3,
                "raw": "3"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "+",
          "right": {
            "type": "CallExpression",
            "start": 292,
            "end": 307,
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 294,
                "end": 303,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 305,
                "end": 306,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 310,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 323,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 324,
          "end": 344,
          "left": {
            "type": "Identifier",
            "start": 324,
            "end": 333,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 333,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 327,
                "end": 333
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 336,
            "end": 344,
            "value": "string",
            "raw": "\"string\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 346,
          "end": 355,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 347,
            "end": 355,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 349,
              "end": 355
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 374,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 372,
            "expression": {
              "type": "MemberExpression",
              "start": 363,
              "end": 371,
              "object": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 365,
                "end": 371,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 389,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 390,
          "end": 402,
          "left": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 394,
            "end": 402,
            "value": "string",
            "raw": "\"string\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 404,
          "end": 413,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 413,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 407,
              "end": 413
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 456,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 421,
            "end": 430,
            "expression": {
              "type": "MemberExpression",
              "start": 421,
              "end": 429,
              "object": {
                "type": "Identifier",
                "start": 421,
                "end": 422,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 423,
                "end": 429,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 458,
      "end": 577,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 471,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 472,
          "end": 504,
          "left": {
            "type": "Identifier",
            "start": 472,
            "end": 493,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 496,
            "end": 504,
            "value": "string",
            "raw": "\"string\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 506,
          "end": 515,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 507,
            "end": 515,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 509,
              "end": 515
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 517,
        "end": 577,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 532,
            "expression": {
              "type": "MemberExpression",
              "start": 523,
              "end": 531,
              "object": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 525,
                "end": 531,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 561,
            "end": 575,
            "expression": {
              "type": "AssignmentExpression",
              "start": 561,
              "end": 574,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 561,
                "end": 562,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 565,
                "end": 574,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 579,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 588,
        "end": 592,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 593,
          "end": 626,
          "left": {
            "type": "Identifier",
            "start": 593,
            "end": 614,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 617,
            "end": 626,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 628,
          "end": 637,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 629,
            "end": 637,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 631,
              "end": 637
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 639,
        "end": 700,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 645,
            "end": 647,
            "expression": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 684,
            "end": 698,
            "expression": {
              "type": "AssignmentExpression",
              "start": 684,
              "end": 697,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 684,
                "end": 685,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 688,
                "end": 697,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 702,
      "end": 758,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 729,
        "name": "OptionalNullableString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 759,
      "end": 873,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 778,
        "name": "allowsNull",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 779,
          "end": 811,
          "left": {
            "type": "Identifier",
            "start": 779,
            "end": 806,
            "name": "val",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 782,
              "end": 806,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 784,
                "end": 806,
                "typeName": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 806,
                  "name": "OptionalNullableString",
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
          "right": {
            "type": "Literal",
            "start": 809,
            "end": 811,
            "value": "",
            "raw": "\"\""
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 813,
        "end": 873,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 819,
            "end": 830,
            "expression": {
              "type": "AssignmentExpression",
              "start": 819,
              "end": 829,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 819,
                "end": 822,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 825,
                "end": 829,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 835,
            "end": 871,
            "expression": {
              "type": "AssignmentExpression",
              "start": 835,
              "end": 870,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 835,
                "end": 838,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 841,
                "end": 870,
                "value": "string and null are both ok",
                "raw": "'string and null are both ok'"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 874,
      "end": 891,
      "expression": {
        "type": "CallExpression",
        "start": 874,
        "end": 890,
        "callee": {
          "type": "Identifier",
          "start": 874,
          "end": 884,
          "name": "allowsNull",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 885,
            "end": 889,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 996,
      "end": 1015,
      "expression": {
        "type": "CallExpression",
        "start": 996,
        "end": 1014,
        "callee": {
          "type": "Identifier",
          "start": 996,
          "end": 1000,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1001,
            "end": 1010,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 1012,
            "end": 1013,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1016,
      "end": 1035,
      "expression": {
        "type": "CallExpression",
        "start": 1016,
        "end": 1034,
        "callee": {
          "type": "Identifier",
          "start": 1016,
          "end": 1020,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1021,
            "end": 1030,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 1032,
            "end": 1033,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1036,
      "end": 1055,
      "expression": {
        "type": "CallExpression",
        "start": 1036,
        "end": 1054,
        "callee": {
          "type": "Identifier",
          "start": 1036,
          "end": 1040,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1041,
            "end": 1050,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 1052,
            "end": 1053,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1056,
      "end": 1075,
      "expression": {
        "type": "CallExpression",
        "start": 1056,
        "end": 1074,
        "callee": {
          "type": "Identifier",
          "start": 1056,
          "end": 1060,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1061,
            "end": 1070,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 1072,
            "end": 1073,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1078,
      "end": 1174,
      "id": {
        "type": "Identifier",
        "start": 1087,
        "end": 1113,
        "name": "removeUndefinedButNotFalse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1114,
          "end": 1122,
          "left": {
            "type": "Identifier",
            "start": 1114,
            "end": 1115,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 1118,
            "end": 1122,
            "value": true,
            "raw": "true"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1124,
        "end": 1174,
        "body": [
          {
            "type": "IfStatement",
            "start": 1130,
            "end": 1172,
            "test": {
              "type": "BinaryExpression",
              "start": 1134,
              "end": 1145,
              "left": {
                "type": "Identifier",
                "start": 1134,
                "end": 1135,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1140,
                "end": 1145,
                "value": false,
                "raw": "false"
              }
            },
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 1190,
            "end": 1203,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1194,
              "end": 1203,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1196,
                "end": 1203
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 1205,
      "end": 1369,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1227,
        "name": "removeNothing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1228,
          "end": 1255,
          "left": {
            "type": "Identifier",
            "start": 1228,
            "end": 1229,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ConditionalExpression",
            "start": 1232,
            "end": 1255,
            "test": {
              "type": "Identifier",
              "start": 1232,
              "end": 1236,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "Literal",
              "start": 1239,
              "end": 1243,
              "value": true,
              "raw": "true"
            },
            "alternate": {
              "type": "Identifier",
              "start": 1246,
              "end": 1255,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1257,
        "end": 1369,
        "body": [
          {
            "type": "IfStatement",
            "start": 1263,
            "end": 1350,
            "test": {
              "type": "BinaryExpression",
              "start": 1267,
              "end": 1282,
              "left": {
                "type": "Identifier",
                "start": 1267,
                "end": 1268,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 1273,
                "end": 1282,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1284,
              "end": 1350,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1294,
                  "end": 1344,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1298,
                    "end": 1309,
                    "left": {
                      "type": "Identifier",
                      "start": 1298,
                      "end": 1299,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1304,
                      "end": 1309,
                      "value": false,
                      "raw": "false"
                    }
                  },
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 1355,
            "end": 1367,
            "argument": {
              "type": "Literal",
              "start": 1362,
              "end": 1366,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
