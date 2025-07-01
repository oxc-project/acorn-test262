__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Select",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 56
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 64,
                          "end": 69
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 72,
                            "end": 79
                          },
                          "start": 70,
                          "end": 79
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 64,
                        "end": 79
                      }
                    ],
                    "start": 63,
                    "end": 80
                  },
                  "start": 61,
                  "end": 80
                },
                "start": 60,
                "end": 80
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 86,
                  "end": 87
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 85,
                "end": 88
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 90,
                  "end": 91
                },
                "start": 88,
                "end": 92
              },
              "start": 85,
              "end": 92
            },
            "id": null,
            "generator": false,
            "start": 59,
            "end": 92
          },
          "definite": false,
          "start": 50,
          "end": 92
        }
      ],
      "declare": false,
      "start": 44,
      "end": 93
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 106
          },
          "start": 101,
          "end": 106
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 112,
        "end": 119
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 94,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Repro",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 143
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
                  "name": "SelectProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 157
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 157
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 160,
                    "end": 162
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 162
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 146,
                "end": 162
              }
            ],
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
                      "name": "SelectProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 179
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 189
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 190,
                                  "end": 200
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Select",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 208,
                                        "end": 214
                                      },
                                      "typeArguments": null,
                                      "start": 201,
                                      "end": 214
                                    }
                                  ],
                                  "start": 200,
                                  "end": 215
                                },
                                "start": 190,
                                "end": 215
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 216,
                                  "end": 217
                                },
                                "start": 216,
                                "end": 217
                              },
                              "start": 190,
                              "end": 218
                            }
                          ],
                          "start": 189,
                          "end": 219
                        },
                        "start": 182,
                        "end": 219
                      },
                      "start": 180,
                      "end": 219
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 168,
                    "end": 219
                  }
                ],
                "start": 166,
                "end": 221
              },
              "start": 164,
              "end": 221
            },
            "start": 144,
            "end": 221
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
                    "name": "Select",
                    "start": 247,
                    "end": 253
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "value",
                        "start": 254,
                        "end": 259
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": "test",
                          "raw": "'test'",
                          "start": 261,
                          "end": 267
                        },
                        "start": 260,
                        "end": 268
                      },
                      "start": 254,
                      "end": 268
                    },
                    {
                      "type": "JSXSpreadAttribute",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SelectProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 284
                      },
                      "start": 269,
                      "end": 285
                    }
                  ],
                  "selfClosing": true,
                  "start": 246,
                  "end": 288
                },
                "children": [],
                "closingElement": null,
                "start": 246,
                "end": 288
              },
              "start": 229,
              "end": 295
            }
          ],
          "start": 223,
          "end": 297
        },
        "expression": false,
        "start": 129,
        "end": 297
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 122,
      "end": 297
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 297
}
```
