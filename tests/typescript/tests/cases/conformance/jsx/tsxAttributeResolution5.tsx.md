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
                    "start": 99,
                    "end": 104
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
                        "start": 106,
                        "end": 114
                      },
                      "typeArguments": null,
                      "start": 106,
                      "end": 114
                    },
                    "start": 104,
                    "end": 114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 99,
                  "end": 115
                }
              ],
              "start": 76,
              "end": 118
            },
            "declare": false,
            "start": 48,
            "end": 118
          }
        ],
        "start": 22,
        "end": 120
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 139
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
              "start": 143,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 143,
            "end": 153
          }
        ],
        "start": 140,
        "end": 155
      },
      "declare": false,
      "start": 121,
      "end": 155
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs2",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 175
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
              "start": 179,
              "end": 187
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
                "start": 191,
                "end": 197
              },
              "start": 189,
              "end": 197
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 179,
            "end": 198
          }
        ],
        "start": 176,
        "end": 200
      },
      "declare": false,
      "start": 157,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make1",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 216
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
              "start": 217,
              "end": 218
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
                    "start": 228,
                    "end": 229
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 231,
                      "end": 237
                    },
                    "start": 229,
                    "end": 237
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 228,
                  "end": 237
                }
              ],
              "start": 227,
              "end": 238
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 217,
            "end": 238
          }
        ],
        "start": 216,
        "end": 239
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
                "start": 246,
                "end": 247
              },
              "typeArguments": null,
              "start": 246,
              "end": 247
            },
            "start": 244,
            "end": 247
          },
          "start": 241,
          "end": 247
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
                  "start": 260,
                  "end": 265
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
                      "start": 270,
                      "end": 273
                    },
                    "start": 266,
                    "end": 274
                  }
                ],
                "selfClosing": true,
                "start": 259,
                "end": 277
              },
              "children": [],
              "closingElement": null,
              "start": 259,
              "end": 277
            },
            "start": 252,
            "end": 278
          }
        ],
        "start": 249,
        "end": 286
      },
      "expression": false,
      "start": 202,
      "end": 286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make2",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 302
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
              "start": 303,
              "end": 304
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
                    "start": 314,
                    "end": 315
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 314,
                  "end": 323
                }
              ],
              "start": 313,
              "end": 324
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 303,
            "end": 324
          }
        ],
        "start": 302,
        "end": 325
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
                "start": 332,
                "end": 333
              },
              "typeArguments": null,
              "start": 332,
              "end": 333
            },
            "start": 330,
            "end": 333
          },
          "start": 327,
          "end": 333
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
                  "start": 346,
                  "end": 351
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
                      "start": 356,
                      "end": 359
                    },
                    "start": 352,
                    "end": 360
                  }
                ],
                "selfClosing": true,
                "start": 345,
                "end": 363
              },
              "children": [],
              "closingElement": null,
              "start": 345,
              "end": 363
            },
            "start": 338,
            "end": 364
          }
        ],
        "start": 335,
        "end": 401
      },
      "expression": false,
      "start": 288,
      "end": 401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make3",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 417
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
              "start": 418,
              "end": 419
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
                    "start": 429,
                    "end": 430
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
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
              "start": 428,
              "end": 439
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 418,
            "end": 439
          }
        ],
        "start": 417,
        "end": 440
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
                "start": 447,
                "end": 448
              },
              "typeArguments": null,
              "start": 447,
              "end": 448
            },
            "start": 445,
            "end": 448
          },
          "start": 442,
          "end": 448
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
                  "start": 461,
                  "end": 466
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
                      "start": 471,
                      "end": 474
                    },
                    "start": 467,
                    "end": 475
                  }
                ],
                "selfClosing": true,
                "start": 460,
                "end": 478
              },
              "children": [],
              "closingElement": null,
              "start": 460,
              "end": 478
            },
            "start": 453,
            "end": 479
          }
        ],
        "start": 450,
        "end": 501
      },
      "expression": false,
      "start": 403,
      "end": 501
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
            "start": 505,
            "end": 510
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 515,
                "end": 517
              },
              "start": 511,
              "end": 518
            }
          ],
          "selfClosing": true,
          "start": 504,
          "end": 521
        },
        "children": [],
        "closingElement": null,
        "start": 504,
        "end": 521
      },
      "directive": null,
      "start": 504,
      "end": 522
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
            "start": 544,
            "end": 549
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 554,
                "end": 556
              },
              "start": 550,
              "end": 557
            }
          ],
          "selfClosing": true,
          "start": 543,
          "end": 560
        },
        "children": [],
        "closingElement": null,
        "start": 543,
        "end": 560
      },
      "directive": null,
      "start": 543,
      "end": 561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 588
}
```
