__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 107,
  "end": 4616,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 115,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 118,
            "end": 386,
            "properties": [
              {
                "type": "Property",
                "start": 124,
                "end": 128,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 134,
                "end": 168,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 135,
                  "end": 168,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 138,
                    "end": 168,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 148,
                        "end": 162,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 155,
                          "end": 161,
                          "object": {
                            "type": "ThisExpression",
                            "start": 155,
                            "end": 159
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 174,
                "end": 184,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 184,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 190,
                "end": 246,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 193,
                  "end": 246,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 203,
                      "end": 240,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 204,
                        "end": 240,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 207,
                          "end": 240,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 221,
                              "end": 230,
                              "expression": {
                                "type": "CallExpression",
                                "start": 221,
                                "end": 229,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 221,
                                  "end": 227,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 221,
                                    "end": 225
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 226,
                                    "end": 227,
                                    "name": "g",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 252,
                "end": 290,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 257,
                  "end": 290,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 260,
                    "end": 290,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 270,
                        "end": 284,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 277,
                          "end": 283,
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 283,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 296,
                "end": 334,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 301,
                  "end": 334,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 304,
                    "end": 334,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 314,
                        "end": 328,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 321,
                          "end": 327,
                          "object": {
                            "type": "ThisExpression",
                            "start": 321,
                            "end": 325
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 326,
                            "end": 327,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 340,
                "end": 384,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 345,
                  "end": 384,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 346,
                      "end": 351,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 353,
                    "end": 384,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 363,
                        "end": 378,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 363,
                          "end": 377,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 363,
                            "end": 369,
                            "object": {
                              "type": "ThisExpression",
                              "start": 363,
                              "end": 367
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 368,
                              "end": 369,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 372,
                            "end": 377,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 484,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 494,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 497,
        "end": 601,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 503,
            "end": 513,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 512,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 506,
                "end": 512
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 518,
            "end": 528,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 519,
              "end": 527,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 533,
            "end": 544,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 543,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 549,
            "end": 599,
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 555,
              "name": "moveBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 556,
                "end": 566,
                "name": "dx",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 558,
                  "end": 566,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 560,
                    "end": 566
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 568,
                "end": 578,
                "name": "dy",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 570,
                  "end": 578,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 572,
                    "end": 578
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 580,
                "end": 591,
                "name": "dz",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 583,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 585,
                    "end": 591
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 598,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 594,
                "end": 598
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 603,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 783,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 616,
            "name": "p1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 611,
                "end": 616,
                "typeName": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 616,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 619,
            "end": 783,
            "properties": [
              {
                "type": "Property",
                "start": 625,
                "end": 630,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 628,
                  "end": 630,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 636,
                "end": 641,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 639,
                  "end": 641,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 647,
                "end": 781,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 653,
                  "name": "moveBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 653,
                  "end": 781,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 654,
                      "end": 656,
                      "name": "dx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 658,
                      "end": 660,
                      "name": "dy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 662,
                      "end": 664,
                      "name": "dz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 666,
                    "end": 781,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 676,
                        "end": 689,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 676,
                          "end": 688,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 676,
                            "end": 682,
                            "object": {
                              "type": "ThisExpression",
                              "start": 676,
                              "end": 680
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 681,
                              "end": 682,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 686,
                            "end": 688,
                            "name": "dx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 698,
                        "end": 711,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 698,
                          "end": 710,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 698,
                            "end": 704,
                            "object": {
                              "type": "ThisExpression",
                              "start": 698,
                              "end": 702
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 703,
                              "end": 704,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 708,
                            "end": 710,
                            "name": "dy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 720,
                        "end": 775,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 724,
                          "end": 736,
                          "left": {
                            "type": "MemberExpression",
                            "start": 724,
                            "end": 730,
                            "object": {
                              "type": "ThisExpression",
                              "start": 724,
                              "end": 728
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 729,
                              "end": 730,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "start": 734,
                            "end": 736,
                            "name": "dz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 738,
                          "end": 775,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 752,
                              "end": 765,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 752,
                                "end": 764,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 752,
                                  "end": 758,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 752,
                                    "end": 756
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 757,
                                    "end": 758,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 762,
                                  "end": 764,
                                  "name": "dz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 786,
      "end": 974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 973,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 806,
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 806,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 794,
                "end": 806,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 794,
                    "end": 799,
                    "typeName": {
                      "type": "Identifier",
                      "start": 794,
                      "end": 799,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 802,
                    "end": 806
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 809,
            "end": 973,
            "properties": [
              {
                "type": "Property",
                "start": 815,
                "end": 820,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 816,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 818,
                  "end": 820,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 826,
                "end": 831,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 827,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 829,
                  "end": 831,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 837,
                "end": 971,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 843,
                  "name": "moveBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 843,
                  "end": 971,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 844,
                      "end": 846,
                      "name": "dx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 848,
                      "end": 850,
                      "name": "dy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 852,
                      "end": 854,
                      "name": "dz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 856,
                    "end": 971,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 866,
                        "end": 879,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 866,
                          "end": 878,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 866,
                            "end": 872,
                            "object": {
                              "type": "ThisExpression",
                              "start": 866,
                              "end": 870
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 871,
                              "end": 872,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 876,
                            "end": 878,
                            "name": "dx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 888,
                        "end": 901,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 888,
                          "end": 900,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 888,
                            "end": 894,
                            "object": {
                              "type": "ThisExpression",
                              "start": 888,
                              "end": 892
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 893,
                              "end": 894,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 898,
                            "end": 900,
                            "name": "dy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 910,
                        "end": 965,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 914,
                          "end": 926,
                          "left": {
                            "type": "MemberExpression",
                            "start": 914,
                            "end": 920,
                            "object": {
                              "type": "ThisExpression",
                              "start": 914,
                              "end": 918
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 919,
                              "end": 920,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "start": 924,
                            "end": 926,
                            "name": "dz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 928,
                          "end": 965,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 942,
                              "end": 955,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 942,
                                "end": 954,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 942,
                                  "end": 948,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 942,
                                    "end": 946
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 947,
                                    "end": 948,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 952,
                                  "end": 954,
                                  "name": "dz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 976,
      "end": 1169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 980,
          "end": 1168,
          "id": {
            "type": "Identifier",
            "start": 980,
            "end": 1001,
            "name": "p3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 984,
                "end": 1001,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 984,
                    "end": 989,
                    "typeName": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 989,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 992,
                    "end": 1001
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1004,
            "end": 1168,
            "properties": [
              {
                "type": "Property",
                "start": 1010,
                "end": 1015,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1011,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1013,
                  "end": 1015,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1021,
                "end": 1026,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1022,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1024,
                  "end": 1026,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1032,
                "end": 1166,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1038,
                  "name": "moveBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1038,
                  "end": 1166,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1039,
                      "end": 1041,
                      "name": "dx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1043,
                      "end": 1045,
                      "name": "dy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1049,
                      "name": "dz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1051,
                    "end": 1166,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1061,
                        "end": 1074,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1061,
                          "end": 1073,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1061,
                            "end": 1067,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1061,
                              "end": 1065
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1066,
                              "end": 1067,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1071,
                            "end": 1073,
                            "name": "dx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1083,
                        "end": 1096,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1083,
                          "end": 1095,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1083,
                            "end": 1089,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1083,
                              "end": 1087
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1088,
                              "end": 1089,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1093,
                            "end": 1095,
                            "name": "dy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 1105,
                        "end": 1160,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1109,
                          "end": 1121,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1109,
                            "end": 1115,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1109,
                              "end": 1113
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1114,
                              "end": 1115,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1121,
                            "name": "dz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1123,
                          "end": 1160,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1137,
                              "end": 1150,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1137,
                                "end": 1149,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1137,
                                  "end": 1143,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1137,
                                    "end": 1141
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1142,
                                    "end": 1143,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1147,
                                  "end": 1149,
                                  "name": "dz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1171,
      "end": 1371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1175,
          "end": 1370,
          "id": {
            "type": "Identifier",
            "start": 1175,
            "end": 1203,
            "name": "p4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1177,
              "end": 1203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1179,
                "end": 1203,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1179,
                    "end": 1184,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1184,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1187,
                    "end": 1191
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1194,
                    "end": 1203
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1206,
            "end": 1370,
            "properties": [
              {
                "type": "Property",
                "start": 1212,
                "end": 1217,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1213,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1215,
                  "end": 1217,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1223,
                "end": 1228,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1223,
                  "end": 1224,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1226,
                  "end": 1228,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1234,
                "end": 1368,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1240,
                  "name": "moveBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1240,
                  "end": 1368,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1243,
                      "name": "dx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1245,
                      "end": 1247,
                      "name": "dy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1249,
                      "end": 1251,
                      "name": "dz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1253,
                    "end": 1368,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1263,
                        "end": 1276,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1263,
                          "end": 1275,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1263,
                            "end": 1269,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1263,
                              "end": 1267
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1268,
                              "end": 1269,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1273,
                            "end": 1275,
                            "name": "dx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1285,
                        "end": 1298,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1285,
                          "end": 1297,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1285,
                            "end": 1291,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1291,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1295,
                            "end": 1297,
                            "name": "dy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 1307,
                        "end": 1362,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1311,
                          "end": 1323,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1311,
                            "end": 1317,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1311,
                              "end": 1315
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1316,
                              "end": 1317,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "start": 1321,
                            "end": 1323,
                            "name": "dz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1325,
                          "end": 1362,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1339,
                              "end": 1352,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1339,
                                "end": 1351,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1339,
                                  "end": 1345,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1339,
                                    "end": 1343
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1344,
                                    "end": 1345,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1349,
                                  "end": 1351,
                                  "name": "dz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1373,
      "end": 1409,
      "id": {
        "type": "Identifier",
        "start": 1390,
        "end": 1392,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1393,
          "end": 1401,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1394,
            "end": 1401,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1396,
              "end": 1401,
              "typeName": {
                "type": "Identifier",
                "start": 1396,
                "end": 1401,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1402,
        "end": 1408,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1404,
          "end": 1408
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1411,
      "end": 1580,
      "expression": {
        "type": "CallExpression",
        "start": 1411,
        "end": 1579,
        "callee": {
          "type": "Identifier",
          "start": 1411,
          "end": 1413,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1414,
            "end": 1578,
            "properties": [
              {
                "type": "Property",
                "start": 1420,
                "end": 1425,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1420,
                  "end": 1421,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1423,
                  "end": 1425,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1431,
                "end": 1436,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1432,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1434,
                  "end": 1436,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1442,
                "end": 1576,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1442,
                  "end": 1448,
                  "name": "moveBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1448,
                  "end": 1576,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1449,
                      "end": 1451,
                      "name": "dx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1455,
                      "name": "dy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1457,
                      "end": 1459,
                      "name": "dz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1461,
                    "end": 1576,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1471,
                        "end": 1484,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1471,
                          "end": 1483,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1471,
                            "end": 1477,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1471,
                              "end": 1475
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1476,
                              "end": 1477,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1481,
                            "end": 1483,
                            "name": "dx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1493,
                        "end": 1506,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1493,
                          "end": 1505,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1493,
                            "end": 1499,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1493,
                              "end": 1497
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1498,
                              "end": 1499,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1503,
                            "end": 1505,
                            "name": "dy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 1515,
                        "end": 1570,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1519,
                          "end": 1531,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1519,
                            "end": 1525,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1519,
                              "end": 1523
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1524,
                              "end": 1525,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "start": 1529,
                            "end": 1531,
                            "name": "dz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1533,
                          "end": 1570,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1547,
                              "end": 1560,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1547,
                                "end": 1559,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1547,
                                  "end": 1553,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1547,
                                    "end": 1551
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1552,
                                    "end": 1553,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1557,
                                  "end": 1559,
                                  "name": "dz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1582,
      "end": 1637,
      "id": {
        "type": "Identifier",
        "start": 1599,
        "end": 1601,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1602,
          "end": 1629,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1603,
            "end": 1629,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1605,
              "end": 1629,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1605,
                  "end": 1610,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1605,
                    "end": 1610,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1613,
                  "end": 1617
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1620,
                  "end": 1629
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1630,
        "end": 1636,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1632,
          "end": 1636
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1639,
      "end": 1808,
      "expression": {
        "type": "CallExpression",
        "start": 1639,
        "end": 1807,
        "callee": {
          "type": "Identifier",
          "start": 1639,
          "end": 1641,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1642,
            "end": 1806,
            "properties": [
              {
                "type": "Property",
                "start": 1648,
                "end": 1653,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1649,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1651,
                  "end": 1653,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1659,
                "end": 1664,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1660,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1662,
                  "end": 1664,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1670,
                "end": 1804,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1670,
                  "end": 1676,
                  "name": "moveBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1676,
                  "end": 1804,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1677,
                      "end": 1679,
                      "name": "dx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1681,
                      "end": 1683,
                      "name": "dy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1685,
                      "end": 1687,
                      "name": "dz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1689,
                    "end": 1804,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1699,
                        "end": 1712,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1699,
                          "end": 1711,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1699,
                            "end": 1705,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1699,
                              "end": 1703
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1704,
                              "end": 1705,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1709,
                            "end": 1711,
                            "name": "dx",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1721,
                        "end": 1734,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1721,
                          "end": 1733,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1721,
                            "end": 1727,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1721,
                              "end": 1725
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1726,
                              "end": 1727,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1731,
                            "end": 1733,
                            "name": "dy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 1743,
                        "end": 1798,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1747,
                          "end": 1759,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1747,
                            "end": 1753,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1747,
                              "end": 1751
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1752,
                              "end": 1753,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "start": 1757,
                            "end": 1759,
                            "name": "dz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1761,
                          "end": 1798,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1775,
                              "end": 1788,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1775,
                                "end": 1787,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1775,
                                  "end": 1781,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1775,
                                    "end": 1779
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1780,
                                    "end": 1781,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1785,
                                  "end": 1787,
                                  "name": "dz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1925,
      "end": 2046,
      "id": {
        "type": "Identifier",
        "start": 1930,
        "end": 1946,
        "name": "ObjectDescriptor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1946,
        "end": 1952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1947,
            "end": 1948,
            "name": {
              "type": "Identifier",
              "start": 1947,
              "end": 1948,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1950,
            "end": 1951,
            "name": {
              "type": "Identifier",
              "start": 1950,
              "end": 1951,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1955,
        "end": 2046,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1961,
            "end": 1970,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1965,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1966,
              "end": 1969,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1968,
                "end": 1969,
                "typeName": {
                  "type": "Identifier",
                  "start": 1968,
                  "end": 1969,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1975,
            "end": 2005,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1975,
              "end": 1982,
              "name": "methods",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1983,
              "end": 2004,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1985,
                "end": 2004,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1985,
                    "end": 1986,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1985,
                      "end": 1986,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1989,
                    "end": 2004,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1997,
                      "name": "ThisType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1997,
                      "end": 2004,
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "start": 1998,
                          "end": 2003,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 1998,
                              "end": 1999,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1998,
                                "end": 1999,
                                "name": "D",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2002,
                              "end": 2003,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2002,
                                "end": 2003,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2048,
      "end": 2119,
      "id": {
        "type": "Identifier",
        "start": 2065,
        "end": 2075,
        "name": "makeObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2082,
          "end": 2110,
          "name": "desc",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2086,
            "end": 2110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2088,
              "end": 2110,
              "typeName": {
                "type": "Identifier",
                "start": 2088,
                "end": 2104,
                "name": "ObjectDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2104,
                "end": 2110,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2105,
                    "end": 2106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2105,
                      "end": 2106,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2108,
                    "end": 2109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2108,
                      "end": 2109,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2075,
        "end": 2081,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2076,
            "end": 2077,
            "name": {
              "type": "Identifier",
              "start": 2076,
              "end": 2077,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2079,
            "end": 2080,
            "name": {
              "type": "Identifier",
              "start": 2079,
              "end": 2080,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2111,
        "end": 2118,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2113,
          "end": 2118,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2113,
              "end": 2114,
              "typeName": {
                "type": "Identifier",
                "start": 2113,
                "end": 2114,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2117,
              "end": 2118,
              "typeName": {
                "type": "Identifier",
                "start": 2117,
                "end": 2118,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2121,
      "end": 2344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2125,
          "end": 2343,
          "id": {
            "type": "Identifier",
            "start": 2125,
            "end": 2127,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2130,
            "end": 2343,
            "callee": {
              "type": "Identifier",
              "start": 2130,
              "end": 2140,
              "name": "makeObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2141,
                "end": 2342,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2147,
                    "end": 2167,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2147,
                      "end": 2151,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2153,
                      "end": 2167,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2155,
                          "end": 2159,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2155,
                            "end": 2156,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2158,
                            "end": 2159,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2161,
                          "end": 2165,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2161,
                            "end": 2162,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2164,
                            "end": 2165,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2173,
                    "end": 2340,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2173,
                      "end": 2180,
                      "name": "methods",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2182,
                      "end": 2340,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2192,
                          "end": 2334,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2192,
                            "end": 2198,
                            "name": "moveBy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2198,
                            "end": 2334,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2199,
                                "end": 2209,
                                "name": "dx",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2201,
                                  "end": 2209,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2203,
                                    "end": 2209
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2211,
                                "end": 2221,
                                "name": "dy",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2213,
                                  "end": 2221,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2215,
                                    "end": 2221
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 2223,
                              "end": 2334,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2237,
                                  "end": 2250,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2237,
                                    "end": 2249,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2237,
                                      "end": 2243,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2237,
                                        "end": 2241
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2242,
                                        "end": 2243,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2247,
                                      "end": 2249,
                                      "name": "dx",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2287,
                                  "end": 2300,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2287,
                                    "end": 2299,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2287,
                                      "end": 2293,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2287,
                                        "end": 2291
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2292,
                                        "end": 2293,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2297,
                                      "end": 2299,
                                      "name": "dy",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2471,
      "end": 2554,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2493,
        "name": "ObjectDescriptor2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2493,
        "end": 2499,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2494,
            "end": 2495,
            "name": {
              "type": "Identifier",
              "start": 2494,
              "end": 2495,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2497,
            "end": 2498,
            "name": {
              "type": "Identifier",
              "start": 2497,
              "end": 2498,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2502,
        "end": 2554,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2502,
            "end": 2517,
            "typeName": {
              "type": "Identifier",
              "start": 2502,
              "end": 2510,
              "name": "ThisType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2510,
              "end": 2517,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 2511,
                  "end": 2516,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2511,
                      "end": 2512,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2511,
                        "end": 2512,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2515,
                      "end": 2516,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2515,
                        "end": 2516,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 2520,
            "end": 2554,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2526,
                "end": 2535,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2526,
                  "end": 2530,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2531,
                  "end": 2534,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2533,
                    "end": 2534,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2533,
                      "end": 2534,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2540,
                "end": 2552,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2540,
                  "end": 2547,
                  "name": "methods",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2548,
                  "end": 2551,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2550,
                    "end": 2551,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2550,
                      "end": 2551,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2556,
      "end": 2628,
      "id": {
        "type": "Identifier",
        "start": 2573,
        "end": 2584,
        "name": "makeObject2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2591,
          "end": 2619,
          "name": "desc",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2595,
            "end": 2619,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2597,
              "end": 2619,
              "typeName": {
                "type": "Identifier",
                "start": 2597,
                "end": 2613,
                "name": "ObjectDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2613,
                "end": 2619,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2614,
                    "end": 2615,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2614,
                      "end": 2615,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2617,
                    "end": 2618,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2617,
                      "end": 2618,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2584,
        "end": 2590,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2585,
            "end": 2586,
            "name": {
              "type": "Identifier",
              "start": 2585,
              "end": 2586,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2588,
            "end": 2589,
            "name": {
              "type": "Identifier",
              "start": 2588,
              "end": 2589,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2620,
        "end": 2627,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2622,
          "end": 2627,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2622,
              "end": 2623,
              "typeName": {
                "type": "Identifier",
                "start": 2622,
                "end": 2623,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2626,
              "end": 2627,
              "typeName": {
                "type": "Identifier",
                "start": 2626,
                "end": 2627,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2630,
      "end": 2854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2634,
          "end": 2853,
          "id": {
            "type": "Identifier",
            "start": 2634,
            "end": 2636,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2639,
            "end": 2853,
            "callee": {
              "type": "Identifier",
              "start": 2639,
              "end": 2650,
              "name": "makeObject2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2651,
                "end": 2852,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2657,
                    "end": 2677,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2657,
                      "end": 2661,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2663,
                      "end": 2677,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2665,
                          "end": 2669,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2665,
                            "end": 2666,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2668,
                            "end": 2669,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2671,
                          "end": 2675,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2671,
                            "end": 2672,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2674,
                            "end": 2675,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2683,
                    "end": 2850,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2683,
                      "end": 2690,
                      "name": "methods",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2692,
                      "end": 2850,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2702,
                          "end": 2844,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2702,
                            "end": 2708,
                            "name": "moveBy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2708,
                            "end": 2844,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2709,
                                "end": 2719,
                                "name": "dx",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2711,
                                  "end": 2719,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2713,
                                    "end": 2719
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2721,
                                "end": 2731,
                                "name": "dy",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2723,
                                  "end": 2731,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2725,
                                    "end": 2731
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 2733,
                              "end": 2844,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2747,
                                  "end": 2760,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2747,
                                    "end": 2759,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2747,
                                      "end": 2753,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2747,
                                        "end": 2751
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2752,
                                        "end": 2753,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2757,
                                      "end": 2759,
                                      "name": "dx",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2797,
                                  "end": 2810,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2797,
                                    "end": 2809,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2797,
                                      "end": 2803,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2797,
                                        "end": 2801
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2802,
                                        "end": 2803,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2807,
                                      "end": 2809,
                                      "name": "dy",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2935,
      "end": 3013,
      "id": {
        "type": "Identifier",
        "start": 2940,
        "end": 2948,
        "name": "PropDesc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2948,
        "end": 2951,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2949,
            "end": 2950,
            "name": {
              "type": "Identifier",
              "start": 2949,
              "end": 2950,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2954,
        "end": 3013,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2960,
            "end": 2970,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2960,
              "end": 2965,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2966,
              "end": 2969,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2968,
                "end": 2969,
                "typeName": {
                  "type": "Identifier",
                  "start": 2968,
                  "end": 2969,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2975,
            "end": 2985,
            "key": {
              "type": "Identifier",
              "start": 2975,
              "end": 2978,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2981,
              "end": 2984,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2983,
                "end": 2984,
                "typeName": {
                  "type": "Identifier",
                  "start": 2983,
                  "end": 2984,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2990,
            "end": 3011,
            "key": {
              "type": "Identifier",
              "start": 2990,
              "end": 2993,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2995,
                "end": 3003,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3000,
                  "end": 3003,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3002,
                    "end": 3003,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3002,
                      "end": 3003,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3004,
              "end": 3010,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3006,
                "end": 3010
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3015,
      "end": 3076,
      "id": {
        "type": "Identifier",
        "start": 3020,
        "end": 3031,
        "name": "PropDescMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3031,
        "end": 3034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3032,
            "end": 3033,
            "name": {
              "type": "Identifier",
              "start": 3032,
              "end": 3033,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3037,
        "end": 3076,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 3044,
          "end": 3056,
          "name": {
            "type": "Identifier",
            "start": 3044,
            "end": 3045,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3049,
            "end": 3056,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3055,
              "end": 3056,
              "typeName": {
                "type": "Identifier",
                "start": 3055,
                "end": 3056,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3059,
          "end": 3073,
          "typeName": {
            "type": "Identifier",
            "start": 3059,
            "end": 3067,
            "name": "PropDesc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3067,
            "end": 3073,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3068,
                "end": 3072,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3068,
                  "end": 3069,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3068,
                    "end": 3069,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3070,
                  "end": 3071,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3070,
                    "end": 3071,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3049,
          "end": 3056,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3055,
            "end": 3056,
            "typeName": {
              "type": "Identifier",
              "start": 3055,
              "end": 3056,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3044,
          "end": 3045,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3078,
      "end": 3198,
      "id": {
        "type": "Identifier",
        "start": 3095,
        "end": 3105,
        "name": "defineProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3130,
          "end": 3136,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3133,
            "end": 3136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3135,
              "end": 3136,
              "typeName": {
                "type": "Identifier",
                "start": 3135,
                "end": 3136,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3138,
          "end": 3145,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3142,
            "end": 3145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3144,
              "end": 3145,
              "typeName": {
                "type": "Identifier",
                "start": 3144,
                "end": 3145,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3147,
          "end": 3178,
          "name": "desc",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3151,
            "end": 3178,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3153,
              "end": 3178,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3153,
                  "end": 3164,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3153,
                    "end": 3161,
                    "name": "PropDesc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3161,
                    "end": 3164,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3162,
                        "end": 3163,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3162,
                          "end": 3163,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3167,
                  "end": 3178,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3167,
                    "end": 3175,
                    "name": "ThisType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3175,
                    "end": 3178,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3176,
                        "end": 3177,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3176,
                          "end": 3177,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3105,
        "end": 3129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3106,
            "end": 3107,
            "name": {
              "type": "Identifier",
              "start": 3106,
              "end": 3107,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3109,
            "end": 3125,
            "name": {
              "type": "Identifier",
              "start": 3109,
              "end": 3110,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3119,
              "end": 3125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3127,
            "end": 3128,
            "name": {
              "type": "Identifier",
              "start": 3127,
              "end": 3128,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3179,
        "end": 3197,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 3181,
          "end": 3197,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3181,
              "end": 3182,
              "typeName": {
                "type": "Identifier",
                "start": 3181,
                "end": 3182,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3185,
              "end": 3197,
              "typeName": {
                "type": "Identifier",
                "start": 3185,
                "end": 3191,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3191,
                "end": 3197,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3192,
                    "end": 3193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3192,
                      "end": 3193,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3195,
                    "end": 3196,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3195,
                      "end": 3196,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3200,
      "end": 3287,
      "id": {
        "type": "Identifier",
        "start": 3217,
        "end": 3228,
        "name": "defineProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3235,
          "end": 3241,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3238,
            "end": 3241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3240,
              "end": 3241,
              "typeName": {
                "type": "Identifier",
                "start": 3240,
                "end": 3241,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3243,
          "end": 3278,
          "name": "descs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3248,
            "end": 3278,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3250,
              "end": 3278,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3250,
                  "end": 3264,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3250,
                    "end": 3261,
                    "name": "PropDescMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3261,
                    "end": 3264,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3262,
                        "end": 3263,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3262,
                          "end": 3263,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3267,
                  "end": 3278,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3267,
                    "end": 3275,
                    "name": "ThisType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3275,
                    "end": 3278,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3276,
                        "end": 3277,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3276,
                          "end": 3277,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3228,
        "end": 3234,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3229,
            "end": 3230,
            "name": {
              "type": "Identifier",
              "start": 3229,
              "end": 3230,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3232,
            "end": 3233,
            "name": {
              "type": "Identifier",
              "start": 3232,
              "end": 3233,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3279,
        "end": 3286,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 3281,
          "end": 3286,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3281,
              "end": 3282,
              "typeName": {
                "type": "Identifier",
                "start": 3281,
                "end": 3282,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3285,
              "end": 3286,
              "typeName": {
                "type": "Identifier",
                "start": 3285,
                "end": 3286,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3289,
      "end": 3336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3293,
          "end": 3335,
          "id": {
            "type": "Identifier",
            "start": 3293,
            "end": 3296,
            "name": "p10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3299,
            "end": 3335,
            "callee": {
              "type": "Identifier",
              "start": 3299,
              "end": 3309,
              "name": "defineProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3310,
                "end": 3312,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3314,
                "end": 3319,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "ObjectExpression",
                "start": 3321,
                "end": 3334,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3323,
                    "end": 3332,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3323,
                      "end": 3328,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3330,
                      "end": 3332,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3337,
      "end": 3359,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3337,
        "end": 3358,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3337,
          "end": 3344,
          "object": {
            "type": "Identifier",
            "start": 3337,
            "end": 3340,
            "name": "p10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3341,
            "end": 3344,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3347,
          "end": 3358,
          "left": {
            "type": "MemberExpression",
            "start": 3347,
            "end": 3354,
            "object": {
              "type": "Identifier",
              "start": 3347,
              "end": 3350,
              "name": "p10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3351,
              "end": 3354,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "start": 3357,
            "end": 3358,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3361,
      "end": 3495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3365,
          "end": 3494,
          "id": {
            "type": "Identifier",
            "start": 3365,
            "end": 3368,
            "name": "p11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3371,
            "end": 3494,
            "callee": {
              "type": "Identifier",
              "start": 3371,
              "end": 3381,
              "name": "defineProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3382,
                "end": 3384,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3386,
                "end": 3391,
                "value": "bar",
                "raw": "\"bar\""
              },
              {
                "type": "ObjectExpression",
                "start": 3393,
                "end": 3493,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3399,
                    "end": 3435,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3399,
                      "end": 3402,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3402,
                      "end": 3435,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 3405,
                        "end": 3435,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3415,
                            "end": 3429,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 3422,
                              "end": 3428,
                              "object": {
                                "type": "ThisExpression",
                                "start": 3422,
                                "end": 3426
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3427,
                                "end": 3428,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3441,
                    "end": 3491,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3441,
                      "end": 3444,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3444,
                      "end": 3491,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3445,
                          "end": 3458,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3450,
                            "end": 3458,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3452,
                              "end": 3458
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 3460,
                        "end": 3491,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3470,
                            "end": 3485,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3470,
                              "end": 3484,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 3470,
                                "end": 3476,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3470,
                                  "end": 3474
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3475,
                                  "end": 3476,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3479,
                                "end": 3484,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3496,
      "end": 3518,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3496,
        "end": 3517,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3496,
          "end": 3503,
          "object": {
            "type": "Identifier",
            "start": 3496,
            "end": 3499,
            "name": "p11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3500,
            "end": 3503,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3506,
          "end": 3517,
          "left": {
            "type": "MemberExpression",
            "start": 3506,
            "end": 3513,
            "object": {
              "type": "Identifier",
              "start": 3506,
              "end": 3509,
              "name": "p11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3510,
              "end": 3513,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "start": 3516,
            "end": 3517,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3520,
      "end": 3733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3524,
          "end": 3732,
          "id": {
            "type": "Identifier",
            "start": 3524,
            "end": 3527,
            "name": "p12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3530,
            "end": 3732,
            "callee": {
              "type": "Identifier",
              "start": 3530,
              "end": 3541,
              "name": "defineProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3542,
                "end": 3544,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 3546,
                "end": 3731,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3552,
                    "end": 3582,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3552,
                      "end": 3555,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3557,
                      "end": 3582,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3567,
                          "end": 3576,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3567,
                            "end": 3572,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3574,
                            "end": 3576,
                            "value": 42,
                            "raw": "42"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3588,
                    "end": 3729,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3588,
                      "end": 3591,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3593,
                      "end": 3729,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3603,
                          "end": 3655,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3603,
                            "end": 3606,
                            "name": "get",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3606,
                            "end": 3655,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 3617,
                              "end": 3655,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3631,
                                  "end": 3645,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 3638,
                                    "end": 3644,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3638,
                                      "end": 3642
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3643,
                                      "end": 3644,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3608,
                              "end": 3616,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3610,
                                "end": 3616
                              }
                            }
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3665,
                          "end": 3723,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3665,
                            "end": 3668,
                            "name": "set",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3668,
                            "end": 3723,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3669,
                                "end": 3682,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3674,
                                  "end": 3682,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 3676,
                                    "end": 3682
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 3684,
                              "end": 3723,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3698,
                                  "end": 3713,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3698,
                                    "end": 3712,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 3698,
                                      "end": 3704,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3698,
                                        "end": 3702
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3703,
                                        "end": 3704,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 3707,
                                      "end": 3712,
                                      "name": "value",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3734,
      "end": 3756,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3734,
        "end": 3755,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3734,
          "end": 3741,
          "object": {
            "type": "Identifier",
            "start": 3734,
            "end": 3737,
            "name": "p12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3738,
            "end": 3741,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3744,
          "end": 3755,
          "left": {
            "type": "MemberExpression",
            "start": 3744,
            "end": 3751,
            "object": {
              "type": "Identifier",
              "start": 3744,
              "end": 3747,
              "name": "p12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3748,
              "end": 3751,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "start": 3754,
            "end": 3755,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3757,
      "end": 3779,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3757,
        "end": 3778,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3757,
          "end": 3764,
          "object": {
            "type": "Identifier",
            "start": 3757,
            "end": 3760,
            "name": "p12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3761,
            "end": 3764,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3767,
          "end": 3778,
          "left": {
            "type": "MemberExpression",
            "start": 3767,
            "end": 3774,
            "object": {
              "type": "Identifier",
              "start": 3767,
              "end": 3770,
              "name": "p12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3771,
              "end": 3774,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "start": 3777,
            "end": 3778,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3823,
      "end": 3893,
      "id": {
        "type": "Identifier",
        "start": 3828,
        "end": 3837,
        "name": "Accessors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3837,
        "end": 3840,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3838,
            "end": 3839,
            "name": {
              "type": "Identifier",
              "start": 3838,
              "end": 3839,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3843,
        "end": 3892,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 3846,
          "end": 3858,
          "name": {
            "type": "Identifier",
            "start": 3846,
            "end": 3847,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3851,
            "end": 3858,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3857,
              "end": 3858,
              "typeName": {
                "type": "Identifier",
                "start": 3857,
                "end": 3858,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 3861,
          "end": 3890,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 3862,
              "end": 3872,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3865,
                "end": 3872,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 3868,
                  "end": 3872,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3868,
                    "end": 3869,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3868,
                      "end": 3869,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3870,
                    "end": 3871,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3870,
                      "end": 3871,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3876,
              "end": 3890,
              "typeName": {
                "type": "Identifier",
                "start": 3876,
                "end": 3884,
                "name": "Computed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3884,
                "end": 3890,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 3885,
                    "end": 3889,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3885,
                      "end": 3886,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3885,
                        "end": 3886,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3887,
                      "end": 3888,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3887,
                        "end": 3888,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3851,
          "end": 3858,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3857,
            "end": 3858,
            "typeName": {
              "type": "Identifier",
              "start": 3857,
              "end": 3858,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3846,
          "end": 3847,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3895,
      "end": 3934,
      "id": {
        "type": "Identifier",
        "start": 3900,
        "end": 3910,
        "name": "Dictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3910,
        "end": 3913,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3911,
            "end": 3912,
            "name": {
              "type": "Identifier",
              "start": 3911,
              "end": 3912,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3916,
        "end": 3934,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 3918,
            "end": 3932,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3919,
                "end": 3928,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3920,
                  "end": 3928,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3922,
                    "end": 3928
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3929,
              "end": 3932,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3931,
                "end": 3932,
                "typeName": {
                  "type": "Identifier",
                  "start": 3931,
                  "end": 3932,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3936,
      "end": 3999,
      "id": {
        "type": "Identifier",
        "start": 3941,
        "end": 3949,
        "name": "Computed",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3949,
        "end": 3952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3950,
            "end": 3951,
            "name": {
              "type": "Identifier",
              "start": 3950,
              "end": 3951,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3955,
        "end": 3999,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 3961,
            "end": 3971,
            "key": {
              "type": "Identifier",
              "start": 3961,
              "end": 3964,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3967,
              "end": 3970,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3969,
                "end": 3970,
                "typeName": {
                  "type": "Identifier",
                  "start": 3969,
                  "end": 3970,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3976,
            "end": 3997,
            "key": {
              "type": "Identifier",
              "start": 3976,
              "end": 3979,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3981,
                "end": 3989,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3986,
                  "end": 3989,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3988,
                    "end": 3989,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3988,
                      "end": 3989,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3990,
              "end": 3996,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3992,
                "end": 3996
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4001,
      "end": 4125,
      "id": {
        "type": "Identifier",
        "start": 4006,
        "end": 4016,
        "name": "VueOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4016,
        "end": 4025,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4017,
            "end": 4018,
            "name": {
              "type": "Identifier",
              "start": 4017,
              "end": 4018,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4020,
            "end": 4021,
            "name": {
              "type": "Identifier",
              "start": 4020,
              "end": 4021,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4023,
            "end": 4024,
            "name": {
              "type": "Identifier",
              "start": 4023,
              "end": 4024,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 4028,
        "end": 4125,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4028,
            "end": 4047,
            "typeName": {
              "type": "Identifier",
              "start": 4028,
              "end": 4036,
              "name": "ThisType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 4036,
              "end": 4047,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 4037,
                  "end": 4046,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 4037,
                      "end": 4038,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4037,
                        "end": 4038,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4041,
                      "end": 4042,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4041,
                        "end": 4042,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4045,
                      "end": 4046,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4045,
                        "end": 4046,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 4050,
            "end": 4125,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4056,
                "end": 4077,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4056,
                  "end": 4060,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4061,
                  "end": 4076,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 4063,
                    "end": 4076,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 4063,
                        "end": 4064,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4063,
                          "end": 4064,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSFunctionType",
                        "start": 4068,
                        "end": 4075,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4071,
                          "end": 4075,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4074,
                            "end": 4075,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4074,
                              "end": 4075,
                              "name": "D",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 4082,
                "end": 4094,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4082,
                  "end": 4089,
                  "name": "methods",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4090,
                  "end": 4093,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4092,
                    "end": 4093,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4092,
                      "end": 4093,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 4099,
                "end": 4123,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4099,
                  "end": 4107,
                  "name": "computed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4108,
                  "end": 4122,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4110,
                    "end": 4122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4110,
                      "end": 4119,
                      "name": "Accessors",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4119,
                      "end": 4122,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4120,
                          "end": 4121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4120,
                            "end": 4121,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4127,
      "end": 4203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4141,
          "end": 4202,
          "id": {
            "type": "Identifier",
            "start": 4141,
            "end": 4202,
            "name": "Vue",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4144,
              "end": 4202,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4146,
                "end": 4202,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4150,
                  "end": 4159,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4151,
                      "end": 4152,
                      "name": {
                        "type": "Identifier",
                        "start": 4151,
                        "end": 4152,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4154,
                      "end": 4155,
                      "name": {
                        "type": "Identifier",
                        "start": 4154,
                        "end": 4155,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4157,
                      "end": 4158,
                      "name": {
                        "type": "Identifier",
                        "start": 4157,
                        "end": 4158,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4160,
                    "end": 4188,
                    "name": "options",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4167,
                      "end": 4188,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4169,
                        "end": 4188,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4169,
                          "end": 4179,
                          "name": "VueOptions",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4179,
                          "end": 4188,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4180,
                              "end": 4181,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4180,
                                "end": 4181,
                                "name": "D",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 4183,
                              "end": 4184,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4183,
                                "end": 4184,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 4186,
                              "end": 4187,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4186,
                                "end": 4187,
                                "name": "P",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4190,
                  "end": 4202,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 4193,
                    "end": 4202,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 4193,
                        "end": 4194,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4193,
                          "end": 4194,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4197,
                        "end": 4198,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4197,
                          "end": 4198,
                          "name": "M",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4201,
                        "end": 4202,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4201,
                          "end": 4202,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4205,
      "end": 4567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4209,
          "end": 4566,
          "id": {
            "type": "Identifier",
            "start": 4209,
            "end": 4212,
            "name": "vue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 4215,
            "end": 4566,
            "callee": {
              "type": "Identifier",
              "start": 4219,
              "end": 4222,
              "name": "Vue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4223,
                "end": 4565,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4229,
                    "end": 4257,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4229,
                      "end": 4233,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4235,
                      "end": 4257,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ObjectExpression",
                        "start": 4242,
                        "end": 4256,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 4244,
                            "end": 4248,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4244,
                              "end": 4245,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 4247,
                              "end": 4248,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 4250,
                            "end": 4254,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4250,
                              "end": 4251,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 4253,
                              "end": 4254,
                              "value": 2,
                              "raw": "2"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4263,
                    "end": 4339,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4263,
                      "end": 4270,
                      "name": "methods",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4272,
                      "end": 4339,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4282,
                          "end": 4333,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4282,
                            "end": 4283,
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 4283,
                            "end": 4333,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4284,
                                "end": 4293,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4285,
                                  "end": 4293,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 4287,
                                    "end": 4293
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 4295,
                              "end": 4333,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 4309,
                                  "end": 4323,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 4316,
                                    "end": 4322,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4316,
                                      "end": 4320
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4321,
                                      "end": 4322,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4345,
                    "end": 4563,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4345,
                      "end": 4353,
                      "name": "computed",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4355,
                      "end": 4563,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4365,
                          "end": 4418,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4365,
                            "end": 4369,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 4369,
                            "end": 4418,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 4380,
                              "end": 4418,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 4394,
                                  "end": 4408,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 4401,
                                    "end": 4407,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4401,
                                      "end": 4405
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4406,
                                      "end": 4407,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4371,
                              "end": 4379,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4373,
                                "end": 4379
                              }
                            }
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4428,
                          "end": 4557,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4428,
                            "end": 4433,
                            "name": "hello",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 4435,
                            "end": 4557,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4449,
                                "end": 4499,
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4449,
                                  "end": 4452,
                                  "name": "get",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4452,
                                  "end": 4499,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4455,
                                    "end": 4499,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 4473,
                                        "end": 4485,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 4480,
                                          "end": 4484,
                                          "value": "hi",
                                          "raw": "\"hi\""
                                        }
                                      }
                                    ]
                                  },
                                  "declare": false,
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 4513,
                                "end": 4547,
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4513,
                                  "end": 4516,
                                  "name": "set",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4516,
                                  "end": 4547,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 4517,
                                      "end": 4530,
                                      "name": "value",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 4522,
                                        "end": 4530,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 4524,
                                          "end": 4530
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4532,
                                    "end": 4547,
                                    "body": []
                                  },
                                  "declare": false,
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4569,
      "end": 4573,
      "expression": {
        "type": "Identifier",
        "start": 4569,
        "end": 4572,
        "name": "vue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4574,
      "end": 4580,
      "expression": {
        "type": "MemberExpression",
        "start": 4574,
        "end": 4579,
        "object": {
          "type": "Identifier",
          "start": 4574,
          "end": 4577,
          "name": "vue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 4578,
          "end": 4579,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4581,
      "end": 4594,
      "expression": {
        "type": "CallExpression",
        "start": 4581,
        "end": 4593,
        "callee": {
          "type": "MemberExpression",
          "start": 4581,
          "end": 4586,
          "object": {
            "type": "Identifier",
            "start": 4581,
            "end": 4584,
            "name": "vue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4585,
            "end": 4586,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 4587,
            "end": 4592,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4595,
      "end": 4604,
      "expression": {
        "type": "MemberExpression",
        "start": 4595,
        "end": 4603,
        "object": {
          "type": "Identifier",
          "start": 4595,
          "end": 4598,
          "name": "vue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 4599,
          "end": 4603,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4605,
      "end": 4615,
      "expression": {
        "type": "MemberExpression",
        "start": 4605,
        "end": 4614,
        "object": {
          "type": "Identifier",
          "start": 4605,
          "end": 4608,
          "name": "vue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 4609,
          "end": 4614,
          "name": "hello",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
