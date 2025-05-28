__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 230,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 50,
            "decorators": [],
            "name": "decorator4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 53,
            "end": 229,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 62,
              "end": 87,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 63,
                  "end": 86,
                  "name": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 73,
                    "end": 86,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 75,
                        "end": 84,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 76,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 76,
                          "end": 84,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 78,
                            "end": 84
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 126,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 97,
                  "end": 126,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 126,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 99,
                      "end": 123,
                      "left": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 104,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 123,
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 123,
                      "end": 126,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 124,
                          "end": 125,
                          "typeName": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 125,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 156,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 129,
                  "end": 153,
                  "left": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 134,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 153,
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 153,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 154,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 157,
              "end": 229,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 163,
                  "end": 227,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 170,
                    "end": 227,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 176,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 181,
                      "end": 227,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 181,
                        "end": 215,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 182,
                          "end": 191,
                          "name": "Component"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 192,
                            "end": 202,
                            "argument": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 201,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 203,
                            "end": 213,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 203,
                              "end": 204,
                              "name": "y"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 205,
                              "end": 213,
                              "expression": {
                                "type": "Literal",
                                "start": 206,
                                "end": 212,
                                "value": "blah",
                                "raw": "\"blah\""
                              }
                            }
                          }
                        ],
                        "selfClosing": false
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 215,
                        "end": 227,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 217,
                          "end": 226,
                          "name": "Component"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
