__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 12,
                "end": 16
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 22,
                      "end": 27
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 29,
                      "end": 36
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 22,
                    "end": 36
                  }
                ],
                "start": 20,
                "end": 38
              },
              "definite": false,
              "start": 12,
              "end": 38
            }
          ],
          "declare": false,
          "start": 6,
          "end": 39
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 66
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 66
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 88,
                                    "end": 93
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "param is not defined",
                                      "raw": "'param is not defined'",
                                      "start": 94,
                                      "end": 116
                                    }
                                  ],
                                  "start": 84,
                                  "end": 117
                                },
                                "start": 78,
                                "end": 117
                              }
                            ],
                            "start": 76,
                            "end": 119
                          },
                          "id": null,
                          "generator": false,
                          "start": 70,
                          "end": 119
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 69,
                        "end": 122
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 122
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 61,
                    "end": 122
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 129
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "definite": false,
              "start": 51,
              "end": 136
            }
          ],
          "declare": false,
          "start": 45,
          "end": 137
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
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 147,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 164
              }
            ],
            "optional": false,
            "start": 147,
            "end": 165
          },
          "directive": null,
          "start": 147,
          "end": 166
        }
      ],
      "start": 0,
      "end": 223
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 242
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 253
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 255,
                      "end": 262
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 248,
                    "end": 262
                  }
                ],
                "start": 246,
                "end": 264
              },
              "definite": false,
              "start": 238,
              "end": 264
            }
          ],
          "declare": false,
          "start": 232,
          "end": 265
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 280,
                        "end": 286
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 289,
                        "end": 298
                      }
                    ],
                    "start": 280,
                    "end": 298
                  },
                  "start": 278,
                  "end": 298
                },
                "start": 275,
                "end": 298
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 301,
                "end": 303
              },
              "definite": false,
              "start": 275,
              "end": 303
            }
          ],
          "declare": false,
          "start": 271,
          "end": 304
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 330
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 330
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 352,
                                    "end": 357
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "param is not defined",
                                      "raw": "'param is not defined'",
                                      "start": 358,
                                      "end": 380
                                    }
                                  ],
                                  "start": 348,
                                  "end": 381
                                },
                                "start": 342,
                                "end": 381
                              }
                            ],
                            "start": 340,
                            "end": 383
                          },
                          "id": null,
                          "generator": false,
                          "start": 334,
                          "end": 383
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 333,
                        "end": 386
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 386
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 325,
                    "end": 386
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 393
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 400
              },
              "definite": false,
              "start": 315,
              "end": 400
            }
          ],
          "declare": false,
          "start": 309,
          "end": 401
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 414
          },
          "directive": null,
          "start": 411,
          "end": 415
        }
      ],
      "start": 226,
      "end": 440
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 458
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 469
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 471,
                      "end": 478
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 464,
                    "end": 478
                  }
                ],
                "start": 462,
                "end": 480
              },
              "definite": false,
              "start": 454,
              "end": 480
            }
          ],
          "declare": false,
          "start": 448,
          "end": 481
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 496,
                        "end": 502
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 505,
                        "end": 514
                      }
                    ],
                    "start": 496,
                    "end": 514
                  },
                  "start": 494,
                  "end": 514
                },
                "start": 491,
                "end": 514
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 517,
                "end": 519
              },
              "definite": false,
              "start": 491,
              "end": 519
            }
          ],
          "declare": false,
          "start": 487,
          "end": 520
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 546
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 546
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 558,
                                    "end": 561
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 564,
                                    "end": 573
                                  },
                                  "start": 558,
                                  "end": 573
                                },
                                "directive": null,
                                "start": 558,
                                "end": 573
                              }
                            ],
                            "start": 556,
                            "end": 575
                          },
                          "id": null,
                          "generator": false,
                          "start": 550,
                          "end": 575
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 549,
                        "end": 578
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 578
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 541,
                    "end": 578
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 585
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 592
              },
              "definite": false,
              "start": 531,
              "end": 592
            }
          ],
          "declare": false,
          "start": 525,
          "end": 593
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 606
          },
          "directive": null,
          "start": 603,
          "end": 607
        }
      ],
      "start": 442,
      "end": 642
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 660
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 671
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 673,
                      "end": 680
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 666,
                    "end": 680
                  }
                ],
                "start": 664,
                "end": 682
              },
              "definite": false,
              "start": 656,
              "end": 682
            }
          ],
          "declare": false,
          "start": 650,
          "end": 683
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 698,
                        "end": 704
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 707,
                        "end": 716
                      }
                    ],
                    "start": 698,
                    "end": 716
                  },
                  "start": 696,
                  "end": 716
                },
                "start": 693,
                "end": 716
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 719,
                "end": 721
              },
              "definite": false,
              "start": 693,
              "end": 721
            }
          ],
          "declare": false,
          "start": 689,
          "end": 722
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 748
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 743,
                        "end": 748
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\"",
                                    "start": 767,
                                    "end": 769
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 772,
                                    "end": 773
                                  },
                                  "start": 767,
                                  "end": 773
                                },
                                "start": 760,
                                "end": 773
                              }
                            ],
                            "start": 758,
                            "end": 775
                          },
                          "id": null,
                          "generator": false,
                          "start": 752,
                          "end": 775
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 751,
                        "end": 778
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 778
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 743,
                    "end": 778
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 785
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 792
              },
              "definite": false,
              "start": 733,
              "end": 792
            }
          ],
          "declare": false,
          "start": 727,
          "end": 793
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 806
          },
          "directive": null,
          "start": 803,
          "end": 807
        }
      ],
      "start": 644,
      "end": 830
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 854
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
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 871
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 879
                    },
                    "typeArguments": null,
                    "start": 873,
                    "end": 879
                  },
                  "start": 871,
                  "end": 879
                },
                "accessibility": null,
                "static": false,
                "start": 865,
                "end": 880
              }
            ],
            "start": 855,
            "end": 886
          },
          "declare": false,
          "start": 838,
          "end": 886
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 901,
                        "end": 907
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 910,
                        "end": 919
                      }
                    ],
                    "start": 901,
                    "end": 919
                  },
                  "start": 899,
                  "end": 919
                },
                "start": 896,
                "end": 919
              },
              "init": null,
              "definite": false,
              "start": 896,
              "end": 919
            }
          ],
          "declare": false,
          "start": 892,
          "end": 920
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 935
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 938,
                  "end": 940
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 944,
                    "end": 950
                  },
                  "typeArguments": null,
                  "start": 944,
                  "end": 950
                },
                "start": 938,
                "end": 950
              },
              "definite": false,
              "start": 929,
              "end": 950
            }
          ],
          "declare": false,
          "start": 925,
          "end": 951
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 962
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 963,
                "end": 969
              },
              "optional": false,
              "computed": false,
              "start": 956,
              "end": 969
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 978
            },
            "start": 956,
            "end": 978
          },
          "directive": null,
          "start": 956,
          "end": 979
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1003,
                                  "end": 1006
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "\"\"",
                                  "start": 1009,
                                  "end": 1011
                                },
                                "start": 1003,
                                "end": 1011
                              },
                              "directive": null,
                              "start": 1003,
                              "end": 1012
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "value": "window",
                                  "raw": "'window'",
                                  "start": 1020,
                                  "end": 1028
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1032,
                                    "end": 1037
                                  },
                                  "typeArguments": null,
                                  "start": 1032,
                                  "end": 1037
                                },
                                "start": 1020,
                                "end": 1037
                              },
                              "start": 1013,
                              "end": 1037
                            }
                          ],
                          "start": 1001,
                          "end": 1039
                        },
                        "id": null,
                        "generator": false,
                        "start": 995,
                        "end": 1039
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 994,
                      "end": 1042
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
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
                                        "value": "window",
                                        "raw": "'window'",
                                        "start": 1072,
                                        "end": 1080
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1084,
                                          "end": 1089
                                        },
                                        "typeArguments": null,
                                        "start": 1084,
                                        "end": 1089
                                      },
                                      "start": 1072,
                                      "end": 1089
                                    },
                                    "start": 1065,
                                    "end": 1089
                                  }
                                ],
                                "start": 1063,
                                "end": 1091
                              },
                              "id": null,
                              "generator": false,
                              "start": 1057,
                              "end": 1091
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1056,
                            "end": 1094
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1097,
                            "end": 1100
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 1055,
                          "end": 1100
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1102
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 993,
                    "end": 1102
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 991,
                "end": 1104
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1113
              },
              "definite": false,
              "start": 991,
              "end": 1113
            }
          ],
          "declare": false,
          "start": 985,
          "end": 1114
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1123
          },
          "directive": null,
          "start": 1120,
          "end": 1124
        }
      ],
      "start": 832,
      "end": 1147
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1171
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
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1182,
                  "end": 1188
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1196
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1196
                  },
                  "start": 1188,
                  "end": 1196
                },
                "accessibility": null,
                "static": false,
                "start": 1182,
                "end": 1197
              }
            ],
            "start": 1172,
            "end": 1203
          },
          "declare": false,
          "start": 1155,
          "end": 1203
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1218,
                        "end": 1224
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1227,
                        "end": 1236
                      }
                    ],
                    "start": 1218,
                    "end": 1236
                  },
                  "start": 1216,
                  "end": 1236
                },
                "start": 1213,
                "end": 1236
              },
              "init": null,
              "definite": false,
              "start": 1213,
              "end": 1236
            }
          ],
          "declare": false,
          "start": 1209,
          "end": 1237
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1252
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1255,
                  "end": 1257
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1261,
                    "end": 1267
                  },
                  "typeArguments": null,
                  "start": 1261,
                  "end": 1267
                },
                "start": 1255,
                "end": 1267
              },
              "definite": false,
              "start": 1246,
              "end": 1267
            }
          ],
          "declare": false,
          "start": 1242,
          "end": 1268
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1286
              },
              "optional": false,
              "computed": false,
              "start": 1273,
              "end": 1286
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1295
            },
            "start": 1273,
            "end": 1295
          },
          "directive": null,
          "start": 1273,
          "end": 1296
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                  "value": "window",
                                  "raw": "'window'",
                                  "start": 1328,
                                  "end": 1336
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1340,
                                    "end": 1345
                                  },
                                  "typeArguments": null,
                                  "start": 1340,
                                  "end": 1345
                                },
                                "start": 1328,
                                "end": 1345
                              },
                              "start": 1321,
                              "end": 1345
                            }
                          ],
                          "start": 1318,
                          "end": 1347
                        },
                        "id": null,
                        "generator": false,
                        "start": 1312,
                        "end": 1347
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1311,
                      "end": 1350
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1373,
                                        "end": 1376
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\"",
                                        "start": 1379,
                                        "end": 1381
                                      },
                                      "start": 1373,
                                      "end": 1381
                                    },
                                    "directive": null,
                                    "start": 1373,
                                    "end": 1382
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "value": "window",
                                        "raw": "'window'",
                                        "start": 1390,
                                        "end": 1398
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1402,
                                          "end": 1407
                                        },
                                        "typeArguments": null,
                                        "start": 1402,
                                        "end": 1407
                                      },
                                      "start": 1390,
                                      "end": 1407
                                    },
                                    "start": 1383,
                                    "end": 1407
                                  }
                                ],
                                "start": 1371,
                                "end": 1409
                              },
                              "id": null,
                              "generator": false,
                              "start": 1365,
                              "end": 1409
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1364,
                            "end": 1412
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1415,
                            "end": 1418
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 1363,
                          "end": 1418
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1420
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 1310,
                    "end": 1420
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1308,
                "end": 1422
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1425,
                "end": 1431
              },
              "definite": false,
              "start": 1308,
              "end": 1431
            }
          ],
          "declare": false,
          "start": 1302,
          "end": 1432
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1438,
            "end": 1441
          },
          "directive": null,
          "start": 1438,
          "end": 1442
        }
      ],
      "start": 1149,
      "end": 1465
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "typeAnnotation": null,
            "start": 1483,
            "end": 1489
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
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1500,
                  "end": 1506
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1514
                    },
                    "typeArguments": null,
                    "start": 1508,
                    "end": 1514
                  },
                  "start": 1506,
                  "end": 1514
                },
                "accessibility": null,
                "static": false,
                "start": 1500,
                "end": 1515
              }
            ],
            "start": 1490,
            "end": 1521
          },
          "declare": false,
          "start": 1473,
          "end": 1521
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1536,
                        "end": 1542
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1545,
                        "end": 1554
                      }
                    ],
                    "start": 1536,
                    "end": 1554
                  },
                  "start": 1534,
                  "end": 1554
                },
                "start": 1531,
                "end": 1554
              },
              "init": null,
              "definite": false,
              "start": 1531,
              "end": 1554
            }
          ],
          "declare": false,
          "start": 1527,
          "end": 1555
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1564,
                "end": 1570
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1573,
                  "end": 1575
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1579,
                    "end": 1585
                  },
                  "typeArguments": null,
                  "start": 1579,
                  "end": 1585
                },
                "start": 1573,
                "end": 1585
              },
              "definite": false,
              "start": 1564,
              "end": 1585
            }
          ],
          "declare": false,
          "start": 1560,
          "end": 1586
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1597
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1604
              },
              "optional": false,
              "computed": false,
              "start": 1591,
              "end": 1604
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 1607,
              "end": 1613
            },
            "start": 1591,
            "end": 1613
          },
          "directive": null,
          "start": 1591,
          "end": 1614
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                  "value": "window",
                                  "raw": "'window'",
                                  "start": 1645,
                                  "end": 1653
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1657,
                                    "end": 1662
                                  },
                                  "typeArguments": null,
                                  "start": 1657,
                                  "end": 1662
                                },
                                "start": 1645,
                                "end": 1662
                              },
                              "start": 1638,
                              "end": 1662
                            }
                          ],
                          "start": 1636,
                          "end": 1664
                        },
                        "id": null,
                        "generator": false,
                        "start": 1630,
                        "end": 1664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1629,
                      "end": 1667
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
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
                                        "value": "window",
                                        "raw": "'window'",
                                        "start": 1697,
                                        "end": 1705
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1709,
                                          "end": 1714
                                        },
                                        "typeArguments": null,
                                        "start": 1709,
                                        "end": 1714
                                      },
                                      "start": 1697,
                                      "end": 1714
                                    },
                                    "start": 1690,
                                    "end": 1714
                                  }
                                ],
                                "start": 1688,
                                "end": 1716
                              },
                              "id": null,
                              "generator": false,
                              "start": 1682,
                              "end": 1716
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1681,
                            "end": 1719
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1722,
                              "end": 1725
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1737,
                                          "end": 1740
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "\"\"",
                                          "start": 1743,
                                          "end": 1745
                                        },
                                        "start": 1737,
                                        "end": 1745
                                      },
                                      "directive": null,
                                      "start": 1737,
                                      "end": 1746
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "window",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1754,
                                        "end": 1760
                                      },
                                      "start": 1747,
                                      "end": 1761
                                    }
                                  ],
                                  "start": 1735,
                                  "end": 1763
                                },
                                "id": null,
                                "generator": false,
                                "start": 1729,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1728,
                              "end": 1766
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1722,
                            "end": 1766
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 1680,
                          "end": 1766
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1678,
                      "end": 1768
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 1628,
                    "end": 1768
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1626,
                "end": 1770
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1773,
                "end": 1779
              },
              "definite": false,
              "start": 1626,
              "end": 1779
            }
          ],
          "declare": false,
          "start": 1620,
          "end": 1780
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1786,
            "end": 1789
          },
          "directive": null,
          "start": 1786,
          "end": 1790
        }
      ],
      "start": 1467,
      "end": 1825
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1825
}
```
