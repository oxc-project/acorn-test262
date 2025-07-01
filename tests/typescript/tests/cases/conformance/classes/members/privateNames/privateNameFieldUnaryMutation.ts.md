__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "test",
              "start": 14,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": {
              "type": "Literal",
              "value": 24,
              "raw": "24",
              "start": 30,
              "end": 32
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 33
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 49
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 62,
                          "end": 66
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 67,
                          "end": 72
                        },
                        "optional": false,
                        "computed": false,
                        "start": 62,
                        "end": 72
                      },
                      "start": 62,
                      "end": 74
                    },
                    "directive": null,
                    "start": 62,
                    "end": 75
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 84,
                          "end": 88
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 89,
                          "end": 94
                        },
                        "optional": false,
                        "computed": false,
                        "start": 84,
                        "end": 94
                      },
                      "start": 84,
                      "end": 96
                    },
                    "directive": null,
                    "start": 84,
                    "end": 97
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 108,
                          "end": 112
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 113,
                          "end": 118
                        },
                        "optional": false,
                        "computed": false,
                        "start": 108,
                        "end": 118
                      },
                      "start": 106,
                      "end": 118
                    },
                    "directive": null,
                    "start": 106,
                    "end": 119
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 135,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 130,
                        "end": 140
                      },
                      "start": 128,
                      "end": 140
                    },
                    "directive": null,
                    "start": 128,
                    "end": 141
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 160,
                              "end": 164
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 165,
                              "end": 170
                            },
                            "optional": false,
                            "computed": false,
                            "start": 160,
                            "end": 170
                          },
                          "start": 160,
                          "end": 172
                        },
                        "definite": false,
                        "start": 156,
                        "end": 172
                      }
                    ],
                    "declare": false,
                    "start": 150,
                    "end": 173
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 189
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 192,
                              "end": 196
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 197,
                              "end": 202
                            },
                            "optional": false,
                            "computed": false,
                            "start": 192,
                            "end": 202
                          },
                          "start": 192,
                          "end": 204
                        },
                        "definite": false,
                        "start": 188,
                        "end": 204
                      }
                    ],
                    "declare": false,
                    "start": 182,
                    "end": 205
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 221
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 226,
                              "end": 230
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 231,
                              "end": 236
                            },
                            "optional": false,
                            "computed": false,
                            "start": 226,
                            "end": 236
                          },
                          "start": 224,
                          "end": 236
                        },
                        "definite": false,
                        "start": 220,
                        "end": 236
                      }
                    ],
                    "declare": false,
                    "start": 214,
                    "end": 237
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 253
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 263,
                              "end": 268
                            },
                            "optional": false,
                            "computed": false,
                            "start": 258,
                            "end": 268
                          },
                          "start": 256,
                          "end": 268
                        },
                        "definite": false,
                        "start": 252,
                        "end": 268
                      }
                    ],
                    "declare": false,
                    "start": 246,
                    "end": 269
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 288,
                          "end": 293
                        },
                        "optional": false,
                        "computed": false,
                        "start": 283,
                        "end": 293
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 296,
                        "end": 297
                      },
                      "start": 283,
                      "end": 297
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 299,
                          "end": 303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 304,
                          "end": 309
                        },
                        "optional": false,
                        "computed": false,
                        "start": 299,
                        "end": 309
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 312,
                        "end": 314
                      },
                      "start": 299,
                      "end": 314
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 318,
                          "end": 322
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 323,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 318,
                        "end": 328
                      },
                      "start": 316,
                      "end": 328
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 330,
                      "end": 332
                    },
                    "start": 278,
                    "end": 332
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 351,
                          "end": 356
                        },
                        "optional": false,
                        "computed": false,
                        "start": 346,
                        "end": 356
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 359,
                        "end": 360
                      },
                      "start": 346,
                      "end": 360
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 367,
                          "end": 372
                        },
                        "optional": false,
                        "computed": false,
                        "start": 362,
                        "end": 372
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 375,
                        "end": 377
                      },
                      "start": 362,
                      "end": 377
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 384,
                          "end": 389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 379,
                        "end": 389
                      },
                      "start": 379,
                      "end": 391
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 393,
                      "end": 395
                    },
                    "start": 341,
                    "end": 395
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 406,
                          "end": 410
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 411,
                          "end": 416
                        },
                        "optional": false,
                        "computed": false,
                        "start": 406,
                        "end": 416
                      },
                      "start": 405,
                      "end": 419
                    },
                    "directive": null,
                    "start": 405,
                    "end": 420
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 430,
                          "end": 434
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 435,
                          "end": 440
                        },
                        "optional": false,
                        "computed": false,
                        "start": 430,
                        "end": 440
                      },
                      "start": 429,
                      "end": 443
                    },
                    "directive": null,
                    "start": 429,
                    "end": 444
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 461,
                          "end": 466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 456,
                        "end": 466
                      },
                      "start": 453,
                      "end": 467
                    },
                    "directive": null,
                    "start": 453,
                    "end": 468
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 485,
                          "end": 490
                        },
                        "optional": false,
                        "computed": false,
                        "start": 480,
                        "end": 490
                      },
                      "start": 477,
                      "end": 491
                    },
                    "directive": null,
                    "start": 477,
                    "end": 492
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 508
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 512,
                              "end": 516
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 517,
                              "end": 522
                            },
                            "optional": false,
                            "computed": false,
                            "start": 512,
                            "end": 522
                          },
                          "start": 511,
                          "end": 525
                        },
                        "definite": false,
                        "start": 507,
                        "end": 525
                      }
                    ],
                    "declare": false,
                    "start": 501,
                    "end": 526
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 542
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 546,
                              "end": 550
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 551,
                              "end": 556
                            },
                            "optional": false,
                            "computed": false,
                            "start": 546,
                            "end": 556
                          },
                          "start": 545,
                          "end": 559
                        },
                        "definite": false,
                        "start": 541,
                        "end": 559
                      }
                    ],
                    "declare": false,
                    "start": 535,
                    "end": 560
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
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 576
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 582,
                              "end": 586
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 587,
                              "end": 592
                            },
                            "optional": false,
                            "computed": false,
                            "start": 582,
                            "end": 592
                          },
                          "start": 579,
                          "end": 593
                        },
                        "definite": false,
                        "start": 575,
                        "end": 593
                      }
                    ],
                    "declare": false,
                    "start": 569,
                    "end": 594
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
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 609,
                          "end": 610
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 616,
                              "end": 620
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 621,
                              "end": 626
                            },
                            "optional": false,
                            "computed": false,
                            "start": 616,
                            "end": 626
                          },
                          "start": 613,
                          "end": 627
                        },
                        "definite": false,
                        "start": 609,
                        "end": 627
                      }
                    ],
                    "declare": false,
                    "start": 603,
                    "end": 628
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 647,
                          "end": 652
                        },
                        "optional": false,
                        "computed": false,
                        "start": 642,
                        "end": 652
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 655,
                        "end": 656
                      },
                      "start": 642,
                      "end": 656
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 658,
                          "end": 662
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 663,
                          "end": 668
                        },
                        "optional": false,
                        "computed": false,
                        "start": 658,
                        "end": 668
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 671,
                        "end": 673
                      },
                      "start": 658,
                      "end": 673
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 678,
                          "end": 682
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 683,
                          "end": 688
                        },
                        "optional": false,
                        "computed": false,
                        "start": 678,
                        "end": 688
                      },
                      "start": 675,
                      "end": 689
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 691,
                      "end": 693
                    },
                    "start": 637,
                    "end": 693
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 707,
                          "end": 711
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 712,
                          "end": 717
                        },
                        "optional": false,
                        "computed": false,
                        "start": 707,
                        "end": 717
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 720,
                        "end": 721
                      },
                      "start": 707,
                      "end": 721
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 723,
                          "end": 727
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 728,
                          "end": 733
                        },
                        "optional": false,
                        "computed": false,
                        "start": 723,
                        "end": 733
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 736,
                        "end": 738
                      },
                      "start": 723,
                      "end": 738
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 741,
                          "end": 745
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 746,
                          "end": 751
                        },
                        "optional": false,
                        "computed": false,
                        "start": 741,
                        "end": 751
                      },
                      "start": 740,
                      "end": 754
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 756,
                      "end": 758
                    },
                    "start": 702,
                    "end": 758
                  }
                ],
                "start": 52,
                "end": 764
              },
              "expression": false,
              "start": 49,
              "end": 764
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 764
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 773
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 786,
                              "end": 790
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 791,
                              "end": 802
                            },
                            "optional": false,
                            "computed": false,
                            "start": 786,
                            "end": 802
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 786,
                          "end": 804
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 805,
                          "end": 810
                        },
                        "optional": false,
                        "computed": false,
                        "start": 786,
                        "end": 810
                      },
                      "start": 786,
                      "end": 812
                    },
                    "directive": null,
                    "start": 786,
                    "end": 813
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 822,
                              "end": 826
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 827,
                              "end": 838
                            },
                            "optional": false,
                            "computed": false,
                            "start": 822,
                            "end": 838
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 822,
                          "end": 840
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 841,
                          "end": 846
                        },
                        "optional": false,
                        "computed": false,
                        "start": 822,
                        "end": 846
                      },
                      "start": 822,
                      "end": 848
                    },
                    "directive": null,
                    "start": 822,
                    "end": 849
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 860,
                              "end": 864
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 865,
                              "end": 876
                            },
                            "optional": false,
                            "computed": false,
                            "start": 860,
                            "end": 876
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 860,
                          "end": 878
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 879,
                          "end": 884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 860,
                        "end": 884
                      },
                      "start": 858,
                      "end": 884
                    },
                    "directive": null,
                    "start": 858,
                    "end": 885
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 896,
                              "end": 900
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 901,
                              "end": 912
                            },
                            "optional": false,
                            "computed": false,
                            "start": 896,
                            "end": 912
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 896,
                          "end": 914
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 915,
                          "end": 920
                        },
                        "optional": false,
                        "computed": false,
                        "start": 896,
                        "end": 920
                      },
                      "start": 894,
                      "end": 920
                    },
                    "directive": null,
                    "start": 894,
                    "end": 921
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 936,
                          "end": 937
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 940,
                                  "end": 944
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 945,
                                  "end": 956
                                },
                                "optional": false,
                                "computed": false,
                                "start": 940,
                                "end": 956
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 940,
                              "end": 958
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 959,
                              "end": 964
                            },
                            "optional": false,
                            "computed": false,
                            "start": 940,
                            "end": 964
                          },
                          "start": 940,
                          "end": 966
                        },
                        "definite": false,
                        "start": 936,
                        "end": 966
                      }
                    ],
                    "declare": false,
                    "start": 930,
                    "end": 967
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 982,
                          "end": 983
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 986,
                                  "end": 990
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 991,
                                  "end": 1002
                                },
                                "optional": false,
                                "computed": false,
                                "start": 986,
                                "end": 1002
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 986,
                              "end": 1004
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1005,
                              "end": 1010
                            },
                            "optional": false,
                            "computed": false,
                            "start": 986,
                            "end": 1010
                          },
                          "start": 986,
                          "end": 1012
                        },
                        "definite": false,
                        "start": 982,
                        "end": 1012
                      }
                    ],
                    "declare": false,
                    "start": 976,
                    "end": 1013
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1028,
                          "end": 1029
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1034,
                                  "end": 1038
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1039,
                                  "end": 1050
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1034,
                                "end": 1050
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1034,
                              "end": 1052
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1053,
                              "end": 1058
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1034,
                            "end": 1058
                          },
                          "start": 1032,
                          "end": 1058
                        },
                        "definite": false,
                        "start": 1028,
                        "end": 1058
                      }
                    ],
                    "declare": false,
                    "start": 1022,
                    "end": 1059
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1074,
                          "end": 1075
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1080,
                                  "end": 1084
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1085,
                                  "end": 1096
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1080,
                                "end": 1096
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1080,
                              "end": 1098
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1099,
                              "end": 1104
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1080,
                            "end": 1104
                          },
                          "start": 1078,
                          "end": 1104
                        },
                        "definite": false,
                        "start": 1074,
                        "end": 1104
                      }
                    ],
                    "declare": false,
                    "start": 1068,
                    "end": 1105
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1119,
                              "end": 1123
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1124,
                              "end": 1135
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1119,
                            "end": 1135
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1119,
                          "end": 1137
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1138,
                          "end": 1143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1119,
                        "end": 1143
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1146,
                        "end": 1147
                      },
                      "start": 1119,
                      "end": 1147
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1149,
                              "end": 1153
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1154,
                              "end": 1165
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1149,
                            "end": 1165
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1149,
                          "end": 1167
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1168,
                          "end": 1173
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1149,
                        "end": 1173
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1176,
                        "end": 1178
                      },
                      "start": 1149,
                      "end": 1178
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1182,
                              "end": 1186
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1187,
                              "end": 1198
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1182,
                            "end": 1198
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1182,
                          "end": 1200
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1201,
                          "end": 1206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1182,
                        "end": 1206
                      },
                      "start": 1180,
                      "end": 1206
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1208,
                      "end": 1210
                    },
                    "start": 1114,
                    "end": 1210
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1224,
                              "end": 1228
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1229,
                              "end": 1240
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1224,
                            "end": 1240
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1224,
                          "end": 1242
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1243,
                          "end": 1248
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1224,
                        "end": 1248
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1251,
                        "end": 1252
                      },
                      "start": 1224,
                      "end": 1252
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1254,
                              "end": 1258
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1259,
                              "end": 1270
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1254,
                            "end": 1270
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1254,
                          "end": 1272
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1273,
                          "end": 1278
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1254,
                        "end": 1278
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1281,
                        "end": 1283
                      },
                      "start": 1254,
                      "end": 1283
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1301
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1285,
                            "end": 1301
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1285,
                          "end": 1303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1304,
                          "end": 1309
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1285,
                        "end": 1309
                      },
                      "start": 1285,
                      "end": 1311
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1313,
                      "end": 1315
                    },
                    "start": 1219,
                    "end": 1315
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1326,
                              "end": 1330
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1331,
                              "end": 1342
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1326,
                            "end": 1342
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1326,
                          "end": 1344
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1345,
                          "end": 1350
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1326,
                        "end": 1350
                      },
                      "start": 1325,
                      "end": 1353
                    },
                    "directive": null,
                    "start": 1325,
                    "end": 1354
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1364,
                              "end": 1368
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1369,
                              "end": 1380
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1364,
                            "end": 1380
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1364,
                          "end": 1382
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1383,
                          "end": 1388
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1364,
                        "end": 1388
                      },
                      "start": 1363,
                      "end": 1391
                    },
                    "directive": null,
                    "start": 1363,
                    "end": 1392
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1404,
                              "end": 1408
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1409,
                              "end": 1420
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1404,
                            "end": 1420
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1404,
                          "end": 1422
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1423,
                          "end": 1428
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1404,
                        "end": 1428
                      },
                      "start": 1401,
                      "end": 1429
                    },
                    "directive": null,
                    "start": 1401,
                    "end": 1430
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1442,
                              "end": 1446
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1447,
                              "end": 1458
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1442,
                            "end": 1458
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1442,
                          "end": 1460
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1461,
                          "end": 1466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1442,
                        "end": 1466
                      },
                      "start": 1439,
                      "end": 1467
                    },
                    "directive": null,
                    "start": 1439,
                    "end": 1468
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1483,
                          "end": 1484
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1488,
                                  "end": 1492
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1493,
                                  "end": 1504
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1488,
                                "end": 1504
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1488,
                              "end": 1506
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1507,
                              "end": 1512
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1488,
                            "end": 1512
                          },
                          "start": 1487,
                          "end": 1515
                        },
                        "definite": false,
                        "start": 1483,
                        "end": 1515
                      }
                    ],
                    "declare": false,
                    "start": 1477,
                    "end": 1516
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1531,
                          "end": 1532
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1536,
                                  "end": 1540
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1541,
                                  "end": 1552
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1536,
                                "end": 1552
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1536,
                              "end": 1554
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1555,
                              "end": 1560
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1536,
                            "end": 1560
                          },
                          "start": 1535,
                          "end": 1563
                        },
                        "definite": false,
                        "start": 1531,
                        "end": 1563
                      }
                    ],
                    "declare": false,
                    "start": 1525,
                    "end": 1564
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
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1579,
                          "end": 1580
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1586,
                                  "end": 1590
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1591,
                                  "end": 1602
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1586,
                                "end": 1602
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1586,
                              "end": 1604
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1605,
                              "end": 1610
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1586,
                            "end": 1610
                          },
                          "start": 1583,
                          "end": 1611
                        },
                        "definite": false,
                        "start": 1579,
                        "end": 1611
                      }
                    ],
                    "declare": false,
                    "start": 1573,
                    "end": 1612
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
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1627,
                          "end": 1628
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1634,
                                  "end": 1638
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1639,
                                  "end": 1650
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1634,
                                "end": 1650
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1634,
                              "end": 1652
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1653,
                              "end": 1658
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1634,
                            "end": 1658
                          },
                          "start": 1631,
                          "end": 1659
                        },
                        "definite": false,
                        "start": 1627,
                        "end": 1659
                      }
                    ],
                    "declare": false,
                    "start": 1621,
                    "end": 1660
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1674,
                              "end": 1678
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1679,
                              "end": 1690
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1674,
                            "end": 1690
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1674,
                          "end": 1692
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1693,
                          "end": 1698
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1674,
                        "end": 1698
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1701,
                        "end": 1702
                      },
                      "start": 1674,
                      "end": 1702
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1704,
                              "end": 1708
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1709,
                              "end": 1720
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1704,
                            "end": 1720
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1704,
                          "end": 1722
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1723,
                          "end": 1728
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1704,
                        "end": 1728
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1731,
                        "end": 1733
                      },
                      "start": 1704,
                      "end": 1733
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1738,
                              "end": 1742
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1743,
                              "end": 1754
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1738,
                            "end": 1754
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1738,
                          "end": 1756
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1757,
                          "end": 1762
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1738,
                        "end": 1762
                      },
                      "start": 1735,
                      "end": 1763
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1765,
                      "end": 1767
                    },
                    "start": 1669,
                    "end": 1767
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1781,
                              "end": 1785
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1786,
                              "end": 1797
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1781,
                            "end": 1797
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1781,
                          "end": 1799
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1800,
                          "end": 1805
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1781,
                        "end": 1805
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1808,
                        "end": 1809
                      },
                      "start": 1781,
                      "end": 1809
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1811,
                              "end": 1815
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1816,
                              "end": 1827
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1811,
                            "end": 1827
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1811,
                          "end": 1829
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1830,
                          "end": 1835
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1811,
                        "end": 1835
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1838,
                        "end": 1840
                      },
                      "start": 1811,
                      "end": 1840
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1843,
                              "end": 1847
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1848,
                              "end": 1859
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1843,
                            "end": 1859
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1843,
                          "end": 1861
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1862,
                          "end": 1867
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1843,
                        "end": 1867
                      },
                      "start": 1842,
                      "end": 1870
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1872,
                      "end": 1874
                    },
                    "start": 1776,
                    "end": 1874
                  }
                ],
                "start": 776,
                "end": 1880
              },
              "expression": false,
              "start": 773,
              "end": 1880
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 769,
            "end": 1880
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1896
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1912,
                        "end": 1913
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1908,
                      "end": 1915
                    },
                    "start": 1901,
                    "end": 1916
                  }
                ],
                "start": 1899,
                "end": 1918
              },
              "expression": false,
              "start": 1896,
              "end": 1918
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1885,
            "end": 1918
          }
        ],
        "start": 8,
        "end": 1920
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1920
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1920
}
```
