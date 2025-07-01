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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 28
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 73,
                          "end": 77
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 78,
                          "end": 82
                        },
                        "optional": false,
                        "computed": false,
                        "start": 73,
                        "end": 82
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 86,
                            "end": 87
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 89,
                            "end": 90
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 92,
                            "end": 93
                          }
                        ],
                        "start": 85,
                        "end": 94
                      },
                      "start": 73,
                      "end": 94
                    },
                    "directive": null,
                    "start": 73,
                    "end": 95
                  }
                ],
                "start": 31,
                "end": 101
              },
              "expression": false,
              "start": 28,
              "end": 101
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 101
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "finderRaw",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 116
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 129,
                            "end": 133
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 138
                          },
                          "optional": false,
                          "computed": false,
                          "start": 129,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "find",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 143
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 154,
                              "end": 155
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
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 178,
                                    "end": 179
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 184,
                                        "end": 188
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 189,
                                        "end": 193
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 184,
                                      "end": 193
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 194,
                                      "end": 200
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 184,
                                    "end": 200
                                  },
                                  "start": 178,
                                  "end": 200
                                },
                                "start": 171,
                                "end": 200
                              }
                            ],
                            "start": 157,
                            "end": 210
                          },
                          "expression": false,
                          "start": 144,
                          "end": 210
                        }
                      ],
                      "optional": false,
                      "start": 129,
                      "end": 211
                    },
                    "directive": null,
                    "start": 129,
                    "end": 211
                  }
                ],
                "start": 119,
                "end": 217
              },
              "expression": false,
              "start": 116,
              "end": 217
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 217
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEacherRaw",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 235
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 248,
                            "end": 252
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 253,
                            "end": 257
                          },
                          "optional": false,
                          "computed": false,
                          "start": 248,
                          "end": 257
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 258,
                          "end": 265
                        },
                        "optional": false,
                        "computed": false,
                        "start": 248,
                        "end": 265
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 276,
                              "end": 277
                            }
                          ],
                          "returnType": null,
                          "body": {
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
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 293,
                                      "end": 300
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 301,
                                      "end": 304
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 293,
                                    "end": 304
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 305,
                                        "end": 306
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 311,
                                            "end": 315
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 316,
                                            "end": 320
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 311,
                                          "end": 320
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 321,
                                          "end": 327
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 311,
                                        "end": 327
                                      },
                                      "start": 305,
                                      "end": 327
                                    }
                                  ],
                                  "optional": false,
                                  "start": 293,
                                  "end": 328
                                },
                                "directive": null,
                                "start": 293,
                                "end": 328
                              }
                            ],
                            "start": 279,
                            "end": 338
                          },
                          "expression": false,
                          "start": 266,
                          "end": 338
                        }
                      ],
                      "optional": false,
                      "start": 248,
                      "end": 339
                    },
                    "directive": null,
                    "start": 248,
                    "end": 339
                  }
                ],
                "start": 238,
                "end": 345
              },
              "expression": false,
              "start": 235,
              "end": 345
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 223,
            "end": 345
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEacher",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 360
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 373,
                            "end": 377
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 378,
                            "end": 382
                          },
                          "optional": false,
                          "computed": false,
                          "start": 373,
                          "end": 382
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 390
                        },
                        "optional": false,
                        "computed": false,
                        "start": 373,
                        "end": 390
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 438,
                              "end": 439
                            }
                          ],
                          "returnType": null,
                          "body": {
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
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 455,
                                      "end": 462
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 463,
                                      "end": 466
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 455,
                                    "end": 466
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 467,
                                        "end": 468
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 473,
                                            "end": 477
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 478,
                                            "end": 482
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 473,
                                          "end": 482
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 483,
                                          "end": 489
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 473,
                                        "end": 489
                                      },
                                      "start": 467,
                                      "end": 489
                                    }
                                  ],
                                  "optional": false,
                                  "start": 455,
                                  "end": 490
                                },
                                "directive": null,
                                "start": 455,
                                "end": 490
                              }
                            ],
                            "start": 441,
                            "end": 500
                          },
                          "expression": false,
                          "start": 428,
                          "end": 500
                        },
                        {
                          "type": "ThisExpression",
                          "start": 502,
                          "end": 506
                        }
                      ],
                      "optional": false,
                      "start": 373,
                      "end": 507
                    },
                    "directive": null,
                    "start": 373,
                    "end": 507
                  }
                ],
                "start": 363,
                "end": 513
              },
              "expression": false,
              "start": 360,
              "end": 513
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 351,
            "end": 513
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "finder",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 525
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 538,
                            "end": 542
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 543,
                            "end": 547
                          },
                          "optional": false,
                          "computed": false,
                          "start": 538,
                          "end": 547
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "find",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 548,
                          "end": 552
                        },
                        "optional": false,
                        "computed": false,
                        "start": 538,
                        "end": 552
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 600,
                              "end": 601
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
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 624,
                                    "end": 625
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 630,
                                        "end": 634
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 635,
                                        "end": 639
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 630,
                                      "end": 639
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 640,
                                      "end": 646
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 630,
                                    "end": 646
                                  },
                                  "start": 624,
                                  "end": 646
                                },
                                "start": 617,
                                "end": 646
                              }
                            ],
                            "start": 603,
                            "end": 656
                          },
                          "expression": false,
                          "start": 590,
                          "end": 656
                        },
                        {
                          "type": "ThisExpression",
                          "start": 658,
                          "end": 662
                        }
                      ],
                      "optional": false,
                      "start": 538,
                      "end": 663
                    },
                    "directive": null,
                    "start": 538,
                    "end": 663
                  }
                ],
                "start": 528,
                "end": 669
              },
              "expression": false,
              "start": 525,
              "end": 669
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 519,
            "end": 669
          }
        ],
        "start": 11,
        "end": 671
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 671
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 671
}
```
