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
        "start": 217,
        "end": 223
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
                      "start": 237,
                      "end": 240
                    },
                    "start": 235,
                    "end": 240
                  },
                  "start": 234,
                  "end": 240
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "definite": false,
                "start": 234,
                "end": 244
              }
            ],
            "declare": false,
            "start": 230,
            "end": 245
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
              "start": 263,
              "end": 264
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
                    "start": 275,
                    "end": 278
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    },
                    "start": 278,
                    "end": 286
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
                  "start": 275,
                  "end": 287
                }
              ],
              "start": 265,
              "end": 293
            },
            "abstract": false,
            "declare": false,
            "start": 257,
            "end": 293
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
                        "start": 306,
                        "end": 307
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 307
                    },
                    "start": 304,
                    "end": 307
                  },
                  "start": 302,
                  "end": 307
                },
                "init": null,
                "definite": false,
                "start": 302,
                "end": 307
              }
            ],
            "declare": false,
            "start": 298,
            "end": 308
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
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
                    "start": 335,
                    "end": 338
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 340,
                      "end": 346
                    },
                    "start": 338,
                    "end": 346
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 335,
                  "end": 347
                }
              ],
              "start": 325,
              "end": 353
            },
            "declare": false,
            "start": 313,
            "end": 353
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
                        "start": 366,
                        "end": 367
                      },
                      "typeArguments": null,
                      "start": 366,
                      "end": 367
                    },
                    "start": 364,
                    "end": 367
                  },
                  "start": 362,
                  "end": 367
                },
                "init": null,
                "definite": false,
                "start": 362,
                "end": 367
              }
            ],
            "declare": false,
            "start": 358,
            "end": 368
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
                      "start": 381,
                      "end": 387
                    },
                    "start": 379,
                    "end": 387
                  },
                  "start": 378,
                  "end": 387
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 391
                },
                "definite": false,
                "start": 378,
                "end": 391
              }
            ],
            "declare": false,
            "start": 374,
            "end": 392
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
                      "start": 410,
                      "end": 416
                    },
                    "start": 408,
                    "end": 416
                  },
                  "start": 407,
                  "end": 416
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 420
                },
                "definite": false,
                "start": 407,
                "end": 420
              }
            ],
            "declare": false,
            "start": 403,
            "end": 421
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
                      "start": 433,
                      "end": 440
                    },
                    "start": 431,
                    "end": 440
                  },
                  "start": 430,
                  "end": 440
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 444
                },
                "definite": false,
                "start": 430,
                "end": 444
              }
            ],
            "declare": false,
            "start": 426,
            "end": 445
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
                        "start": 458,
                        "end": 462
                      },
                      "typeArguments": null,
                      "start": 458,
                      "end": 462
                    },
                    "start": 456,
                    "end": 462
                  },
                  "start": 454,
                  "end": 462
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "definite": false,
                "start": 454,
                "end": 466
              }
            ],
            "declare": false,
            "start": 450,
            "end": 467
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
                      "start": 479,
                      "end": 482
                    },
                    "start": 477,
                    "end": 482
                  },
                  "start": 476,
                  "end": 482
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "definite": false,
                "start": 476,
                "end": 486
              }
            ],
            "declare": false,
            "start": 472,
            "end": 487
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
                      "start": 505,
                      "end": 509
                    },
                    "start": 503,
                    "end": 509
                  },
                  "start": 502,
                  "end": 509
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
                },
                "definite": false,
                "start": 502,
                "end": 513
              }
            ],
            "declare": false,
            "start": 498,
            "end": 514
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
                        "start": 526,
                        "end": 532
                      },
                      "typeArguments": null,
                      "start": 526,
                      "end": 532
                    },
                    "start": 524,
                    "end": 532
                  },
                  "start": 523,
                  "end": 532
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "definite": false,
                "start": 523,
                "end": 536
              }
            ],
            "declare": false,
            "start": 519,
            "end": 537
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
                      "start": 549,
                      "end": 551
                    },
                    "start": 547,
                    "end": 551
                  },
                  "start": 546,
                  "end": 551
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "definite": false,
                "start": 546,
                "end": 555
              }
            ],
            "declare": false,
            "start": 542,
            "end": 556
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
                          "start": 574,
                          "end": 576
                        },
                        "start": 571,
                        "end": 576
                      },
                      "start": 568,
                      "end": 576
                    },
                    "start": 566,
                    "end": 576
                  },
                  "start": 565,
                  "end": 576
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 580
                },
                "definite": false,
                "start": 565,
                "end": 580
              }
            ],
            "declare": false,
            "start": 561,
            "end": 581
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
                        "start": 593,
                        "end": 601
                      },
                      "typeArguments": null,
                      "start": 593,
                      "end": 601
                    },
                    "start": 591,
                    "end": 601
                  },
                  "start": 590,
                  "end": 601
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "definite": false,
                "start": 590,
                "end": 605
              }
            ],
            "declare": false,
            "start": 586,
            "end": 606
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
                              "start": 622,
                              "end": 628
                            },
                            "start": 620,
                            "end": 628
                          },
                          "start": 619,
                          "end": 628
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 633,
                          "end": 639
                        },
                        "start": 630,
                        "end": 639
                      },
                      "start": 618,
                      "end": 639
                    },
                    "start": 616,
                    "end": 639
                  },
                  "start": 615,
                  "end": 639
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 643
                },
                "definite": false,
                "start": 615,
                "end": 643
              }
            ],
            "declare": false,
            "start": 611,
            "end": 644
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
                "start": 649,
                "end": 651
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 655
              },
              "start": 649,
              "end": 655
            },
            "directive": null,
            "start": 649,
            "end": 656
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
                "start": 661,
                "end": 663
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 667
              },
              "start": 661,
              "end": 667
            },
            "directive": null,
            "start": 661,
            "end": 668
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
                        "start": 680,
                        "end": 686
                      },
                      "start": 680,
                      "end": 688
                    },
                    "start": 678,
                    "end": 688
                  },
                  "start": 677,
                  "end": 688
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 692
                },
                "definite": false,
                "start": 677,
                "end": 692
              }
            ],
            "declare": false,
            "start": 673,
            "end": 693
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
                            "start": 707,
                            "end": 710
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 712,
                              "end": 718
                            },
                            "start": 710,
                            "end": 718
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 707,
                          "end": 718
                        }
                      ],
                      "start": 705,
                      "end": 720
                    },
                    "start": 703,
                    "end": 720
                  },
                  "start": 702,
                  "end": 720
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 724
                },
                "definite": false,
                "start": 702,
                "end": 724
              }
            ],
            "declare": false,
            "start": 698,
            "end": 725
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
                              "start": 738,
                              "end": 739
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 738,
                            "end": 739
                          }
                        ],
                        "start": 737,
                        "end": 740
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
                                "start": 744,
                                "end": 745
                              },
                              "typeArguments": null,
                              "start": 744,
                              "end": 745
                            },
                            "start": 742,
                            "end": 745
                          },
                          "start": 741,
                          "end": 745
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
                            "start": 750,
                            "end": 751
                          },
                          "typeArguments": null,
                          "start": 750,
                          "end": 751
                        },
                        "start": 747,
                        "end": 751
                      },
                      "start": 737,
                      "end": 751
                    },
                    "start": 735,
                    "end": 751
                  },
                  "start": 734,
                  "end": 751
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 755
                },
                "definite": false,
                "start": 734,
                "end": 755
              }
            ],
            "declare": false,
            "start": 730,
            "end": 756
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
                        "start": 768,
                        "end": 774
                      },
                      "typeArguments": null,
                      "start": 768,
                      "end": 774
                    },
                    "start": 766,
                    "end": 774
                  },
                  "start": 765,
                  "end": 774
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 778
                },
                "definite": false,
                "start": 765,
                "end": 778
              }
            ],
            "declare": false,
            "start": 761,
            "end": 779
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
                        "start": 791,
                        "end": 797
                      },
                      "typeArguments": null,
                      "start": 791,
                      "end": 797
                    },
                    "start": 789,
                    "end": 797
                  },
                  "start": 788,
                  "end": 797
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 801
                },
                "definite": false,
                "start": 788,
                "end": 801
              }
            ],
            "declare": false,
            "start": 784,
            "end": 802
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 820
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
                    "start": 821,
                    "end": 822
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 821,
                  "end": 822
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 825
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 835
                    },
                    "typeArguments": null,
                    "start": 834,
                    "end": 835
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 824,
                  "end": 835
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 838
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 851
                    },
                    "typeArguments": null,
                    "start": 847,
                    "end": 851
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 837,
                  "end": 851
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 853,
                    "end": 854
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 869
                    },
                    "typeArguments": null,
                    "start": 863,
                    "end": 869
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 853,
                  "end": 869
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 872
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 881,
                      "end": 882
                    },
                    "typeArguments": null,
                    "start": 881,
                    "end": 882
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 871,
                  "end": 882
                }
              ],
              "start": 820,
              "end": 883
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
                      "start": 887,
                      "end": 888
                    },
                    "typeArguments": null,
                    "start": 887,
                    "end": 888
                  },
                  "start": 885,
                  "end": 888
                },
                "start": 884,
                "end": 888
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
                      "start": 893,
                      "end": 894
                    },
                    "typeArguments": null,
                    "start": 893,
                    "end": 894
                  },
                  "start": 891,
                  "end": 894
                },
                "start": 890,
                "end": 894
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
                      "start": 899,
                      "end": 900
                    },
                    "typeArguments": null,
                    "start": 899,
                    "end": 900
                  },
                  "start": 897,
                  "end": 900
                },
                "start": 896,
                "end": 900
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
                      "start": 912,
                      "end": 913
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 916,
                      "end": 917
                    },
                    "start": 912,
                    "end": 917
                  },
                  "directive": null,
                  "start": 912,
                  "end": 918
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
                      "start": 927,
                      "end": 928
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 931,
                      "end": 932
                    },
                    "start": 927,
                    "end": 932
                  },
                  "directive": null,
                  "start": 927,
                  "end": 933
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
                      "start": 942,
                      "end": 943
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 946,
                      "end": 947
                    },
                    "start": 942,
                    "end": 947
                  },
                  "directive": null,
                  "start": 942,
                  "end": 948
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
                              "start": 964,
                              "end": 965
                            },
                            "typeArguments": null,
                            "start": 964,
                            "end": 965
                          },
                          "start": 962,
                          "end": 965
                        },
                        "start": 961,
                        "end": 965
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 969
                      },
                      "definite": false,
                      "start": 961,
                      "end": 969
                    }
                  ],
                  "declare": false,
                  "start": 957,
                  "end": 970
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
                              "start": 986,
                              "end": 987
                            },
                            "typeArguments": null,
                            "start": 986,
                            "end": 987
                          },
                          "start": 984,
                          "end": 987
                        },
                        "start": 983,
                        "end": 987
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 991
                      },
                      "definite": false,
                      "start": 983,
                      "end": 991
                    }
                  ],
                  "declare": false,
                  "start": 979,
                  "end": 992
                }
              ],
              "start": 902,
              "end": 998
            },
            "expression": false,
            "start": 808,
            "end": 998
          }
        ],
        "start": 224,
        "end": 1000
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 1000
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 75,
  "end": 1000
}
```
