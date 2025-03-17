__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1132,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Page",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 12,
        "end": 64,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 13,
            "end": 36,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "name": "close",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 29,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 29,
                  "end": 35,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 30,
                      "end": 34
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "name": "content",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 55,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 55,
                  "end": 63,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ]
                }
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
      "start": 66,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "name": "Browser",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 81,
        "end": 105,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 82,
            "end": 104,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "name": "close",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 98,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 98,
                  "end": 104,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 99,
                      "end": 103
                    }
                  ]
                }
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
      "type": "TSDeclareFunction",
      "start": 107,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 129,
        "name": "test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 149,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 133,
          "end": 149,
          "typeName": {
            "type": "Identifier",
            "start": 133,
            "end": 140,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 140,
            "end": 149,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 141,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 148,
                  "name": "Browser",
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
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 173,
        "name": "test2",
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
          "start": 174,
          "end": 186,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 177,
            "end": 186,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 179,
              "end": 186,
              "typeName": {
                "type": "Identifier",
                "start": 179,
                "end": 186,
                "name": "Browser",
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
        "start": 187,
        "end": 202,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 189,
          "end": 202,
          "typeName": {
            "type": "Identifier",
            "start": 189,
            "end": 196,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 196,
            "end": 202,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 197,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 201,
                  "name": "Page",
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
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 623,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 223,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 243,
        "end": 623,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 249,
            "end": 294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 253,
                "end": 293,
                "id": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 281,
                  "name": "browser",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 260,
                    "end": 281,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 262,
                      "end": 281,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 262,
                          "end": 269,
                          "typeName": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 269,
                            "name": "Browser",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 272,
                          "end": 281
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 293,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 299,
            "end": 338,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 303,
                "end": 337,
                "id": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 325,
                  "name": "page",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 307,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 309,
                      "end": 325,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 309,
                          "end": 313,
                          "typeName": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 313,
                            "name": "Page",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 316,
                          "end": 325
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 337,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "TryStatement",
            "start": 343,
            "end": 621,
            "block": {
              "type": "BlockStatement",
              "start": 347,
              "end": 462,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 381,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 357,
                    "end": 380,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 364,
                      "name": "browser",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 367,
                      "end": 380,
                      "argument": {
                        "type": "CallExpression",
                        "start": 373,
                        "end": 380,
                        "callee": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 378,
                          "name": "test1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 390,
                  "end": 418,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 390,
                    "end": 417,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 394,
                      "name": "page",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 397,
                      "end": 417,
                      "argument": {
                        "type": "CallExpression",
                        "start": 403,
                        "end": 417,
                        "callee": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 408,
                          "name": "test2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 409,
                            "end": 416,
                            "name": "browser",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 427,
                  "end": 455,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 434,
                    "end": 454,
                    "argument": {
                      "type": "CallExpression",
                      "start": 440,
                      "end": 454,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 440,
                        "end": 452,
                        "object": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 444,
                          "name": "page",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 452,
                          "name": "content",
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
                    }
                  }
                },
                {
                  "type": "EmptyStatement",
                  "start": 455,
                  "end": 456
                }
              ]
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "start": 471,
              "end": 621,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 481,
                  "end": 540,
                  "test": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 489,
                    "name": "page",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 491,
                    "end": 540,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 505,
                        "end": 524,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 505,
                          "end": 523,
                          "argument": {
                            "type": "CallExpression",
                            "start": 511,
                            "end": 523,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 511,
                              "end": 521,
                              "object": {
                                "type": "Identifier",
                                "start": 511,
                                "end": 515,
                                "name": "page",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 516,
                                "end": 521,
                                "name": "close",
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
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 550,
                  "end": 615,
                  "test": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 561,
                    "name": "browser",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 563,
                    "end": 615,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 577,
                        "end": 599,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 577,
                          "end": 598,
                          "argument": {
                            "type": "CallExpression",
                            "start": 583,
                            "end": 598,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 583,
                              "end": 596,
                              "object": {
                                "type": "Identifier",
                                "start": 583,
                                "end": 590,
                                "name": "browser",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 591,
                                "end": 596,
                                "name": "close",
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
                          }
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 225,
        "end": 242,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 227,
          "end": 242,
          "typeName": {
            "type": "Identifier",
            "start": 227,
            "end": 234,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 234,
            "end": 242,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ]
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 625,
      "end": 664,
      "id": {
        "type": "Identifier",
        "start": 639,
        "end": 646,
        "name": "Aborter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 647,
        "end": 664,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 662,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 649,
              "end": 654,
              "name": "abort",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 654,
              "end": 662,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 656,
                "end": 662,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 658,
                  "end": 662
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "EmptyStatement",
      "start": 664,
      "end": 665
    },
    {
      "type": "ClassDeclaration",
      "start": 666,
      "end": 1132,
      "id": {
        "type": "Identifier",
        "start": 672,
        "end": 675,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 676,
        "end": 1132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 682,
            "end": 731,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 682,
              "end": 697,
              "name": "abortController",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 721,
              "end": 730,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 697,
              "end": 718,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 699,
                "end": 718,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 699,
                    "end": 706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 706,
                      "name": "Aborter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 709,
                    "end": 718
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 737,
            "end": 1130,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 752,
              "name": "operation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 752,
              "end": 1130,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 755,
                "end": 1130,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 765,
                    "end": 904,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 769,
                      "end": 803,
                      "left": {
                        "type": "MemberExpression",
                        "start": 769,
                        "end": 789,
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 789,
                          "name": "abortController",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Identifier",
                        "start": 794,
                        "end": 803,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 805,
                      "end": 904,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 819,
                          "end": 848,
                          "expression": {
                            "type": "CallExpression",
                            "start": 819,
                            "end": 847,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 819,
                              "end": 845,
                              "object": {
                                "type": "MemberExpression",
                                "start": 819,
                                "end": 839,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 819,
                                  "end": 823
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 824,
                                  "end": 839,
                                  "name": "abortController",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 840,
                                "end": 845,
                                "name": "abort",
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
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 861,
                          "end": 894,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 861,
                            "end": 893,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 861,
                              "end": 881,
                              "object": {
                                "type": "ThisExpression",
                                "start": 861,
                                "end": 865
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 866,
                                "end": 881,
                                "name": "abortController",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 884,
                              "end": 893,
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
                    "alternate": null
                  },
                  {
                    "type": "TryStatement",
                    "start": 913,
                    "end": 1124,
                    "block": {
                      "type": "BlockStatement",
                      "start": 917,
                      "end": 978,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 931,
                          "end": 968,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 931,
                            "end": 967,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 931,
                              "end": 951,
                              "object": {
                                "type": "ThisExpression",
                                "start": 931,
                                "end": 935
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 936,
                                "end": 951,
                                "name": "abortController",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 954,
                              "end": 967,
                              "callee": {
                                "type": "Identifier",
                                "start": 958,
                                "end": 965,
                                "name": "Aborter",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 979,
                      "end": 1124,
                      "param": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 991,
                        "name": "error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 993,
                        "end": 1124,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 1007,
                            "end": 1114,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1011,
                              "end": 1045,
                              "left": {
                                "type": "MemberExpression",
                                "start": 1011,
                                "end": 1031,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1011,
                                  "end": 1015
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1016,
                                  "end": 1031,
                                  "name": "abortController",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "operator": "!==",
                              "right": {
                                "type": "Identifier",
                                "start": 1036,
                                "end": 1045,
                                "name": "undefined",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1047,
                              "end": 1114,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1065,
                                  "end": 1094,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1065,
                                    "end": 1093,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1065,
                                      "end": 1091,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 1065,
                                        "end": 1085,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1065,
                                          "end": 1069
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1070,
                                          "end": 1085,
                                          "name": "abortController",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1086,
                                        "end": 1091,
                                        "name": "abort",
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
                            "alternate": null
                          }
                        ]
                      }
                    },
                    "finalizer": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
