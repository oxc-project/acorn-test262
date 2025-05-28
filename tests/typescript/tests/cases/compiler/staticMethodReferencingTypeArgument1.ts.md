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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "Editor",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 388,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 386,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 27,
              "end": 386,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 37,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 38,
                    "end": 39,
                    "name": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "T",
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 386,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 51,
                    "end": 65,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 57,
                        "end": 64,
                        "typeName": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 61,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 74,
                    "end": 88,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 78,
                      "decorators": [],
                      "name": "prev",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 87,
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 84,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 98,
                    "end": 161,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 109,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 161,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 150,
                        "end": 161,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 171,
                    "end": 380,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 186,
                      "decorators": [],
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 186,
                      "end": 380,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 188,
                        "end": 197,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 190,
                          "end": 197,
                          "typeName": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 194,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 198,
                        "end": 380,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 212,
                            "end": 257,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 216,
                                "end": 256,
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 223,
                                        "end": 227,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
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
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 233,
                                  "end": 256,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 237,
                                    "end": 241,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 245,
                                      "end": 249,
                                      "value": true,
                                      "raw": "true"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 251,
                                      "end": 255,
                                      "value": null,
                                      "raw": "null"
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
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
                                "object": {
                                  "type": "Identifier",
                                  "start": 293,
                                  "end": 298,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 299,
                                  "end": 303,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 306,
                                "end": 311,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
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
                                "object": {
                                  "type": "Identifier",
                                  "start": 325,
                                  "end": 330,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 331,
                                  "end": 335,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 338,
                                "end": 343,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
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
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
