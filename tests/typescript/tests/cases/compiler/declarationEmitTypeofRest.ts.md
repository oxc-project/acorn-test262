__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 22,
                    "end": 23
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 26,
                            "end": 27
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "n",
                              "raw": "\"n\"",
                              "start": 29,
                              "end": 32
                            },
                            "start": 29,
                            "end": 32
                          },
                          "optional": false,
                          "start": 26,
                          "end": 32
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 34,
                            "end": 35
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 37,
                              "end": 40
                            },
                            "start": 37,
                            "end": 40
                          },
                          "optional": false,
                          "start": 34,
                          "end": 40
                        }
                      ],
                      "start": 25,
                      "end": 41
                    },
                    "start": 23,
                    "end": 41
                  },
                  "value": null,
                  "start": 19,
                  "end": 41
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 75
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 85
                          },
                          "typeArguments": null,
                          "start": 77,
                          "end": 85
                        },
                        "start": 75,
                        "end": 85
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 74,
                      "end": 86
                    }
                  ],
                  "start": 44,
                  "end": 88
                },
                "start": 42,
                "end": 88
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 105,
                        "end": 109
                      },
                      "start": 105,
                      "end": 110
                    },
                    "start": 98,
                    "end": 110
                  }
                ],
                "start": 92,
                "end": 112
              },
              "id": null,
              "generator": false,
              "start": 18,
              "end": 112
            },
            "definite": false,
            "start": 13,
            "end": 112
          }
        ],
        "declare": false,
        "start": 7,
        "end": 112
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 112
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 16
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 10,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 43
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 46,
                            "end": 47
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "n",
                              "raw": "\"n\"",
                              "start": 49,
                              "end": 52
                            },
                            "start": 49,
                            "end": 52
                          },
                          "optional": false,
                          "start": 46,
                          "end": 52
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 54,
                            "end": 55
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 57,
                              "end": 60
                            },
                            "start": 57,
                            "end": 60
                          },
                          "optional": false,
                          "start": 54,
                          "end": 60
                        }
                      ],
                      "start": 45,
                      "end": 61
                    },
                    "start": 43,
                    "end": 61
                  },
                  "value": null,
                  "start": 39,
                  "end": 61
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 105
                          },
                          "typeArguments": null,
                          "start": 97,
                          "end": 105
                        },
                        "start": 95,
                        "end": 105
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 94,
                      "end": 106
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 134
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 144
                          },
                          "typeArguments": null,
                          "start": 136,
                          "end": 144
                        },
                        "start": 134,
                        "end": 144
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 133,
                      "end": 145
                    }
                  ],
                  "start": 64,
                  "end": 147
                },
                "start": 62,
                "end": 147
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 164,
                        "end": 168
                      },
                      "start": 164,
                      "end": 169
                    },
                    "start": 157,
                    "end": 169
                  }
                ],
                "start": 151,
                "end": 171
              },
              "id": null,
              "generator": false,
              "start": 38,
              "end": 171
            },
            "definite": false,
            "start": 33,
            "end": 171
          }
        ],
        "declare": false,
        "start": 27,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
