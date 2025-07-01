__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 61
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 61
          },
          "importKind": "value",
          "start": 53,
          "end": 61
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 76
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 76
          },
          "importKind": "value",
          "start": 63,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 84,
        "end": 91
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CounterProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 110
      },
      "typeParameters": null,
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
              "name": "count",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 119,
            "end": 133
          }
        ],
        "start": 113,
        "end": 135
      },
      "declare": false,
      "start": 93,
      "end": 135
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Counter",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 160
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 168
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 168
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 171,
                    "end": 172
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 172
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 172
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CounterProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 188
                },
                "typeArguments": null,
                "start": 176,
                "end": 188
              },
              "start": 174,
              "end": 188
            },
            "start": 161,
            "end": 188
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 206
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setCnt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 214
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 215
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 218,
                      "end": 222
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 226,
                      "end": 229
                    },
                    "start": 218,
                    "end": 229
                  },
                  "definite": false,
                  "start": 202,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 196,
              "end": 230
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 242,
                  "end": 244
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "\n        ",
                    "raw": "\n        ",
                    "start": 244,
                    "end": 253
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "p",
                        "start": 254,
                        "end": 255
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 253,
                      "end": 256
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 260
                        },
                        "start": 256,
                        "end": 261
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "p",
                        "start": 263,
                        "end": 264
                      },
                      "start": 261,
                      "end": 265
                    },
                    "start": 253,
                    "end": 265
                  },
                  {
                    "type": "JSXText",
                    "value": "\n        ",
                    "raw": "\n        ",
                    "start": 265,
                    "end": 274
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 275,
                        "end": 281
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "onClick",
                            "start": 282,
                            "end": 289
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "setCnt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 297,
                                  "end": 303
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 305,
                                        "end": 309
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 314,
                                        "end": 318
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 321,
                                        "end": 322
                                      },
                                      "start": 314,
                                      "end": 322
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 304,
                                    "end": 322
                                  }
                                ],
                                "optional": false,
                                "start": 297,
                                "end": 323
                              },
                              "id": null,
                              "generator": false,
                              "start": 291,
                              "end": 323
                            },
                            "start": 290,
                            "end": 324
                          },
                          "start": 282,
                          "end": 324
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "type",
                            "start": 325,
                            "end": 329
                          },
                          "value": {
                            "type": "Literal",
                            "value": "button",
                            "raw": "\"button\"",
                            "start": 330,
                            "end": 338
                          },
                          "start": 325,
                          "end": 338
                        }
                      ],
                      "selfClosing": false,
                      "start": 274,
                      "end": 339
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "Update",
                        "raw": "Update",
                        "start": 339,
                        "end": 345
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 347,
                        "end": 353
                      },
                      "start": 345,
                      "end": 354
                    },
                    "start": 274,
                    "end": 354
                  },
                  {
                    "type": "JSXText",
                    "value": "\n    ",
                    "raw": "\n    ",
                    "start": 354,
                    "end": 359
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 359,
                  "end": 362
                },
                "start": 242,
                "end": 362
              },
              "start": 235,
              "end": 362
            }
          ],
          "start": 190,
          "end": 364
        },
        "expression": false,
        "start": 144,
        "end": 364
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 137,
      "end": 364
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 364
}
```
