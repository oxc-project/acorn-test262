__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 88,
                  "end": 95
                },
                "start": 88,
                "end": 95
              },
              "start": 86,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 96
          }
        ],
        "start": 69,
        "end": 98
      },
      "declare": false,
      "start": 57,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "start": 117,
            "end": 120
          },
          "start": 114,
          "end": 120
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 146
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 146
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 134,
                      "end": 146
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 148
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 154
                },
                "definite": false,
                "start": 132,
                "end": 154
              }
            ],
            "declare": false,
            "start": 126,
            "end": 155
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 179
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 201
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 225
                    },
                    "start": 209,
                    "end": 226
                  }
                ],
                "start": 187,
                "end": 226
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 236,
                  "end": 243
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 258,
                      "end": 265
                    },
                    "start": 251,
                    "end": 266
                  }
                ],
                "start": 231,
                "end": 266
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 303
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 316
                        }
                      ],
                      "optional": false,
                      "start": 286,
                      "end": 317
                    },
                    "directive": null,
                    "start": 286,
                    "end": 318
                  }
                ],
                "start": 271,
                "end": 318
              }
            ],
            "start": 159,
            "end": 322
          }
        ],
        "start": 122,
        "end": 324
      },
      "expression": false,
      "start": 100,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 340
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 365
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 369,
                          "end": 376
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 380,
                            "end": 385
                          },
                          "typeArguments": null,
                          "start": 380,
                          "end": 385
                        },
                        "start": 369,
                        "end": 385
                      }
                    ],
                    "start": 368,
                    "end": 386
                  },
                  "property": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 391
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 387,
                      "end": 398
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 387,
                    "end": 400
                  },
                  "optional": false,
                  "computed": true,
                  "start": 368,
                  "end": 401
                },
                "definite": false,
                "start": 353,
                "end": 401
              }
            ],
            "declare": false,
            "start": 347,
            "end": 402
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 426
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 448
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 472
                    },
                    "start": 456,
                    "end": 473
                  }
                ],
                "start": 434,
                "end": 473
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 483,
                  "end": 490
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 505,
                      "end": 512
                    },
                    "start": 498,
                    "end": 513
                  }
                ],
                "start": 478,
                "end": 513
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 550
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 563
                        }
                      ],
                      "optional": false,
                      "start": 533,
                      "end": 564
                    },
                    "directive": null,
                    "start": 533,
                    "end": 565
                  }
                ],
                "start": 518,
                "end": 565
              }
            ],
            "start": 406,
            "end": 569
          }
        ],
        "start": 343,
        "end": 571
      },
      "expression": false,
      "start": 326,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertUnreachable",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 603,
              "end": 608
            },
            "start": 601,
            "end": 608
          },
          "start": 600,
          "end": 608
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 611,
          "end": 616
        },
        "start": 609,
        "end": 616
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 636
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unreachable path taken",
                  "raw": "\"Unreachable path taken\"",
                  "start": 637,
                  "end": 661
                }
              ],
              "start": 627,
              "end": 662
            },
            "start": 621,
            "end": 663
          }
        ],
        "start": 617,
        "end": 665
      },
      "expression": false,
      "start": 573,
      "end": 665
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 665
}
```
