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
                    "start": 42,
                    "end": 51
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 42,
                  "end": 52
                }
              ],
              "start": 40,
              "end": 54
            },
            "declare": false,
            "start": 22,
            "end": 54
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 83
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 84,
              "end": 87
            },
            "declare": false,
            "start": 56,
            "end": 87
          }
        ],
        "start": 19,
        "end": 89
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 89
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 105
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
                    "start": 116,
                    "end": 122
                  },
                  "start": 114,
                  "end": 122
                },
                "start": 113,
                "end": 122
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
                      "start": 127,
                      "end": 128
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 130,
                        "end": 136
                      },
                      "start": 128,
                      "end": 136
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 127,
                    "end": 136
                  }
                ],
                "start": 125,
                "end": 138
              },
              "start": 123,
              "end": 138
            },
            "start": 109,
            "end": 139
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
                    "start": 148,
                    "end": 154
                  },
                  "start": 146,
                  "end": 154
                },
                "start": 145,
                "end": 154
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
                      "start": 159,
                      "end": 160
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 162,
                        "end": 168
                      },
                      "start": 160,
                      "end": 168
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 159,
                    "end": 168
                  }
                ],
                "start": 157,
                "end": 170
              },
              "start": 155,
              "end": 170
            },
            "start": 141,
            "end": 171
          }
        ],
        "start": 106,
        "end": 173
      },
      "declare": false,
      "start": 91,
      "end": 173
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
                  "start": 184,
                  "end": 188
                },
                "typeArguments": null,
                "start": 184,
                "end": 188
              },
              "start": 182,
              "end": 188
            },
            "start": 178,
            "end": 188
          },
          "init": null,
          "definite": false,
          "start": 178,
          "end": 188
        }
      ],
      "declare": false,
      "start": 174,
      "end": 189
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
            "start": 191,
            "end": 195
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 190,
          "end": 198
        },
        "children": [],
        "closingElement": null,
        "start": 190,
        "end": 198
      },
      "directive": null,
      "start": 190,
      "end": 199
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 259
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
                    "start": 267,
                    "end": 273
                  },
                  "start": 265,
                  "end": 273
                },
                "start": 264,
                "end": 273
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
                      "start": 278,
                      "end": 279
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 281,
                        "end": 287
                      },
                      "start": 279,
                      "end": 287
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 287
                  }
                ],
                "start": 276,
                "end": 289
              },
              "start": 274,
              "end": 289
            },
            "start": 263,
            "end": 290
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
                    "start": 296,
                    "end": 302
                  },
                  "start": 294,
                  "end": 302
                },
                "start": 293,
                "end": 302
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
                      "start": 307,
                      "end": 308
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 310,
                        "end": 316
                      },
                      "start": 308,
                      "end": 316
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 307,
                    "end": 316
                  }
                ],
                "start": 305,
                "end": 318
              },
              "start": 303,
              "end": 318
            },
            "start": 292,
            "end": 319
          }
        ],
        "start": 260,
        "end": 321
      },
      "declare": false,
      "start": 245,
      "end": 321
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
                  "start": 332,
                  "end": 336
                },
                "typeArguments": null,
                "start": 332,
                "end": 336
              },
              "start": 330,
              "end": 336
            },
            "start": 326,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 336
        }
      ],
      "declare": false,
      "start": 322,
      "end": 337
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
            "start": 339,
            "end": 343
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 338,
          "end": 346
        },
        "children": [],
        "closingElement": null,
        "start": 338,
        "end": 346
      },
      "directive": null,
      "start": 338,
      "end": 347
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 407
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
                    "start": 415,
                    "end": 421
                  },
                  "start": 413,
                  "end": 421
                },
                "start": 412,
                "end": 421
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
                      "start": 426,
                      "end": 427
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 429,
                        "end": 435
                      },
                      "start": 427,
                      "end": 435
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 426,
                    "end": 435
                  }
                ],
                "start": 424,
                "end": 437
              },
              "start": 422,
              "end": 437
            },
            "start": 411,
            "end": 438
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
                    "start": 444,
                    "end": 450
                  },
                  "start": 442,
                  "end": 450
                },
                "start": 441,
                "end": 450
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
                      "start": 455,
                      "end": 456
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 458,
                        "end": 464
                      },
                      "start": 456,
                      "end": 464
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 455,
                    "end": 465
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
                      "start": 466,
                      "end": 467
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 469,
                        "end": 475
                      },
                      "start": 467,
                      "end": 475
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 466,
                    "end": 475
                  }
                ],
                "start": 453,
                "end": 477
              },
              "start": 451,
              "end": 477
            },
            "start": 440,
            "end": 478
          }
        ],
        "start": 408,
        "end": 480
      },
      "declare": false,
      "start": 393,
      "end": 480
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
                  "start": 491,
                  "end": 495
                },
                "typeArguments": null,
                "start": 491,
                "end": 495
              },
              "start": 489,
              "end": 495
            },
            "start": 485,
            "end": 495
          },
          "init": null,
          "definite": false,
          "start": 485,
          "end": 495
        }
      ],
      "declare": false,
      "start": 481,
      "end": 496
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
            "start": 498,
            "end": 502
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 503,
                "end": 504
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 506,
                  "end": 508
                },
                "start": 505,
                "end": 509
              },
              "start": 503,
              "end": 509
            }
          ],
          "selfClosing": true,
          "start": 497,
          "end": 512
        },
        "children": [],
        "closingElement": null,
        "start": 497,
        "end": 512
      },
      "directive": null,
      "start": 497,
      "end": 513
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 519
}
```
