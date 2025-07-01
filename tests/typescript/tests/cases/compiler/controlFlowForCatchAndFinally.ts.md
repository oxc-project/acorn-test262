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
        "name": "Page",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "close",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 18
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 29
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 30,
                      "end": 34
                    }
                  ],
                  "start": 29,
                  "end": 35
                },
                "start": 22,
                "end": 35
              },
              "start": 20,
              "end": 35
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 13,
            "end": 36
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 55
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ],
                  "start": 55,
                  "end": 63
                },
                "start": 48,
                "end": 63
              },
              "start": 46,
              "end": 63
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 37,
            "end": 63
          }
        ],
        "start": 12,
        "end": 64
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Browser",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "close",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 98
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 99,
                      "end": 103
                    }
                  ],
                  "start": 98,
                  "end": 104
                },
                "start": 91,
                "end": 104
              },
              "start": 89,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 82,
            "end": 104
          }
        ],
        "start": 81,
        "end": 105
      },
      "declare": false,
      "start": 66,
      "end": 106
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 129
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 140
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Browser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 148
                },
                "typeArguments": null,
                "start": 141,
                "end": 148
              }
            ],
            "start": 140,
            "end": 149
          },
          "start": 133,
          "end": 149
        },
        "start": 131,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 107,
      "end": 150
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 173
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Browser",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 186
              },
              "typeArguments": null,
              "start": 179,
              "end": 186
            },
            "start": 177,
            "end": 186
          },
          "start": 174,
          "end": 186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 196
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Page",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 201
                },
                "typeArguments": null,
                "start": 197,
                "end": 201
              }
            ],
            "start": 196,
            "end": 202
          },
          "start": 189,
          "end": 202
        },
        "start": 187,
        "end": 202
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 223
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 234
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ],
            "start": 234,
            "end": 242
          },
          "start": 227,
          "end": 242
        },
        "start": 225,
        "end": 242
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "browser",
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
                            "name": "Browser",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 269
                          },
                          "typeArguments": null,
                          "start": 262,
                          "end": 269
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 272,
                          "end": 281
                        }
                      ],
                      "start": 262,
                      "end": 281
                    },
                    "start": 260,
                    "end": 281
                  },
                  "start": 253,
                  "end": 281
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 293
                },
                "definite": false,
                "start": 253,
                "end": 293
              }
            ],
            "declare": false,
            "start": 249,
            "end": 294
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
                  "name": "page",
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
                            "name": "Page",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 309,
                            "end": 313
                          },
                          "typeArguments": null,
                          "start": 309,
                          "end": 313
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 316,
                          "end": 325
                        }
                      ],
                      "start": 309,
                      "end": 325
                    },
                    "start": 307,
                    "end": 325
                  },
                  "start": 303,
                  "end": 325
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 337
                },
                "definite": false,
                "start": 303,
                "end": 337
              }
            ],
            "declare": false,
            "start": 299,
            "end": 338
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "browser",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 364
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 373,
                          "end": 378
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 373,
                        "end": 380
                      },
                      "start": 367,
                      "end": 380
                    },
                    "start": 357,
                    "end": 380
                  },
                  "directive": null,
                  "start": 357,
                  "end": 381
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "page",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 394
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 408
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "browser",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 416
                          }
                        ],
                        "optional": false,
                        "start": 403,
                        "end": 417
                      },
                      "start": 397,
                      "end": 417
                    },
                    "start": 390,
                    "end": 417
                  },
                  "directive": null,
                  "start": 390,
                  "end": 418
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "page",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 444
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "content",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 452
                        },
                        "optional": false,
                        "computed": false,
                        "start": 440,
                        "end": 452
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 440,
                      "end": 454
                    },
                    "start": 434,
                    "end": 454
                  },
                  "start": 427,
                  "end": 455
                },
                {
                  "type": "EmptyStatement",
                  "start": 455,
                  "end": 456
                }
              ],
              "start": 347,
              "end": 462
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "page",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 489
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "page",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 511,
                                "end": 515
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "close",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 521
                              },
                              "optional": false,
                              "computed": false,
                              "start": 511,
                              "end": 521
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 511,
                            "end": 523
                          },
                          "start": 505,
                          "end": 523
                        },
                        "directive": null,
                        "start": 505,
                        "end": 524
                      }
                    ],
                    "start": 491,
                    "end": 540
                  },
                  "alternate": null,
                  "start": 481,
                  "end": 540
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "browser",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 561
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "browser",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 583,
                                "end": 590
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "close",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 591,
                                "end": 596
                              },
                              "optional": false,
                              "computed": false,
                              "start": 583,
                              "end": 596
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 583,
                            "end": 598
                          },
                          "start": 577,
                          "end": 598
                        },
                        "directive": null,
                        "start": 577,
                        "end": 599
                      }
                    ],
                    "start": 563,
                    "end": 615
                  },
                  "alternate": null,
                  "start": 550,
                  "end": 615
                }
              ],
              "start": 471,
              "end": 621
            },
            "start": 343,
            "end": 621
          }
        ],
        "start": 243,
        "end": 623
      },
      "expression": false,
      "start": 204,
      "end": 623
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Aborter",
        "optional": false,
        "typeAnnotation": null,
        "start": 639,
        "end": 646
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
              "name": "abort",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 654
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 658,
                  "end": 662
                },
                "start": 656,
                "end": 662
              },
              "body": null,
              "expression": false,
              "start": 654,
              "end": 662
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 649,
            "end": 662
          }
        ],
        "start": 647,
        "end": 664
      },
      "abstract": false,
      "declare": true,
      "start": 625,
      "end": 664
    },
    {
      "type": "EmptyStatement",
      "start": 664,
      "end": 665
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 675
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
              "type": "Identifier",
              "decorators": [],
              "name": "abortController",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 697
            },
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
                      "name": "Aborter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 706
                    },
                    "typeArguments": null,
                    "start": 699,
                    "end": 706
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 709,
                    "end": 718
                  }
                ],
                "start": 699,
                "end": 718
              },
              "start": 697,
              "end": 718
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 730
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 682,
            "end": 731
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "operation",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 752
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "abortController",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 774,
                          "end": 789
                        },
                        "optional": false,
                        "computed": false,
                        "start": 769,
                        "end": 789
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 803
                      },
                      "start": 769,
                      "end": 803
                    },
                    "consequent": {
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
                                  "start": 819,
                                  "end": 823
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "abortController",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 824,
                                  "end": 839
                                },
                                "optional": false,
                                "computed": false,
                                "start": 819,
                                "end": 839
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abort",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 840,
                                "end": 845
                              },
                              "optional": false,
                              "computed": false,
                              "start": 819,
                              "end": 845
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 819,
                            "end": 847
                          },
                          "directive": null,
                          "start": 819,
                          "end": 848
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 861,
                                "end": 865
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abortController",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 866,
                                "end": 881
                              },
                              "optional": false,
                              "computed": false,
                              "start": 861,
                              "end": 881
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 884,
                              "end": 893
                            },
                            "start": 861,
                            "end": 893
                          },
                          "directive": null,
                          "start": 861,
                          "end": 894
                        }
                      ],
                      "start": 805,
                      "end": 904
                    },
                    "alternate": null,
                    "start": 765,
                    "end": 904
                  },
                  {
                    "type": "TryStatement",
                    "block": {
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
                                "start": 931,
                                "end": 935
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abortController",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 936,
                                "end": 951
                              },
                              "optional": false,
                              "computed": false,
                              "start": 931,
                              "end": 951
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Aborter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 958,
                                "end": 965
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 954,
                              "end": 967
                            },
                            "start": 931,
                            "end": 967
                          },
                          "directive": null,
                          "start": 931,
                          "end": 968
                        }
                      ],
                      "start": 917,
                      "end": 978
                    },
                    "handler": {
                      "type": "CatchClause",
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 991
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1011,
                                  "end": 1015
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "abortController",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1016,
                                  "end": 1031
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1011,
                                "end": 1031
                              },
                              "operator": "!==",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1036,
                                "end": 1045
                              },
                              "start": 1011,
                              "end": 1045
                            },
                            "consequent": {
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
                                          "start": 1065,
                                          "end": 1069
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "abortController",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1070,
                                          "end": 1085
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1065,
                                        "end": 1085
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "abort",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1086,
                                        "end": 1091
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1065,
                                      "end": 1091
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 1065,
                                    "end": 1093
                                  },
                                  "directive": null,
                                  "start": 1065,
                                  "end": 1094
                                }
                              ],
                              "start": 1047,
                              "end": 1114
                            },
                            "alternate": null,
                            "start": 1007,
                            "end": 1114
                          }
                        ],
                        "start": 993,
                        "end": 1124
                      },
                      "start": 979,
                      "end": 1124
                    },
                    "finalizer": null,
                    "start": 913,
                    "end": 1124
                  }
                ],
                "start": 755,
                "end": 1130
              },
              "expression": false,
              "start": 752,
              "end": 1130
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 737,
            "end": 1130
          }
        ],
        "start": 676,
        "end": 1132
      },
      "abstract": false,
      "declare": false,
      "start": 666,
      "end": 1132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1132
}
```
