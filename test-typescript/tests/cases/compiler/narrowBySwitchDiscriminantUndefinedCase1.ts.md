__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 666,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 98,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 85,
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 95,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 88,
                "end": 95,
                "literal": {
                  "type": "Literal",
                  "start": 88,
                  "end": 95,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 324,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 324,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 126,
            "end": 155,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 154,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 132,
                  "end": 148,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 134,
                      "end": 146,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 146,
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 146,
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 154,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "SwitchStatement",
            "start": 159,
            "end": 322,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 187,
                "end": 226,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 209,
                    "end": 226,
                    "argument": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 225,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 231,
                "end": 266,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 251,
                    "end": 266,
                    "argument": {
                      "type": "Literal",
                      "start": 258,
                      "end": 265,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 236,
                  "end": 243,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "SwitchCase",
                "start": 271,
                "end": 318,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 286,
                    "end": 318,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 286,
                      "end": 317,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 316,
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 303,
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 167,
              "end": 179,
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 120,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 326,
      "end": 571,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 343,
        "end": 571,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 402,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 401,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 365,
                  "decorators": [],
                  "name": "optionalProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 368,
                  "end": 401,
                  "computed": true,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 368,
                    "end": 386,
                    "elements": [
                      {
                        "type": "TSAsExpression",
                        "start": 369,
                        "end": 385,
                        "expression": {
                          "type": "Literal",
                          "start": 369,
                          "end": 376,
                          "raw": "\"hello\"",
                          "value": "hello"
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 380,
                          "end": 385,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 380,
                            "end": 385,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "optional": false,
                  "property": {
                    "type": "CallExpression",
                    "start": 387,
                    "end": 400,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 387,
                      "end": 398,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 391,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 398,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "SwitchStatement",
            "start": 406,
            "end": 569,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 434,
                "end": 473,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 456,
                    "end": 473,
                    "argument": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 472,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 448,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 478,
                "end": 513,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 498,
                    "end": 513,
                    "argument": {
                      "type": "Literal",
                      "start": 505,
                      "end": 512,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 483,
                  "end": 490,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "SwitchCase",
                "start": 518,
                "end": 565,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 533,
                    "end": 565,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 533,
                      "end": 564,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 551,
                          "end": 563,
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 550,
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 414,
              "end": 426,
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 340,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 573,
      "end": 665,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 617,
        "end": 665,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 621,
            "end": 663,
            "argument": {
              "type": "NewExpression",
              "start": 627,
              "end": 662,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 637,
                  "end": 661,
                  "raw": "\"Unreachable path taken\"",
                  "value": "Unreachable path taken"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 631,
                "end": 636,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 599,
        "decorators": [],
        "name": "assertUnreachable",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 600,
          "end": 608,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 601,
            "end": 608,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 603,
              "end": 608
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 609,
        "end": 616,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 611,
          "end": 616
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
