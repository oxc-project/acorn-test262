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
        "name": "Guid",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
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
                  "name": "$Guid",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 28
                },
                "typeAnnotation": null,
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 28
              }
            ],
            "start": 21,
            "end": 30
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SerialNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 76
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 79,
            "end": 85
          },
          {
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
                  "name": "$SerialNo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 99
                },
                "typeAnnotation": null,
                "accessibility": null,
                "static": false,
                "start": 90,
                "end": 99
              }
            ],
            "start": 88,
            "end": 101
          }
        ],
        "start": 79,
        "end": 101
      },
      "declare": false,
      "start": 63,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createGuid",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 146
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "21EC2020-3AEA-4069-A2DD-08002B30309D",
                "raw": "\"21EC2020-3AEA-4069-A2DD-08002B30309D\"",
                "start": 162,
                "end": 200
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Guid",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 208
                },
                "typeArguments": null,
                "start": 204,
                "end": 208
              },
              "start": 162,
              "end": 208
            },
            "start": 155,
            "end": 209
          }
        ],
        "start": 149,
        "end": 211
      },
      "expression": false,
      "start": 127,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createSerialNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 236
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 12345,
                "raw": "12345",
                "start": 252,
                "end": 257
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SerialNo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 269
                },
                "typeArguments": null,
                "start": 261,
                "end": 269
              },
              "start": 252,
              "end": 269
            },
            "start": 245,
            "end": 270
          }
        ],
        "start": 239,
        "end": 272
      },
      "expression": false,
      "start": 213,
      "end": 272
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
            "name": "map1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 290,
                            "end": 296
                          },
                          "start": 288,
                          "end": 296
                        },
                        "start": 287,
                        "end": 296
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      },
                      "start": 297,
                      "end": 305
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 286,
                    "end": 305
                  }
                ],
                "start": 284,
                "end": 307
              },
              "start": 282,
              "end": 307
            },
            "start": 278,
            "end": 307
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 310,
            "end": 312
          },
          "definite": false,
          "start": 278,
          "end": 312
        }
      ],
      "declare": false,
      "start": 274,
      "end": 313
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
            "name": "guid",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 322
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createGuid",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 335
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 325,
            "end": 337
          },
          "definite": false,
          "start": 318,
          "end": 337
        }
      ],
      "declare": false,
      "start": 314,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map1",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 343
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "guid",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 348
          },
          "optional": false,
          "computed": true,
          "start": 339,
          "end": 349
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 352,
          "end": 355
        },
        "start": 339,
        "end": 355
      },
      "directive": null,
      "start": 339,
      "end": 356
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
            "name": "map2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 401,
                            "end": 407
                          },
                          "start": 399,
                          "end": 407
                        },
                        "start": 398,
                        "end": 407
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 410,
                        "end": 416
                      },
                      "start": 408,
                      "end": 416
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 397,
                    "end": 416
                  }
                ],
                "start": 395,
                "end": 418
              },
              "start": 393,
              "end": 418
            },
            "start": 389,
            "end": 418
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 421,
            "end": 423
          },
          "definite": false,
          "start": 389,
          "end": 423
        }
      ],
      "declare": false,
      "start": 385,
      "end": 424
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
            "name": "serialNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 437
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createSerialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 454
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 440,
            "end": 456
          },
          "definite": false,
          "start": 429,
          "end": 456
        }
      ],
      "declare": false,
      "start": 425,
      "end": 457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map2",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 462
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "serialNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 471
          },
          "optional": false,
          "computed": true,
          "start": 458,
          "end": 472
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 475,
          "end": 482
        },
        "start": 458,
        "end": 482
      },
      "directive": null,
      "start": 458,
      "end": 483
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 526
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "{",
                "raw": "\"{\"",
                "start": 529,
                "end": 532
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "guid",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 539
              },
              "start": 529,
              "end": 539
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "}",
              "raw": "\"}\"",
              "start": 542,
              "end": 545
            },
            "start": 529,
            "end": 545
          },
          "definite": false,
          "start": 524,
          "end": 545
        }
      ],
      "declare": false,
      "start": 518,
      "end": 546
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "guid",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 562
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 574
              },
              "optional": false,
              "computed": false,
              "start": 558,
              "end": 574
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 558,
            "end": 576
          },
          "definite": false,
          "start": 553,
          "end": 576
        }
      ],
      "declare": false,
      "start": 547,
      "end": 577
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 586
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 593
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 600
            },
            "start": 589,
            "end": 600
          },
          "definite": false,
          "start": 584,
          "end": 600
        }
      ],
      "declare": false,
      "start": 578,
      "end": 601
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
            "name": "s4",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 610
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 617
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 628
            },
            "start": 613,
            "end": 628
          },
          "definite": false,
          "start": 608,
          "end": 628
        }
      ],
      "declare": false,
      "start": 602,
      "end": 629
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
            "name": "s5",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 638
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "serialNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 649
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toPrecision",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 661
              },
              "optional": false,
              "computed": false,
              "start": 641,
              "end": 661
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 662,
                "end": 663
              }
            ],
            "optional": false,
            "start": 641,
            "end": 664
          },
          "definite": false,
          "start": 636,
          "end": 664
        }
      ],
      "declare": false,
      "start": 630,
      "end": 665
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 674
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 685
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 688,
              "end": 689
            },
            "start": 677,
            "end": 689
          },
          "definite": false,
          "start": 672,
          "end": 689
        }
      ],
      "declare": false,
      "start": 666,
      "end": 690
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 699
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 710
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 721
            },
            "start": 702,
            "end": 721
          },
          "definite": false,
          "start": 697,
          "end": 721
        }
      ],
      "declare": false,
      "start": 691,
      "end": 722
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 731
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 738
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 743,
              "end": 745
            },
            "start": 734,
            "end": 745
          },
          "definite": false,
          "start": 729,
          "end": 745
        }
      ],
      "declare": false,
      "start": 723,
      "end": 746
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 755
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 762
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 771
            },
            "start": 758,
            "end": 771
          },
          "definite": false,
          "start": 753,
          "end": 771
        }
      ],
      "declare": false,
      "start": 747,
      "end": 772
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 781
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 792
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 797,
              "end": 798
            },
            "start": 784,
            "end": 798
          },
          "definite": false,
          "start": 779,
          "end": 798
        }
      ],
      "declare": false,
      "start": 773,
      "end": 799
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 808
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 819
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 832
            },
            "start": 811,
            "end": 832
          },
          "definite": false,
          "start": 806,
          "end": 832
        }
      ],
      "declare": false,
      "start": 800,
      "end": 833
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 833
}
```
