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
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 54
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 45,
                  "end": 55
                }
              ],
              "start": 43,
              "end": 57
            },
            "declare": false,
            "start": 25,
            "end": 57
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 86
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 87,
              "end": 90
            },
            "declare": false,
            "start": 59,
            "end": 90
          }
        ],
        "start": 22,
        "end": 92
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 108
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  },
                  "start": 117,
                  "end": 125
                },
                "start": 116,
                "end": 125
              }
            ],
            "returnType": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 133,
                        "end": 139
                      },
                      "start": 131,
                      "end": 139
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 130,
                    "end": 139
                  }
                ],
                "start": 128,
                "end": 141
              },
              "start": 126,
              "end": 141
            },
            "start": 112,
            "end": 142
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 151,
                    "end": 157
                  },
                  "start": 149,
                  "end": 157
                },
                "start": 148,
                "end": 157
              }
            ],
            "returnType": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 165,
                        "end": 171
                      },
                      "start": 163,
                      "end": 171
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 162,
                    "end": 171
                  }
                ],
                "start": 160,
                "end": 173
              },
              "start": 158,
              "end": 173
            },
            "start": 144,
            "end": 174
          }
        ],
        "start": 109,
        "end": 176
      },
      "declare": false,
      "start": 94,
      "end": 176
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
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 191
                },
                "typeArguments": null,
                "start": 187,
                "end": 191
              },
              "start": 185,
              "end": 191
            },
            "start": 181,
            "end": 191
          },
          "init": null,
          "definite": false,
          "start": 181,
          "end": 191
        }
      ],
      "declare": false,
      "start": 177,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj1",
            "start": 194,
            "end": 198
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 193,
          "end": 201
        },
        "children": [],
        "closingElement": null,
        "start": 193,
        "end": 201
      },
      "directive": null,
      "start": 193,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 262
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 270,
                    "end": 276
                  },
                  "start": 268,
                  "end": 276
                },
                "start": 267,
                "end": 276
              }
            ],
            "returnType": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      },
                      "start": 282,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 281,
                    "end": 290
                  }
                ],
                "start": 279,
                "end": 292
              },
              "start": 277,
              "end": 292
            },
            "start": 266,
            "end": 293
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 299,
                    "end": 305
                  },
                  "start": 297,
                  "end": 305
                },
                "start": 296,
                "end": 305
              }
            ],
            "returnType": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 311
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 313,
                        "end": 319
                      },
                      "start": 311,
                      "end": 319
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 310,
                    "end": 319
                  }
                ],
                "start": 308,
                "end": 321
              },
              "start": 306,
              "end": 321
            },
            "start": 295,
            "end": 322
          }
        ],
        "start": 263,
        "end": 324
      },
      "declare": false,
      "start": 248,
      "end": 324
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
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 339
                },
                "typeArguments": null,
                "start": 335,
                "end": 339
              },
              "start": 333,
              "end": 339
            },
            "start": 329,
            "end": 339
          },
          "init": null,
          "definite": false,
          "start": 329,
          "end": 339
        }
      ],
      "declare": false,
      "start": 325,
      "end": 340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj2",
            "start": 342,
            "end": 346
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 341,
          "end": 349
        },
        "children": [],
        "closingElement": null,
        "start": 341,
        "end": 349
      },
      "directive": null,
      "start": 341,
      "end": 350
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 406,
        "end": 410
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 418,
                    "end": 424
                  },
                  "start": 416,
                  "end": 424
                },
                "start": 415,
                "end": 424
              }
            ],
            "returnType": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 429,
                      "end": 430
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 432,
                        "end": 438
                      },
                      "start": 430,
                      "end": 438
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 429,
                    "end": 438
                  }
                ],
                "start": 427,
                "end": 440
              },
              "start": 425,
              "end": 440
            },
            "start": 414,
            "end": 441
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 447,
                    "end": 453
                  },
                  "start": 445,
                  "end": 453
                },
                "start": 444,
                "end": 453
              }
            ],
            "returnType": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 459
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 461,
                        "end": 467
                      },
                      "start": 459,
                      "end": 467
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 458,
                    "end": 468
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 470
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 472,
                        "end": 478
                      },
                      "start": 470,
                      "end": 478
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 469,
                    "end": 478
                  }
                ],
                "start": 456,
                "end": 480
              },
              "start": 454,
              "end": 480
            },
            "start": 443,
            "end": 481
          }
        ],
        "start": 411,
        "end": 483
      },
      "declare": false,
      "start": 396,
      "end": 483
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
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 498
                },
                "typeArguments": null,
                "start": 494,
                "end": 498
              },
              "start": 492,
              "end": 498
            },
            "start": 488,
            "end": 498
          },
          "init": null,
          "definite": false,
          "start": 488,
          "end": 498
        }
      ],
      "declare": false,
      "start": 484,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj3",
            "start": 501,
            "end": 505
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 506,
                "end": 507
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 509,
                  "end": 511
                },
                "start": 508,
                "end": 512
              },
              "start": 506,
              "end": 512
            }
          ],
          "selfClosing": true,
          "start": 500,
          "end": 515
        },
        "children": [],
        "closingElement": null,
        "start": 500,
        "end": 515
      },
      "directive": null,
      "start": 500,
      "end": 516
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
