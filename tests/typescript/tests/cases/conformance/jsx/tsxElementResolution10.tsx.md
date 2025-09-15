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
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 70
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
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 81
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 83,
                      "end": 86
                    },
                    "start": 81,
                    "end": 86
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 75,
                  "end": 87
                }
              ],
              "start": 71,
              "end": 90
            },
            "declare": false,
            "start": 48,
            "end": 90
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 119
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 120,
              "end": 123
            },
            "declare": false,
            "start": 92,
            "end": 123
          }
        ],
        "start": 22,
        "end": 125
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 125
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 145
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
                    "start": 156,
                    "end": 162
                  },
                  "start": 154,
                  "end": 162
                },
                "start": 153,
                "end": 162
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
                      "start": 167,
                      "end": 168
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      },
                      "start": 168,
                      "end": 176
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 167,
                    "end": 176
                  }
                ],
                "start": 165,
                "end": 178
              },
              "start": 163,
              "end": 178
            },
            "start": 149,
            "end": 179
          }
        ],
        "start": 146,
        "end": 181
      },
      "declare": false,
      "start": 127,
      "end": 181
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
                  "start": 192,
                  "end": 200
                },
                "typeArguments": null,
                "start": 192,
                "end": 200
              },
              "start": 190,
              "end": 200
            },
            "start": 186,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 186,
          "end": 200
        }
      ],
      "declare": false,
      "start": 182,
      "end": 201
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
            "start": 203,
            "end": 207
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 208,
                "end": 209
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 211,
                  "end": 213
                },
                "start": 210,
                "end": 214
              },
              "start": 208,
              "end": 214
            }
          ],
          "selfClosing": true,
          "start": 202,
          "end": 217
        },
        "children": [],
        "closingElement": null,
        "start": 202,
        "end": 217
      },
      "directive": null,
      "start": 202,
      "end": 218
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 265
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
                    "start": 273,
                    "end": 279
                  },
                  "start": 271,
                  "end": 279
                },
                "start": 270,
                "end": 279
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
                      "start": 284,
                      "end": 285
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      },
                      "start": 285,
                      "end": 293
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 284,
                    "end": 294
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 301
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 303,
                        "end": 306
                      },
                      "start": 301,
                      "end": 306
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 295,
                    "end": 307
                  }
                ],
                "start": 282,
                "end": 309
              },
              "start": 280,
              "end": 309
            },
            "start": 269,
            "end": 310
          }
        ],
        "start": 266,
        "end": 312
      },
      "declare": false,
      "start": 247,
      "end": 312
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
                  "start": 323,
                  "end": 331
                },
                "typeArguments": null,
                "start": 323,
                "end": 331
              },
              "start": 321,
              "end": 331
            },
            "start": 317,
            "end": 331
          },
          "init": null,
          "definite": false,
          "start": 317,
          "end": 331
        }
      ],
      "declare": false,
      "start": 313,
      "end": 332
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
            "start": 334,
            "end": 338
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 339,
                "end": 340
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 342,
                  "end": 344
                },
                "start": 341,
                "end": 345
              },
              "start": 339,
              "end": 345
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "render",
                "start": 346,
                "end": 352
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 354,
                  "end": 357
                },
                "start": 353,
                "end": 358
              },
              "start": 346,
              "end": 358
            }
          ],
          "selfClosing": true,
          "start": 333,
          "end": 361
        },
        "children": [],
        "closingElement": null,
        "start": 333,
        "end": 361
      },
      "directive": null,
      "start": 333,
      "end": 362
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
}
```
