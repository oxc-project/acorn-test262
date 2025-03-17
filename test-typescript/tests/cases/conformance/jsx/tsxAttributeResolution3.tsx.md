__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 623,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 98,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 96,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 93,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "name": "test1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 84,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 92,
                        "name": "Attribs1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 117,
        "name": "Attribs1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 159,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 131,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 144,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 137,
                "end": 143
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 146,
            "end": 157,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 156,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 150,
                "end": 156
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 178,
            "end": 190,
            "properties": [
              {
                "type": "Property",
                "start": 180,
                "end": 188,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 183,
                  "end": 188,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 211,
      "expression": {
        "type": "JSXElement",
        "start": 192,
        "end": 211,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 192,
          "end": 211,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 199,
              "end": 208,
              "argument": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 193,
            "end": 198,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 250,
            "end": 259,
            "properties": [
              {
                "type": "Property",
                "start": 252,
                "end": 257,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 255,
                  "end": 257,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 280,
      "expression": {
        "type": "JSXElement",
        "start": 261,
        "end": 280,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 261,
          "end": 280,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 268,
              "end": 277,
              "argument": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "name": "obj2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 262,
            "end": 267,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "name": "obj3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 316,
            "end": 325,
            "properties": [
              {
                "type": "Property",
                "start": 318,
                "end": 323,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 321,
                  "end": 323,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 346,
      "expression": {
        "type": "JSXElement",
        "start": 327,
        "end": 346,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 327,
          "end": 346,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 334,
              "end": 343,
              "argument": {
                "type": "Identifier",
                "start": 338,
                "end": 342,
                "name": "obj3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 328,
            "end": 333,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 362,
            "name": "obj4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 365,
            "end": 381,
            "properties": [
              {
                "type": "Property",
                "start": 367,
                "end": 372,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 370,
                  "end": 372,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 374,
                "end": 379,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 377,
                  "end": 379,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 409,
      "expression": {
        "type": "JSXElement",
        "start": 383,
        "end": 409,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 383,
          "end": 409,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 390,
              "end": 399,
              "argument": {
                "type": "Identifier",
                "start": 394,
                "end": 398,
                "name": "obj4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "JSXAttribute",
              "start": 400,
              "end": 406,
              "name": {
                "type": "JSXIdentifier",
                "start": 400,
                "end": 401,
                "name": "x"
              },
              "value": {
                "type": "Literal",
                "start": 402,
                "end": 406,
                "value": "ok",
                "raw": "\"ok\""
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 384,
            "end": 389,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 428,
            "name": "obj5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 431,
            "end": 447,
            "properties": [
              {
                "type": "Property",
                "start": 433,
                "end": 438,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 436,
                  "end": 438,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 440,
                "end": 445,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 443,
                  "end": 445,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 449,
      "end": 475,
      "expression": {
        "type": "JSXElement",
        "start": 449,
        "end": 475,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 449,
          "end": 475,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 456,
              "end": 462,
              "name": {
                "type": "JSXIdentifier",
                "start": 456,
                "end": 457,
                "name": "x"
              },
              "value": {
                "type": "Literal",
                "start": 458,
                "end": 462,
                "value": "ok",
                "raw": "\"ok\""
              }
            },
            {
              "type": "JSXSpreadAttribute",
              "start": 463,
              "end": 472,
              "argument": {
                "type": "Identifier",
                "start": 467,
                "end": 471,
                "name": "obj5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 450,
            "end": 455,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 483,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 487,
          "end": 524,
          "id": {
            "type": "Identifier",
            "start": 487,
            "end": 491,
            "name": "obj6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 494,
            "end": 524,
            "properties": [
              {
                "type": "Property",
                "start": 496,
                "end": 503,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 499,
                  "end": 503,
                  "value": "ok",
                  "raw": "'ok'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 505,
                "end": 510,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 506,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 508,
                  "end": 510,
                  "value": 32,
                  "raw": "32"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 512,
                "end": 522,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 517,
                  "name": "extra",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 519,
                  "end": 522,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 545,
      "expression": {
        "type": "JSXElement",
        "start": 526,
        "end": 545,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 526,
          "end": 545,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 533,
              "end": 542,
              "argument": {
                "type": "Identifier",
                "start": 537,
                "end": 541,
                "name": "obj6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 527,
            "end": 532,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 579,
            "name": "obj7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 582,
            "end": 594,
            "properties": [
              {
                "type": "Property",
                "start": 584,
                "end": 592,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 585,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 587,
                  "end": 592,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 622,
      "expression": {
        "type": "JSXElement",
        "start": 596,
        "end": 622,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 596,
          "end": 622,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 603,
              "end": 609,
              "name": {
                "type": "JSXIdentifier",
                "start": 603,
                "end": 604,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 605,
                "end": 609,
                "expression": {
                  "type": "Literal",
                  "start": 606,
                  "end": 608,
                  "value": 32,
                  "raw": "32"
                }
              }
            },
            {
              "type": "JSXSpreadAttribute",
              "start": 610,
              "end": 619,
              "argument": {
                "type": "Identifier",
                "start": 614,
                "end": 618,
                "name": "obj7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 597,
            "end": 602,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
