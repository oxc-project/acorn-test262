__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 50,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 21,
                "end": 50,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 21,
                    "end": 34,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 23,
                        "end": 32,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 23,
                          "end": 24,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 32,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 26,
                            "end": 32
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 37,
                    "end": 50,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 39,
                        "end": 48,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 42,
                            "end": 48
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 60,
        "arguments": [
          {
            "type": "Literal",
            "start": 57,
            "end": 59,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 56,
          "decorators": [],
          "name": "union",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 123,
            "decorators": [],
            "name": "fnUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 123,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 86,
                "end": 123,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 86,
                    "end": 99,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 88,
                        "end": 97,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 97,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 91,
                            "end": 97
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 103,
                    "end": 122,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 104,
                        "end": 113,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 115,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 118,
                        "end": 122
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 135,
        "arguments": [
          {
            "type": "Literal",
            "start": 132,
            "end": 134,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 131,
          "decorators": [],
          "name": "fnUnion",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 223,
            "decorators": [],
            "name": "fnUnion2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 223,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 162,
                "end": 223,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 163,
                    "end": 195,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 183,
                          "end": 186,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 185,
                            "end": 186,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 186,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 195,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 191,
                        "end": 195
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 163,
                      "end": 181,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 164,
                          "end": 180,
                          "const": false,
                          "constraint": {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 200,
                    "end": 222,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 213,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 213,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 207,
                            "end": 213
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 218,
                        "end": 222
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 200,
                      "end": 203,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 201,
                          "end": 202,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 202,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 236,
        "arguments": [
          {
            "type": "Literal",
            "start": 233,
            "end": 235,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 232,
          "decorators": [],
          "name": "fnUnion2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
