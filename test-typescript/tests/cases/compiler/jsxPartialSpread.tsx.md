__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "name": "Select",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 59,
            "end": 92,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 60,
                "end": 80,
                "name": "p",
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
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 64,
                          "end": 69,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 79,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 72,
                            "end": 79
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 85,
              "end": 92,
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
                "selfClosing": false,
                "typeArguments": null
              },
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
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 94,
      "end": 120,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 101,
          "end": 106,
          "local": {
            "type": "Identifier",
            "start": 101,
            "end": 106,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 112,
        "end": 119,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 297,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 129,
        "end": 297,
        "id": {
          "type": "Identifier",
          "start": 138,
          "end": 143,
          "name": "Repro",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 144,
            "end": 221,
            "properties": [
              {
                "type": "Property",
                "start": 146,
                "end": 162,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 157,
                  "name": "SelectProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 146,
                  "end": 162,
                  "left": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 157,
                    "name": "SelectProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 160,
                    "end": 162,
                    "properties": []
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 179,
                      "name": "SelectProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 182,
                        "end": 219,
                        "typeName": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 189,
                          "name": "Partial",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 189,
                          "end": 219,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 190,
                              "end": 218,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 190,
                                "end": 215,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 190,
                                  "end": 200,
                                  "name": "Parameters",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                        "name": "Select",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 216,
                                "end": 217,
                                "literal": {
                                  "type": "Literal",
                                  "start": 216,
                                  "end": 217,
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ],
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
                          "value": "test",
                          "raw": "'test'"
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
                        "name": "SelectProps",
                        "typeAnnotation": null,
                        "decorators": [],
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
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
