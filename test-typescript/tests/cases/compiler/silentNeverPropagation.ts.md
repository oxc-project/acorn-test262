__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 528,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 76,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 42,
        "decorators": [],
        "name": "ModuleWithState",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 53,
        "end": 75,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 73,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "state",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 72,
                  "decorators": [],
                  "name": "TState",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 50,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 49,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "decorators": [],
              "name": "TState",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 110,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "decorators": [],
        "name": "State",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 91,
        "end": 109,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 107,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 148,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 126,
        "decorators": [],
        "name": "MoreState",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 129,
        "end": 147,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 145,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 268,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 179,
        "decorators": [],
        "name": "createModule",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 211,
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 205,
              "end": 211,
              "typeName": {
                "type": "Identifier",
                "start": 205,
                "end": 211,
                "decorators": [],
                "name": "TState",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 230,
          "decorators": [],
          "name": "actions",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 222,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 222,
                "end": 230,
                "decorators": [],
                "name": "TActions",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 267,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 233,
          "end": 267,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 233,
              "end": 256,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 248,
                "end": 256,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 249,
                    "end": 255,
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 255,
                      "decorators": [],
                      "name": "TState",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 248,
                "decorators": [],
                "name": "ModuleWithState",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 259,
              "end": 267,
              "typeName": {
                "type": "Identifier",
                "start": 259,
                "end": 267,
                "decorators": [],
                "name": "TActions",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 186,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 186,
              "decorators": [],
              "name": "TState",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 196,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 196,
              "decorators": [],
              "name": "TActions",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 270,
      "end": 400,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 294,
        "decorators": [],
        "name": "convert",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 313,
          "end": 350,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 314,
            "end": 350,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 316,
              "end": 350,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 316,
                  "end": 339,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 331,
                    "end": 339,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 332,
                        "end": 338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 338,
                          "decorators": [],
                          "name": "TState",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 331,
                    "decorators": [],
                    "name": "ModuleWithState",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 342,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 350,
                    "decorators": [],
                    "name": "TActions",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 351,
        "end": 399,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 353,
          "end": 399,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 353,
              "end": 388,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 368,
                "end": 388,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 369,
                    "end": 387,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 369,
                        "end": 375,
                        "typeName": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 375,
                          "decorators": [],
                          "name": "TState",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 378,
                        "end": 387,
                        "typeName": {
                          "type": "Identifier",
                          "start": 378,
                          "end": 387,
                          "decorators": [],
                          "name": "MoreState",
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 368,
                "decorators": [],
                "name": "ModuleWithState",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 391,
              "end": 399,
              "typeName": {
                "type": "Identifier",
                "start": 391,
                "end": 399,
                "decorators": [],
                "name": "TActions",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 294,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 295,
            "end": 301,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 301,
              "decorators": [],
              "name": "TState",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 303,
            "end": 311,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 303,
              "end": 311,
              "decorators": [],
              "name": "TActions",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 414,
            "decorators": [],
            "name": "breaks",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 482,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 430,
                "end": 480,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 443,
                    "end": 452,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 445,
                        "end": 450,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 448,
                          "end": 450,
                          "raw": "12",
                          "value": 12
                        }
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 454,
                    "end": 479,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 456,
                        "end": 477,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 459,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 459,
                          "end": 477,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 462,
                            "end": 477,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 464,
                                "end": 475,
                                "argument": {
                                  "type": "Literal",
                                  "start": 471,
                                  "end": 475,
                                  "raw": "true",
                                  "value": true
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 442,
                  "decorators": [],
                  "name": "createModule",
                  "optional": false
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 424,
              "decorators": [],
              "name": "convert",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 499,
      "expression": {
        "type": "MemberExpression",
        "start": 485,
        "end": 499,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 485,
          "end": 497,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 485,
            "end": 491,
            "decorators": [],
            "name": "breaks",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 492,
            "end": 497,
            "decorators": [],
            "name": "state",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 498,
          "end": 499,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 500,
      "end": 514,
      "expression": {
        "type": "MemberExpression",
        "start": 500,
        "end": 514,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 500,
          "end": 512,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 500,
            "end": 506,
            "decorators": [],
            "name": "breaks",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 507,
            "end": 512,
            "decorators": [],
            "name": "state",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 527,
      "expression": {
        "type": "CallExpression",
        "start": 515,
        "end": 527,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 515,
          "end": 525,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 515,
            "end": 521,
            "decorators": [],
            "name": "breaks",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 522,
            "end": 525,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
