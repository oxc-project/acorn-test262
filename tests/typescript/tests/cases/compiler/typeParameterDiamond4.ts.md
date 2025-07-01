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
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 56,
                  "end": 57
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 59,
                  "end": 60
                }
              ],
              "start": 55,
              "end": 61
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
                    "start": 83,
                    "end": 96
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
                          "start": 97,
                          "end": 103
                        },
                        "constraint": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Top",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 112,
                                "end": 115
                              },
                              "typeArguments": null,
                              "start": 112,
                              "end": 115
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 118,
                                "end": 119
                              },
                              "typeArguments": null,
                              "start": 118,
                              "end": 119
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 122,
                                "end": 123
                              },
                              "typeArguments": null,
                              "start": 122,
                              "end": 123
                            }
                          ],
                          "start": 112,
                          "end": 123
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 97,
                        "end": 123
                      }
                    ],
                    "start": 96,
                    "end": 124
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
                                    "start": 150,
                                    "end": 153
                                  },
                                  "typeArguments": null,
                                  "start": 150,
                                  "end": 153
                                },
                                "start": 148,
                                "end": 153
                              },
                              "start": 145,
                              "end": 153
                            },
                            "init": null,
                            "definite": false,
                            "start": 145,
                            "end": 153
                          }
                        ],
                        "declare": false,
                        "start": 141,
                        "end": 154
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
                                        "name": "Top",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 179,
                                        "end": 182
                                      },
                                      "typeArguments": null,
                                      "start": 179,
                                      "end": 182
                                    },
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
                                  "start": 179,
                                  "end": 190
                                },
                                "start": 177,
                                "end": 190
                              },
                              "start": 171,
                              "end": 190
                            },
                            "init": null,
                            "definite": false,
                            "start": 171,
                            "end": 190
                          }
                        ],
                        "declare": false,
                        "start": 167,
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
                    "start": 127,
                    "end": 315
                  },
                  "expression": false,
                  "start": 74,
                  "end": 315
                }
              ],
              "start": 64,
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
