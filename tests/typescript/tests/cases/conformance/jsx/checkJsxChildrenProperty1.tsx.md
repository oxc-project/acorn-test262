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
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 48
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 65
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 80
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 107
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 115
                      },
                      "start": 104,
                      "end": 115
                    },
                    "typeArguments": null,
                    "start": 104,
                    "end": 115
                  }
                ],
                "start": 95,
                "end": 115
              },
              "start": 93,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 115
          }
        ],
        "start": 49,
        "end": 117
      },
      "declare": false,
      "start": 34,
      "end": 117
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 140
              },
              "typeArguments": null,
              "start": 136,
              "end": 140
            },
            "start": 134,
            "end": 140
          },
          "start": 133,
          "end": 140
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
                  "name": "div",
                  "start": 156,
                  "end": 159
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 155,
                "end": 160
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 162
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "optional": false,
                    "computed": false,
                    "start": 161,
                    "end": 164
                  },
                  "start": 160,
                  "end": 165
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 167,
                  "end": 170
                },
                "start": 165,
                "end": 171
              },
              "start": 155,
              "end": 171
            },
            "start": 148,
            "end": 172
          }
        ],
        "start": 142,
        "end": 174
      },
      "expression": false,
      "start": 119,
      "end": 174
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 191,
                "end": 195
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 196,
                    "end": 197
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 199,
                      "end": 201
                    },
                    "start": 198,
                    "end": 202
                  },
                  "start": 196,
                  "end": 202
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 203,
                    "end": 204
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 205,
                    "end": 209
                  },
                  "start": 203,
                  "end": 209
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 210,
                    "end": 218
                  },
                  "value": {
                    "type": "Literal",
                    "value": "lol",
                    "raw": "\"lol\"",
                    "start": 220,
                    "end": 225
                  },
                  "start": 210,
                  "end": 225
                }
              ],
              "selfClosing": true,
              "start": 190,
              "end": 228
            },
            "children": [],
            "closingElement": null,
            "start": 190,
            "end": 228
          },
          "definite": false,
          "start": 186,
          "end": 228
        }
      ],
      "declare": false,
      "start": 182,
      "end": 229
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 236
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 244,
                "end": 248
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 249,
                    "end": 250
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 252,
                      "end": 254
                    },
                    "start": 251,
                    "end": 255
                  },
                  "start": 249,
                  "end": 255
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 256,
                    "end": 257
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 258,
                    "end": 262
                  },
                  "start": 256,
                  "end": 262
                }
              ],
              "selfClosing": false,
              "start": 243,
              "end": 263
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    ",
                "start": 263,
                "end": 286
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 288,
                "end": 292
              },
              "start": 286,
              "end": 293
            },
            "start": 243,
            "end": 293
          },
          "definite": false,
          "start": 234,
          "end": 293
        }
      ],
      "declare": false,
      "start": 230,
      "end": 294
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 301
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 309,
                "end": 313
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 314,
                    "end": 315
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 317,
                      "end": 319
                    },
                    "start": 316,
                    "end": 320
                  },
                  "start": 314,
                  "end": 320
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 321,
                    "end": 322
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 323,
                    "end": 327
                  },
                  "start": 321,
                  "end": 327
                }
              ],
              "selfClosing": false,
              "start": 308,
              "end": 328
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 328,
                "end": 337
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 338,
                    "end": 341
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 337,
                  "end": 342
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "hi hi hi!",
                    "raw": "hi hi hi!",
                    "start": 342,
                    "end": 351
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 353,
                    "end": 356
                  },
                  "start": 351,
                  "end": 357
                },
                "start": 337,
                "end": 357
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 357,
                "end": 362
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 364,
                "end": 368
              },
              "start": 362,
              "end": 369
            },
            "start": 308,
            "end": 369
          },
          "definite": false,
          "start": 299,
          "end": 369
        }
      ],
      "declare": false,
      "start": 295,
      "end": 370
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 370
}
```
