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
        "start": 31,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 65
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 66,
                "end": 68
              },
              "declare": false,
              "start": 48,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 41,
            "end": 68
          }
        ],
        "start": 35,
        "end": 70
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 21,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 94
      },
      "typeParameters": null,
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
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 109,
                  "end": 113
                },
                "start": 109,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 103,
            "end": 114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 121
            },
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
                        "type": "TSStringKeyword",
                        "start": 127,
                        "end": 133
                      },
                      "start": 125,
                      "end": 133
                    },
                    "start": 124,
                    "end": 133
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 138,
                    "end": 142
                  },
                  "start": 135,
                  "end": 142
                },
                "start": 123,
                "end": 142
              },
              "start": 121,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 119,
            "end": 143
          }
        ],
        "start": 97,
        "end": 145
      },
      "declare": false,
      "start": 72,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 170
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 186,
                  "end": 191
                },
                "start": 186,
                "end": 191
              },
              "start": 184,
              "end": 191
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 192
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 199
            },
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
                        "start": 205,
                        "end": 211
                      },
                      "start": 203,
                      "end": 211
                    },
                    "start": 202,
                    "end": 211
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 216,
                    "end": 220
                  },
                  "start": 213,
                  "end": 220
                },
                "start": 201,
                "end": 220
              },
              "start": 199,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 197,
            "end": 221
          }
        ],
        "start": 173,
        "end": 223
      },
      "declare": false,
      "start": 147,
      "end": 223
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 255
            },
            "typeArguments": null,
            "start": 238,
            "end": 255
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 276
            },
            "typeArguments": null,
            "start": 258,
            "end": 276
          }
        ],
        "start": 238,
        "end": 276
      },
      "declare": false,
      "start": 225,
      "end": 277
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 300
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 325
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 325
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 346
                  },
                  "typeArguments": null,
                  "start": 328,
                  "end": 346
                }
              ],
              "start": 308,
              "end": 346
            },
            "start": 306,
            "end": 346
          },
          "start": 301,
          "end": 346
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
              "start": 349,
              "end": 352
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 360
            },
            "start": 349,
            "end": 360
          },
          "typeArguments": null,
          "start": 349,
          "end": 360
        },
        "start": 347,
        "end": 360
      },
      "body": null,
      "expression": false,
      "start": 279,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 390,
              "end": 394
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "start": 395,
                  "end": 399
                },
                "value": null,
                "start": 395,
                "end": 399
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 400,
                  "end": 402
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 405
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parseInt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 417
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 419
                        }
                      ],
                      "optional": false,
                      "start": 409,
                      "end": 420
                    },
                    "id": null,
                    "generator": false,
                    "start": 404,
                    "end": 420
                  },
                  "start": 403,
                  "end": 421
                },
                "start": 400,
                "end": 421
              }
            ],
            "selfClosing": true,
            "start": 389,
            "end": 424
          },
          "children": [],
          "closingElement": null,
          "start": 389,
          "end": 424
        },
        "prefix": true,
        "start": 383,
        "end": 425
      },
      "directive": null,
      "start": 383,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 455,
              "end": 459
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "start": 460,
                  "end": 464
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 466,
                    "end": 471
                  },
                  "start": 465,
                  "end": 472
                },
                "start": 460,
                "end": 472
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 473,
                  "end": 475
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 478
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 482,
                          "end": 483
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 491
                        },
                        "optional": false,
                        "computed": false,
                        "start": 482,
                        "end": 491
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 482,
                      "end": 493
                    },
                    "id": null,
                    "generator": false,
                    "start": 477,
                    "end": 493
                  },
                  "start": 476,
                  "end": 494
                },
                "start": 473,
                "end": 494
              }
            ],
            "selfClosing": true,
            "start": 454,
            "end": 497
          },
          "children": [],
          "closingElement": null,
          "start": 454,
          "end": 497
        },
        "prefix": true,
        "start": 448,
        "end": 498
      },
      "directive": null,
      "start": 448,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 564,
              "end": 568
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "disc",
                  "start": 569,
                  "end": 573
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 584
                  },
                  "start": 574,
                  "end": 585
                },
                "start": 569,
                "end": 585
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 586,
                  "end": 588
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 591
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 595,
                          "end": 596
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 604
                        },
                        "optional": false,
                        "computed": false,
                        "start": 595,
                        "end": 604
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 595,
                      "end": 606
                    },
                    "id": null,
                    "generator": false,
                    "start": 590,
                    "end": 606
                  },
                  "start": 589,
                  "end": 607
                },
                "start": 586,
                "end": 607
              }
            ],
            "selfClosing": true,
            "start": 563,
            "end": 610
          },
          "children": [],
          "closingElement": null,
          "start": 563,
          "end": 610
        },
        "prefix": true,
        "start": 557,
        "end": 611
      },
      "directive": null,
      "start": 557,
      "end": 612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "Comp",
              "start": 702,
              "end": 706
            },
            "typeArguments": null,
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "cb",
                  "start": 707,
                  "end": 709
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 711,
                        "end": 712
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 717
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 725
                        },
                        "optional": false,
                        "computed": false,
                        "start": 716,
                        "end": 725
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 716,
                      "end": 727
                    },
                    "id": null,
                    "generator": false,
                    "start": 711,
                    "end": 727
                  },
                  "start": 710,
                  "end": 728
                },
                "start": 707,
                "end": 728
              }
            ],
            "selfClosing": true,
            "start": 701,
            "end": 731
          },
          "children": [],
          "closingElement": null,
          "start": 701,
          "end": 731
        },
        "prefix": true,
        "start": 695,
        "end": 732
      },
      "directive": null,
      "start": 695,
      "end": 733
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 733
}
```
