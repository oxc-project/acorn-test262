__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 26
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  },
                  "start": 28,
                  "end": 36
                },
                "start": 27,
                "end": 36
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 20,
            "end": 46
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 65
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 70,
                    "end": 76
                  },
                  "start": 68,
                  "end": 76
                },
                "start": 67,
                "end": 76
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 51,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 108
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 139
          }
        ],
        "start": 14,
        "end": 141
      },
      "declare": false,
      "start": 0,
      "end": 141
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additionalProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 159,
            "end": 186
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additionalMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 208
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 212,
                      "end": 218
                    },
                    "start": 210,
                    "end": 218
                  },
                  "start": 209,
                  "end": 218
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 221,
                  "end": 227
                },
                "start": 219,
                "end": 227
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 245,
                          "end": 249
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 256
                        },
                        "optional": false,
                        "computed": false,
                        "start": 245,
                        "end": 256
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 257,
                          "end": 258
                        }
                      ],
                      "optional": false,
                      "start": 245,
                      "end": 259
                    },
                    "start": 238,
                    "end": 260
                  }
                ],
                "start": 228,
                "end": 266
              },
              "expression": false,
              "start": 208,
              "end": 266
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 266
          }
        ],
        "start": 153,
        "end": 268
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 268
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 279
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 291
      },
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 304
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 308,
                      "end": 314
                    },
                    "start": 306,
                    "end": 314
                  },
                  "start": 305,
                  "end": 314
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 333,
                        "end": 337
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 354
                      },
                      "optional": false,
                      "computed": false,
                      "start": 333,
                      "end": 354
                    },
                    "start": 326,
                    "end": 355
                  }
                ],
                "start": 316,
                "end": 361
              },
              "expression": false,
              "start": 304,
              "end": 361
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 361
          }
        ],
        "start": 292,
        "end": 363
      },
      "abstract": false,
      "declare": false,
      "start": 270,
      "end": 363
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 373
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 383
            },
            "typeArguments": null,
            "arguments": [],
            "start": 376,
            "end": 385
          },
          "definite": false,
          "start": 370,
          "end": 385
        }
      ],
      "declare": false,
      "start": 366,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 397
          },
          "optional": false,
          "computed": false,
          "start": 387,
          "end": 397
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 398,
            "end": 399
          }
        ],
        "optional": false,
        "start": 387,
        "end": 400
      },
      "directive": null,
      "start": 387,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 402,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 421,
            "end": 422
          }
        ],
        "optional": false,
        "start": 402,
        "end": 423
      },
      "directive": null,
      "start": 402,
      "end": 424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 425,
          "end": 428
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "property",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 437
        },
        "optional": false,
        "computed": false,
        "start": 425,
        "end": 437
      },
      "directive": null,
      "start": 425,
      "end": 438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 442
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 459
        },
        "optional": false,
        "computed": false,
        "start": 439,
        "end": 459
      },
      "directive": null,
      "start": 439,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 464
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "additionalProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 483
        },
        "optional": false,
        "computed": false,
        "start": 461,
        "end": 483
      },
      "directive": null,
      "start": 461,
      "end": 484
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 488
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "additionalMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 505
          },
          "optional": false,
          "computed": false,
          "start": 485,
          "end": 505
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 506,
            "end": 507
          }
        ],
        "optional": false,
        "start": 485,
        "end": 508
      },
      "directive": null,
      "start": 485,
      "end": 509
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 532
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 536,
                            "end": 542
                          },
                          "start": 534,
                          "end": 542
                        },
                        "start": 533,
                        "end": 542
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 545,
                        "end": 551
                      },
                      "start": 543,
                      "end": 551
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 526,
                    "end": 552
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 557,
                      "end": 565
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 567,
                        "end": 573
                      },
                      "start": 565,
                      "end": 573
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 557,
                    "end": 574
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additionalProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 579,
                      "end": 597
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 599,
                        "end": 605
                      },
                      "start": 597,
                      "end": 605
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 579,
                    "end": 606
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additionalMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 627
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 631,
                            "end": 637
                          },
                          "start": 629,
                          "end": 637
                        },
                        "start": 628,
                        "end": 637
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 640,
                        "end": 646
                      },
                      "start": 638,
                      "end": 646
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 611,
                    "end": 647
                  }
                ],
                "start": 520,
                "end": 649
              },
              "start": 518,
              "end": 649
            },
            "start": 515,
            "end": 649
          },
          "init": null,
          "definite": false,
          "start": 515,
          "end": 649
        }
      ],
      "declare": false,
      "start": 511,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 655
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 658,
          "end": 661
        },
        "start": 652,
        "end": 661
      },
      "directive": null,
      "start": 652,
      "end": 662
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 663,
          "end": 666
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 669,
          "end": 672
        },
        "start": 663,
        "end": 672
      },
      "directive": null,
      "start": 663,
      "end": 673
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 673
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13,
    "range": [
      10,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalMethod",
    "start": 51,
    "end": 65,
    "range": [
      51,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 91,
    "end": 99,
    "range": [
      91,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalProperty",
    "start": 113,
    "end": 129,
    "range": [
      113,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "additionalProperty",
    "start": 159,
    "end": 177,
    "range": [
      159,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "additionalMethod",
    "start": 192,
    "end": 208,
    "range": [
      192,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 212,
    "end": 218,
    "range": [
      212,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 245,
    "end": 249,
    "range": [
      245,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 250,
    "end": 256,
    "range": [
      250,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 270,
    "end": 275,
    "range": [
      270,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 280,
    "end": 287,
    "range": [
      280,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 288,
    "end": 291,
    "range": [
      288,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalProperty",
    "start": 338,
    "end": 354,
    "range": [
      338,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 376,
    "end": 379,
    "range": [
      376,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 380,
    "end": 383,
    "range": [
      380,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 391,
    "end": 397,
    "range": [
      391,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 402,
    "end": 405,
    "range": [
      402,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalMethod",
    "start": 406,
    "end": 420,
    "range": [
      406,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "bar",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 429,
    "end": 437,
    "range": [
      429,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalProperty",
    "start": 443,
    "end": 459,
    "range": [
      443,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "additionalProperty",
    "start": 465,
    "end": 483,
    "range": [
      465,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 485,
    "end": 488,
    "range": [
      485,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "additionalMethod",
    "start": 489,
    "end": 505,
    "range": [
      489,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 536,
    "end": 542,
    "range": [
      536,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 545,
    "end": 551,
    "range": [
      545,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 557,
    "end": 565,
    "range": [
      557,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573,
    "range": [
      567,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "additionalProperty",
    "start": 579,
    "end": 597,
    "range": [
      579,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 599,
    "end": 605,
    "range": [
      599,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "additionalMethod",
    "start": 611,
    "end": 627,
    "range": [
      611,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 631,
    "end": 637,
    "range": [
      631,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 652,
    "end": 655,
    "range": [
      652,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 663,
    "end": 666,
    "range": [
      663,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 669,
    "end": 672,
    "range": [
      669,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  }
]
```
