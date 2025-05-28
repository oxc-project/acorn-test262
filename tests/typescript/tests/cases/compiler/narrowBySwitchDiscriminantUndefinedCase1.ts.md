__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 665,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 324,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 126,
            "end": 155,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 154,
                "id": {
                  "type": "ObjectPattern",
                  "start": 132,
                  "end": 148,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 134,
                      "end": 146,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 146,
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 146,
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 187,
                "end": 226,
                "test": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 231,
                "end": 266,
                "test": {
                  "type": "Literal",
                  "start": 236,
                  "end": 243,
                  "value": "hello",
                  "raw": "\"hello\""
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 271,
                "end": 318,
                "test": null,
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
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 326,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 340,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 343,
        "end": 571,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 402,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 401,
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
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 398,
                        "decorators": [],
                        "name": "random",
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
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 434,
                "end": 473,
                "test": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 448,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 478,
                "end": 513,
                "test": {
                  "type": "Literal",
                  "start": 483,
                  "end": 490,
                  "value": "hello",
                  "raw": "\"hello\""
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 518,
                "end": 565,
                "test": null,
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
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 573,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 599,
        "decorators": [],
        "name": "assertUnreachable",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 637,
                  "end": 661,
                  "value": "Unreachable path taken",
                  "raw": "\"Unreachable path taken\""
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
