jsxPartialSpread.tsx
```json
{
  "type": "Program",
  "start": 44,
  "end": 297,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "decorators": [],
            "name": "Select",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 59,
            "end": 92,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 85,
              "end": 92,
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 88,
                "end": 92,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 90,
                  "end": 91,
                  "name": "p"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 85,
                "end": 88,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 86,
                  "end": 87,
                  "name": "p"
                },
                "selfClosing": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 60,
                "end": 80,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 63,
                    "end": 80,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 64,
                        "end": 79,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 64,
                          "end": 69,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 79,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 72,
                            "end": 79
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ImportDeclaration",
      "start": 94,
      "end": 120,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 112,
        "end": 119,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 101,
          "end": 106,
          "local": {
            "type": "Identifier",
            "start": 101,
            "end": 106,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 297,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 129,
        "end": 297,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 223,
          "end": 297,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 229,
              "end": 295,
              "argument": {
                "type": "JSXElement",
                "start": 246,
                "end": 288,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 246,
                  "end": 288,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 254,
                      "end": 268,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 254,
                        "end": 259,
                        "name": "value"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 260,
                        "end": 268,
                        "expression": {
                          "type": "Literal",
                          "start": 261,
                          "end": 267,
                          "raw": "'test'",
                          "value": "test"
                        }
                      }
                    },
                    {
                      "type": "JSXSpreadAttribute",
                      "start": 269,
                      "end": 285,
                      "argument": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 284,
                        "decorators": [],
                        "name": "SelectProps",
                        "optional": false
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 247,
                    "end": 253,
                    "name": "Select"
                  },
                  "selfClosing": true
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
          "start": 138,
          "end": 143,
          "decorators": [],
          "name": "Repro",
          "optional": false
        },
        "params": [
          {
            "type": "ObjectPattern",
            "start": 144,
            "end": 221,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 146,
                "end": 162,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 157,
                  "decorators": [],
                  "name": "SelectProps",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 146,
                  "end": 162,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 157,
                    "decorators": [],
                    "name": "SelectProps",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 160,
                    "end": 162,
                    "properties": []
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 166,
                "end": 221,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 168,
                    "end": 219,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 179,
                      "decorators": [],
                      "name": "SelectProps",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 182,
                        "end": 219,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 189,
                          "end": 219,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 190,
                              "end": 218,
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 216,
                                "end": 217,
                                "literal": {
                                  "type": "Literal",
                                  "start": 216,
                                  "end": 217,
                                  "raw": "0",
                                  "value": 0
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 190,
                                "end": 215,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 200,
                                  "end": 215,
                                  "params": [
                                    {
                                      "type": "TSTypeQuery",
                                      "start": 201,
                                      "end": 214,
                                      "exprName": {
                                        "type": "Identifier",
                                        "start": 208,
                                        "end": 214,
                                        "decorators": [],
                                        "name": "Select",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 190,
                                  "end": 200,
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 189,
                          "decorators": [],
                          "name": "Partial",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
