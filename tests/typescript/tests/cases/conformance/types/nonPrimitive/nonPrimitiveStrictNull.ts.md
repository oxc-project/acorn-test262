__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 38,
                    "end": 42
                  }
                ],
                "start": 29,
                "end": 42
              },
              "start": 27,
              "end": 42
            },
            "start": 26,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 42
        }
      ],
      "declare": true,
      "start": 14,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 58,
                    "end": 64
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 67,
                    "end": 76
                  }
                ],
                "start": 58,
                "end": 76
              },
              "start": 56,
              "end": 76
            },
            "start": 55,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 76
        }
      ],
      "declare": true,
      "start": 43,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 101,
                    "end": 105
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 108,
                    "end": 117
                  }
                ],
                "start": 92,
                "end": 117
              },
              "start": 90,
              "end": 117
            },
            "start": 89,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 117
        }
      ],
      "declare": true,
      "start": 77,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 125,
                    "end": 131
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 134,
                    "end": 138
                  }
                ],
                "start": 125,
                "end": 138
              },
              "start": 123,
              "end": 138
            },
            "start": 122,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 138
        }
      ],
      "declare": false,
      "start": 118,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "toString",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 149
        },
        "optional": false,
        "computed": false,
        "start": 139,
        "end": 149
      },
      "directive": null,
      "start": 139,
      "end": 150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 161
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 173
        },
        "start": 160,
        "end": 173
      },
      "directive": null,
      "start": 160,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 185
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 188,
          "end": 192
        },
        "start": 184,
        "end": 192
      },
      "directive": null,
      "start": 184,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 204
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "start": 203,
        "end": 208
      },
      "directive": null,
      "start": 203,
      "end": 209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 224
        },
        "start": 219,
        "end": 224
      },
      "directive": null,
      "start": 219,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 236
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 240
        },
        "start": 235,
        "end": 240
      },
      "directive": null,
      "start": 235,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 257
        },
        "start": 252,
        "end": 257
      },
      "directive": null,
      "start": 252,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 266
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 270
        },
        "start": 265,
        "end": 270
      },
      "directive": null,
      "start": 265,
      "end": 271
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          },
          "prefix": true,
          "start": 283,
          "end": 291
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 296,
          "end": 304
        },
        "start": 283,
        "end": 304
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 322
                },
                "optional": false,
                "computed": false,
                "start": 312,
                "end": 322
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 312,
              "end": 324
            },
            "directive": null,
            "start": 312,
            "end": 325
          }
        ],
        "start": 306,
        "end": 343
      },
      "alternate": null,
      "start": 279,
      "end": 343
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 357
          },
          "prefix": true,
          "start": 349,
          "end": 357
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 362,
          "end": 370
        },
        "start": 349,
        "end": 370
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "start": 378,
              "end": 383
            },
            "directive": null,
            "start": 378,
            "end": 384
          }
        ],
        "start": 372,
        "end": 414
      },
      "alternate": null,
      "start": 345,
      "end": 414
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 428
          },
          "prefix": true,
          "start": 420,
          "end": 428
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 433,
          "end": 441
        },
        "start": 420,
        "end": 441
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 454
              },
              "start": 449,
              "end": 454
            },
            "directive": null,
            "start": 449,
            "end": 455
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 476
                },
                "optional": false,
                "computed": false,
                "start": 466,
                "end": 476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 466,
              "end": 478
            },
            "directive": null,
            "start": 466,
            "end": 479
          }
        ],
        "start": 443,
        "end": 505
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 518
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 527
                },
                "optional": false,
                "computed": false,
                "start": 517,
                "end": 527
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 517,
              "end": 529
            },
            "directive": null,
            "start": 517,
            "end": 530
          }
        ],
        "start": 511,
        "end": 552
      },
      "start": 416,
      "end": 552
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 559
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 563,
          "end": 567
        },
        "start": 558,
        "end": 567
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 576
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 585
                },
                "optional": false,
                "computed": false,
                "start": 575,
                "end": 585
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 575,
              "end": 587
            },
            "directive": null,
            "start": 575,
            "end": 588
          }
        ],
        "start": 569,
        "end": 617
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 629,
                  "end": 630
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 639
                },
                "optional": false,
                "computed": false,
                "start": 629,
                "end": 639
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 629,
              "end": 641
            },
            "directive": null,
            "start": 629,
            "end": 642
          }
        ],
        "start": 623,
        "end": 654
      },
      "start": 554,
      "end": 654
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 661
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 666,
          "end": 670
        },
        "start": 660,
        "end": 670
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 679
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 688
                },
                "optional": false,
                "computed": false,
                "start": 678,
                "end": 688
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 678,
              "end": 690
            },
            "directive": null,
            "start": 678,
            "end": 691
          }
        ],
        "start": 672,
        "end": 708
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 721
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 730
                },
                "optional": false,
                "computed": false,
                "start": 720,
                "end": 730
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 720,
              "end": 732
            },
            "directive": null,
            "start": 720,
            "end": 733
          }
        ],
        "start": 714,
        "end": 764
      },
      "start": 656,
      "end": 764
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 778
          },
          "prefix": true,
          "start": 770,
          "end": 778
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "undefined",
          "raw": "'undefined'",
          "start": 783,
          "end": 794
        },
        "start": 770,
        "end": 794
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 803
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 812
                },
                "optional": false,
                "computed": false,
                "start": 802,
                "end": 812
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 802,
              "end": 814
            },
            "directive": null,
            "start": 802,
            "end": 815
          }
        ],
        "start": 796,
        "end": 837
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 850
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 859
                },
                "optional": false,
                "computed": false,
                "start": 849,
                "end": 859
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 849,
              "end": 861
            },
            "directive": null,
            "start": 849,
            "end": 862
          }
        ],
        "start": 843,
        "end": 888
      },
      "start": 766,
      "end": 888
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 905
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 907
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 916,
              "end": 922
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 906,
            "end": 922
          }
        ],
        "start": 905,
        "end": 923
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 924,
        "end": 926
      },
      "declare": false,
      "start": 890,
      "end": 926
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 940
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 941,
                      "end": 947
                    }
                  ],
                  "start": 940,
                  "end": 948
                },
                "start": 935,
                "end": 948
              },
              "start": 933,
              "end": 948
            },
            "start": 932,
            "end": 948
          },
          "init": null,
          "definite": false,
          "start": 932,
          "end": 948
        }
      ],
      "declare": false,
      "start": 928,
      "end": 949
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 971
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNullKeyword",
                      "start": 972,
                      "end": 976
                    }
                  ],
                  "start": 971,
                  "end": 977
                },
                "start": 966,
                "end": 977
              },
              "start": 964,
              "end": 977
            },
            "start": 963,
            "end": 977
          },
          "init": null,
          "definite": false,
          "start": 963,
          "end": 977
        }
      ],
      "declare": false,
      "start": 959,
      "end": 978
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 1000
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1001,
                      "end": 1010
                    }
                  ],
                  "start": 1000,
                  "end": 1011
                },
                "start": 995,
                "end": 1011
              },
              "start": 993,
              "end": 1011
            },
            "start": 992,
            "end": 1011
          },
          "init": null,
          "definite": false,
          "start": 992,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1012
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1037
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1045
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1047,
                "end": 1053
              },
              "start": 1045,
              "end": 1053
            },
            "accessibility": null,
            "static": false,
            "start": 1042,
            "end": 1054
          }
        ],
        "start": 1038,
        "end": 1056
      },
      "declare": false,
      "start": 1023,
      "end": 1056
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1070
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Blah",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1071,
                        "end": 1075
                      },
                      "typeArguments": null,
                      "start": 1071,
                      "end": 1075
                    }
                  ],
                  "start": 1070,
                  "end": 1076
                },
                "start": 1065,
                "end": 1076
              },
              "start": 1063,
              "end": 1076
            },
            "start": 1062,
            "end": 1076
          },
          "init": null,
          "definite": false,
          "start": 1062,
          "end": 1076
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1077
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1083
}
```
