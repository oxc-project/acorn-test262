__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1826,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 223,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 6,
          "end": 39,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 12,
              "end": 38,
              "id": {
                "type": "Identifier",
                "start": 12,
                "end": 16,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 20,
                "end": 38,
                "properties": [
                  {
                    "type": "Property",
                    "start": 22,
                    "end": 36,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 27,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 29,
                      "end": 36,
                      "value": "value",
                      "raw": "'value'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 45,
          "end": 137,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 51,
              "end": 136,
              "id": {
                "type": "ObjectPattern",
                "start": 51,
                "end": 129,
                "properties": [
                  {
                    "type": "Property",
                    "start": 61,
                    "end": 122,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 66,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 61,
                      "end": 122,
                      "left": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 66,
                        "name": "param",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 69,
                        "end": 122,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 70,
                          "end": 119,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 76,
                            "end": 119,
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "start": 78,
                                "end": 117,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 84,
                                  "end": 117,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 88,
                                    "end": 93,
                                    "name": "Error",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 94,
                                      "end": 116,
                                      "value": "param is not defined",
                                      "raw": "'param is not defined'"
                                    }
                                  ],
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 147,
          "end": 166,
          "expression": {
            "type": "CallExpression",
            "start": 147,
            "end": 165,
            "callee": {
              "type": "MemberExpression",
              "start": 147,
              "end": 158,
              "object": {
                "type": "Identifier",
                "start": 147,
                "end": 154,
                "name": "console",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "name": "log",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 159,
                "end": 164,
                "name": "param",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 226,
      "end": 440,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 232,
          "end": 265,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 238,
              "end": 264,
              "id": {
                "type": "Identifier",
                "start": 238,
                "end": 242,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 246,
                "end": 264,
                "properties": [
                  {
                    "type": "Property",
                    "start": 248,
                    "end": 262,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 253,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 255,
                      "end": 262,
                      "value": "value",
                      "raw": "'value'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 271,
          "end": 304,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 275,
              "end": 303,
              "id": {
                "type": "Identifier",
                "start": 275,
                "end": 298,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 278,
                  "end": 298,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 280,
                    "end": 298,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 301,
                "end": 303,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 309,
          "end": 401,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 315,
              "end": 400,
              "id": {
                "type": "ObjectPattern",
                "start": 315,
                "end": 393,
                "properties": [
                  {
                    "type": "Property",
                    "start": 325,
                    "end": 386,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 330,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 325,
                      "end": 386,
                      "left": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 330,
                        "name": "param",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 333,
                        "end": 386,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 334,
                          "end": 383,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 340,
                            "end": 383,
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "start": 342,
                                "end": 381,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 348,
                                  "end": 381,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 352,
                                    "end": 357,
                                    "name": "Error",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 358,
                                      "end": 380,
                                      "value": "param is not defined",
                                      "raw": "'param is not defined'"
                                    }
                                  ],
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 396,
                "end": 400,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 411,
          "end": 415,
          "expression": {
            "type": "Identifier",
            "start": 411,
            "end": 414,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 442,
      "end": 642,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 448,
          "end": 481,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 454,
              "end": 480,
              "id": {
                "type": "Identifier",
                "start": 454,
                "end": 458,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 462,
                "end": 480,
                "properties": [
                  {
                    "type": "Property",
                    "start": 464,
                    "end": 478,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 469,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 471,
                      "end": 478,
                      "value": "value",
                      "raw": "'value'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 487,
          "end": 520,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 491,
              "end": 519,
              "id": {
                "type": "Identifier",
                "start": 491,
                "end": 514,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 494,
                  "end": 514,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 496,
                    "end": 514,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 517,
                "end": 519,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 525,
          "end": 593,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 531,
              "end": 592,
              "id": {
                "type": "ObjectPattern",
                "start": 531,
                "end": 585,
                "properties": [
                  {
                    "type": "Property",
                    "start": 541,
                    "end": 578,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 546,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 541,
                      "end": 578,
                      "left": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 546,
                        "name": "param",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 549,
                        "end": 578,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 550,
                          "end": 575,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 556,
                            "end": 575,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 558,
                                "end": 573,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 558,
                                  "end": 573,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 558,
                                    "end": 561,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 564,
                                    "end": 573,
                                    "name": "undefined",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 588,
                "end": 592,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 603,
          "end": 607,
          "expression": {
            "type": "Identifier",
            "start": 603,
            "end": 606,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 644,
      "end": 830,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 650,
          "end": 683,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 656,
              "end": 682,
              "id": {
                "type": "Identifier",
                "start": 656,
                "end": 660,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 664,
                "end": 682,
                "properties": [
                  {
                    "type": "Property",
                    "start": 666,
                    "end": 680,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 671,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 673,
                      "end": 680,
                      "value": "value",
                      "raw": "'value'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 689,
          "end": 722,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 693,
              "end": 721,
              "id": {
                "type": "Identifier",
                "start": 693,
                "end": 716,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 696,
                  "end": 716,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 698,
                    "end": 716,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 719,
                "end": 721,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 727,
          "end": 793,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 733,
              "end": 792,
              "id": {
                "type": "ObjectPattern",
                "start": 733,
                "end": 785,
                "properties": [
                  {
                    "type": "Property",
                    "start": 743,
                    "end": 778,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 748,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 743,
                      "end": 778,
                      "left": {
                        "type": "Identifier",
                        "start": 743,
                        "end": 748,
                        "name": "param",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 751,
                        "end": 778,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 752,
                          "end": 775,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 758,
                            "end": 775,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 760,
                                "end": 773,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 767,
                                  "end": 773,
                                  "left": {
                                    "type": "Literal",
                                    "start": 767,
                                    "end": 769,
                                    "value": "",
                                    "raw": "\"\""
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "start": 772,
                                    "end": 773,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 788,
                "end": 792,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 803,
          "end": 807,
          "expression": {
            "type": "Identifier",
            "start": 803,
            "end": 806,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 832,
      "end": 1147,
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "start": 838,
          "end": 886,
          "id": {
            "type": "Identifier",
            "start": 848,
            "end": 854,
            "name": "Window",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "extends": [],
          "typeParameters": null,
          "body": {
            "type": "TSInterfaceBody",
            "start": 855,
            "end": 886,
            "body": [
              {
                "type": "TSPropertySignature",
                "start": 865,
                "end": 880,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 871,
                  "name": "window",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 871,
                  "end": 879,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 873,
                    "end": 879,
                    "typeName": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 879,
                      "name": "Window",
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
          "start": 892,
          "end": 920,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 896,
              "end": 919,
              "id": {
                "type": "Identifier",
                "start": 896,
                "end": 919,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 899,
                  "end": 919,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 901,
                    "end": 919,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 925,
          "end": 951,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 929,
              "end": 950,
              "id": {
                "type": "Identifier",
                "start": 929,
                "end": 935,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "TSAsExpression",
                "start": 938,
                "end": 950,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 938,
                  "end": 940,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 944,
                  "end": 950,
                  "typeName": {
                    "type": "Identifier",
                    "start": 944,
                    "end": 950,
                    "name": "Window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 956,
          "end": 979,
          "expression": {
            "type": "AssignmentExpression",
            "start": 956,
            "end": 978,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 956,
              "end": 969,
              "object": {
                "type": "Identifier",
                "start": 956,
                "end": 962,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 963,
                "end": 969,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 972,
              "end": 978,
              "name": "window",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 985,
          "end": 1114,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 991,
              "end": 1113,
              "id": {
                "type": "ObjectPattern",
                "start": 991,
                "end": 1104,
                "properties": [
                  {
                    "type": "Property",
                    "start": 993,
                    "end": 1102,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 994,
                      "end": 1042,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 995,
                        "end": 1039,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1001,
                          "end": 1039,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1003,
                              "end": 1012,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1003,
                                "end": 1011,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 1003,
                                  "end": 1006,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 1009,
                                  "end": 1011,
                                  "value": "",
                                  "raw": "\"\""
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ReturnStatement",
                              "start": 1013,
                              "end": 1037,
                              "argument": {
                                "type": "TSAsExpression",
                                "start": 1020,
                                "end": 1037,
                                "expression": {
                                  "type": "Literal",
                                  "start": 1020,
                                  "end": 1028,
                                  "value": "window",
                                  "raw": "'window'"
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1032,
                                  "end": 1037,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1032,
                                    "end": 1037,
                                    "name": "const",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1053,
                      "end": 1102,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1055,
                          "end": 1100,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "CallExpression",
                            "start": 1056,
                            "end": 1094,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1057,
                              "end": 1091,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1063,
                                "end": 1091,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1065,
                                    "end": 1089,
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "start": 1072,
                                      "end": 1089,
                                      "expression": {
                                        "type": "Literal",
                                        "start": 1072,
                                        "end": 1080,
                                        "value": "window",
                                        "raw": "'window'"
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1084,
                                        "end": 1089,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1084,
                                          "end": 1089,
                                          "name": "const",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1097,
                            "end": 1100,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 1107,
                "end": 1113,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1120,
          "end": 1124,
          "expression": {
            "type": "Identifier",
            "start": 1120,
            "end": 1123,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1149,
      "end": 1465,
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "start": 1155,
          "end": 1203,
          "id": {
            "type": "Identifier",
            "start": 1165,
            "end": 1171,
            "name": "Window",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "extends": [],
          "typeParameters": null,
          "body": {
            "type": "TSInterfaceBody",
            "start": 1172,
            "end": 1203,
            "body": [
              {
                "type": "TSPropertySignature",
                "start": 1182,
                "end": 1197,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1188,
                  "name": "window",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1188,
                  "end": 1196,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1190,
                    "end": 1196,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1190,
                      "end": 1196,
                      "name": "Window",
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
          "start": 1209,
          "end": 1237,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1213,
              "end": 1236,
              "id": {
                "type": "Identifier",
                "start": 1213,
                "end": 1236,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1216,
                  "end": 1236,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1218,
                    "end": 1236,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1242,
          "end": 1268,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1246,
              "end": 1267,
              "id": {
                "type": "Identifier",
                "start": 1246,
                "end": 1252,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "TSAsExpression",
                "start": 1255,
                "end": 1267,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1255,
                  "end": 1257,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1261,
                  "end": 1267,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1261,
                    "end": 1267,
                    "name": "Window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1273,
          "end": 1296,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1273,
            "end": 1295,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 1273,
              "end": 1286,
              "object": {
                "type": "Identifier",
                "start": 1273,
                "end": 1279,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1280,
                "end": 1286,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1289,
              "end": 1295,
              "name": "window",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1302,
          "end": 1432,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1308,
              "end": 1431,
              "id": {
                "type": "ObjectPattern",
                "start": 1308,
                "end": 1422,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1310,
                    "end": 1420,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 1311,
                      "end": 1350,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1312,
                        "end": 1347,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1318,
                          "end": 1347,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1321,
                              "end": 1345,
                              "argument": {
                                "type": "TSAsExpression",
                                "start": 1328,
                                "end": 1345,
                                "expression": {
                                  "type": "Literal",
                                  "start": 1328,
                                  "end": 1336,
                                  "value": "window",
                                  "raw": "'window'"
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1340,
                                  "end": 1345,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1340,
                                    "end": 1345,
                                    "name": "const",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1361,
                      "end": 1420,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1363,
                          "end": 1418,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "CallExpression",
                            "start": 1364,
                            "end": 1412,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1365,
                              "end": 1409,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1371,
                                "end": 1409,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1373,
                                    "end": 1382,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 1373,
                                      "end": 1381,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1373,
                                        "end": 1376,
                                        "name": "foo",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 1379,
                                        "end": 1381,
                                        "value": "",
                                        "raw": "\"\""
                                      }
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1383,
                                    "end": 1407,
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "start": 1390,
                                      "end": 1407,
                                      "expression": {
                                        "type": "Literal",
                                        "start": 1390,
                                        "end": 1398,
                                        "value": "window",
                                        "raw": "'window'"
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1402,
                                        "end": 1407,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1402,
                                          "end": 1407,
                                          "name": "const",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1415,
                            "end": 1418,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 1425,
                "end": 1431,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1438,
          "end": 1442,
          "expression": {
            "type": "Identifier",
            "start": 1438,
            "end": 1441,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1467,
      "end": 1825,
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "start": 1473,
          "end": 1521,
          "id": {
            "type": "Identifier",
            "start": 1483,
            "end": 1489,
            "name": "Window",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "extends": [],
          "typeParameters": null,
          "body": {
            "type": "TSInterfaceBody",
            "start": 1490,
            "end": 1521,
            "body": [
              {
                "type": "TSPropertySignature",
                "start": 1500,
                "end": 1515,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1500,
                  "end": 1506,
                  "name": "window",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1506,
                  "end": 1514,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1508,
                    "end": 1514,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1514,
                      "name": "Window",
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
          "start": 1527,
          "end": 1555,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1531,
              "end": 1554,
              "id": {
                "type": "Identifier",
                "start": 1531,
                "end": 1554,
                "name": "foo",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1534,
                  "end": 1554,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1536,
                    "end": 1554,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1560,
          "end": 1586,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1564,
              "end": 1585,
              "id": {
                "type": "Identifier",
                "start": 1564,
                "end": 1570,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "TSAsExpression",
                "start": 1573,
                "end": 1585,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1573,
                  "end": 1575,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1579,
                  "end": 1585,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1579,
                    "end": 1585,
                    "name": "Window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1591,
          "end": 1614,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1591,
            "end": 1613,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 1591,
              "end": 1604,
              "object": {
                "type": "Identifier",
                "start": 1591,
                "end": 1597,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1598,
                "end": 1604,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1607,
              "end": 1613,
              "name": "window",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1620,
          "end": 1780,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1626,
              "end": 1779,
              "id": {
                "type": "ObjectPattern",
                "start": 1626,
                "end": 1770,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1628,
                    "end": 1768,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 1629,
                      "end": 1667,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1630,
                        "end": 1664,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1636,
                          "end": 1664,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1638,
                              "end": 1662,
                              "argument": {
                                "type": "TSAsExpression",
                                "start": 1645,
                                "end": 1662,
                                "expression": {
                                  "type": "Literal",
                                  "start": 1645,
                                  "end": 1653,
                                  "value": "window",
                                  "raw": "'window'"
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1657,
                                  "end": 1662,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1657,
                                    "end": 1662,
                                    "name": "const",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1678,
                      "end": 1768,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1680,
                          "end": 1766,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "CallExpression",
                            "start": 1681,
                            "end": 1719,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1682,
                              "end": 1716,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1688,
                                "end": 1716,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1690,
                                    "end": 1714,
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "start": 1697,
                                      "end": 1714,
                                      "expression": {
                                        "type": "Literal",
                                        "start": 1697,
                                        "end": 1705,
                                        "value": "window",
                                        "raw": "'window'"
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1709,
                                        "end": 1714,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1709,
                                          "end": 1714,
                                          "name": "const",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1722,
                            "end": 1766,
                            "left": {
                              "type": "Identifier",
                              "start": 1722,
                              "end": 1725,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 1728,
                              "end": 1766,
                              "callee": {
                                "type": "ArrowFunctionExpression",
                                "start": 1729,
                                "end": 1763,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 1735,
                                  "end": 1763,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 1737,
                                      "end": 1746,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 1737,
                                        "end": 1745,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 1737,
                                          "end": 1740,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 1743,
                                          "end": 1745,
                                          "value": "",
                                          "raw": "\"\""
                                        }
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 1747,
                                      "end": 1761,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 1754,
                                        "end": 1760,
                                        "name": "window",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 1773,
                "end": 1779,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1786,
          "end": 1790,
          "expression": {
            "type": "Identifier",
            "start": 1786,
            "end": 1789,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
