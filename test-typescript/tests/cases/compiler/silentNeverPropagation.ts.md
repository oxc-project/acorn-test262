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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 42,
        "name": "ModuleWithState",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TState",
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
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "TState",
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
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "MoreState",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "createModule",
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
          "start": 198,
          "end": 211,
          "name": "state",
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
                "name": "TState",
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
          "start": 213,
          "end": 230,
          "name": "actions",
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
                "name": "TActions",
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
              "name": "TState",
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
            "start": 188,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 196,
              "name": "TActions",
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
                "name": "ModuleWithState",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "TState",
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
              "start": 259,
              "end": 267,
              "typeName": {
                "type": "Identifier",
                "start": 259,
                "end": 267,
                "name": "TActions",
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
      "type": "TSDeclareFunction",
      "start": 270,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 294,
        "name": "convert",
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
          "start": 313,
          "end": 350,
          "name": "m",
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
                    "name": "ModuleWithState",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "TState",
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
                  "start": 342,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 350,
                    "name": "TActions",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
              "name": "TState",
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
            "start": 303,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 303,
              "end": 311,
              "name": "TActions",
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
                "name": "ModuleWithState",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                          "name": "TState",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "MoreState",
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
              "type": "TSTypeReference",
              "start": 391,
              "end": 399,
              "typeName": {
                "type": "Identifier",
                "start": 391,
                "end": 399,
                "name": "TActions",
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
      "start": 402,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 414,
            "name": "breaks",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 482,
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 424,
              "name": "convert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 430,
                "end": 480,
                "callee": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 442,
                  "name": "createModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 448,
                          "end": 450,
                          "value": 12,
                          "raw": "12"
                        },
                        "kind": "init",
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 459,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 459,
                          "end": 477,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "breaks",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 492,
            "end": 497,
            "name": "state",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 498,
          "end": 499,
          "name": "a",
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
            "name": "breaks",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 507,
            "end": 512,
            "name": "state",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "name": "z",
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
            "name": "breaks",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 522,
            "end": 525,
            "name": "foo",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
