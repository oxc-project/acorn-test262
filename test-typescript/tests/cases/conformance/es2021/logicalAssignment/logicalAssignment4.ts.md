__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1058,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
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
          "start": 14,
          "end": 43,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 43,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 23,
              "end": 43,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 23,
                  "end": 31,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 34,
                  "end": 43
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 80,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 51,
            "end": 78,
            "expression": {
              "type": "CallExpression",
              "start": 51,
              "end": 77,
              "callee": {
                "type": "MemberExpression",
                "start": 51,
                "end": 72,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 52,
                  "end": 66,
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 59,
                    "name": "results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 64,
                    "end": 66,
                    "elements": []
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 72,
                  "name": "push",
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
                  "start": 73,
                  "end": 76,
                  "value": 100,
                  "raw": "100"
                }
              ],
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
    {
      "type": "FunctionDeclaration",
      "start": 82,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 95,
        "name": "foo2",
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
          "start": 96,
          "end": 125,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 125,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 105,
              "end": 125,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 105,
                  "end": 113,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 116,
                  "end": 125
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 162,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 160,
            "expression": {
              "type": "CallExpression",
              "start": 133,
              "end": 159,
              "callee": {
                "type": "MemberExpression",
                "start": 133,
                "end": 154,
                "object": {
                  "type": "AssignmentExpression",
                  "start": 134,
                  "end": 148,
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 141,
                    "name": "results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 146,
                    "end": 148,
                    "elements": []
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "name": "push",
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
                  "start": 155,
                  "end": 158,
                  "value": 100,
                  "raw": "100"
                }
              ],
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
    {
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 177,
        "name": "foo3",
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
          "start": 178,
          "end": 207,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 207,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 187,
              "end": 207,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 187,
                  "end": 195,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 198,
                  "end": 207
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 255,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 215,
            "end": 230,
            "expression": {
              "type": "AssignmentExpression",
              "start": 215,
              "end": 229,
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "name": "results",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 227,
                "end": 229,
                "elements": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 235,
            "end": 253,
            "expression": {
              "type": "CallExpression",
              "start": 235,
              "end": 252,
              "callee": {
                "type": "MemberExpression",
                "start": 235,
                "end": 247,
                "object": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 242,
                  "name": "results",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 247,
                  "name": "push",
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
                  "start": 248,
                  "end": 251,
                  "value": 100,
                  "raw": "100"
                }
              ],
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
    {
      "type": "FunctionDeclaration",
      "start": 257,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 270,
        "name": "foo4",
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
          "start": 271,
          "end": 300,
          "name": "results",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 278,
            "end": 300,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 280,
              "end": 300,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 280,
                  "end": 288,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 291,
                  "end": 300
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 302,
        "end": 348,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 323,
            "expression": {
              "type": "AssignmentExpression",
              "start": 308,
              "end": 322,
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "start": 308,
                "end": 315,
                "name": "results",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 320,
                "end": 322,
                "elements": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 346,
            "expression": {
              "type": "CallExpression",
              "start": 328,
              "end": 345,
              "callee": {
                "type": "MemberExpression",
                "start": 328,
                "end": 340,
                "object": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 335,
                  "name": "results",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 340,
                  "name": "push",
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
                  "start": 341,
                  "end": 344,
                  "value": 100,
                  "raw": "100"
                }
              ],
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 350,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 377,
        "name": "ThingWithOriginal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 378,
        "end": 432,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 384,
            "end": 397,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 388,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 396,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 402,
            "end": 430,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 410,
              "name": "original",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 430,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 413,
                "end": 430,
                "typeName": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 430,
                  "name": "ThingWithOriginal",
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 456,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 448,
              "end": 456,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 450,
                "end": 456
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
      "type": "FunctionDeclaration",
      "start": 457,
      "end": 1057,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 486,
        "name": "doSomethingWithAlias",
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
          "start": 487,
          "end": 523,
          "name": "thing",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 523,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 494,
              "end": 523,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 494,
                  "end": 511,
                  "typeName": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 511,
                    "name": "ThingWithOriginal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 514,
                  "end": 523
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 525,
          "end": 568,
          "name": "defaultValue",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 568,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 539,
              "end": 568,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 539,
                  "end": 556,
                  "typeName": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 556,
                    "name": "ThingWithOriginal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 559,
                  "end": 568
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 570,
        "end": 1057,
        "body": [
          {
            "type": "IfStatement",
            "start": 576,
            "end": 1055,
            "test": {
              "type": "BinaryExpression",
              "start": 580,
              "end": 587,
              "left": {
                "type": "Identifier",
                "start": 580,
                "end": 581,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 586,
                "end": 587,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 589,
              "end": 670,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 599,
                  "end": 664,
                  "test": {
                    "type": "AssignmentExpression",
                    "start": 603,
                    "end": 627,
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 608,
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 613,
                      "end": 627,
                      "object": {
                        "type": "Identifier",
                        "start": 613,
                        "end": 618,
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 619,
                        "end": 627,
                        "name": "original",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 629,
                    "end": 664,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 643,
                        "end": 654,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 643,
                          "end": 653,
                          "object": {
                            "type": "Identifier",
                            "start": 643,
                            "end": 648,
                            "name": "thing",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 649,
                            "end": 653,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 680,
              "end": 1055,
              "test": {
                "type": "BinaryExpression",
                "start": 684,
                "end": 691,
                "left": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 685,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 690,
                  "end": 691,
                  "value": 2,
                  "raw": "2"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 693,
                "end": 802,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 703,
                    "end": 796,
                    "test": {
                      "type": "AssignmentExpression",
                      "start": 707,
                      "end": 729,
                      "operator": "&&=",
                      "left": {
                        "type": "Identifier",
                        "start": 707,
                        "end": 712,
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 729,
                        "name": "defaultValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 731,
                      "end": 796,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 745,
                          "end": 756,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 745,
                            "end": 755,
                            "object": {
                              "type": "Identifier",
                              "start": 745,
                              "end": 750,
                              "name": "thing",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 755,
                              "name": "name",
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
                          "start": 769,
                          "end": 786,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 769,
                            "end": 786,
                            "object": {
                              "type": "Identifier",
                              "start": 769,
                              "end": 781,
                              "name": "defaultValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 782,
                              "end": 786,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 812,
                "end": 1055,
                "test": {
                  "type": "BinaryExpression",
                  "start": 816,
                  "end": 823,
                  "left": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 817,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 822,
                    "end": 823,
                    "value": 3,
                    "raw": "3"
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 825,
                  "end": 935,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 835,
                      "end": 929,
                      "test": {
                        "type": "AssignmentExpression",
                        "start": 839,
                        "end": 861,
                        "operator": "||=",
                        "left": {
                          "type": "Identifier",
                          "start": 839,
                          "end": 844,
                          "name": "thing",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 849,
                          "end": 861,
                          "name": "defaultValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 863,
                        "end": 929,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 877,
                            "end": 888,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 877,
                              "end": 887,
                              "object": {
                                "type": "Identifier",
                                "start": 877,
                                "end": 882,
                                "name": "thing",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 883,
                                "end": 887,
                                "name": "name",
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
                            "start": 901,
                            "end": 919,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 901,
                              "end": 918,
                              "object": {
                                "type": "Identifier",
                                "start": 901,
                                "end": 913,
                                "name": "defaultValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 914,
                                "end": 918,
                                "name": "name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                },
                "alternate": {
                  "type": "BlockStatement",
                  "start": 945,
                  "end": 1055,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 955,
                      "end": 1049,
                      "test": {
                        "type": "AssignmentExpression",
                        "start": 959,
                        "end": 981,
                        "operator": "??=",
                        "left": {
                          "type": "Identifier",
                          "start": 959,
                          "end": 964,
                          "name": "thing",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 969,
                          "end": 981,
                          "name": "defaultValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 983,
                        "end": 1049,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 997,
                            "end": 1008,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 997,
                              "end": 1007,
                              "object": {
                                "type": "Identifier",
                                "start": 997,
                                "end": 1002,
                                "name": "thing",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1003,
                                "end": 1007,
                                "name": "name",
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
                            "start": 1021,
                            "end": 1039,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1021,
                              "end": 1038,
                              "object": {
                                "type": "Identifier",
                                "start": 1021,
                                "end": 1033,
                                "name": "defaultValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1034,
                                "end": 1038,
                                "name": "name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
