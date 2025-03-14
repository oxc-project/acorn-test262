arrayDestructuringInSwitch1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 624,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 67,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 67,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 22,
          "decorators": [],
          "name": "Expression",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 25,
          "end": 66,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 25,
              "end": 47,
              "typeName": {
                "type": "Identifier",
                "start": 25,
                "end": 47,
                "decorators": [],
                "name": "BooleanLogicExpression",
                "optional": false
              }
            },
            {
              "type": "TSLiteralType",
              "start": 50,
              "end": 56,
              "literal": {
                "type": "Literal",
                "start": 50,
                "end": 56,
                "raw": "'true'",
                "value": "true"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 59,
              "end": 66,
              "literal": {
                "type": "Literal",
                "start": 59,
                "end": 66,
                "raw": "'false'",
                "value": "false"
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 152,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 75,
        "end": 152,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 102,
          "decorators": [],
          "name": "BooleanLogicExpression",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 105,
          "end": 151,
          "types": [
            {
              "type": "TSTupleType",
              "start": 105,
              "end": 129,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 106,
                  "end": 111,
                  "literal": {
                    "type": "Literal",
                    "start": 106,
                    "end": 111,
                    "raw": "'and'",
                    "value": "and"
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 113,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 116,
                    "end": 128,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 126,
                        "decorators": [],
                        "name": "Expression",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 132,
              "end": 151,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 133,
                  "end": 138,
                  "literal": {
                    "type": "Literal",
                    "start": 133,
                    "end": 138,
                    "raw": "'not'",
                    "value": "not"
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 150,
                    "decorators": [],
                    "name": "Expression",
                    "optional": false
                  }
                }
              ]
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 154,
      "end": 624,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 161,
        "end": 624,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 212,
          "end": 624,
          "body": [
            {
              "type": "IfStatement",
              "start": 216,
              "end": 622,
              "alternate": {
                "type": "BlockStatement",
                "start": 583,
                "end": 622,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 589,
                    "end": 618,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 596,
                      "end": 617,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 606,
                        "decorators": [],
                        "name": "expression",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 611,
                        "end": 617,
                        "raw": "'true'",
                        "value": "true"
                      }
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 247,
                "end": 577,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 253,
                    "end": 296,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 259,
                        "end": 295,
                        "definite": false,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 259,
                          "end": 282,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 260,
                              "end": 268,
                              "decorators": [],
                              "name": "operator",
                              "optional": false
                            },
                            {
                              "type": "RestElement",
                              "start": 270,
                              "end": 281,
                              "argument": {
                                "type": "Identifier",
                                "start": 273,
                                "end": 281,
                                "decorators": [],
                                "name": "operands",
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 295,
                          "decorators": [],
                          "name": "expression",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "SwitchStatement",
                    "start": 301,
                    "end": 573,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 327,
                        "end": 407,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 339,
                            "end": 407,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 349,
                                "end": 399,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 356,
                                  "end": 398,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 371,
                                      "end": 397,
                                      "async": false,
                                      "body": {
                                        "type": "CallExpression",
                                        "start": 382,
                                        "end": 397,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 391,
                                            "end": 396,
                                            "decorators": [],
                                            "name": "child",
                                            "optional": false
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 382,
                                          "end": 390,
                                          "decorators": [],
                                          "name": "evaluate",
                                          "optional": false
                                        },
                                        "optional": false
                                      },
                                      "expression": true,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 372,
                                          "end": 377,
                                          "decorators": [],
                                          "name": "child",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 356,
                                    "end": 370,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 356,
                                      "end": 364,
                                      "decorators": [],
                                      "name": "operands",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 365,
                                      "end": 370,
                                      "decorators": [],
                                      "name": "every",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 332,
                          "end": 337,
                          "raw": "'and'",
                          "value": "and"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 414,
                        "end": 474,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 426,
                            "end": 474,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 436,
                                "end": 466,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 443,
                                  "end": 465,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 444,
                                    "end": 465,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 453,
                                        "end": 464,
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 453,
                                          "end": 461,
                                          "decorators": [],
                                          "name": "operands",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Literal",
                                          "start": 462,
                                          "end": 463,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 444,
                                      "end": 452,
                                      "decorators": [],
                                      "name": "evaluate",
                                      "optional": false
                                    },
                                    "optional": false
                                  },
                                  "operator": "!",
                                  "prefix": true
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 419,
                          "end": 424,
                          "raw": "'not'",
                          "value": "not"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 481,
                        "end": 567,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 490,
                            "end": 567,
                            "body": [
                              {
                                "type": "ThrowStatement",
                                "start": 500,
                                "end": 559,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 506,
                                  "end": 558,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "start": 516,
                                      "end": 557,
                                      "expressions": [
                                        {
                                          "type": "Identifier",
                                          "start": 519,
                                          "end": 527,
                                          "decorators": [],
                                          "name": "operator",
                                          "optional": false
                                        }
                                      ],
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "start": 516,
                                          "end": 519,
                                          "tail": false,
                                          "value": {
                                            "cooked": "",
                                            "raw": ""
                                          }
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "start": 527,
                                          "end": 557,
                                          "tail": true,
                                          "value": {
                                            "cooked": " is not a supported operator",
                                            "raw": " is not a supported operator"
                                          }
                                        }
                                      ]
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 510,
                                    "end": 515,
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          }
                        ],
                        "test": null
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 317,
                      "decorators": [],
                      "name": "operator",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 220,
                "end": 245,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 234,
                    "end": 244,
                    "decorators": [],
                    "name": "expression",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 220,
                  "end": 233,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 225,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 233,
                    "decorators": [],
                    "name": "isArray",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 170,
          "end": 178,
          "decorators": [],
          "name": "evaluate",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 179,
            "end": 201,
            "decorators": [],
            "name": "expression",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 201,
                  "decorators": [],
                  "name": "Expression",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 202,
          "end": 211,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 204,
            "end": 211
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
