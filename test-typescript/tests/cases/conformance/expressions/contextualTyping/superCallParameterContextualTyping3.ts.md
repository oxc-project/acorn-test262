__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 566,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 64,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 64,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 35,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 41,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 54,
                "decorators": [],
                "name": "parameter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 61,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 57,
                "end": 61
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 25,
        "decorators": [],
        "name": "ContextualType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
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
      "start": 66,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 133,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 99,
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
              "start": 99,
              "end": 133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 133,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 124,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 124,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 121,
                        "end": 124,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 122,
                            "end": 123,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 123,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 121,
                        "decorators": [],
                        "name": "ContextualType",
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
            "start": 139,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
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
              "start": 142,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 176,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 167,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 150,
                      "end": 167,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 164,
                        "decorators": [],
                        "name": "ContextualType",
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
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
      "start": 180,
      "end": 566,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 566,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 564,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 227,
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
              "start": 227,
              "end": 564,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 564,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 309,
                    "end": 392,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 309,
                      "end": 391,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 315,
                          "end": 390,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 329,
                              "end": 380,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 329,
                                "end": 335,
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 335,
                                "end": 380,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 339,
                                  "end": 380,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 357,
                                      "end": 366,
                                      "directive": null,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 357,
                                        "end": 365,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 357,
                                          "end": 358,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 359,
                                          "end": 365,
                                          "decorators": [],
                                          "name": "length",
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
                                    "start": 336,
                                    "end": 337,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 309,
                        "end": 314
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 471,
                    "end": 558,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 471,
                      "end": 557,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 481,
                          "end": 556,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 495,
                              "end": 546,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 495,
                                "end": 501,
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 501,
                                "end": 546,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 505,
                                  "end": 546,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 523,
                                      "end": 532,
                                      "directive": null,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 523,
                                        "end": 531,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 523,
                                          "end": 524,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 525,
                                          "end": 531,
                                          "decorators": [],
                                          "name": "length",
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
                                    "start": 502,
                                    "end": 503,
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 471,
                        "end": 480,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 471,
                          "end": 476
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "decorators": [],
                          "name": "foo",
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
        "start": 186,
        "end": 187,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 196,
        "end": 201,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 201,
        "end": 209,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 202,
            "end": 208
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
