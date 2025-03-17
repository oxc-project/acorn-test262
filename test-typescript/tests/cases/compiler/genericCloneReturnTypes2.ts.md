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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "MyList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 42,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "name": "size",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 167,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 167,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 90,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 167,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 116,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 115,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 111,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 111,
                          "name": "size",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 161,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 125,
                      "end": 160,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 134,
                        "object": {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 134,
                          "name": "data",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 137,
                        "end": 160,
                        "callee": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 146,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 150,
                            "end": 159,
                            "object": {
                              "type": "ThisExpression",
                              "start": 150,
                              "end": 154
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 159,
                              "name": "size",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 146,
                          "end": 149,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 147,
                              "end": 148,
                              "typeName": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 148,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 235,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 184,
              "name": "clone",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 184,
              "end": 235,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 214,
                        "name": "MyList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 218,
                          "end": 227,
                          "object": {
                            "type": "ThisExpression",
                            "start": 218,
                            "end": 222
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 227,
                            "name": "size",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 214,
                        "end": 217,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 215,
                            "end": 216,
                            "typeName": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 216,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 259,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 251,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
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
      "start": 261,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 279,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 274,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 282,
            "end": 291,
            "callee": {
              "type": "MemberExpression",
              "start": 282,
              "end": 289,
              "object": {
                "type": "Identifier",
                "start": 282,
                "end": 283,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 284,
                "end": 289,
                "name": "clone",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 320,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 320,
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 312,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 323,
            "end": 332,
            "callee": {
              "type": "MemberExpression",
              "start": 323,
              "end": 330,
              "object": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 325,
                "end": 330,
                "name": "clone",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 398,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 384,
                "end": 398,
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 390,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 401,
            "end": 410,
            "callee": {
              "type": "MemberExpression",
              "start": 401,
              "end": 408,
              "object": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 403,
                "end": 408,
                "name": "clone",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
