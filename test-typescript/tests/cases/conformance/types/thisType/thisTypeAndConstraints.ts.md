__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 49,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 31,
                    "end": 43,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 38,
                      "end": 42
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
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 168,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 89,
            "end": 148,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 119,
              "end": 148,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 129,
                  "end": 142,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 129,
                    "end": 141,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 133,
                      "end": 141,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 117,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 116,
                    "end": 117,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 99,
              "end": 112,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 100,
                  "end": 111,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 111,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 166,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 153,
              "end": 165,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 157,
                "end": 165,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 157,
                  "end": 163,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 163,
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 81,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 81,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 75,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 75,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
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
      "type": "ClassDeclaration",
      "start": 170,
      "end": 295,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 191,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 236,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 200,
              "end": 236,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 207,
                "end": 236,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 230,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 217,
                      "end": 229,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 218,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 221,
                        "end": 229,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 221,
                          "end": 227,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 222,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 227,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
                  "start": 201,
                  "end": 205,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 205,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 205,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "start": 241,
            "end": 293,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 293,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 293,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 287,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 274,
                      "end": 286,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 278,
                        "end": 286,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 278,
                          "end": 284,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 279,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 280,
                            "end": 284,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
                  "start": 258,
                  "end": 262,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 261,
                      "end": 262,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 262,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 244,
                "end": 257,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 245,
                    "end": 256,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 256,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 256,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 177,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 178,
            "end": 189,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 189,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
