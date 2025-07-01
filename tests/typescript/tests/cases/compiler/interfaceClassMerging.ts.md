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
