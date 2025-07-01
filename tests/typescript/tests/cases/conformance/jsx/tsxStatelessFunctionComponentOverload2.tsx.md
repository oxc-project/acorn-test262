__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 57
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 72
            },
            "start": 61,
            "end": 72
          },
          "typeArguments": null,
          "start": 61,
          "end": 72
        },
        "start": 59,
        "end": 72
      },
      "body": null,
      "expression": false,
      "start": 32,
      "end": 73
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 106
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 108,
                      "end": 114
                    },
                    "start": 106,
                    "end": 114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 104,
                  "end": 115
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 119
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
                    },
                    "start": 119,
                    "end": 127
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 116,
                  "end": 127
                }
              ],
              "start": 103,
              "end": 128
            },
            "start": 101,
            "end": 128
          },
          "start": 100,
          "end": 128
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 142
            },
            "start": 131,
            "end": 142
          },
          "typeArguments": null,
          "start": 131,
          "end": 142
        },
        "start": 129,
        "end": 142
      },
      "body": null,
      "expression": false,
      "start": 74,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 152
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
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 163
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 165,
                  "end": 167
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 167
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 176
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 178,
                  "end": 185
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 173,
                "end": 185
              }
            ],
            "start": 155,
            "end": 187
          },
          "definite": false,
          "start": 149,
          "end": 187
        }
      ],
      "declare": false,
      "start": 145,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 197
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
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 208
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 210,
                  "end": 214
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 214
              }
            ],
            "start": 200,
            "end": 216
          },
          "definite": false,
          "start": 193,
          "end": 216
        }
      ],
      "declare": false,
      "start": 189,
      "end": 216
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
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
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 237
                },
                "value": {
                  "type": "Literal",
                  "value": 500,
                  "raw": "500",
                  "start": 239,
                  "end": 242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 242
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "ignore-prop",
                  "raw": "\"ignore-prop\"",
                  "start": 248,
                  "end": 261
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 263,
                  "end": 270
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 248,
                "end": 270
              }
            ],
            "start": 229,
            "end": 272
          },
          "definite": false,
          "start": 222,
          "end": 272
        }
      ],
      "declare": false,
      "start": 218,
      "end": 272
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 290,
                "end": 293
              },
              "start": 288,
              "end": 293
            },
            "start": 278,
            "end": 293
          },
          "init": null,
          "definite": false,
          "start": 278,
          "end": 293
        }
      ],
      "declare": false,
      "start": 274,
      "end": 294
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 310
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 314,
                "end": 322
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 313,
              "end": 325
            },
            "children": [],
            "closingElement": null,
            "start": 313,
            "end": 325
          },
          "definite": false,
          "start": 308,
          "end": 325
        }
      ],
      "declare": false,
      "start": 302,
      "end": 325
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 338,
                "end": 346
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 354
                  },
                  "start": 347,
                  "end": 355
                }
              ],
              "selfClosing": true,
              "start": 337,
              "end": 357
            },
            "children": [],
            "closingElement": null,
            "start": 337,
            "end": 357
          },
          "definite": false,
          "start": 332,
          "end": 357
        }
      ],
      "declare": false,
      "start": 326,
      "end": 357
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 366
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 370,
                "end": 378
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 383,
                    "end": 385
                  },
                  "start": 379,
                  "end": 386
                }
              ],
              "selfClosing": true,
              "start": 369,
              "end": 389
            },
            "children": [],
            "closingElement": null,
            "start": 369,
            "end": 389
          },
          "definite": false,
          "start": 364,
          "end": 389
        }
      ],
      "declare": false,
      "start": 358,
      "end": 389
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 398
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 402,
                "end": 410
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 419
                  },
                  "start": 411,
                  "end": 420
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 428
                  },
                  "start": 421,
                  "end": 429
                }
              ],
              "selfClosing": true,
              "start": 401,
              "end": 432
            },
            "children": [],
            "closingElement": null,
            "start": 401,
            "end": 432
          },
          "definite": false,
          "start": 396,
          "end": 432
        }
      ],
      "declare": false,
      "start": 390,
      "end": 432
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 445,
                "end": 453
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 462
                  },
                  "start": 454,
                  "end": 463
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 464,
                    "end": 466
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 468,
                      "end": 470
                    },
                    "start": 467,
                    "end": 471
                  },
                  "start": 464,
                  "end": 471
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 480
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 482,
                          "end": 486
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 477,
                        "end": 486
                      }
                    ],
                    "start": 476,
                    "end": 487
                  },
                  "start": 472,
                  "end": 488
                }
              ],
              "selfClosing": true,
              "start": 444,
              "end": 490
            },
            "children": [],
            "closingElement": null,
            "start": 444,
            "end": 490
          },
          "definite": false,
          "start": 439,
          "end": 490
        }
      ],
      "declare": false,
      "start": 433,
      "end": 490
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
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 499
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 503,
                "end": 511
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 520
                  },
                  "start": 512,
                  "end": 521
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 527,
                          "end": 529
                        },
                        "value": {
                          "type": "Literal",
                          "value": 10000,
                          "raw": "10000",
                          "start": 531,
                          "end": 536
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 527,
                        "end": 536
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 541
                        },
                        "value": {
                          "type": "Literal",
                          "value": "true",
                          "raw": "\"true\"",
                          "start": 543,
                          "end": 549
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 538,
                        "end": 549
                      }
                    ],
                    "start": 526,
                    "end": 550
                  },
                  "start": 522,
                  "end": 551
                }
              ],
              "selfClosing": true,
              "start": 502,
              "end": 554
            },
            "children": [],
            "closingElement": null,
            "start": 502,
            "end": 554
          },
          "definite": false,
          "start": 497,
          "end": 554
        }
      ],
      "declare": false,
      "start": 491,
      "end": 554
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 563
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 567,
                "end": 575
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 590
                  },
                  "start": 576,
                  "end": 591
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 592,
                    "end": 594
                  },
                  "value": null,
                  "start": 592,
                  "end": 594
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 602
                  },
                  "start": 595,
                  "end": 603
                }
              ],
              "selfClosing": true,
              "start": 566,
              "end": 606
            },
            "children": [],
            "closingElement": null,
            "start": 566,
            "end": 606
          },
          "definite": false,
          "start": 561,
          "end": 606
        }
      ],
      "declare": false,
      "start": 555,
      "end": 607
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
            "name": "c8",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 658
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 662,
                "end": 670
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ignore-prop",
                    "start": 671,
                    "end": 682
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 684,
                      "end": 687
                    },
                    "start": 683,
                    "end": 688
                  },
                  "start": 671,
                  "end": 688
                }
              ],
              "selfClosing": true,
              "start": 661,
              "end": 691
            },
            "children": [],
            "closingElement": null,
            "start": 661,
            "end": 691
          },
          "definite": false,
          "start": 656,
          "end": 691
        }
      ],
      "declare": false,
      "start": 650,
      "end": 691
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
            "name": "c9",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 700
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 704,
                "end": 712
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": "ignore-prop",
                          "raw": "\"ignore-prop\"",
                          "start": 719,
                          "end": 732
                        },
                        "value": {
                          "type": "Literal",
                          "value": 200,
                          "raw": "200",
                          "start": 733,
                          "end": 736
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 719,
                        "end": 736
                      }
                    ],
                    "start": 717,
                    "end": 738
                  },
                  "start": 713,
                  "end": 739
                }
              ],
              "selfClosing": true,
              "start": 703,
              "end": 742
            },
            "children": [],
            "closingElement": null,
            "start": 703,
            "end": 742
          },
          "definite": false,
          "start": 698,
          "end": 742
        }
      ],
      "declare": false,
      "start": 692,
      "end": 743
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
            "name": "c10",
            "optional": false,
            "typeAnnotation": null,
            "start": 750,
            "end": 753
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 757,
                "end": 765
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 774
                  },
                  "start": 766,
                  "end": 775
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy1",
                    "start": 776,
                    "end": 779
                  },
                  "value": {
                    "type": "Literal",
                    "value": "boo",
                    "raw": "\"boo\"",
                    "start": 780,
                    "end": 785
                  },
                  "start": 776,
                  "end": 785
                }
              ],
              "selfClosing": true,
              "start": 756,
              "end": 788
            },
            "children": [],
            "closingElement": null,
            "start": 756,
            "end": 788
          },
          "definite": false,
          "start": 750,
          "end": 788
        }
      ],
      "declare": false,
      "start": 744,
      "end": 789
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 789
}
```
