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
        "start": 18,
        "end": 21
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
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
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
                    "start": 80,
                    "end": 85
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
                        "start": 87,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 95
                    },
                    "start": 85,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 96
                }
              ],
              "start": 76,
              "end": 99
            },
            "declare": false,
            "start": 48,
            "end": 99
          }
        ],
        "start": 22,
        "end": 101
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 120
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
              "start": 124,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 134
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
              "start": 136,
              "end": 137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
              },
              "start": 138,
              "end": 146
            },
            "accessibility": null,
            "static": false,
            "start": 136,
            "end": 147
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
              "start": 149,
              "end": 150
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 149,
            "end": 160
          }
        ],
        "start": 121,
        "end": 162
      },
      "declare": false,
      "start": 102,
      "end": 162
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
            "start": 174,
            "end": 178
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
                  "start": 183,
                  "end": 184
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 186,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 183,
                "end": 191
              }
            ],
            "start": 181,
            "end": 193
          },
          "definite": false,
          "start": 174,
          "end": 193
        }
      ],
      "declare": false,
      "start": 170,
      "end": 194
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
            "start": 196,
            "end": 201
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
                "start": 206,
                "end": 210
              },
              "start": 202,
              "end": 211
            }
          ],
          "selfClosing": true,
          "start": 195,
          "end": 214
        },
        "children": [],
        "closingElement": null,
        "start": 195,
        "end": 214
      },
      "directive": null,
      "start": 195,
      "end": 214
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
            "start": 246,
            "end": 250
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
                  "start": 255,
                  "end": 256
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 258,
                  "end": 260
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 255,
                "end": 260
              }
            ],
            "start": 253,
            "end": 262
          },
          "definite": false,
          "start": 246,
          "end": 262
        }
      ],
      "declare": false,
      "start": 242,
      "end": 263
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
            "start": 265,
            "end": 270
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
                "start": 275,
                "end": 279
              },
              "start": 271,
              "end": 280
            }
          ],
          "selfClosing": true,
          "start": 264,
          "end": 283
        },
        "children": [],
        "closingElement": null,
        "start": 264,
        "end": 283
      },
      "directive": null,
      "start": 264,
      "end": 283
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
            "start": 312,
            "end": 316
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
                  "start": 321,
                  "end": 322
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 324,
                  "end": 326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 321,
                "end": 326
              }
            ],
            "start": 319,
            "end": 328
          },
          "definite": false,
          "start": 312,
          "end": 328
        }
      ],
      "declare": false,
      "start": 308,
      "end": 329
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
            "start": 331,
            "end": 336
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
                "start": 341,
                "end": 345
              },
              "start": 337,
              "end": 346
            }
          ],
          "selfClosing": true,
          "start": 330,
          "end": 349
        },
        "children": [],
        "closingElement": null,
        "start": 330,
        "end": 349
      },
      "directive": null,
      "start": 330,
      "end": 349
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
            "start": 361,
            "end": 365
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
                  "start": 370,
                  "end": 371
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 373,
                  "end": 375
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 370,
                "end": 375
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
                  "start": 377,
                  "end": 378
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 380,
                  "end": 382
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 377,
                "end": 382
              }
            ],
            "start": 368,
            "end": 384
          },
          "definite": false,
          "start": 361,
          "end": 384
        }
      ],
      "declare": false,
      "start": 357,
      "end": 385
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
            "start": 387,
            "end": 392
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
                "start": 397,
                "end": 401
              },
              "start": 393,
              "end": 402
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 403,
                "end": 404
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 405,
                "end": 409
              },
              "start": 403,
              "end": 409
            }
          ],
          "selfClosing": true,
          "start": 386,
          "end": 412
        },
        "children": [],
        "closingElement": null,
        "start": 386,
        "end": 412
      },
      "directive": null,
      "start": 386,
      "end": 412
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
            "start": 427,
            "end": 431
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
                  "start": 436,
                  "end": 437
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 439,
                  "end": 441
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 436,
                "end": 441
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
                  "start": 443,
                  "end": 444
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 446,
                  "end": 448
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 443,
                "end": 448
              }
            ],
            "start": 434,
            "end": 450
          },
          "definite": false,
          "start": 427,
          "end": 450
        }
      ],
      "declare": false,
      "start": 423,
      "end": 451
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
            "start": 453,
            "end": 458
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 459,
                "end": 460
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 461,
                "end": 465
              },
              "start": 459,
              "end": 465
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 474
              },
              "start": 466,
              "end": 475
            }
          ],
          "selfClosing": true,
          "start": 452,
          "end": 478
        },
        "children": [],
        "closingElement": null,
        "start": 452,
        "end": 478
      },
      "directive": null,
      "start": 452,
      "end": 478
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
            "start": 490,
            "end": 494
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
                  "start": 499,
                  "end": 500
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 502,
                  "end": 506
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 499,
                "end": 506
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
                  "start": 508,
                  "end": 509
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 511,
                  "end": 513
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 508,
                "end": 513
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
                  "start": 515,
                  "end": 520
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 522,
                  "end": 525
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 525
              }
            ],
            "start": 497,
            "end": 527
          },
          "definite": false,
          "start": 490,
          "end": 527
        }
      ],
      "declare": false,
      "start": 486,
      "end": 528
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
            "start": 530,
            "end": 535
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
                "start": 540,
                "end": 544
              },
              "start": 536,
              "end": 545
            }
          ],
          "selfClosing": true,
          "start": 529,
          "end": 548
        },
        "children": [],
        "closingElement": null,
        "start": 529,
        "end": 548
      },
      "directive": null,
      "start": 529,
      "end": 548
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
            "start": 578,
            "end": 582
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
                  "start": 587,
                  "end": 588
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 590,
                  "end": 595
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 587,
                "end": 595
              }
            ],
            "start": 585,
            "end": 597
          },
          "definite": false,
          "start": 578,
          "end": 597
        }
      ],
      "declare": false,
      "start": 574,
      "end": 598
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
            "start": 600,
            "end": 605
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 606,
                "end": 607
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 609,
                  "end": 611
                },
                "start": 608,
                "end": 612
              },
              "start": 606,
              "end": 612
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 621
              },
              "start": 613,
              "end": 622
            }
          ],
          "selfClosing": true,
          "start": 599,
          "end": 625
        },
        "children": [],
        "closingElement": null,
        "start": 599,
        "end": 625
      },
      "directive": null,
      "start": 599,
      "end": 625
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 625
}
```
