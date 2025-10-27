__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 51
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 70
          }
        ],
        "start": 34,
        "end": 72
      },
      "declare": false,
      "start": 21,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "things",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 94
                },
                "start": 89,
                "end": 96
              },
              "start": 87,
              "end": 96
            },
            "start": 81,
            "end": 96
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 99,
            "end": 101
          },
          "definite": false,
          "start": 81,
          "end": 101
        }
      ],
      "declare": false,
      "start": 75,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "find",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 117
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 122,
              "end": 128
            },
            "start": 120,
            "end": 128
          },
          "start": 118,
          "end": 128
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSUndefinedKeyword",
              "start": 131,
              "end": 140
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 148
              },
              "typeArguments": null,
              "start": 143,
              "end": 148
            }
          ],
          "start": 131,
          "end": 148
        },
        "start": 129,
        "end": 148
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "things",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 168
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "find",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 162,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 179
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 188
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 191
                      },
                      "optional": false,
                      "computed": false,
                      "start": 183,
                      "end": 191
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 198
                    },
                    "start": 183,
                    "end": 198
                  },
                  "id": null,
                  "generator": false,
                  "start": 174,
                  "end": 198
                }
              ],
              "optional": false,
              "start": 162,
              "end": 199
            },
            "start": 155,
            "end": 200
          }
        ],
        "start": 149,
        "end": 202
      },
      "expression": false,
      "start": 104,
      "end": 202
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 237
              },
              "typeArguments": null,
              "start": 232,
              "end": 237
            },
            "start": 230,
            "end": 237
          },
          "start": 225,
          "end": 237
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 240,
          "end": 244
        },
        "start": 238,
        "end": 244
      },
      "body": null,
      "expression": false,
      "start": 204,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 259
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 261,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 266
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 280,
                        "end": 285
                      }
                    ],
                    "optional": false,
                    "start": 275,
                    "end": 286
                  },
                  "operator": "??",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "label",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 305
                        },
                        "value": {
                          "type": "Literal",
                          "value": "Foo",
                          "raw": "'Foo'",
                          "start": 307,
                          "end": 312
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 300,
                        "end": 312
                      }
                    ],
                    "start": 290,
                    "end": 319
                  },
                  "start": 275,
                  "end": 319
                },
                "start": 272,
                "end": 319
              }
            ],
            "start": 251,
            "end": 322
          }
        ],
        "optional": false,
        "start": 247,
        "end": 323
      },
      "directive": null,
      "start": 247,
      "end": 324
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 420
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 430
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 432,
                  "end": 433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 429,
                "end": 433
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 447
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 454
                        },
                        "optional": false,
                        "computed": false,
                        "start": 443,
                        "end": 454
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 443,
                      "end": 456
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 459,
                      "end": 462
                    },
                    "start": 443,
                    "end": 462
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 468
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 470,
                          "end": 471
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 467,
                        "end": 471
                      }
                    ],
                    "start": 465,
                    "end": 473
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 479
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 481,
                          "end": 482
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 478,
                        "end": 482
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 485
                        },
                        "value": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 487,
                          "end": 488
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 484,
                        "end": 488
                      }
                    ],
                    "start": 476,
                    "end": 490
                  },
                  "start": 443,
                  "end": 490
                },
                "start": 439,
                "end": 491
              }
            ],
            "start": 423,
            "end": 494
          },
          "definite": false,
          "start": 416,
          "end": 494
        }
      ],
      "declare": false,
      "start": 410,
      "end": 495
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 595
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 607,
                  "end": 608
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 604,
                "end": 608
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 618,
                          "end": 622
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 623,
                          "end": 629
                        },
                        "optional": false,
                        "computed": false,
                        "start": 618,
                        "end": 629
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 618,
                      "end": 631
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 634,
                      "end": 637
                    },
                    "start": 618,
                    "end": 637
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 643
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 645,
                          "end": 646
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 642,
                        "end": 646
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 648,
                          "end": 649
                        },
                        "value": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 651,
                          "end": 652
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 648,
                        "end": 652
                      }
                    ],
                    "start": 640,
                    "end": 654
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 659,
                          "end": 660
                        },
                        "value": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 662,
                          "end": 663
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 659,
                        "end": 663
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
                        "value": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 668,
                          "end": 669
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 665,
                        "end": 669
                      }
                    ],
                    "start": 657,
                    "end": 671
                  },
                  "start": 618,
                  "end": 671
                },
                "start": 614,
                "end": 672
              }
            ],
            "start": 598,
            "end": 675
          },
          "definite": false,
          "start": 591,
          "end": 675
        }
      ],
      "declare": false,
      "start": 585,
      "end": 676
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Partial1",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 778
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 786,
                "end": 792
              },
              "start": 784,
              "end": 792
            },
            "accessibility": null,
            "static": false,
            "start": 783,
            "end": 793
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 798,
                "end": 804
              },
              "start": 796,
              "end": 804
            },
            "accessibility": null,
            "static": false,
            "start": 794,
            "end": 804
          }
        ],
        "start": 781,
        "end": 806
      },
      "declare": false,
      "start": 765,
      "end": 807
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Partial2",
        "optional": false,
        "typeAnnotation": null,
        "start": 813,
        "end": 821
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 827
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 829,
                "end": 835
              },
              "start": 827,
              "end": 835
            },
            "accessibility": null,
            "static": false,
            "start": 826,
            "end": 836
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 838
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 840,
                "end": 847
              },
              "start": 838,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 837,
            "end": 847
          }
        ],
        "start": 824,
        "end": 849
      },
      "declare": false,
      "start": 808,
      "end": 850
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "partial",
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
                      "name": "Partial1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 874,
                      "end": 882
                    },
                    "typeArguments": null,
                    "start": 874,
                    "end": 882
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 893
                    },
                    "typeArguments": null,
                    "start": 885,
                    "end": 893
                  }
                ],
                "start": 874,
                "end": 893
              },
              "start": 872,
              "end": 893
            },
            "start": 865,
            "end": 893
          },
          "init": null,
          "definite": false,
          "start": 865,
          "end": 893
        }
      ],
      "declare": true,
      "start": 851,
      "end": 894
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 906
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 916
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 918,
                  "end": 920
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 915,
                "end": 920
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 936
                },
                "start": 926,
                "end": 936
              }
            ],
            "start": 909,
            "end": 939
          },
          "definite": false,
          "start": 902,
          "end": 939
        }
      ],
      "declare": false,
      "start": 896,
      "end": 940
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1065
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1075
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 1077,
                  "end": 1083
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1074,
                "end": 1083
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1092,
                  "end": 1099
                },
                "start": 1089,
                "end": 1099
              }
            ],
            "start": 1068,
            "end": 1102
          },
          "definite": false,
          "start": 1061,
          "end": 1102
        }
      ],
      "declare": false,
      "start": 1055,
      "end": 1103
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1177
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1182,
              "end": 1184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1186,
                "end": 1192
              },
              "start": 1184,
              "end": 1192
            },
            "accessibility": null,
            "static": false,
            "start": 1182,
            "end": 1193
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1200,
                "end": 1206
              },
              "start": 1198,
              "end": 1206
            },
            "accessibility": null,
            "static": false,
            "start": 1194,
            "end": 1206
          }
        ],
        "start": 1180,
        "end": 1208
      },
      "declare": false,
      "start": 1171,
      "end": 1209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1215,
        "end": 1216
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1225
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1227,
                "end": 1233
              },
              "start": 1225,
              "end": 1233
            },
            "accessibility": null,
            "static": false,
            "start": 1221,
            "end": 1234
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1240,
                "end": 1246
              },
              "start": 1238,
              "end": 1246
            },
            "accessibility": null,
            "static": false,
            "start": 1235,
            "end": 1246
          }
        ],
        "start": 1219,
        "end": 1248
      },
      "declare": false,
      "start": 1210,
      "end": 1249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1256
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1267,
                "end": 1273
              },
              "start": 1265,
              "end": 1273
            },
            "accessibility": null,
            "static": false,
            "start": 1261,
            "end": 1273
          }
        ],
        "start": 1259,
        "end": 1275
      },
      "declare": false,
      "start": 1250,
      "end": 1276
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1297,
                      "end": 1298
                    },
                    "typeArguments": null,
                    "start": 1297,
                    "end": 1298
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1301,
                      "end": 1302
                    },
                    "typeArguments": null,
                    "start": 1301,
                    "end": 1302
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1306
                    },
                    "typeArguments": null,
                    "start": 1305,
                    "end": 1306
                  }
                ],
                "start": 1297,
                "end": 1306
              },
              "start": 1295,
              "end": 1306
            },
            "start": 1292,
            "end": 1306
          },
          "init": null,
          "definite": false,
          "start": 1292,
          "end": 1306
        }
      ],
      "declare": true,
      "start": 1278,
      "end": 1307
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1319
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1330
                },
                "value": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "\"123\"",
                  "start": 1332,
                  "end": 1337
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1328,
                "end": 1337
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1346,
                  "end": 1349
                },
                "start": 1343,
                "end": 1349
              }
            ],
            "start": 1322,
            "end": 1352
          },
          "definite": false,
          "start": 1315,
          "end": 1352
        }
      ],
      "declare": false,
      "start": 1309,
      "end": 1353
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1385,
            "end": 1389
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1402
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 1404,
                  "end": 1410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1398,
                "end": 1410
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1419,
                  "end": 1422
                },
                "start": 1416,
                "end": 1422
              }
            ],
            "start": 1392,
            "end": 1425
          },
          "definite": false,
          "start": 1385,
          "end": 1425
        }
      ],
      "declare": false,
      "start": 1379,
      "end": 1426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1458
}
```
