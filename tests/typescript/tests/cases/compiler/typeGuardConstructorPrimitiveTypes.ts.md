__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 56,
                    "end": 62
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 65,
                    "end": 72
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    },
                    "start": 75,
                    "end": 80
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 83,
                    "end": 89
                  },
                  {
                    "type": "TSBigIntKeyword",
                    "start": 92,
                    "end": 98
                  }
                ],
                "start": 47,
                "end": 98
              },
              "start": 45,
              "end": 98
            },
            "start": 41,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 98
        }
      ],
      "declare": false,
      "start": 37,
      "end": 99
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 104,
          "end": 120
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 131
        },
        "start": 104,
        "end": 131
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 143
            },
            "directive": null,
            "start": 139,
            "end": 144
          }
        ],
        "start": 133,
        "end": 156
      },
      "alternate": null,
      "start": 100,
      "end": 156
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 165
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 177
          },
          "optional": false,
          "computed": false,
          "start": 161,
          "end": 177
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 188
        },
        "start": 161,
        "end": 188
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 200
            },
            "directive": null,
            "start": 196,
            "end": 201
          }
        ],
        "start": 190,
        "end": 213
      },
      "alternate": null,
      "start": 157,
      "end": 213
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 234
          },
          "optional": false,
          "computed": false,
          "start": 218,
          "end": 234
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 246
        },
        "start": 218,
        "end": 246
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 258
            },
            "directive": null,
            "start": 254,
            "end": 259
          }
        ],
        "start": 248,
        "end": 272
      },
      "alternate": null,
      "start": 214,
      "end": 272
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 281
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 277,
          "end": 293
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 303
        },
        "start": 277,
        "end": 303
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 315
            },
            "directive": null,
            "start": 311,
            "end": 316
          }
        ],
        "start": 305,
        "end": 327
      },
      "alternate": null,
      "start": 273,
      "end": 327
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 336
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 348
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 348
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 359
        },
        "start": 332,
        "end": 359
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 371
            },
            "directive": null,
            "start": 367,
            "end": 372
          }
        ],
        "start": 361,
        "end": 384
      },
      "alternate": null,
      "start": 328,
      "end": 384
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 393
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 405
          },
          "optional": false,
          "computed": false,
          "start": 389,
          "end": 405
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 416
        },
        "start": 389,
        "end": 416
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 428
            },
            "directive": null,
            "start": 424,
            "end": 429
          }
        ],
        "start": 418,
        "end": 441
      },
      "alternate": null,
      "start": 385,
      "end": 441
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 503
                    },
                    "typeArguments": null,
                    "start": 497,
                    "end": 503
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 512
                    },
                    "typeArguments": null,
                    "start": 506,
                    "end": 512
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 515,
                    "end": 522
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 531
                    },
                    "typeArguments": null,
                    "start": 525,
                    "end": 531
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BigInt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 534,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 534,
                    "end": 540
                  }
                ],
                "start": 497,
                "end": 540
              },
              "start": 495,
              "end": 540
            },
            "start": 491,
            "end": 540
          },
          "init": null,
          "definite": false,
          "start": 491,
          "end": 540
        }
      ],
      "declare": false,
      "start": 487,
      "end": 541
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 550
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 562
          },
          "optional": false,
          "computed": false,
          "start": 546,
          "end": 562
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null,
          "start": 567,
          "end": 573
        },
        "start": 546,
        "end": 573
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 585
            },
            "directive": null,
            "start": 581,
            "end": 586
          }
        ],
        "start": 575,
        "end": 598
      },
      "alternate": null,
      "start": 542,
      "end": 598
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 607
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 619
          },
          "optional": false,
          "computed": false,
          "start": 603,
          "end": 619
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 630
        },
        "start": 603,
        "end": 630
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 642
            },
            "directive": null,
            "start": 638,
            "end": 643
          }
        ],
        "start": 632,
        "end": 655
      },
      "alternate": null,
      "start": 599,
      "end": 655
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 664
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 676
          },
          "optional": false,
          "computed": false,
          "start": 660,
          "end": 676
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 681,
          "end": 688
        },
        "start": 660,
        "end": 688
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 700
            },
            "directive": null,
            "start": 696,
            "end": 701
          }
        ],
        "start": 690,
        "end": 714
      },
      "alternate": null,
      "start": 656,
      "end": 714
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 723
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 735
          },
          "optional": false,
          "computed": false,
          "start": 719,
          "end": 735
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 740,
          "end": 746
        },
        "start": 719,
        "end": 746
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 758
            },
            "directive": null,
            "start": 754,
            "end": 759
          }
        ],
        "start": 748,
        "end": 771
      },
      "alternate": null,
      "start": 715,
      "end": 771
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 776,
            "end": 780
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 781,
            "end": 792
          },
          "optional": false,
          "computed": false,
          "start": 776,
          "end": 792
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 803
        },
        "start": 776,
        "end": 803
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 815
            },
            "directive": null,
            "start": 811,
            "end": 816
          }
        ],
        "start": 805,
        "end": 828
      },
      "alternate": null,
      "start": 772,
      "end": 828
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 828
}
```
