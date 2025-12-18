__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 74,
    "end": 83,
    "range": [
      74,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "IValidationError",
    "start": 84,
    "end": 100,
    "range": [
      84,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 107,
    "end": 114,
    "range": [
      107,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133,
    "range": [
      127,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 134,
    "end": 141,
    "range": [
      134,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Operation",
    "start": 148,
    "end": 157,
    "range": [
      148,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "validateParameters",
    "start": 164,
    "end": 182,
    "range": [
      164,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "parameterValues",
    "start": 183,
    "end": 198,
    "range": [
      183,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 200,
    "end": 203,
    "range": [
      200,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "IValidationError",
    "start": 207,
    "end": 223,
    "range": [
      207,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 228,
    "end": 232,
    "range": [
      228,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "IValidationError",
    "start": 255,
    "end": 271,
    "range": [
      255,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 283,
    "end": 287,
    "range": [
      283,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 301,
    "end": 306,
    "range": [
      301,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "parameterLocation",
    "start": 307,
    "end": 324,
    "range": [
      307,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 325,
    "end": 327,
    "range": [
      325,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 335,
    "end": 339,
    "range": [
      335,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "parameterValues",
    "start": 340,
    "end": 355,
    "range": [
      340,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 372,
    "end": 377,
    "range": [
      372,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "parameter",
    "start": 378,
    "end": 387,
    "range": [
      378,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 396,
    "end": 400,
    "range": [
      396,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 401,
    "end": 403,
    "range": [
      401,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 404,
    "end": 407,
    "range": [
      404,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "getParameter",
    "start": 409,
    "end": 421,
    "range": [
      409,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443,
    "range": [
      438,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 454,
    "end": 458,
    "range": [
      454,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 459,
    "end": 461,
    "range": [
      459,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 462,
    "end": 465,
    "range": [
      462,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "getValues",
    "start": 467,
    "end": 476,
    "range": [
      467,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 493,
    "end": 498,
    "range": [
      493,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "innerResult",
    "start": 499,
    "end": 510,
    "range": [
      499,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "parameter",
    "start": 513,
    "end": 522,
    "range": [
      513,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 523,
    "end": 531,
    "range": [
      523,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 532,
    "end": 538,
    "range": [
      532,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "parameter",
    "start": 539,
    "end": 548,
    "range": [
      539,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "oaParameter",
    "start": 549,
    "end": 560,
    "range": [
      549,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 561,
    "end": 565,
    "range": [
      561,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 581,
    "end": 583,
    "range": [
      581,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "innerResult",
    "start": 584,
    "end": 595,
    "range": [
      584,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 596,
    "end": 598,
    "range": [
      596,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "innerResult",
    "start": 599,
    "end": 610,
    "range": [
      599,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 611,
    "end": 617,
    "range": [
      611,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 717,
    "end": 723,
    "range": [
      717,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 724,
    "end": 726,
    "range": [
      724,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 731,
    "end": 737,
    "range": [
      731,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "innerResult",
    "start": 738,
    "end": 749,
    "range": [
      738,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 785,
    "end": 791,
    "range": [
      785,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 792,
    "end": 798,
    "range": [
      792,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  }
]
```
