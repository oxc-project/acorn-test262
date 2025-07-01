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
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 72
                }
              ],
              "start": 55,
              "end": 73
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
                    "start": 95,
                    "end": 108
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
                          "start": 109,
                          "end": 115
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
                                "start": 124,
                                "end": 125
                              },
                              "typeArguments": null,
                              "start": 124,
                              "end": 125
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 128,
                                "end": 129
                              },
                              "typeArguments": null,
                              "start": 128,
                              "end": 129
                            }
                          ],
                          "start": 124,
                          "end": 129
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 109,
                        "end": 129
                      }
                    ],
                    "start": 108,
                    "end": 130
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
                                    "start": 156,
                                    "end": 159
                                  },
                                  "typeArguments": null,
                                  "start": 156,
                                  "end": 159
                                },
                                "start": 154,
                                "end": 159
                              },
                              "start": 151,
                              "end": 159
                            },
                            "init": null,
                            "definite": false,
                            "start": 151,
                            "end": 159
                          }
                        ],
                        "declare": false,
                        "start": 147,
                        "end": 160
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
                                        "start": 185,
                                        "end": 186
                                      },
                                      "typeArguments": null,
                                      "start": 185,
                                      "end": 186
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 189,
                                        "end": 190
                                      },
                                      "typeArguments": null,
                                      "start": 189,
                                      "end": 190
                                    }
                                  ],
                                  "start": 185,
                                  "end": 190
                                },
                                "start": 183,
                                "end": 190
                              },
                              "start": 177,
                              "end": 190
                            },
                            "init": null,
                            "definite": false,
                            "start": 177,
                            "end": 190
                          }
                        ],
                        "declare": false,
                        "start": 173,
                        "end": 191
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
                                    "start": 216,
                                    "end": 222
                                  },
                                  "typeArguments": null,
                                  "start": 216,
                                  "end": 222
                                },
                                "start": 214,
                                "end": 222
                              },
                              "start": 208,
                              "end": 222
                            },
                            "init": null,
                            "definite": false,
                            "start": 208,
                            "end": 222
                          }
                        ],
                        "declare": false,
                        "start": 204,
                        "end": 223
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
                            "start": 237,
                            "end": 240
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "middle",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 249
                          },
                          "start": 237,
                          "end": 249
                        },
                        "directive": null,
                        "start": 237,
                        "end": 250
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
                            "start": 263,
                            "end": 269
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bottom",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 278
                          },
                          "start": 263,
                          "end": 278
                        },
                        "directive": null,
                        "start": 263,
                        "end": 279
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
                            "start": 292,
                            "end": 295
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bottom",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 298,
                            "end": 304
                          },
                          "start": 292,
                          "end": 304
                        },
                        "directive": null,
                        "start": 292,
                        "end": 305
                      }
                    ],
                    "start": 133,
                    "end": 315
                  },
                  "expression": false,
                  "start": 86,
                  "end": 315
                }
              ],
              "start": 76,
              "end": 321
            },
            "expression": false,
            "start": 33,
            "end": 321
          }
        ],
        "start": 27,
        "end": 323
      },
      "expression": false,
      "start": 0,
      "end": 323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 323
}
```
