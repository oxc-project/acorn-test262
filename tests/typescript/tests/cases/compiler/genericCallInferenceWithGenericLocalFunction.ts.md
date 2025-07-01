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
            "name": "createTransform",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 78
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 82,
                  "end": 83
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 86
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 85,
                  "end": 86
                }
              ],
              "start": 81,
              "end": 87
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 99,
                              "end": 100
                            },
                            "typeArguments": null,
                            "start": 99,
                            "end": 100
                          },
                          "start": 97,
                          "end": 100
                        },
                        "start": 93,
                        "end": 100
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 106
                        },
                        "typeArguments": null,
                        "start": 105,
                        "end": 106
                      },
                      "start": 102,
                      "end": 106
                    },
                    "start": 92,
                    "end": 106
                  },
                  "start": 90,
                  "end": 106
                },
                "start": 88,
                "end": 106
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "tr",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 113
            },
            "id": null,
            "generator": false,
            "start": 81,
            "end": 113
          },
          "definite": false,
          "start": 63,
          "end": 113
        }
      ],
      "declare": false,
      "start": 57,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withP2",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 131
      },
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 132,
            "end": 133
          }
        ],
        "start": 131,
        "end": 134
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 139
              },
              "typeArguments": null,
              "start": 138,
              "end": 139
            },
            "start": 136,
            "end": 139
          },
          "start": 135,
          "end": 139
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 156,
                        "end": 157
                      }
                    ],
                    "start": 155,
                    "end": 159
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 166,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 166,
                          "end": 167
                        },
                        "start": 164,
                        "end": 167
                      },
                      "start": 160,
                      "end": 167
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 178,
                          "end": 182
                        },
                        "start": 175,
                        "end": 182
                      },
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 188
                        },
                        "start": 184,
                        "end": 188
                      }
                    ],
                    "start": 173,
                    "end": 190
                  },
                  "id": null,
                  "generator": false,
                  "start": 155,
                  "end": 191
                },
                "definite": false,
                "start": 151,
                "end": 191
              }
            ],
            "declare": false,
            "start": 145,
            "end": 192
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createTransform",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                }
              ],
              "optional": false,
              "start": 202,
              "end": 220
            },
            "start": 195,
            "end": 221
          }
        ],
        "start": 141,
        "end": 223
      },
      "expression": false,
      "start": 116,
      "end": 223
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
            "name": "addP2",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 236
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withP2",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 251
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 253,
                      "end": 254
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 248,
                    "end": 254
                  }
                ],
                "start": 246,
                "end": 256
              }
            ],
            "optional": false,
            "start": 239,
            "end": 257
          },
          "definite": false,
          "start": 231,
          "end": 257
        }
      ],
      "declare": false,
      "start": 225,
      "end": 258
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
            "name": "added2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 271
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "addP2",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 285
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 287,
                      "end": 288
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 282,
                    "end": 288
                  }
                ],
                "start": 280,
                "end": 290
              }
            ],
            "optional": false,
            "start": 274,
            "end": 291
          },
          "definite": false,
          "start": 265,
          "end": 291
        }
      ],
      "declare": false,
      "start": 259,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 292
}
```
