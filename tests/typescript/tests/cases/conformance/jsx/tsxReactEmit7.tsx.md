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
                          "start": 81,
                          "end": 87
                        },
                        "start": 79,
                        "end": 87
                      },
                      "start": 78,
                      "end": 87
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 94
                }
              ],
              "start": 73,
              "end": 97
            },
            "declare": false,
            "start": 45,
            "end": 97
          }
        ],
        "start": 19,
        "end": 99
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 99
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 110,
                "end": 113
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x-y",
                    "start": 114,
                    "end": 117
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 118,
                    "end": 123
                  },
                  "start": 114,
                  "end": 123
                }
              ],
              "selfClosing": false,
              "start": 109,
              "end": 124
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 126,
                "end": 129
              },
              "start": 124,
              "end": 130
            },
            "start": 109,
            "end": 130
          },
          "definite": false,
          "start": 105,
          "end": 130
        }
      ],
      "declare": false,
      "start": 101,
      "end": 131
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 141,
                "end": 144
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xx-y",
                    "start": 145,
                    "end": 149
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 150,
                    "end": 155
                  },
                  "start": 145,
                  "end": 155
                }
              ],
              "selfClosing": false,
              "start": 140,
              "end": 156
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 158,
                "end": 161
              },
              "start": 156,
              "end": 162
            },
            "start": 140,
            "end": 162
          },
          "definite": false,
          "start": 136,
          "end": 162
        }
      ],
      "declare": false,
      "start": 132,
      "end": 163
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 173,
                "end": 176
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x-yy",
                    "start": 177,
                    "end": 181
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 182,
                    "end": 187
                  },
                  "start": 177,
                  "end": 187
                }
              ],
              "selfClosing": false,
              "start": 172,
              "end": 188
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 190,
                "end": 193
              },
              "start": 188,
              "end": 194
            },
            "start": 172,
            "end": 194
          },
          "definite": false,
          "start": 168,
          "end": 194
        }
      ],
      "declare": false,
      "start": 164,
      "end": 195
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 205,
                "end": 208
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xx-yy",
                    "start": 209,
                    "end": 214
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 215,
                    "end": 220
                  },
                  "start": 209,
                  "end": 220
                }
              ],
              "selfClosing": false,
              "start": 204,
              "end": 221
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 223,
                "end": 226
              },
              "start": 221,
              "end": 227
            },
            "start": 204,
            "end": 227
          },
          "definite": false,
          "start": 200,
          "end": 227
        }
      ],
      "declare": false,
      "start": 196,
      "end": 228
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 252
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 256,
                "end": 259
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 260,
                    "end": 261
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 262,
                    "end": 267
                  },
                  "start": 260,
                  "end": 267
                }
              ],
              "selfClosing": false,
              "start": 255,
              "end": 268
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 270,
                "end": 273
              },
              "start": 268,
              "end": 274
            },
            "start": 255,
            "end": 274
          },
          "definite": false,
          "start": 251,
          "end": 274
        }
      ],
      "declare": false,
      "start": 247,
      "end": 275
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 281
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 285,
                "end": 288
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xx",
                    "start": 289,
                    "end": 291
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 292,
                    "end": 297
                  },
                  "start": 289,
                  "end": 297
                }
              ],
              "selfClosing": false,
              "start": 284,
              "end": 298
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 300,
                "end": 303
              },
              "start": 298,
              "end": 304
            },
            "start": 284,
            "end": 304
          },
          "definite": false,
          "start": 280,
          "end": 304
        }
      ],
      "declare": false,
      "start": 276,
      "end": 305
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 315,
                "end": 318
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xxx",
                    "start": 319,
                    "end": 322
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 323,
                    "end": 328
                  },
                  "start": 319,
                  "end": 328
                }
              ],
              "selfClosing": false,
              "start": 314,
              "end": 329
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 331,
                "end": 334
              },
              "start": 329,
              "end": 335
            },
            "start": 314,
            "end": 335
          },
          "definite": false,
          "start": 310,
          "end": 335
        }
      ],
      "declare": false,
      "start": 306,
      "end": 336
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 346,
                "end": 349
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xxxx",
                    "start": 350,
                    "end": 354
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 355,
                    "end": 360
                  },
                  "start": 350,
                  "end": 360
                }
              ],
              "selfClosing": false,
              "start": 345,
              "end": 361
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 363,
                "end": 366
              },
              "start": 361,
              "end": 367
            },
            "start": 345,
            "end": 367
          },
          "definite": false,
          "start": 341,
          "end": 367
        }
      ],
      "declare": false,
      "start": 337,
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 374
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 378,
                "end": 381
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "xxxxx",
                    "start": 382,
                    "end": 387
                  },
                  "value": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 388,
                    "end": 393
                  },
                  "start": 382,
                  "end": 393
                }
              ],
              "selfClosing": false,
              "start": 377,
              "end": 394
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 396,
                "end": 399
              },
              "start": 394,
              "end": 400
            },
            "start": 377,
            "end": 400
          },
          "definite": false,
          "start": 373,
          "end": 400
        }
      ],
      "declare": false,
      "start": 369,
      "end": 401
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 401
}
```
