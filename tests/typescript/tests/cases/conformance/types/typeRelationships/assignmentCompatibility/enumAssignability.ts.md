__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "initializer": null,
            "computed": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 82,
        "end": 87
      },
      "const": false,
      "declare": false,
      "start": 75,
      "end": 87
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "initializer": null,
            "computed": false,
            "start": 97,
            "end": 98
          }
        ],
        "start": 95,
        "end": 100
      },
      "const": false,
      "declare": false,
      "start": 88,
      "end": 100
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 107
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "optional": false,
            "computed": false,
            "start": 110,
            "end": 113
          },
          "definite": false,
          "start": 106,
          "end": 113
        }
      ],
      "declare": false,
      "start": 102,
      "end": 114
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "optional": false,
            "computed": false,
            "start": 123,
            "end": 126
          },
          "definite": false,
          "start": 119,
          "end": 126
        }
      ],
      "declare": false,
      "start": 115,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 134
        },
        "start": 129,
        "end": 134
      },
      "directive": null,
      "start": 129,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 138
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 142
        },
        "start": 137,
        "end": 142
      },
      "directive": null,
      "start": 137,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 149,
          "end": 150
        },
        "start": 145,
        "end": 150
      },
      "directive": null,
      "start": 145,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 159
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 162,
          "end": 163
        },
        "start": 158,
        "end": 163
      },
      "directive": null,
      "start": 158,
      "end": 164
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 175,
            "end": 184
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "definite": false,
          "start": 175,
          "end": 188
        }
      ],
      "declare": false,
      "start": 171,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
        },
        "start": 196,
        "end": 201
      },
      "directive": null,
      "start": 196,
      "end": 202
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Others",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 226
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 240,
                      "end": 243
                    },
                    "start": 238,
                    "end": 243
                  },
                  "start": 237,
                  "end": 243
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "definite": false,
                "start": 237,
                "end": 247
              }
            ],
            "declare": false,
            "start": 233,
            "end": 248
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 281
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 283,
                      "end": 289
                    },
                    "start": 281,
                    "end": 289
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
                  "start": 278,
                  "end": 290
                }
              ],
              "start": 268,
              "end": 296
            },
            "abstract": false,
            "declare": false,
            "start": 260,
            "end": 296
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
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    "start": 307,
                    "end": 310
                  },
                  "start": 305,
                  "end": 310
                },
                "init": null,
                "definite": false,
                "start": 305,
                "end": 310
              }
            ],
            "declare": false,
            "start": 301,
            "end": 311
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 327
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 341
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 343,
                      "end": 349
                    },
                    "start": 341,
                    "end": 349
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 338,
                  "end": 350
                }
              ],
              "start": 328,
              "end": 356
            },
            "declare": false,
            "start": 316,
            "end": 356
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
                  "name": "ai",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 370
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 370
                    },
                    "start": 367,
                    "end": 370
                  },
                  "start": 365,
                  "end": 370
                },
                "init": null,
                "definite": false,
                "start": 365,
                "end": 370
              }
            ],
            "declare": false,
            "start": 361,
            "end": 371
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 384,
                      "end": 390
                    },
                    "start": 382,
                    "end": 390
                  },
                  "start": 381,
                  "end": 390
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "definite": false,
                "start": 381,
                "end": 394
              }
            ],
            "declare": false,
            "start": 377,
            "end": 395
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 413,
                      "end": 419
                    },
                    "start": 411,
                    "end": 419
                  },
                  "start": 410,
                  "end": 419
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 423
                },
                "definite": false,
                "start": 410,
                "end": 423
              }
            ],
            "declare": false,
            "start": 406,
            "end": 424
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 436,
                      "end": 443
                    },
                    "start": 434,
                    "end": 443
                  },
                  "start": 433,
                  "end": 443
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "definite": false,
                "start": 433,
                "end": 447
              }
            ],
            "declare": false,
            "start": 429,
            "end": 448
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
                  "name": "ee",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 465
                      },
                      "typeArguments": null,
                      "start": 461,
                      "end": 465
                    },
                    "start": 459,
                    "end": 465
                  },
                  "start": 457,
                  "end": 465
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 469
                },
                "definite": false,
                "start": 457,
                "end": 469
              }
            ],
            "declare": false,
            "start": 453,
            "end": 470
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 482,
                      "end": 485
                    },
                    "start": 480,
                    "end": 485
                  },
                  "start": 479,
                  "end": 485
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 489
                },
                "definite": false,
                "start": 479,
                "end": 489
              }
            ],
            "declare": false,
            "start": 475,
            "end": 490
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 508,
                      "end": 512
                    },
                    "start": 506,
                    "end": 512
                  },
                  "start": 505,
                  "end": 512
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 516
                },
                "definite": false,
                "start": 505,
                "end": 516
              }
            ],
            "declare": false,
            "start": 501,
            "end": 517
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
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 535
                      },
                      "typeArguments": null,
                      "start": 529,
                      "end": 535
                    },
                    "start": 527,
                    "end": 535
                  },
                  "start": 526,
                  "end": 535
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 539
                },
                "definite": false,
                "start": 526,
                "end": 539
              }
            ],
            "declare": false,
            "start": 522,
            "end": 540
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 552,
                      "end": 554
                    },
                    "start": 550,
                    "end": 554
                  },
                  "start": 549,
                  "end": 554
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
                },
                "definite": false,
                "start": 549,
                "end": 558
              }
            ],
            "declare": false,
            "start": 545,
            "end": 559
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
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 577,
                          "end": 579
                        },
                        "start": 574,
                        "end": 579
                      },
                      "start": 571,
                      "end": 579
                    },
                    "start": 569,
                    "end": 579
                  },
                  "start": 568,
                  "end": 579
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 583
                },
                "definite": false,
                "start": 568,
                "end": 583
              }
            ],
            "declare": false,
            "start": 564,
            "end": 584
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
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 596,
                        "end": 604
                      },
                      "typeArguments": null,
                      "start": 596,
                      "end": 604
                    },
                    "start": 594,
                    "end": 604
                  },
                  "start": 593,
                  "end": 604
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 607,
                  "end": 608
                },
                "definite": false,
                "start": 593,
                "end": 608
              }
            ],
            "declare": false,
            "start": 589,
            "end": 609
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 625,
                              "end": 631
                            },
                            "start": 623,
                            "end": 631
                          },
                          "start": 622,
                          "end": 631
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 636,
                          "end": 642
                        },
                        "start": 633,
                        "end": 642
                      },
                      "start": 621,
                      "end": 642
                    },
                    "start": 619,
                    "end": 642
                  },
                  "start": 618,
                  "end": 642
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 646
                },
                "definite": false,
                "start": 618,
                "end": 646
              }
            ],
            "declare": false,
            "start": 614,
            "end": 647
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ac",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 654
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 658
              },
              "start": 652,
              "end": 658
            },
            "directive": null,
            "start": 652,
            "end": 659
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ai",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 666
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 670
              },
              "start": 664,
              "end": 670
            },
            "directive": null,
            "start": 664,
            "end": 671
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 683,
                        "end": 689
                      },
                      "start": 683,
                      "end": 691
                    },
                    "start": 681,
                    "end": 691
                  },
                  "start": 680,
                  "end": 691
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 695
                },
                "definite": false,
                "start": 680,
                "end": 695
              }
            ],
            "declare": false,
            "start": 676,
            "end": 696
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
                  "name": "n",
                  "optional": false,
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 710,
                            "end": 713
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 715,
                              "end": 721
                            },
                            "start": 713,
                            "end": 721
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 710,
                          "end": 721
                        }
                      ],
                      "start": 708,
                      "end": 723
                    },
                    "start": 706,
                    "end": 723
                  },
                  "start": 705,
                  "end": 723
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 727
                },
                "definite": false,
                "start": 705,
                "end": 727
              }
            ],
            "declare": false,
            "start": 701,
            "end": 728
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 741,
                              "end": 742
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 741,
                            "end": 742
                          }
                        ],
                        "start": 740,
                        "end": 743
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 747,
                                "end": 748
                              },
                              "typeArguments": null,
                              "start": 747,
                              "end": 748
                            },
                            "start": 745,
                            "end": 748
                          },
                          "start": 744,
                          "end": 748
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 753,
                            "end": 754
                          },
                          "typeArguments": null,
                          "start": 753,
                          "end": 754
                        },
                        "start": 750,
                        "end": 754
                      },
                      "start": 740,
                      "end": 754
                    },
                    "start": 738,
                    "end": 754
                  },
                  "start": 737,
                  "end": 754
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 758
                },
                "definite": false,
                "start": 737,
                "end": 758
              }
            ],
            "declare": false,
            "start": 733,
            "end": 759
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 771,
                        "end": 777
                      },
                      "typeArguments": null,
                      "start": 771,
                      "end": 777
                    },
                    "start": 769,
                    "end": 777
                  },
                  "start": 768,
                  "end": 777
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 781
                },
                "definite": false,
                "start": 768,
                "end": 781
              }
            ],
            "declare": false,
            "start": 764,
            "end": 782
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
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "String",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 800
                      },
                      "typeArguments": null,
                      "start": 794,
                      "end": 800
                    },
                    "start": 792,
                    "end": 800
                  },
                  "start": 791,
                  "end": 800
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 804
                },
                "definite": false,
                "start": 791,
                "end": 804
              }
            ],
            "declare": false,
            "start": 787,
            "end": 805
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 823
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 825
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 824,
                  "end": 825
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 828
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 838
                    },
                    "typeArguments": null,
                    "start": 837,
                    "end": 838
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 827,
                  "end": 838
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 841
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 850,
                      "end": 854
                    },
                    "typeArguments": null,
                    "start": 850,
                    "end": 854
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 840,
                  "end": 854
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 856,
                    "end": 857
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 872
                    },
                    "typeArguments": null,
                    "start": 866,
                    "end": 872
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 856,
                  "end": 872
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 875
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 884,
                      "end": 885
                    },
                    "typeArguments": null,
                    "start": 884,
                    "end": 885
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 874,
                  "end": 885
                }
              ],
              "start": 823,
              "end": 886
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 890,
                      "end": 891
                    },
                    "typeArguments": null,
                    "start": 890,
                    "end": 891
                  },
                  "start": 888,
                  "end": 891
                },
                "start": 887,
                "end": 891
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 897
                    },
                    "typeArguments": null,
                    "start": 896,
                    "end": 897
                  },
                  "start": 894,
                  "end": 897
                },
                "start": 893,
                "end": 897
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 903
                    },
                    "typeArguments": null,
                    "start": 902,
                    "end": 903
                  },
                  "start": 900,
                  "end": 903
                },
                "start": 899,
                "end": 903
              }
            ],
            "returnType": null,
            "body": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 915,
                      "end": 916
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 920
                    },
                    "start": 915,
                    "end": 920
                  },
                  "directive": null,
                  "start": 915,
                  "end": 921
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 930,
                      "end": 931
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 935
                    },
                    "start": 930,
                    "end": 935
                  },
                  "directive": null,
                  "start": 930,
                  "end": 936
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 945,
                      "end": 946
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 949,
                      "end": 950
                    },
                    "start": 945,
                    "end": 950
                  },
                  "directive": null,
                  "start": 945,
                  "end": 951
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 967,
                              "end": 968
                            },
                            "typeArguments": null,
                            "start": 967,
                            "end": 968
                          },
                          "start": 965,
                          "end": 968
                        },
                        "start": 964,
                        "end": 968
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 972
                      },
                      "definite": false,
                      "start": 964,
                      "end": 972
                    }
                  ],
                  "declare": false,
                  "start": 960,
                  "end": 973
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 989,
                              "end": 990
                            },
                            "typeArguments": null,
                            "start": 989,
                            "end": 990
                          },
                          "start": 987,
                          "end": 990
                        },
                        "start": 986,
                        "end": 990
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 994
                      },
                      "definite": false,
                      "start": 986,
                      "end": 994
                    }
                  ],
                  "declare": false,
                  "start": 982,
                  "end": 995
                }
              ],
              "start": 905,
              "end": 1001
            },
            "expression": false,
            "start": 811,
            "end": 1001
          }
        ],
        "start": 227,
        "end": 1003
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 1003
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 75,
  "end": 1003
}
```
