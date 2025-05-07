__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 398,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 232,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 232,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 143,
                    "argument": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 142,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 91,
                  "end": 99,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 98,
                      "end": 99,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 114,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 108,
                      "end": 114
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 115,
                "end": 118,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 117,
                  "end": 118,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 87,
                "end": 90,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 88,
                    "end": 89,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
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
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 230,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 230,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 230,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 193,
                    "end": 224,
                    "argument": {
                      "type": "CallExpression",
                      "start": 200,
                      "end": 223,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 212,
                          "end": 218,
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 220,
                          "end": 222,
                          "raw": "42",
                          "value": 42,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 200,
                        "end": 208,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 200,
                          "end": 204
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 208,
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 208,
                        "end": 211,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 209,
                            "end": 210,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 210,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 169,
                  "end": 178,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 178,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 179,
                "end": 182,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 181,
                  "end": 182,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 165,
                "end": 168,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 166,
                    "end": 167,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
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
      "type": "ClassDeclaration",
      "start": 234,
      "end": 396,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 242,
        "end": 396,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 319,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 319,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 319,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 313,
                    "argument": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 312,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 260,
                  "end": 269,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 266,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 268,
                      "end": 269,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 271,
                  "end": 284,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 278,
                      "end": 284
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 288,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 287,
                  "end": 288,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 325,
            "end": 394,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 335,
              "end": 394,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 350,
                "end": 394,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 360,
                    "end": 388,
                    "argument": {
                      "type": "CallExpression",
                      "start": 367,
                      "end": 387,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 376,
                          "end": 382,
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 384,
                          "end": 386,
                          "raw": "42",
                          "value": 42,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 367,
                        "end": 375,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 367,
                          "end": 371
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 375,
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
                  "start": 336,
                  "end": 345,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 345,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 346,
                "end": 349,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 348,
                  "end": 349,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
