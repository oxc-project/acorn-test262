__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "diamondTop",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "Top",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 323,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 33,
            "end": 321,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 55,
              "decorators": [],
              "name": "diamondMiddle",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 55,
              "end": 73,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 56,
                  "end": 69,
                  "name": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 69,
                      "decorators": [],
                      "name": "Top",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 72,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 76,
              "end": 321,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 86,
                  "end": 315,
                  "id": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 108,
                    "decorators": [],
                    "name": "diamondBottom",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 108,
                    "end": 130,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 109,
                        "end": 129,
                        "name": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 115,
                          "decorators": [],
                          "name": "Bottom",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSUnionType",
                          "start": 124,
                          "end": 129,
                          "types": [
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
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 128,
                              "end": 129,
                              "typeName": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 129,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 133,
                    "end": 315,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 147,
                        "end": 160,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 151,
                            "end": 159,
                            "id": {
                              "type": "Identifier",
                              "start": 151,
                              "end": 159,
                              "decorators": [],
                              "name": "top",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 154,
                                "end": 159,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 156,
                                  "end": 159,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 156,
                                    "end": 159,
                                    "decorators": [],
                                    "name": "Top",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 173,
                        "end": 191,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 177,
                            "end": 190,
                            "id": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 190,
                              "decorators": [],
                              "name": "middle",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 183,
                                "end": 190,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 185,
                                  "end": 190,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 185,
                                      "end": 186,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 185,
                                        "end": 186,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 189,
                                      "end": 190,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 189,
                                        "end": 190,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 204,
                        "end": 223,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 208,
                            "end": 222,
                            "id": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 222,
                              "decorators": [],
                              "name": "bottom",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 214,
                                "end": 222,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 216,
                                  "end": 222,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 216,
                                    "end": 222,
                                    "decorators": [],
                                    "name": "Bottom",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 237,
                        "end": 250,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 237,
                          "end": 249,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 240,
                            "decorators": [],
                            "name": "top",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 249,
                            "decorators": [],
                            "name": "middle",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 263,
                        "end": 279,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 263,
                          "end": 278,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 269,
                            "decorators": [],
                            "name": "middle",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 272,
                            "end": 278,
                            "decorators": [],
                            "name": "bottom",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 292,
                        "end": 305,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 292,
                          "end": 304,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 292,
                            "end": 295,
                            "decorators": [],
                            "name": "top",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 298,
                            "end": 304,
                            "decorators": [],
                            "name": "bottom",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
