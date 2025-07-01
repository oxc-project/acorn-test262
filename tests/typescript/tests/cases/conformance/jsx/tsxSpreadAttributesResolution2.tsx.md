__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 56
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
              "start": 63,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 73
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
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 81,
                  "end": 84
                },
                "start": 81,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 85
          }
        ],
        "start": 57,
        "end": 87
      },
      "declare": false,
      "start": 34,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 103
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
          "start": 112,
          "end": 117
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 127
        },
        "optional": false,
        "computed": false,
        "start": 112,
        "end": 127
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 140
            },
            "typeArguments": null,
            "start": 128,
            "end": 140
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 142,
            "end": 144
          }
        ],
        "start": 127,
        "end": 145
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "name": "div",
                          "start": 179,
                          "end": 182
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 178,
                        "end": 183
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 183,
                          "end": 188
                        }
                      ],
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
                      "start": 178,
                      "end": 194
                    },
                    "start": 171,
                    "end": 195
                  }
                ],
                "start": 161,
                "end": 201
              },
              "expression": false,
              "start": 158,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 152,
            "end": 201
          }
        ],
        "start": 146,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 203
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 214
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 217,
            "end": 219
          },
          "definite": false,
          "start": 211,
          "end": 219
        }
      ],
      "declare": false,
      "start": 205,
      "end": 220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Poisoned",
            "start": 229,
            "end": 237
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 244
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ok",
                      "raw": "\"ok\"",
                      "start": 246,
                      "end": 250
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 243,
                    "end": 250
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "value": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 255,
                      "end": 258
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 252,
                    "end": 258
                  }
                ],
                "start": 242,
                "end": 259
              },
              "start": 238,
              "end": 260
            }
          ],
          "selfClosing": true,
          "start": 228,
          "end": 263
        },
        "children": [],
        "closingElement": null,
        "start": 228,
        "end": 263
      },
      "directive": null,
      "start": 228,
      "end": 264
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 280
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "start": 284,
                "end": 292
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
                    "start": 297,
                    "end": 300
                  },
                  "start": 293,
                  "end": 301
                }
              ],
              "selfClosing": true,
              "start": 283,
              "end": 304
            },
            "children": [],
            "closingElement": null,
            "start": 283,
            "end": 304
          },
          "definite": false,
          "start": 279,
          "end": 304
        }
      ],
      "declare": false,
      "start": 275,
      "end": 305
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
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
                "name": "Poisoned",
                "start": 315,
                "end": 323
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 314,
              "end": 326
            },
            "children": [],
            "closingElement": null,
            "start": 314,
            "end": 326
          },
          "definite": false,
          "start": 310,
          "end": 326
        }
      ],
      "declare": false,
      "start": 306,
      "end": 327
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 333
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "start": 337,
                "end": 345
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 346,
                    "end": 347
                  },
                  "value": null,
                  "start": 346,
                  "end": 347
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 348,
                    "end": 349
                  },
                  "value": null,
                  "start": 348,
                  "end": 349
                }
              ],
              "selfClosing": true,
              "start": 336,
              "end": 351
            },
            "children": [],
            "closingElement": null,
            "start": 336,
            "end": 351
          },
          "definite": false,
          "start": 332,
          "end": 351
        }
      ],
      "declare": false,
      "start": 328,
      "end": 352
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 358
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "start": 362,
                "end": 370
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 376,
                          "end": 377
                        },
                        "value": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 379,
                          "end": 380
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 376,
                        "end": 380
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 383
                        },
                        "value": {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 385,
                          "end": 388
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 382,
                        "end": 388
                      }
                    ],
                    "start": 375,
                    "end": 389
                  },
                  "start": 371,
                  "end": 390
                }
              ],
              "selfClosing": true,
              "start": 361,
              "end": 392
            },
            "children": [],
            "closingElement": null,
            "start": 361,
            "end": 392
          },
          "definite": false,
          "start": 357,
          "end": 392
        }
      ],
      "declare": false,
      "start": 353,
      "end": 393
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "w1",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 400
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "start": 404,
                "end": 412
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 419
                        },
                        "value": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 421,
                          "end": 422
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 418,
                        "end": 422
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 424,
                          "end": 425
                        },
                        "value": {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 427,
                          "end": 430
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 424,
                        "end": 430
                      }
                    ],
                    "start": 417,
                    "end": 431
                  },
                  "start": 413,
                  "end": 432
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "X",
                    "start": 433,
                    "end": 434
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 435,
                    "end": 439
                  },
                  "start": 433,
                  "end": 439
                }
              ],
              "selfClosing": true,
              "start": 403,
              "end": 442
            },
            "children": [],
            "closingElement": null,
            "start": 403,
            "end": 442
          },
          "definite": false,
          "start": 398,
          "end": 442
        }
      ],
      "declare": false,
      "start": 394,
      "end": 443
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 443
}
```
