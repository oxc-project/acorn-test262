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
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  "start": 23,
                  "end": 31
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 34,
                  "end": 43
                }
              ],
              "start": 23,
              "end": 43
            },
            "start": 21,
            "end": 43
          },
          "start": 14,
          "end": 43
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
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 59
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 64,
                    "end": 66
                  },
                  "start": 52,
                  "end": 66
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 72
                },
                "optional": false,
                "computed": false,
                "start": 51,
                "end": 72
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 73,
                  "end": 76
                }
              ],
              "optional": false,
              "start": 51,
              "end": 77
            },
            "directive": null,
            "start": 51,
            "end": 78
          }
        ],
        "start": 45,
        "end": 80
      },
      "expression": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  },
                  "start": 105,
                  "end": 113
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 116,
                  "end": 125
                }
              ],
              "start": 105,
              "end": 125
            },
            "start": 103,
            "end": 125
          },
          "start": 96,
          "end": 125
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
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 141
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 146,
                    "end": 148
                  },
                  "start": 134,
                  "end": 148
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 154
                },
                "optional": false,
                "computed": false,
                "start": 133,
                "end": 154
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 155,
                  "end": 158
                }
              ],
              "optional": false,
              "start": 133,
              "end": 159
            },
            "directive": null,
            "start": 133,
            "end": 160
          }
        ],
        "start": 127,
        "end": 162
      },
      "expression": false,
      "start": 82,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 177
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  },
                  "start": 187,
                  "end": 195
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 198,
                  "end": 207
                }
              ],
              "start": 187,
              "end": 207
            },
            "start": 185,
            "end": 207
          },
          "start": 178,
          "end": 207
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 227,
                "end": 229
              },
              "start": 215,
              "end": 229
            },
            "directive": null,
            "start": 215,
            "end": 230
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
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 247
                },
                "optional": false,
                "computed": false,
                "start": 235,
                "end": 247
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 248,
                  "end": 251
                }
              ],
              "optional": false,
              "start": 235,
              "end": 252
            },
            "directive": null,
            "start": 235,
            "end": 253
          }
        ],
        "start": 209,
        "end": 255
      },
      "expression": false,
      "start": 164,
      "end": 255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 270
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  },
                  "start": 280,
                  "end": 288
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 291,
                  "end": 300
                }
              ],
              "start": 280,
              "end": 300
            },
            "start": 278,
            "end": 300
          },
          "start": 271,
          "end": 300
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 315
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 320,
                "end": 322
              },
              "start": 308,
              "end": 322
            },
            "directive": null,
            "start": 308,
            "end": 323
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
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 340
                },
                "optional": false,
                "computed": false,
                "start": 328,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 341,
                  "end": 344
                }
              ],
              "optional": false,
              "start": 328,
              "end": 345
            },
            "directive": null,
            "start": 328,
            "end": 346
          }
        ],
        "start": 302,
        "end": 348
      },
      "expression": false,
      "start": 257,
      "end": 348
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThingWithOriginal",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 377
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 384,
            "end": 397
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "original",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 410
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThingWithOriginal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 430
                },
                "typeArguments": null,
                "start": 413,
                "end": 430
              },
              "start": 411,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 402,
            "end": 430
          }
        ],
        "start": 378,
        "end": 432
      },
      "declare": false,
      "start": 350,
      "end": 432
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 450,
                "end": 456
              },
              "start": 448,
              "end": 456
            },
            "start": 447,
            "end": 456
          },
          "init": null,
          "definite": false,
          "start": 447,
          "end": 456
        }
      ],
      "declare": true,
      "start": 433,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomethingWithAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 486
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingWithOriginal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 511
                  },
                  "typeArguments": null,
                  "start": 494,
                  "end": 511
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 514,
                  "end": 523
                }
              ],
              "start": 494,
              "end": 523
            },
            "start": 492,
            "end": 523
          },
          "start": 487,
          "end": 523
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultValue",
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
                    "name": "ThingWithOriginal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 556
                  },
                  "typeArguments": null,
                  "start": 539,
                  "end": 556
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 559,
                  "end": 568
                }
              ],
              "start": 539,
              "end": 568
            },
            "start": 537,
            "end": 568
          },
          "start": 525,
          "end": 568
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 586,
                "end": 587
              },
              "start": 580,
              "end": 587
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "AssignmentExpression",
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 608
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 613,
                        "end": 618
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "original",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 619,
                        "end": 627
                      },
                      "optional": false,
                      "computed": false,
                      "start": 613,
                      "end": 627
                    },
                    "start": 603,
                    "end": 627
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 648
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 649,
                            "end": 653
                          },
                          "optional": false,
                          "computed": false,
                          "start": 643,
                          "end": 653
                        },
                        "directive": null,
                        "start": 643,
                        "end": 654
                      }
                    ],
                    "start": 629,
                    "end": 664
                  },
                  "alternate": null,
                  "start": 599,
                  "end": 664
                }
              ],
              "start": 589,
              "end": 670
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 685
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 690,
                  "end": 691
                },
                "start": 684,
                "end": 691
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 712
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 729
                      },
                      "start": 707,
                      "end": 729
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 745,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 755
                            },
                            "optional": false,
                            "computed": false,
                            "start": 745,
                            "end": 755
                          },
                          "directive": null,
                          "start": 745,
                          "end": 756
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defaultValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 781
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 786
                            },
                            "optional": false,
                            "computed": false,
                            "start": 769,
                            "end": 786
                          },
                          "directive": null,
                          "start": 769,
                          "end": 786
                        }
                      ],
                      "start": 731,
                      "end": 796
                    },
                    "alternate": null,
                    "start": 703,
                    "end": 796
                  }
                ],
                "start": 693,
                "end": 802
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 817
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 822,
                    "end": 823
                  },
                  "start": 816,
                  "end": 823
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "||=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 839,
                          "end": 844
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "defaultValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 849,
                          "end": 861
                        },
                        "start": 839,
                        "end": 861
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 877,
                                "end": 882
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 883,
                                "end": 887
                              },
                              "optional": false,
                              "computed": false,
                              "start": 877,
                              "end": 887
                            },
                            "directive": null,
                            "start": 877,
                            "end": 888
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "defaultValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 901,
                                "end": 913
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 914,
                                "end": 918
                              },
                              "optional": false,
                              "computed": false,
                              "start": 901,
                              "end": 918
                            },
                            "directive": null,
                            "start": 901,
                            "end": 919
                          }
                        ],
                        "start": 863,
                        "end": 929
                      },
                      "alternate": null,
                      "start": 835,
                      "end": 929
                    }
                  ],
                  "start": 825,
                  "end": 935
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "??=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 959,
                          "end": 964
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "defaultValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 969,
                          "end": 981
                        },
                        "start": 959,
                        "end": 981
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 997,
                                "end": 1002
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1003,
                                "end": 1007
                              },
                              "optional": false,
                              "computed": false,
                              "start": 997,
                              "end": 1007
                            },
                            "directive": null,
                            "start": 997,
                            "end": 1008
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "defaultValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1021,
                                "end": 1033
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1034,
                                "end": 1038
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1021,
                              "end": 1038
                            },
                            "directive": null,
                            "start": 1021,
                            "end": 1039
                          }
                        ],
                        "start": 983,
                        "end": 1049
                      },
                      "alternate": null,
                      "start": 955,
                      "end": 1049
                    }
                  ],
                  "start": 945,
                  "end": 1055
                },
                "start": 812,
                "end": 1055
              },
              "start": 680,
              "end": 1055
            },
            "start": 576,
            "end": 1055
          }
        ],
        "start": 570,
        "end": 1057
      },
      "expression": false,
      "start": 457,
      "end": 1057
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1057
}
```
