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
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 61,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 76,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 91,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 93,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 110,
        "decorators": [],
        "name": "CounterProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 113,
        "end": 135,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 119,
            "end": 133,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 124,
              "decorators": [],
              "name": "count",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 137,
      "end": 364,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 144,
        "end": 364,
        "id": {
          "type": "Identifier",
          "start": 153,
          "end": 160,
          "decorators": [],
          "name": "Counter",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 161,
            "end": 188,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 163,
                "end": 172,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 168,
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 171,
                    "end": 172,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 188,
                  "decorators": [],
                  "name": "CounterProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 190,
          "end": 364,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 196,
              "end": 230,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 202,
                  "end": 229,
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
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 226,
                      "end": 229
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 235,
              "end": 362,
              "argument": {
                "type": "JSXFragment",
                "start": 242,
                "end": 362,
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 242,
                  "end": 244
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 244,
                    "end": 253,
                    "value": "\n        ",
                    "raw": "\n        "
                  },
                  {
                    "type": "JSXElement",
                    "start": 253,
                    "end": 265,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 253,
                      "end": 256,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 254,
                        "end": 255,
                        "name": "p"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false
                    },
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
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 265,
                    "end": 274,
                    "value": "\n        ",
                    "raw": "\n        "
                  },
                  {
                    "type": "JSXElement",
                    "start": 274,
                    "end": 354,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 274,
                      "end": 339,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 275,
                        "end": 281,
                        "name": "button"
                      },
                      "typeArguments": null,
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
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "start": 297,
                                "end": 323,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 297,
                                  "end": 303,
                                  "decorators": [],
                                  "name": "setCnt",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 304,
                                    "end": 322,
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
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
                                    "body": {
                                      "type": "BinaryExpression",
                                      "start": 314,
                                      "end": 322,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 314,
                                        "end": 318,
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "start": 321,
                                        "end": 322,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "id": null,
                                    "generator": false
                                  }
                                ],
                                "optional": false
                              },
                              "id": null,
                              "generator": false
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
                            "value": "button",
                            "raw": "\"button\""
                          }
                        }
                      ],
                      "selfClosing": false
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 339,
                        "end": 345,
                        "value": "Update",
                        "raw": "Update"
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
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 354,
                    "end": 359,
                    "value": "\n    ",
                    "raw": "\n    "
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 359,
                  "end": 362
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
