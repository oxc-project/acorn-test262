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
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 96,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 85,
              "name": "optionalProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "hello",
                  "raw": "\"hello\""
                }
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
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "name": "func",
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
          "start": 114,
          "end": 120,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "A",
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 132,
                  "end": 148,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 134,
                      "end": 146,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 146,
                        "name": "optionalProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 146,
                        "name": "optionalProp",
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
                "init": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 154,
                  "name": "arg",
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
            "type": "SwitchStatement",
            "start": 159,
            "end": 322,
            "discriminant": {
              "type": "Identifier",
              "start": 167,
              "end": 179,
              "name": "optionalProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 236,
                  "end": 243,
                  "value": "hello",
                  "raw": "\"hello\""
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
                    "expression": {
                      "type": "CallExpression",
                      "start": 286,
                      "end": 317,
                      "callee": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 303,
                        "name": "assertUnreachable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 316,
                          "name": "optionalProp",
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
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 326,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 340,
        "name": "func2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 365,
                  "name": "optionalProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 368,
                  "end": 401,
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
                          "value": "hello",
                          "raw": "\"hello\""
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 380,
                          "end": 385,
                          "typeName": {
                            "type": "Identifier",
                            "start": 380,
                            "end": 385,
                            "name": "const",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "property": {
                    "type": "CallExpression",
                    "start": 387,
                    "end": 400,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 387,
                      "end": 398,
                      "object": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 391,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 398,
                        "name": "random",
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
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 406,
            "end": 569,
            "discriminant": {
              "type": "Identifier",
              "start": 414,
              "end": 426,
              "name": "optionalProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 448,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 483,
                  "end": 490,
                  "value": "hello",
                  "raw": "\"hello\""
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
                    "expression": {
                      "type": "CallExpression",
                      "start": 533,
                      "end": 564,
                      "callee": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 550,
                        "name": "assertUnreachable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 551,
                          "end": 563,
                          "name": "optionalProp",
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
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 573,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 599,
        "name": "assertUnreachable",
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
          "start": 600,
          "end": 608,
          "name": "_",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 601,
            "end": 608,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 603,
              "end": 608
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 631,
                "end": 636,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 637,
                  "end": 661,
                  "value": "Unreachable path taken",
                  "raw": "\"Unreachable path taken\""
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 609,
        "end": 616,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 611,
          "end": 616
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
