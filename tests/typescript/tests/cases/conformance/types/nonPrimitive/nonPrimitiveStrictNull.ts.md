__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 7,
    "end": 13,
    "range": [
      7,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 14,
    "end": 21,
    "range": [
      14,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25,
    "range": [
      22,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 38,
    "end": 42,
    "range": [
      38,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 43,
    "end": 50,
    "range": [
      43,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54,
    "range": [
      51,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 67,
    "end": 76,
    "range": [
      67,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84,
    "range": [
      77,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88,
    "range": [
      85,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 101,
    "end": 105,
    "range": [
      101,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 108,
    "end": 117,
    "range": [
      108,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 141,
    "end": 149,
    "range": [
      141,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 164,
    "end": 173,
    "range": [
      164,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 279,
    "end": 281,
    "range": [
      279,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 292,
    "end": 295,
    "range": [
      292,
      295
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 296,
    "end": 304,
    "range": [
      296,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 314,
    "end": 322,
    "range": [
      314,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 349,
    "end": 355,
    "range": [
      349,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 358,
    "end": 361,
    "range": [
      358,
      361
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 362,
    "end": 370,
    "range": [
      362,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 416,
    "end": 418,
    "range": [
      416,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 420,
    "end": 426,
    "range": [
      420,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 433,
    "end": 441,
    "range": [
      433,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 468,
    "end": 476,
    "range": [
      468,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 506,
    "end": 510,
    "range": [
      506,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 519,
    "end": 527,
    "range": [
      519,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 554,
    "end": 556,
    "range": [
      554,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 560,
    "end": 562,
    "range": [
      560,
      562
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 563,
    "end": 567,
    "range": [
      563,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 577,
    "end": 585,
    "range": [
      577,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 618,
    "end": 622,
    "range": [
      618,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 631,
    "end": 639,
    "range": [
      631,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 656,
    "end": 658,
    "range": [
      656,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 662,
    "end": 665,
    "range": [
      662,
      665
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 666,
    "end": 670,
    "range": [
      666,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 680,
    "end": 688,
    "range": [
      680,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 709,
    "end": 713,
    "range": [
      709,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 722,
    "end": 730,
    "range": [
      722,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 779,
    "end": 782,
    "range": [
      779,
      782
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 783,
    "end": 794,
    "range": [
      783,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 804,
    "end": 812,
    "range": [
      804,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 838,
    "end": 842,
    "range": [
      838,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 851,
    "end": 859,
    "range": [
      851,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 890,
    "end": 899,
    "range": [
      890,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 900,
    "end": 905,
    "range": [
      900,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 908,
    "end": 915,
    "range": [
      908,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 916,
    "end": 922,
    "range": [
      916,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 928,
    "end": 931,
    "range": [
      928,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 935,
    "end": 940,
    "range": [
      935,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 941,
    "end": 947,
    "range": [
      941,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 959,
    "end": 962,
    "range": [
      959,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 966,
    "end": 971,
    "range": [
      966,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 972,
    "end": 976,
    "range": [
      972,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 988,
    "end": 991,
    "range": [
      988,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 995,
    "end": 1000,
    "range": [
      995,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1001,
    "end": 1010,
    "range": [
      1001,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1023,
    "end": 1032,
    "range": [
      1023,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 1033,
    "end": 1037,
    "range": [
      1033,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1042,
    "end": 1045,
    "range": [
      1042,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1047,
    "end": 1053,
    "range": [
      1047,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1058,
    "end": 1061,
    "range": [
      1058,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 1065,
    "end": 1070,
    "range": [
      1065,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 1071,
    "end": 1075,
    "range": [
      1071,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  }
]
```
