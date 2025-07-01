__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "diamondTop",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
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
              "name": "Top",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 23
          }
        ],
        "start": 19,
        "end": 24
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "diamondMiddle",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 55
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Top",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 69
                    },
                    "typeArguments": null,
                    "start": 66,
                    "end": 69
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 56,
                  "end": 69
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Top",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 84
                    },
                    "typeArguments": null,
                    "start": 81,
                    "end": 84
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 84
                }
              ],
              "start": 55,
              "end": 85
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "diamondBottom",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 120
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
                          "name": "Bottom",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 127
                        },
                        "constraint": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 136,
                                "end": 137
                              },
                              "typeArguments": null,
                              "start": 136,
                              "end": 137
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 140,
                                "end": 141
                              },
                              "typeArguments": null,
                              "start": 140,
                              "end": 141
                            }
                          ],
                          "start": 136,
                          "end": 141
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 121,
                        "end": 141
                      }
                    ],
                    "start": 120,
                    "end": 142
                  },
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "top",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Top",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 168,
                                    "end": 171
                                  },
                                  "typeArguments": null,
                                  "start": 168,
                                  "end": 171
                                },
                                "start": 166,
                                "end": 171
                              },
                              "start": 163,
                              "end": 171
                            },
                            "init": null,
                            "definite": false,
                            "start": 163,
                            "end": 171
                          }
                        ],
                        "declare": false,
                        "start": 159,
                        "end": 172
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "middle",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 197,
                                        "end": 198
                                      },
                                      "typeArguments": null,
                                      "start": 197,
                                      "end": 198
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 201,
                                        "end": 202
                                      },
                                      "typeArguments": null,
                                      "start": 201,
                                      "end": 202
                                    }
                                  ],
                                  "start": 197,
                                  "end": 202
                                },
                                "start": 195,
                                "end": 202
                              },
                              "start": 189,
                              "end": 202
                            },
                            "init": null,
                            "definite": false,
                            "start": 189,
                            "end": 202
                          }
                        ],
                        "declare": false,
                        "start": 185,
                        "end": 203
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bottom",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Bottom",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 228,
                                    "end": 234
                                  },
                                  "typeArguments": null,
                                  "start": 228,
                                  "end": 234
                                },
                                "start": 226,
                                "end": 234
                              },
                              "start": 220,
                              "end": 234
                            },
                            "init": null,
                            "definite": false,
                            "start": 220,
                            "end": 234
                          }
                        ],
                        "declare": false,
                        "start": 216,
                        "end": 235
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "top",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 249,
                            "end": 252
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "middle",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 261
                          },
                          "start": 249,
                          "end": 261
                        },
                        "directive": null,
                        "start": 249,
                        "end": 262
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "middle",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 281
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bottom",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 284,
                            "end": 290
                          },
                          "start": 275,
                          "end": 290
                        },
                        "directive": null,
                        "start": 275,
                        "end": 291
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "top",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 307
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bottom",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 310,
                            "end": 316
                          },
                          "start": 304,
                          "end": 316
                        },
                        "directive": null,
                        "start": 304,
                        "end": 317
                      }
                    ],
                    "start": 145,
                    "end": 327
                  },
                  "expression": false,
                  "start": 98,
                  "end": 327
                }
              ],
              "start": 88,
              "end": 333
            },
            "expression": false,
            "start": 33,
            "end": 333
          }
        ],
        "start": 27,
        "end": 335
      },
      "expression": false,
      "start": 0,
      "end": 335
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 335
}
```
