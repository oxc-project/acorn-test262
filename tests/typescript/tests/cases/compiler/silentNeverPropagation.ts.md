__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 527,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 42,
        "decorators": [],
        "name": "ModuleWithState",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "decorators": [],
              "name": "TState",
              "optional": false,
              "typeAnnotation": null
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
        "start": 53,
        "end": 75,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
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
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 126,
        "decorators": [],
        "name": "MoreState",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
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
      "start": 150,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 179,
        "decorators": [],
        "name": "createModule",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 186,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 186,
              "decorators": [],
              "name": "TState",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 196,
              "decorators": [],
              "name": "TActions",
              "optional": false,
              "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 248,
                "decorators": [],
                "name": "ModuleWithState",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 270,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 294,
        "decorators": [],
        "name": "convert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 294,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 295,
            "end": 301,
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 301,
              "decorators": [],
              "name": "TState",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 303,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 303,
              "end": 311,
              "decorators": [],
              "name": "TActions",
              "optional": false,
              "typeAnnotation": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 331,
                    "decorators": [],
                    "name": "ModuleWithState",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 368,
                "decorators": [],
                "name": "ModuleWithState",
                "optional": false,
                "typeAnnotation": null
              },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 483,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 414,
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 482,
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 424,
              "decorators": [],
              "name": "convert",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 430,
                "end": 480,
                "callee": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 442,
                  "decorators": [],
                  "name": "createModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 448,
                          "end": 450,
                          "value": 12,
                          "raw": "12"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 459,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 459,
                          "end": 477,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            ]
                          },
                          "expression": false
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 499,
      "expression": {
        "type": "MemberExpression",
        "start": 485,
        "end": 499,
        "object": {
          "type": "MemberExpression",
          "start": 485,
          "end": 497,
          "object": {
            "type": "Identifier",
            "start": 485,
            "end": 491,
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 492,
            "end": 497,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 498,
          "end": 499,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 500,
      "end": 514,
      "expression": {
        "type": "MemberExpression",
        "start": 500,
        "end": 514,
        "object": {
          "type": "MemberExpression",
          "start": 500,
          "end": 512,
          "object": {
            "type": "Identifier",
            "start": 500,
            "end": 506,
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 507,
            "end": 512,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 527,
      "expression": {
        "type": "CallExpression",
        "start": 515,
        "end": 527,
        "callee": {
          "type": "MemberExpression",
          "start": 515,
          "end": 525,
          "object": {
            "type": "Identifier",
            "start": 515,
            "end": 521,
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 522,
            "end": 525,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
