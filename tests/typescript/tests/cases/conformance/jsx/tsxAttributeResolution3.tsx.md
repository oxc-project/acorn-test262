__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 82
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 84,
                        "end": 92
                      },
                      "typeArguments": null,
                      "start": 84,
                      "end": 92
                    },
                    "start": 82,
                    "end": 92
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 93
                }
              ],
              "start": 73,
              "end": 96
            },
            "declare": false,
            "start": 45,
            "end": 96
          }
        ],
        "start": 19,
        "end": 98
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 117
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 131
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 137,
                "end": 143
              },
              "start": 135,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 144
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 150,
                "end": 156
              },
              "start": 148,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 146,
            "end": 157
          }
        ],
        "start": 118,
        "end": 159
      },
      "declare": false,
      "start": 99,
      "end": 159
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 175
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 183,
                  "end": 188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 180,
                "end": 188
              }
            ],
            "start": 178,
            "end": 190
          },
          "definite": false,
          "start": 171,
          "end": 190
        }
      ],
      "declare": false,
      "start": 167,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 193,
            "end": 198
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
                "start": 203,
                "end": 207
              },
              "start": 199,
              "end": 208
            }
          ],
          "selfClosing": true,
          "start": 192,
          "end": 211
        },
        "children": [],
        "closingElement": null,
        "start": 192,
        "end": 211
      },
      "directive": null,
      "start": 192,
      "end": 211
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 247
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 255,
                  "end": 257
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 252,
                "end": 257
              }
            ],
            "start": 250,
            "end": 259
          },
          "definite": false,
          "start": 243,
          "end": 259
        }
      ],
      "declare": false,
      "start": 239,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 262,
            "end": 267
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
                "start": 272,
                "end": 276
              },
              "start": 268,
              "end": 277
            }
          ],
          "selfClosing": true,
          "start": 261,
          "end": 280
        },
        "children": [],
        "closingElement": null,
        "start": 261,
        "end": 280
      },
      "directive": null,
      "start": 261,
      "end": 280
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 313
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 319
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 321,
                  "end": 323
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 323
              }
            ],
            "start": 316,
            "end": 325
          },
          "definite": false,
          "start": 309,
          "end": 325
        }
      ],
      "declare": false,
      "start": 305,
      "end": 326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 328,
            "end": 333
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj3",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 342
              },
              "start": 334,
              "end": 343
            }
          ],
          "selfClosing": true,
          "start": 327,
          "end": 346
        },
        "children": [],
        "closingElement": null,
        "start": 327,
        "end": 346
      },
      "directive": null,
      "start": 327,
      "end": 346
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
            "name": "obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 362
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 370,
                  "end": 372
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 367,
                "end": 372
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 375
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 377,
                  "end": 379
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 374,
                "end": 379
              }
            ],
            "start": 365,
            "end": 381
          },
          "definite": false,
          "start": 358,
          "end": 381
        }
      ],
      "declare": false,
      "start": 354,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 384,
            "end": 389
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj4",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 398
              },
              "start": 390,
              "end": 399
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 400,
                "end": 401
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 402,
                "end": 406
              },
              "start": 400,
              "end": 406
            }
          ],
          "selfClosing": true,
          "start": 383,
          "end": 409
        },
        "children": [],
        "closingElement": null,
        "start": 383,
        "end": 409
      },
      "directive": null,
      "start": 383,
      "end": 409
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
            "name": "obj5",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 428
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 436,
                  "end": 438
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 438
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 441
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 443,
                  "end": 445
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 440,
                "end": 445
              }
            ],
            "start": 431,
            "end": 447
          },
          "definite": false,
          "start": 424,
          "end": 447
        }
      ],
      "declare": false,
      "start": 420,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 450,
            "end": 455
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 456,
                "end": 457
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 458,
                "end": 462
              },
              "start": 456,
              "end": 462
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 471
              },
              "start": 463,
              "end": 472
            }
          ],
          "selfClosing": true,
          "start": 449,
          "end": 475
        },
        "children": [],
        "closingElement": null,
        "start": 449,
        "end": 475
      },
      "directive": null,
      "start": 449,
      "end": 475
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
            "name": "obj6",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 491
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 499,
                  "end": 503
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 496,
                "end": 503
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 506
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 508,
                  "end": 510
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 505,
                "end": 510
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 517
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 519,
                  "end": 522
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 512,
                "end": 522
              }
            ],
            "start": 494,
            "end": 524
          },
          "definite": false,
          "start": 487,
          "end": 524
        }
      ],
      "declare": false,
      "start": 483,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 527,
            "end": 532
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 541
              },
              "start": 533,
              "end": 542
            }
          ],
          "selfClosing": true,
          "start": 526,
          "end": 545
        },
        "children": [],
        "closingElement": null,
        "start": 526,
        "end": 545
      },
      "directive": null,
      "start": 526,
      "end": 545
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
            "name": "obj7",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 579
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 585
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 587,
                  "end": 592
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 584,
                "end": 592
              }
            ],
            "start": 582,
            "end": 594
          },
          "definite": false,
          "start": 575,
          "end": 594
        }
      ],
      "declare": false,
      "start": 571,
      "end": 595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 597,
            "end": 602
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 603,
                "end": 604
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 606,
                  "end": 608
                },
                "start": 605,
                "end": 609
              },
              "start": 603,
              "end": 609
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 618
              },
              "start": 610,
              "end": 619
            }
          ],
          "selfClosing": true,
          "start": 596,
          "end": 622
        },
        "children": [],
        "closingElement": null,
        "start": 596,
        "end": 622
      },
      "directive": null,
      "start": 596,
      "end": 622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 622
}
```
