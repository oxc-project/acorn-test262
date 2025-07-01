__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                    "name": "className",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 112
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    },
                    "start": 113,
                    "end": 121
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 103,
                  "end": 122
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "htmlFor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 133,
                      "end": 139
                    },
                    "start": 131,
                    "end": 139
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 123,
                  "end": 139
                }
              ],
              "start": 101,
              "end": 141
            },
            "start": 99,
            "end": 141
          },
          "start": 94,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 156,
                "end": 160
              },
              "start": 156,
              "end": 161
            },
            "start": 149,
            "end": 162
          }
        ],
        "start": 143,
        "end": 164
      },
      "expression": false,
      "start": 77,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 177
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 191
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 201
        },
        "optional": false,
        "computed": false,
        "start": 186,
        "end": 201
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
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
                  "name": "className",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 213
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  },
                  "start": 214,
                  "end": 222
                },
                "accessibility": null,
                "static": false,
                "start": 204,
                "end": 223
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "htmlFor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 231
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 234,
                    "end": 240
                  },
                  "start": 232,
                  "end": 240
                },
                "accessibility": null,
                "static": false,
                "start": 224,
                "end": 240
              }
            ],
            "start": 202,
            "end": 242
          }
        ],
        "start": 201,
        "end": 243
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 244,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 165,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "a",
            "start": 249,
            "end": 250
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 251,
                "end": 256
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 257,
                "end": 259
              },
              "start": 251,
              "end": 259
            }
          ],
          "selfClosing": true,
          "start": 248,
          "end": 262
        },
        "children": [],
        "closingElement": null,
        "start": 248,
        "end": 262
      },
      "directive": null,
      "start": 248,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "a",
            "start": 265,
            "end": 266
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 267,
                "end": 270
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 271,
                "end": 273
              },
              "start": 267,
              "end": 273
            }
          ],
          "selfClosing": true,
          "start": 264,
          "end": 276
        },
        "children": [],
        "closingElement": null,
        "start": 264,
        "end": 276
      },
      "directive": null,
      "start": 264,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "label",
            "start": 301,
            "end": 306
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 307,
                "end": 310
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 311,
                "end": 313
              },
              "start": 307,
              "end": 313
            }
          ],
          "selfClosing": true,
          "start": 300,
          "end": 316
        },
        "children": [],
        "closingElement": null,
        "start": 300,
        "end": 316
      },
      "directive": null,
      "start": 300,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "label",
            "start": 319,
            "end": 324
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 325,
                "end": 328
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 329,
                "end": 331
              },
              "start": 325,
              "end": 331
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 332,
                "end": 337
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 338,
                "end": 340
              },
              "start": 332,
              "end": 340
            }
          ],
          "selfClosing": true,
          "start": 318,
          "end": 343
        },
        "children": [],
        "closingElement": null,
        "start": 318,
        "end": 343
      },
      "directive": null,
      "start": 318,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp",
            "start": 346,
            "end": 352
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 353,
                "end": 358
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 359,
                "end": 361
              },
              "start": 353,
              "end": 361
            }
          ],
          "selfClosing": true,
          "start": 345,
          "end": 364
        },
        "children": [],
        "closingElement": null,
        "start": 345,
        "end": 364
      },
      "directive": null,
      "start": 345,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp2",
            "start": 367,
            "end": 374
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 375,
                "end": 380
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 381,
                "end": 383
              },
              "start": 375,
              "end": 383
            }
          ],
          "selfClosing": true,
          "start": 366,
          "end": 386
        },
        "children": [],
        "closingElement": null,
        "start": 366,
        "end": 386
      },
      "directive": null,
      "start": 366,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp",
            "start": 389,
            "end": 395
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 396,
                "end": 399
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 400,
                "end": 402
              },
              "start": 396,
              "end": 402
            }
          ],
          "selfClosing": true,
          "start": 388,
          "end": 405
        },
        "children": [],
        "closingElement": null,
        "start": 388,
        "end": 405
      },
      "directive": null,
      "start": 388,
      "end": 406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp2",
            "start": 408,
            "end": 415
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 416,
                "end": 419
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 420,
                "end": 422
              },
              "start": 416,
              "end": 422
            }
          ],
          "selfClosing": true,
          "start": 407,
          "end": 425
        },
        "children": [],
        "closingElement": null,
        "start": 407,
        "end": 425
      },
      "directive": null,
      "start": 407,
      "end": 426
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 426
}
```
