__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IValidationError",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 100
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 114
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                },
                "start": 114,
                "end": 122
              },
              "accessibility": null,
              "static": false,
              "start": 107,
              "end": 123
            }
          ],
          "start": 101,
          "end": 125
        },
        "declare": false,
        "start": 74,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 67,
      "end": 125
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Operation",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 157
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 182
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parameterValues",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      },
                      "start": 198,
                      "end": 203
                    },
                    "start": 183,
                    "end": 203
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IValidationError",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 223
                          },
                          "typeArguments": null,
                          "start": 207,
                          "end": 223
                        },
                        "start": 207,
                        "end": 225
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 228,
                        "end": 232
                      }
                    ],
                    "start": 207,
                    "end": 232
                  },
                  "start": 205,
                  "end": 232
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IValidationError",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 255,
                                        "end": 271
                                      },
                                      "typeArguments": null,
                                      "start": 255,
                                      "end": 271
                                    },
                                    "start": 255,
                                    "end": 273
                                  },
                                  {
                                    "type": "TSNullKeyword",
                                    "start": 276,
                                    "end": 280
                                  }
                                ],
                                "start": 255,
                                "end": 280
                              },
                              "start": 253,
                              "end": 280
                            },
                            "start": 247,
                            "end": 280
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 283,
                            "end": 287
                          },
                          "definite": false,
                          "start": 247,
                          "end": 287
                        }
                      ],
                      "declare": false,
                      "start": 243,
                      "end": 288
                    },
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parameterLocation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 307,
                              "end": 324
                            },
                            "init": null,
                            "definite": false,
                            "start": 307,
                            "end": 324
                          }
                        ],
                        "declare": false,
                        "start": 301,
                        "end": 324
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 328,
                            "end": 334
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 335,
                            "end": 339
                          },
                          "optional": false,
                          "computed": false,
                          "start": 328,
                          "end": 339
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parameterValues",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 355
                          }
                        ],
                        "optional": false,
                        "start": 328,
                        "end": 356
                      },
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
                                  "name": "parameter",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 389,
                                      "end": 392
                                    },
                                    "start": 387,
                                    "end": 392
                                  },
                                  "start": 378,
                                  "end": 392
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "ThisExpression",
                                        "start": 396,
                                        "end": 400
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 404,
                                        "end": 407
                                      },
                                      "start": 396,
                                      "end": 407
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "getParameter",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 409,
                                      "end": 421
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 395,
                                    "end": 421
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 395,
                                  "end": 423
                                },
                                "definite": false,
                                "start": 378,
                                "end": 423
                              }
                            ],
                            "declare": false,
                            "start": 372,
                            "end": 424
                          },
                          {
                            "type": "EmptyStatement",
                            "start": 424,
                            "end": 425
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "values",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 450
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "ThisExpression",
                                        "start": 454,
                                        "end": 458
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 462,
                                        "end": 465
                                      },
                                      "start": 454,
                                      "end": 465
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "getValues",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 467,
                                      "end": 476
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 453,
                                    "end": 476
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 453,
                                  "end": 478
                                },
                                "definite": false,
                                "start": 444,
                                "end": 478
                              }
                            ],
                            "declare": false,
                            "start": 438,
                            "end": 479
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "innerResult",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 510
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameter",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 513,
                                      "end": 522
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "validate",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 523,
                                      "end": 531
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 513,
                                    "end": 531
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "values",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 532,
                                        "end": 538
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "parameter",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 539,
                                            "end": 548
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "oaParameter",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 549,
                                            "end": 560
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 539,
                                          "end": 560
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 561,
                                          "end": 565
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 539,
                                        "end": 565
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 532,
                                      "end": 566
                                    }
                                  ],
                                  "optional": false,
                                  "start": 513,
                                  "end": 567
                                },
                                "definite": false,
                                "start": 499,
                                "end": 567
                              }
                            ],
                            "declare": false,
                            "start": 493,
                            "end": 568
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "innerResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 584,
                                "end": 595
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "innerResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 599,
                                    "end": 610
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 611,
                                    "end": 617
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 599,
                                  "end": 617
                                },
                                "operator": ">",
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 620,
                                  "end": 621
                                },
                                "start": 599,
                                "end": 621
                              },
                              "start": 584,
                              "end": 621
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 707,
                                      "end": 713
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 717,
                                            "end": 723
                                          },
                                          "operator": "||",
                                          "right": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 727,
                                            "end": 729
                                          },
                                          "start": 717,
                                          "end": 729
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "concat",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 731,
                                          "end": 737
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 716,
                                        "end": 737
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "innerResult",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 738,
                                          "end": 749
                                        }
                                      ],
                                      "optional": false,
                                      "start": 716,
                                      "end": 750
                                    },
                                    "start": 707,
                                    "end": 750
                                  },
                                  "directive": null,
                                  "start": 707,
                                  "end": 751
                                }
                              ],
                              "start": 623,
                              "end": 765
                            },
                            "alternate": null,
                            "start": 581,
                            "end": 765
                          }
                        ],
                        "start": 358,
                        "end": 775
                      },
                      "start": 297,
                      "end": 775
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 798
                      },
                      "start": 785,
                      "end": 799
                    }
                  ],
                  "start": 233,
                  "end": 805
                },
                "expression": false,
                "start": 182,
                "end": 805
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 164,
              "end": 805
            }
          ],
          "start": 158,
          "end": 807
        },
        "abstract": false,
        "declare": false,
        "start": 142,
        "end": 807
      },
      "exportKind": "value",
      "start": 127,
      "end": 807
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 807
}
```
