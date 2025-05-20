__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 42,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
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
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 64,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 63,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 60,
                "end": 63,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
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
              "start": 80,
              "end": 167,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 167,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 116,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 115,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 111,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 111,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 161,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 125,
                      "end": 160,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 134,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 134,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 137,
                        "end": 160,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 150,
                            "end": 159,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 150,
                              "end": 154
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 159,
                              "decorators": [],
                              "name": "size",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 146,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 146,
                          "end": 149,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 147,
                              "end": 148,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 148,
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
                  "start": 81,
                  "end": 90,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
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
            "start": 172,
            "end": 235,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 184,
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
              "start": 184,
              "end": 235,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 187,
                "end": 235,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 197,
                    "end": 229,
                    "argument": {
                      "type": "NewExpression",
                      "start": 204,
                      "end": 228,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 218,
                          "end": 227,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 218,
                            "end": 222
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 227,
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 214,
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 214,
                        "end": 217,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 215,
                            "end": 216,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 216,
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
        "end": 12,
        "decorators": [],
        "name": "MyList",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 238,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 259,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 259,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 251,
                  "end": 259,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 252,
                      "end": 258
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 251,
                  "decorators": [],
                  "name": "MyList",
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
      "start": 261,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 279,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 279,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 274,
                  "end": 279,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 275,
                      "end": 278
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 274,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 282,
            "end": 291,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 282,
              "end": 289,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 282,
                "end": 283,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 284,
                "end": 289,
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
      "start": 299,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 320,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 320,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 312,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 313,
                      "end": 319
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 312,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 323,
            "end": 332,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 323,
              "end": 330,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 325,
                "end": 330,
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
      "start": 377,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 398,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 384,
                "end": 398,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 390,
                  "end": 398,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 391,
                      "end": 397
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 390,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 401,
            "end": 410,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 401,
              "end": 408,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 403,
                "end": 408,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
