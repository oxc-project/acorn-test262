__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 364,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 91,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 91,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 53,
          "end": 61,
          "imported": {
            "type": "Identifier",
            "start": 53,
            "end": 61,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 61,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 76,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 76,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 76,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 93,
      "end": 135,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 110,
        "decorators": [],
        "name": "CounterProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 113,
        "end": 135,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 119,
            "end": 133,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 124,
              "decorators": [],
              "name": "count",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 137,
      "end": 364,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 144,
        "end": 364,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 190,
          "end": 364,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 196,
              "end": 230,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 202,
                  "end": 229,
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 202,
                    "end": 215,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 203,
                        "end": 206,
                        "decorators": [],
                        "name": "cnt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 208,
                        "end": 214,
                        "decorators": [],
                        "name": "setCnt",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 218,
                    "end": 229,
                    "expression": {
                      "type": "Literal",
                      "start": 218,
                      "end": 222,
                      "raw": "null",
                      "value": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 226,
                      "end": 229
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ReturnStatement",
              "start": 235,
              "end": 362,
              "argument": {
                "type": "JSXFragment",
                "start": 242,
                "end": 362,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 244,
                    "end": 253,
                    "raw": "\n        ",
                    "value": "\n        "
                  },
                  {
                    "type": "JSXElement",
                    "start": 253,
                    "end": 265,
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "start": 256,
                        "end": 261,
                        "expression": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 260,
                          "decorators": [],
                          "name": "cnt",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 261,
                      "end": 265,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 263,
                        "end": 264,
                        "name": "p"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 253,
                      "end": 256,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 254,
                        "end": 255,
                        "name": "p"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 265,
                    "end": 274,
                    "raw": "\n        ",
                    "value": "\n        "
                  },
                  {
                    "type": "JSXElement",
                    "start": 274,
                    "end": 354,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 339,
                        "end": 345,
                        "raw": "Update",
                        "value": "Update"
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 345,
                      "end": 354,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 347,
                        "end": 353,
                        "name": "button"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 274,
                      "end": 339,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "start": 282,
                          "end": 324,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 282,
                            "end": 289,
                            "name": "onClick"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "start": 290,
                            "end": 324,
                            "expression": {
                              "type": "ArrowFunctionExpression",
                              "start": 291,
                              "end": 323,
                              "async": false,
                              "body": {
                                "type": "CallExpression",
                                "start": 297,
                                "end": 323,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 304,
                                    "end": 322,
                                    "async": false,
                                    "body": {
                                      "type": "BinaryExpression",
                                      "start": 314,
                                      "end": 322,
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 314,
                                        "end": 318,
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 321,
                                        "end": 322,
                                        "raw": "1",
                                        "value": 1
                                      }
                                    },
                                    "expression": true,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 305,
                                        "end": 309,
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "returnType": null,
                                    "typeParameters": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 297,
                                  "end": 303,
                                  "decorators": [],
                                  "name": "setCnt",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "start": 325,
                          "end": 338,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 325,
                            "end": 329,
                            "name": "type"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 330,
                            "end": 338,
                            "raw": "\"button\"",
                            "value": "button"
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 275,
                        "end": 281,
                        "name": "button"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 354,
                    "end": 359,
                    "raw": "\n    ",
                    "value": "\n    "
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 359,
                  "end": 362
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 242,
                  "end": 244
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 153,
          "end": 160,
          "decorators": [],
          "name": "Counter",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "ObjectPattern",
            "start": 161,
            "end": 188,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 163,
                "end": 172,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 168,
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 163,
                  "end": 172,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 168,
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 171,
                    "end": 172,
                    "raw": "0",
                    "value": 0
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 188,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 188,
                  "decorators": [],
                  "name": "CounterProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
