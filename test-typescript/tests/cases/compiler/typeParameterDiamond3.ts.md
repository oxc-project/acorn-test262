__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 317,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 317,
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
        "end": 317,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 33,
            "end": 315,
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
              "end": 315,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 74,
                  "end": 309,
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
                    "end": 309,
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
                        "end": 185,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 171,
                            "end": 184,
                            "id": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 184,
                              "name": "middle",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 177,
                                "end": 184,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 179,
                                  "end": 184,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 179,
                                      "end": 180,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 179,
                                        "end": 180,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 183,
                                      "end": 184,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 183,
                                        "end": 184,
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
                        "start": 198,
                        "end": 217,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 202,
                            "end": 216,
                            "id": {
                              "type": "Identifier",
                              "start": 202,
                              "end": 216,
                              "name": "bottom",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 208,
                                "end": 216,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 210,
                                  "end": 216,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 210,
                                    "end": 216,
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
                        "start": 231,
                        "end": 244,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 231,
                          "end": 243,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 231,
                            "end": 234,
                            "name": "top",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 243,
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
                        "start": 257,
                        "end": 273,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 257,
                          "end": 272,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 263,
                            "name": "middle",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 266,
                            "end": 272,
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
                        "start": 286,
                        "end": 299,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 286,
                          "end": 298,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 289,
                            "name": "top",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 292,
                            "end": 298,
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
