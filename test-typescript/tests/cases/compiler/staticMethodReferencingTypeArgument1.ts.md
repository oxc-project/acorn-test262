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
        "name": "Editor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "name": "List",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 386,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 51,
                    "end": 65,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
                      "name": "next",
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
                          "name": "List",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 74,
                    "end": 88,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 78,
                      "name": "prev",
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
                          "name": "List",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 98,
                    "end": 161,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 109,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 161,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "isHead",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 123,
                              "end": 132,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 125,
                                "end": 132
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "name": "data",
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
                                  "name": "T",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 150,
                        "end": 161,
                        "body": []
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
                    "start": 171,
                    "end": 380,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 186,
                      "name": "MakeHead",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 186,
                      "end": 380,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 216,
                                  "end": 230,
                                  "name": "entry",
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
                                        "name": "List",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 233,
                                  "end": 256,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 237,
                                    "end": 241,
                                    "name": "List",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                  ],
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
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
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
                                  "name": "entry",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 299,
                                  "end": 303,
                                  "name": "prev",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 306,
                                "end": 311,
                                "name": "entry",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                  "name": "entry",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 331,
                                  "end": 335,
                                  "name": "next",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 338,
                                "end": 343,
                                "name": "entry",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                              "name": "entry",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "List",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
