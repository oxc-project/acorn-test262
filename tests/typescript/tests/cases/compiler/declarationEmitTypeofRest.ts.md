__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 112,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 112,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 18,
              "end": 112,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 19,
                  "end": 41,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 25,
                      "end": 41,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 26,
                          "end": 32,
                          "label": {
                            "type": "Identifier",
                            "start": 26,
                            "end": 27,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 29,
                            "end": 32,
                            "literal": {
                              "type": "Literal",
                              "start": 29,
                              "end": 32,
                              "value": "n",
                              "raw": "\"n\""
                            }
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 34,
                          "end": 40,
                          "label": {
                            "type": "Identifier",
                            "start": 34,
                            "end": 35,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 37,
                            "end": 40,
                            "literal": {
                              "type": "Literal",
                              "start": 37,
                              "end": 40,
                              "value": "a",
                              "raw": "\"a\""
                            }
                          },
                          "optional": false
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 42,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 44,
                  "end": 88,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 74,
                      "end": 86,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 77,
                          "end": 85,
                          "exprName": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 112,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 98,
                    "end": 110,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 105,
                      "end": 110,
                      "expression": {
                        "type": "Literal",
                        "start": 105,
                        "end": 109,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 18,
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 16,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 171,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 171,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 171,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 38,
              "end": 171,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 39,
                  "end": 61,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 45,
                      "end": 61,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 46,
                          "end": 52,
                          "label": {
                            "type": "Identifier",
                            "start": 46,
                            "end": 47,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 49,
                            "end": 52,
                            "literal": {
                              "type": "Literal",
                              "start": 49,
                              "end": 52,
                              "value": "n",
                              "raw": "\"n\""
                            }
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 54,
                          "end": 60,
                          "label": {
                            "type": "Identifier",
                            "start": 54,
                            "end": 55,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "start": 57,
                            "end": 60,
                            "literal": {
                              "type": "Literal",
                              "start": 57,
                              "end": 60,
                              "value": "a",
                              "raw": "\"a\""
                            }
                          },
                          "optional": false
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 64,
                  "end": 147,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 94,
                      "end": 106,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 105,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 97,
                          "end": 105,
                          "exprName": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 105,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 133,
                      "end": 145,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 144,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 136,
                          "end": 144,
                          "exprName": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 144,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 157,
                    "end": 169,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 164,
                      "end": 169,
                      "expression": {
                        "type": "Literal",
                        "start": 164,
                        "end": 168,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
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
