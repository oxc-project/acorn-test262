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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "name": "union",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 23,
                          "end": 24,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 32,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 26,
                            "end": 32
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 42,
                            "end": 48
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 61,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 60,
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 56,
          "name": "union",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 57,
            "end": 59,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 123,
            "name": "fnUnion",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 97,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 91,
                            "end": 97
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 103,
                    "end": 122,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 104,
                        "end": 113,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 131,
          "name": "fnUnion",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 132,
            "end": 134,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 223,
            "name": "fnUnion2",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 163,
                      "end": 181,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 164,
                          "end": 180,
                          "name": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
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
                        "start": 182,
                        "end": 186,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 183,
                          "end": 186,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 185,
                            "end": 186,
                            "typeName": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 186,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 200,
                    "end": 222,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 200,
                      "end": 203,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 201,
                          "end": 202,
                          "name": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 202,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
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
                        "start": 204,
                        "end": 213,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 213,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 207,
                            "end": 213
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 236,
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 232,
          "name": "fnUnion2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 233,
            "end": 235,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
