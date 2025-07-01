__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expression",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 22
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BooleanLogicExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 47
              },
              "typeArguments": null,
              "start": 25,
              "end": 47
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 50,
                "end": 56
              },
              "start": 50,
              "end": 56
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "false",
                "raw": "'false'",
                "start": 59,
                "end": 66
              },
              "start": 59,
              "end": 66
            }
          ],
          "start": 25,
          "end": 66
        },
        "declare": false,
        "start": 7,
        "end": 67
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 67
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BooleanLogicExpression",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 102
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "and",
                    "raw": "'and'",
                    "start": 106,
                    "end": 111
                  },
                  "start": 106,
                  "end": 111
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Expression",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 116,
                      "end": 126
                    },
                    "start": 116,
                    "end": 128
                  },
                  "start": 113,
                  "end": 128
                }
              ],
              "start": 105,
              "end": 129
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "not",
                    "raw": "'not'",
                    "start": 133,
                    "end": 138
                  },
                  "start": 133,
                  "end": 138
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Expression",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 150
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 150
                }
              ],
              "start": 132,
              "end": 151
            }
          ],
          "start": 105,
          "end": 151
        },
        "declare": false,
        "start": 75,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 68,
      "end": 152
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "evaluate",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 178
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "expression",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expression",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "typeArguments": null,
                "start": 191,
                "end": 201
              },
              "start": 189,
              "end": 201
            },
            "start": 179,
            "end": 201
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 204,
            "end": 211
          },
          "start": 202,
          "end": 211
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 225
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 233
                  },
                  "optional": false,
                  "computed": false,
                  "start": 220,
                  "end": 233
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "expression",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 244
                  }
                ],
                "optional": false,
                "start": 220,
                "end": 245
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "operator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 268
                            },
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "operands",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 273,
                                "end": 281
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 270,
                              "end": 281
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 259,
                          "end": 282
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "expression",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 295
                        },
                        "definite": false,
                        "start": 259,
                        "end": 295
                      }
                    ],
                    "declare": false,
                    "start": 253,
                    "end": 296
                  },
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "operator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 317
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "and",
                          "raw": "'and'",
                          "start": 332,
                          "end": 337
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "operands",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 356,
                                      "end": 364
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "every",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 365,
                                      "end": 370
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 356,
                                    "end": 370
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "child",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 372,
                                          "end": 377
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "evaluate",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 382,
                                          "end": 390
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "child",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 391,
                                            "end": 396
                                          }
                                        ],
                                        "optional": false,
                                        "start": 382,
                                        "end": 397
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 371,
                                      "end": 397
                                    }
                                  ],
                                  "optional": false,
                                  "start": 356,
                                  "end": 398
                                },
                                "start": 349,
                                "end": 399
                              }
                            ],
                            "start": 339,
                            "end": 407
                          }
                        ],
                        "start": 327,
                        "end": 407
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "not",
                          "raw": "'not'",
                          "start": 419,
                          "end": 424
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "evaluate",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 444,
                                      "end": 452
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "operands",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 453,
                                          "end": 461
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 462,
                                          "end": 463
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 453,
                                        "end": 464
                                      }
                                    ],
                                    "optional": false,
                                    "start": 444,
                                    "end": 465
                                  },
                                  "prefix": true,
                                  "start": 443,
                                  "end": 465
                                },
                                "start": 436,
                                "end": 466
                              }
                            ],
                            "start": 426,
                            "end": 474
                          }
                        ],
                        "start": 414,
                        "end": 474
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
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
                                    "start": 510,
                                    "end": 515
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": false,
                                          "start": 516,
                                          "end": 519
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " is not a supported operator",
                                            "cooked": " is not a supported operator"
                                          },
                                          "tail": true,
                                          "start": 527,
                                          "end": 557
                                        }
                                      ],
                                      "expressions": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "operator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 519,
                                          "end": 527
                                        }
                                      ],
                                      "start": 516,
                                      "end": 557
                                    }
                                  ],
                                  "start": 506,
                                  "end": 558
                                },
                                "start": 500,
                                "end": 559
                              }
                            ],
                            "start": 490,
                            "end": 567
                          }
                        ],
                        "start": 481,
                        "end": 567
                      }
                    ],
                    "start": 301,
                    "end": 573
                  }
                ],
                "start": 247,
                "end": 577
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "expression",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 596,
                        "end": 606
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "'true'",
                        "start": 611,
                        "end": 617
                      },
                      "start": 596,
                      "end": 617
                    },
                    "start": 589,
                    "end": 618
                  }
                ],
                "start": 583,
                "end": 622
              },
              "start": 216,
              "end": 622
            }
          ],
          "start": 212,
          "end": 624
        },
        "expression": false,
        "start": 161,
        "end": 624
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 154,
      "end": 624
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
