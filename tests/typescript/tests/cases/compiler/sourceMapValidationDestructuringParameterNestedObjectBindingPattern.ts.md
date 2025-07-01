__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
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
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 88
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      },
                      "start": 118,
                      "end": 126
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 127
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 145
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 145,
                      "end": 153
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 136,
                    "end": 154
                  }
                ],
                "start": 101,
                "end": 160
              },
              "start": 99,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 161
          }
        ],
        "start": 69,
        "end": 163
      },
      "declare": false,
      "start": 53,
      "end": 163
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 181
                },
                "typeArguments": null,
                "start": 176,
                "end": 181
              },
              "start": 174,
              "end": 181
            },
            "start": 168,
            "end": 181
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 190
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 192,
                  "end": 199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 186,
                "end": 199
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 207
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 218
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 220,
                        "end": 228
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 211,
                      "end": 228
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 239
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 241,
                        "end": 247
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 230,
                      "end": 247
                    }
                  ],
                  "start": 209,
                  "end": 249
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 201,
                "end": 249
              }
            ],
            "start": 184,
            "end": 251
          },
          "definite": false,
          "start": 168,
          "end": 251
        }
      ],
      "declare": false,
      "start": 164,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 276
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 287
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primaryA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 297
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 280,
                    "end": 297
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 308
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondaryA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 320
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 299,
                    "end": 320
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 322
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 270,
              "end": 322
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 331
              },
              "typeArguments": null,
              "start": 326,
              "end": 331
            },
            "start": 324,
            "end": 331
          },
          "start": 268,
          "end": 331
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 346
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 350
                },
                "optional": false,
                "computed": false,
                "start": 339,
                "end": 350
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 359
                }
              ],
              "optional": false,
              "start": 339,
              "end": 360
            },
            "directive": null,
            "start": 339,
            "end": 361
          }
        ],
        "start": 333,
        "end": 363
      },
      "expression": false,
      "start": 254,
      "end": 363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 377
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 384
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameC",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 391
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 380,
              "end": 391
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 399
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 410
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primaryB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 420
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 403,
                    "end": 420
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 431
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondaryB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 443
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 422,
                    "end": 443
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 401,
                "end": 445
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 393,
              "end": 445
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 454
              },
              "typeArguments": null,
              "start": 449,
              "end": 454
            },
            "start": 447,
            "end": 454
          },
          "start": 378,
          "end": 454
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 469
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 473
                },
                "optional": false,
                "computed": false,
                "start": 462,
                "end": 473
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondaryB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 484
                }
              ],
              "optional": false,
              "start": 462,
              "end": 485
            },
            "directive": null,
            "start": 462,
            "end": 486
          }
        ],
        "start": 456,
        "end": 488
      },
      "expression": false,
      "start": 364,
      "end": 488
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 498,
        "end": 502
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 511
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 511
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 505,
              "end": 511
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 520
              },
              "typeArguments": null,
              "start": 515,
              "end": 520
            },
            "start": 513,
            "end": 520
          },
          "start": 503,
          "end": 520
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 535
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 539
                },
                "optional": false,
                "computed": false,
                "start": 528,
                "end": 539
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 546
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 554
                  },
                  "optional": false,
                  "computed": false,
                  "start": 540,
                  "end": 554
                }
              ],
              "optional": false,
              "start": 528,
              "end": 555
            },
            "directive": null,
            "start": 528,
            "end": 556
          }
        ],
        "start": 522,
        "end": 558
      },
      "expression": false,
      "start": 489,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 564
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 571
          }
        ],
        "optional": false,
        "start": 560,
        "end": 572
      },
      "directive": null,
      "start": 560,
      "end": 573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 574,
          "end": 578
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 585
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 587,
                  "end": 594
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 581,
                "end": 594
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 602
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 606,
                        "end": 613
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 615,
                        "end": 623
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 606,
                      "end": 623
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 625,
                        "end": 634
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 636,
                        "end": 653
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 625,
                      "end": 653
                    }
                  ],
                  "start": 604,
                  "end": 655
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 596,
                "end": 655
              }
            ],
            "start": 579,
            "end": 657
          }
        ],
        "optional": false,
        "start": 574,
        "end": 658
      },
      "directive": null,
      "start": 574,
      "end": 659
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 661,
          "end": 665
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 666,
            "end": 672
          }
        ],
        "optional": false,
        "start": 661,
        "end": 673
      },
      "directive": null,
      "start": 661,
      "end": 674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 679
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 686
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 688,
                  "end": 695
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 682,
                "end": 695
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 703
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 714
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 716,
                        "end": 724
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 707,
                      "end": 724
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 726,
                        "end": 735
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 737,
                        "end": 754
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 726,
                      "end": 754
                    }
                  ],
                  "start": 705,
                  "end": 756
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 697,
                "end": 756
              }
            ],
            "start": 680,
            "end": 758
          }
        ],
        "optional": false,
        "start": 675,
        "end": 759
      },
      "directive": null,
      "start": 675,
      "end": 760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 762,
          "end": 766
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 773
          }
        ],
        "optional": false,
        "start": 762,
        "end": 774
      },
      "directive": null,
      "start": 762,
      "end": 775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 780
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 787
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 789,
                  "end": 796
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 783,
                "end": 796
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 804
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 815
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 817,
                        "end": 825
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 808,
                      "end": 825
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 836
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 838,
                        "end": 855
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 827,
                      "end": 855
                    }
                  ],
                  "start": 806,
                  "end": 857
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 798,
                "end": 857
              }
            ],
            "start": 781,
            "end": 859
          }
        ],
        "optional": false,
        "start": 776,
        "end": 860
      },
      "directive": null,
      "start": 776,
      "end": 861
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 861
}
```
