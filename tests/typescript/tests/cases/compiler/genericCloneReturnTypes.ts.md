__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 268,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 40,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 57,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 118,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 74,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 111,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 97,
                      "end": 110,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 97,
                        "end": 106,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 97,
                          "end": 101
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 106,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 84,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 186,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 186,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 150,
                    "end": 179,
                    "argument": {
                      "type": "NewExpression",
                      "start": 157,
                      "end": 178,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 168,
                          "end": 177,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 168,
                            "end": 172
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 177,
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 164,
                        "end": 167,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "VariableDeclaration",
      "start": 191,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 209,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 209,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 201,
                  "end": 209,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 202,
                      "end": 208
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 201,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 230,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 221,
              "end": 228,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 223,
                "end": 228,
                "decorators": [],
                "name": "clone",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 251,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 251,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 243,
                  "end": 251,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 244,
                      "end": 250
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 260,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 253,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 261,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
