contextualExpressionTypecheckingDoesntBlowStack.ts
```json
{
  "type": "Program",
  "start": 67,
  "end": 807,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 125,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 74,
        "end": 125,
        "body": {
          "type": "TSInterfaceBody",
          "start": 101,
          "end": 125,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 107,
              "end": 123,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 114,
                "decorators": [],
                "name": "message",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 114,
                "end": 122,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 100,
          "decorators": [],
          "name": "IValidationError",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 127,
      "end": 807,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 142,
        "end": 807,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 158,
          "end": 807,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 805,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 164,
                "end": 182,
                "decorators": [],
                "name": "validateParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 182,
                "end": 805,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 233,
                  "end": 805,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 243,
                      "end": 288,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 247,
                          "end": 287,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 247,
                            "end": 280,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 253,
                              "end": 280,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 255,
                                "end": 280,
                                "types": [
                                  {
                                    "type": "TSArrayType",
                                    "start": 255,
                                    "end": 273,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 255,
                                      "end": 271,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 255,
                                        "end": 271,
                                        "decorators": [],
                                        "name": "IValidationError",
                                        "optional": false
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSNullKeyword",
                                    "start": 276,
                                    "end": 280
                                  }
                                ]
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 283,
                            "end": 287,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    {
                      "type": "ForOfStatement",
                      "start": 297,
                      "end": 775,
                      "await": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 358,
                        "end": 775,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 372,
                            "end": 424,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 378,
                                "end": 423,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 392,
                                  "decorators": [],
                                  "name": "parameter",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 387,
                                    "end": 392,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 389,
                                      "end": 392
                                    }
                                  }
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 395,
                                  "end": 423,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 395,
                                    "end": 421,
                                    "computed": false,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "start": 396,
                                      "end": 407,
                                      "expression": {
                                        "type": "ThisExpression",
                                        "start": 396,
                                        "end": 400
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 404,
                                        "end": 407
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 409,
                                      "end": 421,
                                      "decorators": [],
                                      "name": "getParameter",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "EmptyStatement",
                            "start": 424,
                            "end": 425
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 438,
                            "end": 479,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 444,
                                "end": 478,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 450,
                                  "decorators": [],
                                  "name": "values",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 453,
                                  "end": 478,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 453,
                                    "end": 476,
                                    "computed": false,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "start": 454,
                                      "end": 465,
                                      "expression": {
                                        "type": "ThisExpression",
                                        "start": 454,
                                        "end": 458
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 462,
                                        "end": 465
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 467,
                                      "end": 476,
                                      "decorators": [],
                                      "name": "getValues",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 493,
                            "end": 568,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 499,
                                "end": 567,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 510,
                                  "decorators": [],
                                  "name": "innerResult",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 513,
                                  "end": 567,
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "start": 532,
                                      "end": 566,
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 532,
                                        "end": 538,
                                        "decorators": [],
                                        "name": "values",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "MemberExpression",
                                        "start": 539,
                                        "end": 565,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 539,
                                          "end": 560,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 539,
                                            "end": 548,
                                            "decorators": [],
                                            "name": "parameter",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 549,
                                            "end": 560,
                                            "decorators": [],
                                            "name": "oaParameter",
                                            "optional": false
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 561,
                                          "end": 565,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 513,
                                    "end": 531,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 513,
                                      "end": 522,
                                      "decorators": [],
                                      "name": "parameter",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 523,
                                      "end": 531,
                                      "decorators": [],
                                      "name": "validate",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "IfStatement",
                            "start": 581,
                            "end": 765,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 623,
                              "end": 765,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 707,
                                  "end": 751,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 707,
                                    "end": 750,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 707,
                                      "end": 713,
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 716,
                                      "end": 750,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 738,
                                          "end": 749,
                                          "decorators": [],
                                          "name": "innerResult",
                                          "optional": false
                                        }
                                      ],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 716,
                                        "end": 737,
                                        "computed": false,
                                        "object": {
                                          "type": "LogicalExpression",
                                          "start": 717,
                                          "end": 729,
                                          "operator": "||",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 717,
                                            "end": 723,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "start": 727,
                                            "end": 729,
                                            "elements": []
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 731,
                                          "end": 737,
                                          "decorators": [],
                                          "name": "concat",
                                          "optional": false
                                        }
                                      },
                                      "optional": false
                                    }
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "LogicalExpression",
                              "start": 584,
                              "end": 621,
                              "operator": "&&",
                              "left": {
                                "type": "Identifier",
                                "start": 584,
                                "end": 595,
                                "decorators": [],
                                "name": "innerResult",
                                "optional": false
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 599,
                                "end": 621,
                                "operator": ">",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 599,
                                  "end": 617,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 599,
                                    "end": 610,
                                    "decorators": [],
                                    "name": "innerResult",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 611,
                                    "end": 617,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 620,
                                  "end": 621,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 301,
                        "end": 324,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 307,
                            "end": 324,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 324,
                              "decorators": [],
                              "name": "parameterLocation",
                              "optional": false
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 328,
                        "end": 356,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 340,
                            "end": 355,
                            "decorators": [],
                            "name": "parameterValues",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 328,
                          "end": 339,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 328,
                            "end": 334,
                            "decorators": [],
                            "name": "Object",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 335,
                            "end": 339,
                            "decorators": [],
                            "name": "keys",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 785,
                      "end": 799,
                      "argument": {
                        "type": "Identifier",
                        "start": 792,
                        "end": 798,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 183,
                    "end": 203,
                    "decorators": [],
                    "name": "parameterValues",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 205,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 207,
                    "end": 232,
                    "types": [
                      {
                        "type": "TSArrayType",
                        "start": 207,
                        "end": 225,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 207,
                          "end": 223,
                          "typeName": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 223,
                            "decorators": [],
                            "name": "IValidationError",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 228,
                        "end": 232
                      }
                    ]
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "decorators": [],
          "name": "Operation",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
