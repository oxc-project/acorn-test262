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
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 80
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 81,
              "end": 84
            },
            "declare": false,
            "start": 45,
            "end": 84
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 113
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 114,
              "end": 117
            },
            "declare": false,
            "start": 86,
            "end": 117
          }
        ],
        "start": 19,
        "end": 119
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 119
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1type",
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
                    "start": 150,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                },
                "start": 147,
                "end": 156
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 159,
                "end": 162
              },
              "start": 157,
              "end": 162
            },
            "start": 143,
            "end": 163
          }
        ],
        "start": 140,
        "end": 165
      },
      "declare": false,
      "start": 121,
      "end": 165
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
                  "name": "Obj1type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 184
                },
                "typeArguments": null,
                "start": 176,
                "end": 184
              },
              "start": 174,
              "end": 184
            },
            "start": 170,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 184
        }
      ],
      "declare": false,
      "start": 166,
      "end": 185
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
            "start": 187,
            "end": 191
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 192,
                "end": 193
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 195,
                  "end": 197
                },
                "start": 194,
                "end": 198
              },
              "start": 192,
              "end": 198
            }
          ],
          "selfClosing": true,
          "start": 186,
          "end": 201
        },
        "children": [],
        "closingElement": null,
        "start": 186,
        "end": 201
      },
      "directive": null,
      "start": 186,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 228
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
                    "start": 239,
                    "end": 245
                  },
                  "start": 237,
                  "end": 245
                },
                "start": 236,
                "end": 245
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
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 251
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 254,
                        "end": 260
                      },
                      "start": 252,
                      "end": 260
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 250,
                    "end": 260
                  }
                ],
                "start": 248,
                "end": 262
              },
              "start": 246,
              "end": 262
            },
            "start": 232,
            "end": 263
          }
        ],
        "start": 229,
        "end": 265
      },
      "declare": false,
      "start": 210,
      "end": 265
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
                  "name": "Obj2type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 284
                },
                "typeArguments": null,
                "start": 276,
                "end": 284
              },
              "start": 274,
              "end": 284
            },
            "start": 270,
            "end": 284
          },
          "init": null,
          "definite": false,
          "start": 270,
          "end": 284
        }
      ],
      "declare": false,
      "start": 266,
      "end": 285
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
            "start": 287,
            "end": 291
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 292,
                "end": 293
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 295,
                  "end": 297
                },
                "start": 294,
                "end": 298
              },
              "start": 292,
              "end": 298
            }
          ],
          "selfClosing": true,
          "start": 286,
          "end": 301
        },
        "children": [],
        "closingElement": null,
        "start": 286,
        "end": 301
      },
      "directive": null,
      "start": 286,
      "end": 302
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3type",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 331
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
                    "start": 342,
                    "end": 348
                  },
                  "start": 340,
                  "end": 348
                },
                "start": 339,
                "end": 348
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
                      "start": 353,
                      "end": 354
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 356,
                        "end": 362
                      },
                      "start": 354,
                      "end": 362
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 353,
                    "end": 363
                  }
                ],
                "start": 351,
                "end": 365
              },
              "start": 349,
              "end": 365
            },
            "start": 335,
            "end": 366
          }
        ],
        "start": 332,
        "end": 368
      },
      "declare": false,
      "start": 313,
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
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 387
                },
                "typeArguments": null,
                "start": 379,
                "end": 387
              },
              "start": 377,
              "end": 387
            },
            "start": 373,
            "end": 387
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 387
        }
      ],
      "declare": false,
      "start": 369,
      "end": 388
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
            "start": 390,
            "end": 394
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 395,
                "end": 396
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 398,
                  "end": 400
                },
                "start": 397,
                "end": 401
              },
              "start": 395,
              "end": 401
            }
          ],
          "selfClosing": true,
          "start": 389,
          "end": 404
        },
        "children": [],
        "closingElement": null,
        "start": 389,
        "end": 404
      },
      "directive": null,
      "start": 389,
      "end": 405
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
