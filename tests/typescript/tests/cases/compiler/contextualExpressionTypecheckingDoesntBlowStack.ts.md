__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 74,
        "end": 125,
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 100,
          "decorators": [],
          "name": "IValidationError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 114,
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 114,
                "end": 122,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 127,
      "end": 807,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 142,
        "end": 807,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "decorators": [],
          "name": "Operation",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 158,
          "end": 807,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 805,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 164,
                "end": 182,
                "decorators": [],
                "name": "validateParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 182,
                "end": 805,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 228,
                        "end": 232
                      }
                    ]
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 233,
                  "end": 805,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 243,
                      "end": 288,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 247,
                          "end": 287,
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
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
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
                            "value": null,
                            "raw": "null"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ForOfStatement",
                      "start": 297,
                      "end": 775,
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 301,
                        "end": 324,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 307,
                            "end": 324,
                            "id": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 324,
                              "decorators": [],
                              "name": "parameterLocation",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 328,
                        "end": 356,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 328,
                          "end": 339,
                          "object": {
                            "type": "Identifier",
                            "start": 328,
                            "end": 334,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 335,
                            "end": 339,
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 340,
                            "end": 355,
                            "decorators": [],
                            "name": "parameterValues",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 358,
                        "end": 775,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 372,
                            "end": 424,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 378,
                                "end": 423,
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
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 395,
                                    "end": 421,
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
                                    "property": {
                                      "type": "Identifier",
                                      "start": 409,
                                      "end": 421,
                                      "decorators": [],
                                      "name": "getParameter",
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
                                "definite": false
                              }
                            ],
                            "declare": false
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
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 444,
                                "end": 478,
                                "id": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 450,
                                  "decorators": [],
                                  "name": "values",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 453,
                                  "end": 478,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 453,
                                    "end": 476,
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
                                    "property": {
                                      "type": "Identifier",
                                      "start": 467,
                                      "end": 476,
                                      "decorators": [],
                                      "name": "getValues",
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
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 493,
                            "end": 568,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 499,
                                "end": 567,
                                "id": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 510,
                                  "decorators": [],
                                  "name": "innerResult",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 513,
                                  "end": 567,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 513,
                                    "end": 531,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 513,
                                      "end": 522,
                                      "decorators": [],
                                      "name": "parameter",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 523,
                                      "end": 531,
                                      "decorators": [],
                                      "name": "validate",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "start": 532,
                                      "end": 566,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 532,
                                        "end": 538,
                                        "decorators": [],
                                        "name": "values",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "start": 539,
                                        "end": 565,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 539,
                                          "end": 560,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 539,
                                            "end": 548,
                                            "decorators": [],
                                            "name": "parameter",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 549,
                                            "end": 560,
                                            "decorators": [],
                                            "name": "oaParameter",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 561,
                                          "end": 565,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "optional": false,
                                      "computed": true
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
                            "type": "IfStatement",
                            "start": 581,
                            "end": 765,
                            "test": {
                              "type": "LogicalExpression",
                              "start": 584,
                              "end": 621,
                              "left": {
                                "type": "Identifier",
                                "start": 584,
                                "end": 595,
                                "decorators": [],
                                "name": "innerResult",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 599,
                                "end": 621,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 599,
                                  "end": 617,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 599,
                                    "end": 610,
                                    "decorators": [],
                                    "name": "innerResult",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 611,
                                    "end": 617,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": ">",
                                "right": {
                                  "type": "Literal",
                                  "start": 620,
                                  "end": 621,
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 716,
                                      "end": 750,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 716,
                                        "end": 737,
                                        "object": {
                                          "type": "LogicalExpression",
                                          "start": 717,
                                          "end": 729,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 717,
                                            "end": 723,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "operator": "||",
                                          "right": {
                                            "type": "ArrayExpression",
                                            "start": 727,
                                            "end": 729,
                                            "elements": []
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 731,
                                          "end": 737,
                                          "decorators": [],
                                          "name": "concat",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 738,
                                          "end": 749,
                                          "decorators": [],
                                          "name": "innerResult",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
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
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
