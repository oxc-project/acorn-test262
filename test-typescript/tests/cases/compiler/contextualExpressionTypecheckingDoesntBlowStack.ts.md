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
          "name": "IValidationError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "message",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 127,
      "end": 807,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 142,
        "end": 807,
        "id": {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "name": "Operation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 158,
          "end": 807,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 805,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 164,
                "end": 182,
                "name": "validateParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 182,
                "end": 805,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 183,
                    "end": 203,
                    "name": "parameterValues",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "id": {
                            "type": "Identifier",
                            "start": 247,
                            "end": 280,
                            "name": "result",
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
                                        "name": "IValidationError",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                            },
                            "decorators": [],
                            "optional": false
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
                      "kind": "let",
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
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 307,
                            "end": 324,
                            "id": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 324,
                              "name": "parameterLocation",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "const",
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
                            "name": "Object",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 335,
                            "end": 339,
                            "name": "keys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 340,
                            "end": 355,
                            "name": "parameterValues",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 378,
                                "end": 423,
                                "id": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 392,
                                  "name": "parameter",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 387,
                                    "end": 392,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 389,
                                      "end": 392
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
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
                                      "name": "getParameter",
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
                                "definite": false
                              }
                            ],
                            "kind": "const",
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
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 444,
                                "end": 478,
                                "id": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 450,
                                  "name": "values",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                      "name": "getValues",
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
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 510,
                                  "name": "innerResult",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                      "name": "parameter",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 523,
                                      "end": 531,
                                      "name": "validate",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "start": 532,
                                      "end": 566,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 532,
                                        "end": 538,
                                        "name": "values",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                            "name": "parameter",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 549,
                                            "end": 560,
                                            "name": "oaParameter",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 561,
                                          "end": 565,
                                          "name": "name",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "computed": true,
                                      "optional": false
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
                                "name": "innerResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                    "name": "innerResult",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 611,
                                    "end": 617,
                                    "name": "length",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
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
                                      "name": "result",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                            "name": "result",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
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
                                          "name": "concat",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 738,
                                          "end": 749,
                                          "name": "innerResult",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
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
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
                            "name": "IValidationError",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
