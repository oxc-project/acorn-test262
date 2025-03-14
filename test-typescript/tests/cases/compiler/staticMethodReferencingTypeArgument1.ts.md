__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 388,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 388,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 386,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 27,
              "end": 386,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 386,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 51,
                    "end": 65,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
                      "decorators": [],
                      "name": "next",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 57,
                        "end": 64,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 61,
                          "end": 64,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 62,
                              "end": 63,
                              "typeName": {
                                "type": "Identifier",
                                "start": 62,
                                "end": 63,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 61,
                          "decorators": [],
                          "name": "List",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 74,
                    "end": 88,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 78,
                      "decorators": [],
                      "name": "prev",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 87,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 84,
                          "end": 87,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 85,
                              "end": 86,
                              "typeName": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 86,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 84,
                          "decorators": [],
                          "name": "List",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 98,
                    "end": 161,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 109,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 161,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 150,
                        "end": 161,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 110,
                          "end": 132,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 132,
                            "decorators": [],
                            "name": "isHead",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 123,
                              "end": 132,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 125,
                                "end": 132
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 134,
                          "end": 148,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 148,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 145,
                              "end": 148,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 147,
                                "end": 148,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 147,
                                  "end": 148,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 171,
                    "end": 380,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 186,
                      "decorators": [],
                      "name": "MakeHead",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 186,
                      "end": 380,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 198,
                        "end": 380,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 212,
                            "end": 257,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 216,
                                "end": 256,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 216,
                                  "end": 230,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 221,
                                    "end": 230,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 223,
                                      "end": 230,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 227,
                                        "end": 230,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 228,
                                            "end": 229,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 228,
                                              "end": 229,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 223,
                                        "end": 227,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 233,
                                  "end": 256,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 245,
                                      "end": 249,
                                      "raw": "true",
                                      "value": true
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 251,
                                      "end": 255,
                                      "raw": "null",
                                      "value": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 237,
                                    "end": 241,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 241,
                                    "end": 244,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 242,
                                        "end": 243,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 242,
                                          "end": 243,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 293,
                            "end": 312,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 293,
                              "end": 311,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 293,
                                "end": 303,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 293,
                                  "end": 298,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 299,
                                  "end": 303,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 306,
                                "end": 311,
                                "decorators": [],
                                "name": "entry",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 325,
                            "end": 344,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 325,
                              "end": 343,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 325,
                                "end": 335,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 325,
                                  "end": 330,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 331,
                                  "end": 335,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 338,
                                "end": 343,
                                "decorators": [],
                                "name": "entry",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 357,
                            "end": 370,
                            "argument": {
                              "type": "Identifier",
                              "start": 364,
                              "end": 369,
                              "decorators": [],
                              "name": "entry",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 188,
                        "end": 197,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 190,
                          "end": 197,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 194,
                            "end": 197,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 195,
                                "end": 196,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 196,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 194,
                            "decorators": [],
                            "name": "List",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "List",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 37,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 38,
                    "end": 39,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "Editor",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
