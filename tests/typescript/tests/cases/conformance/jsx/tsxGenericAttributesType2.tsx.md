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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator4",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 50
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 64
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [
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
                          "start": 75,
                          "end": 76
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 78,
                            "end": 84
                          },
                          "start": 76,
                          "end": 84
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 75,
                        "end": 84
                      }
                    ],
                    "start": 73,
                    "end": 86
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 63,
                  "end": 86
                }
              ],
              "start": 62,
              "end": 87
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 104
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 123
                      },
                      "start": 99,
                      "end": 123
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 125
                          },
                          "typeArguments": null,
                          "start": 124,
                          "end": 125
                        }
                      ],
                      "start": 123,
                      "end": 126
                    },
                    "start": 99,
                    "end": 126
                  },
                  "start": 97,
                  "end": 126
                },
                "start": 88,
                "end": 126
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 134
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 153
                  },
                  "start": 129,
                  "end": 153
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 155
                      },
                      "typeArguments": null,
                      "start": 154,
                      "end": 155
                    }
                  ],
                  "start": 153,
                  "end": 156
                },
                "start": 129,
                "end": 156
              },
              "start": 127,
              "end": 156
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 176
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 182,
                          "end": 191
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 201
                            },
                            "start": 192,
                            "end": 202
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "y",
                              "start": 203,
                              "end": 204
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "Literal",
                                "value": "blah",
                                "raw": "\"blah\"",
                                "start": 206,
                                "end": 212
                              },
                              "start": 205,
                              "end": 213
                            },
                            "start": 203,
                            "end": 213
                          }
                        ],
                        "selfClosing": false,
                        "start": 181,
                        "end": 215
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 217,
                          "end": 226
                        },
                        "start": 215,
                        "end": 227
                      },
                      "start": 181,
                      "end": 227
                    },
                    "id": null,
                    "generator": false,
                    "start": 170,
                    "end": 227
                  },
                  "start": 163,
                  "end": 227
                }
              ],
              "start": 157,
              "end": 229
            },
            "expression": false,
            "start": 53,
            "end": 229
          },
          "definite": false,
          "start": 40,
          "end": 229
        }
      ],
      "declare": false,
      "start": 34,
      "end": 230
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 230
}
```
