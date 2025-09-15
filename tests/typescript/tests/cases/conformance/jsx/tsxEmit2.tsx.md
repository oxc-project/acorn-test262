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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    "start": 91,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 97
                }
              ],
              "start": 76,
              "end": 100
            },
            "declare": false,
            "start": 48,
            "end": 100
          }
        ],
        "start": 22,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 102
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 112,
                "end": 115
              },
              "start": 110,
              "end": 115
            },
            "start": 108,
            "end": 115
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 115
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 121,
                "end": 124
              },
              "start": 119,
              "end": 124
            },
            "start": 117,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 124
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 130,
                "end": 133
              },
              "start": 128,
              "end": 133
            },
            "start": 126,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 133
        }
      ],
      "declare": false,
      "start": 104,
      "end": 134
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
            "name": "spreads1",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 147
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 151,
                "end": 154
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 161
                  },
                  "start": 155,
                  "end": 162
                }
              ],
              "selfClosing": false,
              "start": 150,
              "end": 163
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 166
                },
                "start": 163,
                "end": 167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 169,
                "end": 172
              },
              "start": 167,
              "end": 173
            },
            "start": 150,
            "end": 173
          },
          "definite": false,
          "start": 139,
          "end": 173
        }
      ],
      "declare": false,
      "start": 135,
      "end": 174
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
            "name": "spreads2",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 187
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 191,
                "end": 194
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 201
                  },
                  "start": 195,
                  "end": 202
                }
              ],
              "selfClosing": false,
              "start": 190,
              "end": 203
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 206
                },
                "start": 203,
                "end": 207
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 209,
                "end": 212
              },
              "start": 207,
              "end": 213
            },
            "start": 190,
            "end": 213
          },
          "definite": false,
          "start": 179,
          "end": 213
        }
      ],
      "declare": false,
      "start": 175,
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
            "name": "spreads3",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 227
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 231,
                "end": 234
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 235,
                    "end": 236
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 240
                    },
                    "start": 237,
                    "end": 241
                  },
                  "start": 235,
                  "end": 241
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 248
                  },
                  "start": 242,
                  "end": 249
                }
              ],
              "selfClosing": false,
              "start": 230,
              "end": 250
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 253
                },
                "start": 250,
                "end": 254
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 256,
                "end": 259
              },
              "start": 254,
              "end": 260
            },
            "start": 230,
            "end": 260
          },
          "definite": false,
          "start": 219,
          "end": 260
        }
      ],
      "declare": false,
      "start": 215,
      "end": 261
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
            "name": "spreads4",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 274
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 278,
                "end": 281
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 286,
                    "end": 288
                  },
                  "start": 282,
                  "end": 289
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 290,
                    "end": 291
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 295
                    },
                    "start": 292,
                    "end": 296
                  },
                  "start": 290,
                  "end": 296
                }
              ],
              "selfClosing": false,
              "start": 277,
              "end": 298
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 301
                },
                "start": 298,
                "end": 302
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 304,
                "end": 307
              },
              "start": 302,
              "end": 308
            },
            "start": 277,
            "end": 308
          },
          "definite": false,
          "start": 266,
          "end": 308
        }
      ],
      "declare": false,
      "start": 262,
      "end": 309
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
            "name": "spreads5",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 322
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 326,
                "end": 329
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 330,
                    "end": 331
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 335
                    },
                    "start": 332,
                    "end": 336
                  },
                  "start": 330,
                  "end": 336
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 343
                  },
                  "start": 337,
                  "end": 344
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 345,
                    "end": 346
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 348,
                      "end": 350
                    },
                    "start": 347,
                    "end": 351
                  },
                  "start": 345,
                  "end": 351
                }
              ],
              "selfClosing": false,
              "start": 325,
              "end": 352
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 355
                },
                "start": 352,
                "end": 356
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 358,
                "end": 361
              },
              "start": 356,
              "end": 362
            },
            "start": 325,
            "end": 362
          },
          "definite": false,
          "start": 314,
          "end": 362
        }
      ],
      "declare": false,
      "start": 310,
      "end": 363
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 363
}
```
