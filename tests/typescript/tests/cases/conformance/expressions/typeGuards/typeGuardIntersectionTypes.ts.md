__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 60
          }
        ],
        "start": 44,
        "end": 62
      },
      "declare": false,
      "start": 32,
      "end": 62
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 75
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              },
              "start": 83,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 92
          }
        ],
        "start": 76,
        "end": 94
      },
      "declare": false,
      "start": 64,
      "end": 94
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isX",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 116
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 122,
              "end": 125
            },
            "start": 120,
            "end": 125
          },
          "start": 117,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "start": 135,
              "end": 136
            },
            "start": 135,
            "end": 136
          },
          "start": 128,
          "end": 136
        },
        "start": 126,
        "end": 136
      },
      "body": null,
      "expression": false,
      "start": 96,
      "end": 137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isY",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 158
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 164,
              "end": 167
            },
            "start": 162,
            "end": 167
          },
          "start": 159,
          "end": 167
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "typeArguments": null,
              "start": 177,
              "end": 178
            },
            "start": 177,
            "end": 178
          },
          "start": 170,
          "end": 178
        },
        "start": 168,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 138,
      "end": 179
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isZ",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 206,
              "end": 209
            },
            "start": 204,
            "end": 209
          },
          "start": 201,
          "end": 209
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              "typeArguments": null,
              "start": 219,
              "end": 220
            },
            "start": 219,
            "end": 220
          },
          "start": 212,
          "end": 220
        },
        "start": 210,
        "end": 220
      },
      "body": null,
      "expression": false,
      "start": 180,
      "end": 221
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 246
              },
              "typeArguments": null,
              "start": 240,
              "end": 246
            },
            "start": 238,
            "end": 246
          },
          "start": 235,
          "end": 246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 261
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 265
                    }
                  ],
                  "optional": false,
                  "start": 258,
                  "end": 266
                },
                "operator": "||",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 273
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 277
                    }
                  ],
                  "optional": false,
                  "start": 270,
                  "end": 278
                },
                "start": 258,
                "end": 278
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isZ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 285
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 286,
                    "end": 289
                  }
                ],
                "optional": false,
                "start": 282,
                "end": 290
              },
              "start": 258,
              "end": 290
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 305
                  },
                  "directive": null,
                  "start": 302,
                  "end": 306
                }
              ],
              "start": 292,
              "end": 312
            },
            "alternate": null,
            "start": 254,
            "end": 312
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 324
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 328
                    }
                  ],
                  "optional": false,
                  "start": 321,
                  "end": 329
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 336
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 340
                    }
                  ],
                  "optional": false,
                  "start": 333,
                  "end": 341
                },
                "start": 321,
                "end": 341
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isZ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 348
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 352
                  }
                ],
                "optional": false,
                "start": 345,
                "end": 353
              },
              "start": 321,
              "end": 353
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 368
                  },
                  "directive": null,
                  "start": 365,
                  "end": 369
                }
              ],
              "start": 355,
              "end": 375
            },
            "alternate": null,
            "start": 317,
            "end": 375
          }
        ],
        "start": 248,
        "end": 377
      },
      "expression": false,
      "start": 223,
      "end": 377
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 429
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 437,
                "end": 443
              },
              "start": 435,
              "end": 443
            },
            "accessibility": null,
            "static": false,
            "start": 434,
            "end": 444
          }
        ],
        "start": 430,
        "end": 446
      },
      "declare": false,
      "start": 418,
      "end": 446
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 459
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 467,
                "end": 473
              },
              "start": 465,
              "end": 473
            },
            "accessibility": null,
            "static": false,
            "start": 464,
            "end": 474
          }
        ],
        "start": 460,
        "end": 476
      },
      "declare": false,
      "start": 448,
      "end": 476
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 512
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "toTest",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 521,
              "end": 524
            },
            "start": 519,
            "end": 524
          },
          "start": 513,
          "end": 524
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "toTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 533
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "typeArguments": null,
              "start": 537,
              "end": 538
            },
            "start": 537,
            "end": 538
          },
          "start": 527,
          "end": 538
        },
        "start": 525,
        "end": 538
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "toTest",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 556
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toTest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 566
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "optional": false,
                "computed": false,
                "start": 560,
                "end": 568
              },
              "start": 550,
              "end": 568
            },
            "start": 543,
            "end": 569
          }
        ],
        "start": 539,
        "end": 571
      },
      "expression": false,
      "start": 500,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 631
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "typeArguments": null,
              "start": 635,
              "end": 636
            },
            "start": 633,
            "end": 636
          },
          "start": 632,
          "end": 636
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 640
                  },
                  "typeArguments": null,
                  "start": 639,
                  "end": 640
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 643,
                    "end": 644
                  },
                  "typeArguments": null,
                  "start": 643,
                  "end": 644
                }
              ],
              "start": 639,
              "end": 644
            },
            {
              "type": "TSNullKeyword",
              "start": 647,
              "end": 651
            }
          ],
          "start": 639,
          "end": 651
        },
        "start": 637,
        "end": 651
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 663
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                }
              ],
              "optional": false,
              "start": 660,
              "end": 666
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 682
                  },
                  "start": 674,
                  "end": 683
                }
              ],
              "start": 668,
              "end": 687
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 706,
                    "end": 710
                  },
                  "start": 699,
                  "end": 711
                }
              ],
              "start": 693,
              "end": 715
            },
            "start": 656,
            "end": 715
          }
        ],
        "start": 652,
        "end": 717
      },
      "expression": false,
      "start": 617,
      "end": 717
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 760
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 764,
              "end": 770
            },
            "start": 762,
            "end": 770
          },
          "start": 761,
          "end": 770
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 773,
          "end": 777
        },
        "start": 771,
        "end": 777
      },
      "body": null,
      "expression": false,
      "start": 740,
      "end": 778
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Beast",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 823
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wings",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 835
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 838,
                "end": 845
              },
              "start": 836,
              "end": 845
            },
            "accessibility": null,
            "static": false,
            "start": 830,
            "end": 846
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "legs",
              "optional": false,
              "typeAnnotation": null,
              "start": 847,
              "end": 851
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 854,
                "end": 860
              },
              "start": 852,
              "end": 860
            },
            "accessibility": null,
            "static": false,
            "start": 847,
            "end": 860
          }
        ],
        "start": 828,
        "end": 862
      },
      "declare": false,
      "start": 808,
      "end": 862
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Legged",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 879
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
              "name": "legs",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 889
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 891,
                "end": 897
              },
              "start": 889,
              "end": 897
            },
            "accessibility": null,
            "static": false,
            "start": 885,
            "end": 898
          }
        ],
        "start": 883,
        "end": 900
      },
      "declare": false,
      "start": 863,
      "end": 900
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Winged",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 917
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
              "name": "wings",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 928
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 930,
                "end": 937
              },
              "start": 928,
              "end": 937
            },
            "accessibility": null,
            "static": false,
            "start": 923,
            "end": 938
          }
        ],
        "start": 921,
        "end": 940
      },
      "declare": false,
      "start": 901,
      "end": 940
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasLegs",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1014
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1023
              },
              "typeArguments": null,
              "start": 1018,
              "end": 1023
            },
            "start": 1016,
            "end": 1023
          },
          "start": 1015,
          "end": 1023
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1026,
            "end": 1027
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Legged",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1037
              },
              "typeArguments": null,
              "start": 1031,
              "end": 1037
            },
            "start": 1031,
            "end": 1037
          },
          "start": 1026,
          "end": 1037
        },
        "start": 1024,
        "end": 1037
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1047,
                "end": 1048
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1059,
                      "end": 1060
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "legs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1065
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1059,
                    "end": 1065
                  },
                  "prefix": true,
                  "start": 1052,
                  "end": 1065
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 1070,
                  "end": 1078
                },
                "start": 1052,
                "end": 1078
              },
              "start": 1047,
              "end": 1078
            },
            "start": 1040,
            "end": 1079
          }
        ],
        "start": 1038,
        "end": 1081
      },
      "expression": false,
      "start": 998,
      "end": 1081
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasWings",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1099
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1108
              },
              "typeArguments": null,
              "start": 1103,
              "end": 1108
            },
            "start": 1101,
            "end": 1108
          },
          "start": 1100,
          "end": 1108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1111,
            "end": 1112
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Winged",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1122
              },
              "typeArguments": null,
              "start": 1116,
              "end": 1122
            },
            "start": 1116,
            "end": 1122
          },
          "start": 1111,
          "end": 1122
        },
        "start": 1109,
        "end": 1122
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1132,
                "end": 1133
              },
              "operator": "&&",
              "right": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1139,
                      "end": 1140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1139,
                    "end": 1146
                  },
                  "prefix": true,
                  "start": 1138,
                  "end": 1146
                },
                "prefix": true,
                "start": 1137,
                "end": 1146
              },
              "start": 1132,
              "end": 1146
            },
            "start": 1125,
            "end": 1147
          }
        ],
        "start": 1123,
        "end": 1149
      },
      "expression": false,
      "start": 1082,
      "end": 1149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identifyBeast",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1237
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "beast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1250
              },
              "typeArguments": null,
              "start": 1245,
              "end": 1250
            },
            "start": 1243,
            "end": 1250
          },
          "start": 1238,
          "end": 1250
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasLegs",
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1298
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "beast",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1304
                }
              ],
              "optional": false,
              "start": 1291,
              "end": 1305
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasWings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1369
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "beast",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1375
                      }
                    ],
                    "optional": false,
                    "start": 1361,
                    "end": 1376
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "beast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1396,
                              "end": 1401
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "legs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1406
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1396,
                            "end": 1406
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 1411,
                            "end": 1412
                          },
                          "start": 1396,
                          "end": 1412
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1432,
                                  "end": 1435
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "TemplateLiteral",
                                    "quasis": [
                                      {
                                        "type": "TemplateElement",
                                        "value": {
                                          "raw": "pegasus - 4 legs, wings",
                                          "cooked": "pegasus - 4 legs, wings"
                                        },
                                        "tail": true,
                                        "start": 1436,
                                        "end": 1461
                                      }
                                    ],
                                    "expressions": [],
                                    "start": 1436,
                                    "end": 1461
                                  }
                                ],
                                "optional": false,
                                "start": 1432,
                                "end": 1462
                              },
                              "directive": null,
                              "start": 1432,
                              "end": 1463
                            }
                          ],
                          "start": 1414,
                          "end": 1477
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "beast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1499,
                                "end": 1504
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "legs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1505,
                                "end": 1509
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1499,
                              "end": 1509
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 1514,
                              "end": 1515
                            },
                            "start": 1499,
                            "end": 1515
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1535,
                                    "end": 1538
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "bird - 2 legs, wings",
                                            "cooked": "bird - 2 legs, wings"
                                          },
                                          "tail": true,
                                          "start": 1539,
                                          "end": 1561
                                        }
                                      ],
                                      "expressions": [],
                                      "start": 1539,
                                      "end": 1561
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1535,
                                  "end": 1562
                                },
                                "directive": null,
                                "start": 1535,
                                "end": 1563
                              }
                            ],
                            "start": 1517,
                            "end": 1577
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1613,
                                    "end": 1616
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "unknown - ",
                                            "cooked": "unknown - "
                                          },
                                          "tail": false,
                                          "start": 1617,
                                          "end": 1630
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " legs, wings",
                                            "cooked": " legs, wings"
                                          },
                                          "tail": true,
                                          "start": 1640,
                                          "end": 1654
                                        }
                                      ],
                                      "expressions": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "beast",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1630,
                                            "end": 1635
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "legs",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1636,
                                            "end": 1640
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1630,
                                          "end": 1640
                                        }
                                      ],
                                      "start": 1617,
                                      "end": 1654
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1613,
                                  "end": 1655
                                },
                                "directive": null,
                                "start": 1613,
                                "end": 1656
                              }
                            ],
                            "start": 1595,
                            "end": 1670
                          },
                          "start": 1495,
                          "end": 1670
                        },
                        "start": 1392,
                        "end": 1670
                      }
                    ],
                    "start": 1378,
                    "end": 1680
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1752,
                            "end": 1755
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "manbearpig - ",
                                    "cooked": "manbearpig - "
                                  },
                                  "tail": false,
                                  "start": 1756,
                                  "end": 1772
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": " legs, no wings",
                                    "cooked": " legs, no wings"
                                  },
                                  "tail": true,
                                  "start": 1782,
                                  "end": 1799
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "beast",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1772,
                                    "end": 1777
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "legs",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1778,
                                    "end": 1782
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1772,
                                  "end": 1782
                                }
                              ],
                              "start": 1756,
                              "end": 1799
                            }
                          ],
                          "optional": false,
                          "start": 1752,
                          "end": 1800
                        },
                        "directive": null,
                        "start": 1752,
                        "end": 1801
                      }
                    ],
                    "start": 1738,
                    "end": 1811
                  },
                  "start": 1357,
                  "end": 1811
                }
              ],
              "start": 1307,
              "end": 1817
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasWings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1877,
                      "end": 1885
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "beast",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1886,
                        "end": 1891
                      }
                    ],
                    "optional": false,
                    "start": 1877,
                    "end": 1892
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1908,
                            "end": 1911
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "quetzalcoatl - no legs, wings",
                                    "cooked": "quetzalcoatl - no legs, wings"
                                  },
                                  "tail": true,
                                  "start": 1912,
                                  "end": 1943
                                }
                              ],
                              "expressions": [],
                              "start": 1912,
                              "end": 1943
                            }
                          ],
                          "optional": false,
                          "start": 1908,
                          "end": 1944
                        },
                        "directive": null,
                        "start": 1908,
                        "end": 1944
                      }
                    ],
                    "start": 1894,
                    "end": 1954
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1982,
                            "end": 1985
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "snake - no legs, no wings",
                                    "cooked": "snake - no legs, no wings"
                                  },
                                  "tail": true,
                                  "start": 1986,
                                  "end": 2013
                                }
                              ],
                              "expressions": [],
                              "start": 1986,
                              "end": 2013
                            }
                          ],
                          "optional": false,
                          "start": 1982,
                          "end": 2014
                        },
                        "directive": null,
                        "start": 1982,
                        "end": 2014
                      }
                    ],
                    "start": 1968,
                    "end": 2024
                  },
                  "start": 1873,
                  "end": 2024
                }
              ],
              "start": 1863,
              "end": 2030
            },
            "start": 1287,
            "end": 2030
          }
        ],
        "start": 1252,
        "end": 2032
      },
      "expression": false,
      "start": 1215,
      "end": 2032
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "beastFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2051
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "beast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2065
              },
              "typeArguments": null,
              "start": 2059,
              "end": 2065
            },
            "start": 2057,
            "end": 2065
          },
          "start": 2052,
          "end": 2065
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasWings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2077,
                  "end": 2085
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2086,
                    "end": 2091
                  }
                ],
                "optional": false,
                "start": 2077,
                "end": 2092
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasLegs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2096,
                  "end": 2103
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2109
                  }
                ],
                "optional": false,
                "start": 2096,
                "end": 2110
              },
              "start": 2077,
              "end": 2110
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2122,
                    "end": 2127
                  },
                  "directive": null,
                  "start": 2122,
                  "end": 2128
                }
              ],
              "start": 2112,
              "end": 2154
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2174,
                    "end": 2179
                  },
                  "directive": null,
                  "start": 2174,
                  "end": 2180
                }
              ],
              "start": 2164,
              "end": 2186
            },
            "start": 2073,
            "end": 2186
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasLegs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2203
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2204,
                    "end": 2209
                  }
                ],
                "optional": false,
                "start": 2196,
                "end": 2210
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasWings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2222
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2223,
                    "end": 2228
                  }
                ],
                "optional": false,
                "start": 2214,
                "end": 2229
              },
              "start": 2196,
              "end": 2229
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2241,
                    "end": 2246
                  },
                  "directive": null,
                  "start": 2241,
                  "end": 2247
                }
              ],
              "start": 2231,
              "end": 2273
            },
            "alternate": null,
            "start": 2192,
            "end": 2273
          }
        ],
        "start": 2067,
        "end": 2275
      },
      "expression": false,
      "start": 2034,
      "end": 2275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2275
}
```
