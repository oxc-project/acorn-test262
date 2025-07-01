__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "start": 39,
            "end": 48
          }
        ],
        "start": 33,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 66
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 69,
          "end": 72
        },
        "start": 51,
        "end": 72
      },
      "directive": null,
      "start": 51,
      "end": 72
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 85
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "optional": false,
          "computed": false,
          "start": 73,
          "end": 87
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 102,
                  "end": 108
                },
                "start": 100,
                "end": 108
              },
              "start": 99,
              "end": 108
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 124
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 127,
                    "end": 128
                  },
                  "start": 123,
                  "end": 128
                },
                "start": 116,
                "end": 129
              }
            ],
            "start": 110,
            "end": 131
          },
          "expression": false,
          "start": 90,
          "end": 131
        },
        "start": 73,
        "end": 131
      },
      "directive": null,
      "start": 73,
      "end": 131
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 154
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 174
                  },
                  "init": {
                    "type": "Literal",
                    "value": 222,
                    "raw": "222",
                    "start": 177,
                    "end": 180
                  },
                  "definite": false,
                  "start": 172,
                  "end": 180
                }
              ],
              "declare": false,
              "start": 168,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 161,
            "end": 181
          }
        ],
        "start": 155,
        "end": 183
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 132,
      "end": 183
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 196
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "optional": false,
          "computed": false,
          "start": 184,
          "end": 199
        },
        "right": {
          "type": "Literal",
          "value": 44444,
          "raw": "44444",
          "start": 202,
          "end": 207
        },
        "start": 184,
        "end": 207
      },
      "directive": null,
      "start": 184,
      "end": 208
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p6",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 230
          },
          "optional": false,
          "computed": false,
          "start": 215,
          "end": 230
        },
        "right": {
          "type": "Literal",
          "value": 66666,
          "raw": "66666",
          "start": 233,
          "end": 238
        },
        "start": 215,
        "end": 238
      },
      "directive": null,
      "start": 215,
      "end": 239
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p8",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 261
          },
          "optional": false,
          "computed": false,
          "start": 246,
          "end": 261
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 264,
          "end": 269
        },
        "start": 246,
        "end": 269
      },
      "directive": null,
      "start": 246,
      "end": 270
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 307
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 327
                  },
                  "init": {
                    "type": "Literal",
                    "value": 333,
                    "raw": "333",
                    "start": 330,
                    "end": 333
                  },
                  "definite": false,
                  "start": 325,
                  "end": 333
                }
              ],
              "declare": false,
              "start": 321,
              "end": 334
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 314,
            "end": 334
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 352
                  },
                  "init": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 355,
                    "end": 356
                  },
                  "definite": false,
                  "start": 350,
                  "end": 356
                }
              ],
              "declare": false,
              "start": 346,
              "end": 357
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 339,
            "end": 357
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 375
                  },
                  "init": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 378,
                    "end": 379
                  },
                  "definite": false,
                  "start": 373,
                  "end": 379
                }
              ],
              "declare": false,
              "start": 369,
              "end": 380
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 362,
            "end": 380
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 398
                  },
                  "init": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 401,
                    "end": 402
                  },
                  "definite": false,
                  "start": 396,
                  "end": 402
                }
              ],
              "declare": false,
              "start": 392,
              "end": 403
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 385,
            "end": 403
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 421
                  },
                  "init": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 424,
                    "end": 425
                  },
                  "definite": false,
                  "start": 419,
                  "end": 425
                }
              ],
              "declare": false,
              "start": 415,
              "end": 426
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 408,
            "end": 426
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 444
                  },
                  "init": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 447,
                    "end": 448
                  },
                  "definite": false,
                  "start": 442,
                  "end": 448
                }
              ],
              "declare": false,
              "start": 438,
              "end": 449
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 431,
            "end": 449
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 467
                  },
                  "init": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 470,
                    "end": 471
                  },
                  "definite": false,
                  "start": 465,
                  "end": 471
                }
              ],
              "declare": false,
              "start": 461,
              "end": 472
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 454,
            "end": 472
          }
        ],
        "start": 308,
        "end": 474
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 285,
      "end": 474
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 487
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p5",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 490
          },
          "optional": false,
          "computed": false,
          "start": 475,
          "end": 490
        },
        "right": {
          "type": "Literal",
          "value": 555555,
          "raw": "555555",
          "start": 493,
          "end": 499
        },
        "start": 475,
        "end": 499
      },
      "directive": null,
      "start": 475,
      "end": 500
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 519
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p7",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 522
          },
          "optional": false,
          "computed": false,
          "start": 507,
          "end": 522
        },
        "right": {
          "type": "Literal",
          "value": 777777,
          "raw": "777777",
          "start": 525,
          "end": 531
        },
        "start": 507,
        "end": 531
      },
      "directive": null,
      "start": 507,
      "end": 532
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 551
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p9",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 554
          },
          "optional": false,
          "computed": false,
          "start": 539,
          "end": 554
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 557,
          "end": 562
        },
        "start": 539,
        "end": 562
      },
      "directive": null,
      "start": 539,
      "end": 563
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 583
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 586,
                                  "end": 598
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 599,
                                  "end": 601
                                },
                                "optional": false,
                                "computed": false,
                                "start": 586,
                                "end": 601
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 604,
                                  "end": 616
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 617,
                                  "end": 619
                                },
                                "optional": false,
                                "computed": false,
                                "start": 604,
                                "end": 619
                              },
                              "start": 586,
                              "end": 619
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandoMerge",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 622,
                                "end": 634
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 635,
                                "end": 637
                              },
                              "optional": false,
                              "computed": false,
                              "start": 622,
                              "end": 637
                            },
                            "start": 586,
                            "end": 637
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ExpandoMerge",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 640,
                              "end": 652
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 655
                            },
                            "optional": false,
                            "computed": false,
                            "start": 640,
                            "end": 655
                          },
                          "start": 586,
                          "end": 655
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExpandoMerge",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 670
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 673
                          },
                          "optional": false,
                          "computed": false,
                          "start": 658,
                          "end": 673
                        },
                        "start": 586,
                        "end": 673
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExpandoMerge",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 688
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 689,
                          "end": 691
                        },
                        "optional": false,
                        "computed": false,
                        "start": 676,
                        "end": 691
                      },
                      "start": 586,
                      "end": 691
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpandoMerge",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 694,
                        "end": 706
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 709
                      },
                      "optional": false,
                      "computed": false,
                      "start": 694,
                      "end": 709
                    },
                    "start": 586,
                    "end": 709
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoMerge",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 724
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 727
                    },
                    "optional": false,
                    "computed": false,
                    "start": 712,
                    "end": 727
                  },
                  "start": 586,
                  "end": 727
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 742
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 745
                  },
                  "optional": false,
                  "computed": false,
                  "start": 730,
                  "end": 745
                },
                "start": 586,
                "end": 745
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 748,
                    "end": 760
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 762
                  },
                  "optional": false,
                  "computed": false,
                  "start": 748,
                  "end": 762
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 763,
                    "end": 765
                  }
                ],
                "optional": false,
                "start": 748,
                "end": 766
              },
              "start": 586,
              "end": 766
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1001,
                  "raw": "1001",
                  "start": 782,
                  "end": 786
                }
              ],
              "optional": false,
              "start": 769,
              "end": 787
            },
            "start": 586,
            "end": 787
          },
          "definite": false,
          "start": 582,
          "end": 787
        }
      ],
      "declare": false,
      "start": 578,
      "end": 788
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 788
}
```
