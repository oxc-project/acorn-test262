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
        "name": "diamondTop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "diamondMiddle",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 321,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 74,
                  "end": 315,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 96,
                    "name": "diamondBottom",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 127,
                    "end": 315,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 141,
                        "end": 154,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 145,
                            "end": 153,
                            "id": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 153,
                              "name": "top",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 148,
                                "end": 153,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 150,
                                  "end": 153,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 150,
                                    "end": 153,
                                    "name": "Top",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 167,
                        "end": 191,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 171,
                            "end": 190,
                            "id": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 190,
                              "name": "middle",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 177,
                                "end": 190,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 179,
                                  "end": 190,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 179,
                                      "end": 182,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 179,
                                        "end": 182,
                                        "name": "Top",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
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
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 189,
                                      "end": 190,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 189,
                                        "end": 190,
                                        "name": "U",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
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
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 204,
                        "end": 223,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 208,
                            "end": 222,
                            "id": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 222,
                              "name": "bottom",
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
                                    "name": "Bottom",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "var",
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
                            "name": "top",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 249,
                            "name": "middle",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "middle",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 272,
                            "end": 278,
                            "name": "bottom",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "top",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 298,
                            "end": 304,
                            "name": "bottom",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 96,
                    "end": 124,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 97,
                        "end": 123,
                        "name": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "name": "Bottom",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSUnionType",
                          "start": 112,
                          "end": 123,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 112,
                              "end": 115,
                              "typeName": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 115,
                                "name": "Top",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 118,
                              "end": 119,
                              "typeName": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 119,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 122,
                              "end": 123,
                              "typeName": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 123,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  "returnType": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 55,
              "end": 61,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 56,
                  "end": 57,
                  "name": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 60,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "U",
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
            "returnType": null
          }
        ]
      },
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
              "name": "Top",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
