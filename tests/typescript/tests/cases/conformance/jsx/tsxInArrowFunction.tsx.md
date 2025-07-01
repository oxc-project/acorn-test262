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
              "start": 38,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 46,
              "end": 49
            },
            "declare": false,
            "start": 28,
            "end": 49
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 81
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
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 95
                  },
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
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 115
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 118,
                              "end": 124
                            },
                            "start": 116,
                            "end": 124
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 111,
                          "end": 125
                        }
                      ],
                      "start": 97,
                      "end": 135
                    },
                    "start": 95,
                    "end": 135
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 135
                }
              ],
              "start": 82,
              "end": 141
            },
            "declare": false,
            "start": 54,
            "end": 141
          }
        ],
        "start": 22,
        "end": 143
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 162,
            "end": 165
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 161,
          "end": 166
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 174,
                    "end": 177
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 178,
                        "end": 182
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 183,
                        "end": 188
                      },
                      "start": 178,
                      "end": 188
                    }
                  ],
                  "selfClosing": true,
                  "start": 173,
                  "end": 191
                },
                "children": [],
                "closingElement": null,
                "start": 173,
                "end": 191
              },
              "id": null,
              "generator": false,
              "start": 167,
              "end": 191
            },
            "start": 166,
            "end": 192
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 194,
            "end": 197
          },
          "start": 192,
          "end": 198
        },
        "start": 161,
        "end": 198
      },
      "directive": null,
      "start": 161,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 217,
            "end": 220
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 216,
          "end": 221
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                }
              ],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 228,
                    "end": 231
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 232,
                        "end": 236
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 237,
                        "end": 242
                      },
                      "start": 232,
                      "end": 242
                    }
                  ],
                  "selfClosing": true,
                  "start": 227,
                  "end": 245
                },
                "children": [],
                "closingElement": null,
                "start": 227,
                "end": 245
              },
              "id": null,
              "generator": false,
              "start": 222,
              "end": 245
            },
            "start": 221,
            "end": 246
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 248,
            "end": 251
          },
          "start": 246,
          "end": 252
        },
        "start": 216,
        "end": 252
      },
      "directive": null,
      "start": 216,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 266,
            "end": 269
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 265,
          "end": 270
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 279,
                    "end": 282
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 283,
                        "end": 287
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 288,
                        "end": 293
                      },
                      "start": 283,
                      "end": 293
                    }
                  ],
                  "selfClosing": true,
                  "start": 278,
                  "end": 296
                },
                "children": [],
                "closingElement": null,
                "start": 278,
                "end": 296
              },
              "id": null,
              "generator": false,
              "start": 271,
              "end": 297
            },
            "start": 270,
            "end": 298
          }
        ],
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
        "start": 265,
        "end": 304
      },
      "directive": null,
      "start": 265,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 322,
            "end": 325
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 321,
          "end": 326
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 334,
                    "end": 337
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "text",
                        "start": 338,
                        "end": 342
                      },
                      "value": {
                        "type": "Literal",
                        "value": "wat",
                        "raw": "\"wat\"",
                        "start": 343,
                        "end": 348
                      },
                      "start": 338,
                      "end": 348
                    }
                  ],
                  "selfClosing": false,
                  "start": 333,
                  "end": 349
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 351,
                    "end": 354
                  },
                  "start": 349,
                  "end": 355
                },
                "start": 333,
                "end": 355
              },
              "id": null,
              "generator": false,
              "start": 327,
              "end": 355
            },
            "start": 326,
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
        "start": 321,
        "end": 362
      },
      "directive": null,
      "start": 321,
      "end": 363
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 363
}
```
