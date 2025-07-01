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
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 101
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 111
                      },
                      "typeArguments": null,
                      "start": 103,
                      "end": 111
                    },
                    "start": 101,
                    "end": 111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 96,
                  "end": 112
                }
              ],
              "start": 73,
              "end": 115
            },
            "declare": false,
            "start": 45,
            "end": 115
          }
        ],
        "start": 19,
        "end": 117
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 136
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
              "start": 140,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 150
          }
        ],
        "start": 137,
        "end": 152
      },
      "declare": false,
      "start": 118,
      "end": 152
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs2",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 172
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 184
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              },
              "start": 186,
              "end": 194
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 176,
            "end": 195
          }
        ],
        "start": 173,
        "end": 197
      },
      "declare": false,
      "start": 154,
      "end": 197
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make1",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 213
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
              "start": 214,
              "end": 215
            },
            "constraint": {
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
                    "start": 225,
                    "end": 226
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 228,
                      "end": 234
                    },
                    "start": 226,
                    "end": 234
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 225,
                  "end": 234
                }
              ],
              "start": 224,
              "end": 235
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 235
          }
        ],
        "start": 213,
        "end": 236
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 243,
                "end": 244
              },
              "typeArguments": null,
              "start": 243,
              "end": 244
            },
            "start": 241,
            "end": 244
          },
          "start": 238,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "test1",
                  "start": 257,
                  "end": 262
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
                      "start": 267,
                      "end": 270
                    },
                    "start": 263,
                    "end": 271
                  }
                ],
                "selfClosing": true,
                "start": 256,
                "end": 274
              },
              "children": [],
              "closingElement": null,
              "start": 256,
              "end": 274
            },
            "start": 249,
            "end": 275
          }
        ],
        "start": 246,
        "end": 283
      },
      "expression": false,
      "start": 199,
      "end": 283
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make2",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 299
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
              "start": 300,
              "end": 301
            },
            "constraint": {
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
                    "start": 311,
                    "end": 312
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 314,
                      "end": 320
                    },
                    "start": 312,
                    "end": 320
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 311,
                  "end": 320
                }
              ],
              "start": 310,
              "end": 321
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 300,
            "end": 321
          }
        ],
        "start": 299,
        "end": 322
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 329,
                "end": 330
              },
              "typeArguments": null,
              "start": 329,
              "end": 330
            },
            "start": 327,
            "end": 330
          },
          "start": 324,
          "end": 330
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "test1",
                  "start": 343,
                  "end": 348
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
                      "start": 353,
                      "end": 356
                    },
                    "start": 349,
                    "end": 357
                  }
                ],
                "selfClosing": true,
                "start": 342,
                "end": 360
              },
              "children": [],
              "closingElement": null,
              "start": 342,
              "end": 360
            },
            "start": 335,
            "end": 361
          }
        ],
        "start": 332,
        "end": 398
      },
      "expression": false,
      "start": 285,
      "end": 398
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make3",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 414
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
              "start": 415,
              "end": 416
            },
            "constraint": {
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
                    "start": 426,
                    "end": 427
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
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
              "start": 425,
              "end": 436
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 415,
            "end": 436
          }
        ],
        "start": 414,
        "end": 437
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 444,
                "end": 445
              },
              "typeArguments": null,
              "start": 444,
              "end": 445
            },
            "start": 442,
            "end": 445
          },
          "start": 439,
          "end": 445
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "test1",
                  "start": 458,
                  "end": 463
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
                      "start": 468,
                      "end": 471
                    },
                    "start": 464,
                    "end": 472
                  }
                ],
                "selfClosing": true,
                "start": 457,
                "end": 475
              },
              "children": [],
              "closingElement": null,
              "start": 457,
              "end": 475
            },
            "start": 450,
            "end": 476
          }
        ],
        "start": 447,
        "end": 498
      },
      "expression": false,
      "start": 400,
      "end": 498
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
            "start": 502,
            "end": 507
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 512,
                "end": 514
              },
              "start": 508,
              "end": 515
            }
          ],
          "selfClosing": true,
          "start": 501,
          "end": 518
        },
        "children": [],
        "closingElement": null,
        "start": 501,
        "end": 518
      },
      "directive": null,
      "start": 501,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 541,
            "end": 546
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 551,
                "end": 553
              },
              "start": 547,
              "end": 554
            }
          ],
          "selfClosing": true,
          "start": 540,
          "end": 557
        },
        "children": [],
        "closingElement": null,
        "start": 540,
        "end": 557
      },
      "directive": null,
      "start": 540,
      "end": 558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 585
}
```
