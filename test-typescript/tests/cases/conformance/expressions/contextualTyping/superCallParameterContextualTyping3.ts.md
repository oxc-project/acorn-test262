__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 565,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 63,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 34,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 40,
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
                "start": 41,
                "end": 53,
                "decorators": [],
                "name": "parameter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 53,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
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
              "start": 54,
              "end": 60,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 56,
                "end": 60
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
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "ContextualType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 24,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 26,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
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
      "start": 65,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 177,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
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
              "start": 98,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 132,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 123,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 123,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 120,
                        "end": 123,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 121,
                            "end": 122,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
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
                        "start": 106,
                        "end": 120,
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
            "start": 138,
            "end": 175,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
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
              "start": 141,
              "end": 175,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 175,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 166,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 149,
                      "end": 166,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 163,
                        "end": 166,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 165,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
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
                        "start": 149,
                        "end": 163,
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
        "start": 71,
        "end": 76,
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
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
      "start": 179,
      "end": 565,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 565,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 563,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 226,
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
              "start": 226,
              "end": 563,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 563,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 391,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 308,
                      "end": 390,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 314,
                          "end": 389,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 328,
                              "end": 379,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 328,
                                "end": 334,
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
                                "start": 334,
                                "end": 379,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 338,
                                  "end": 379,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 356,
                                      "end": 365,
                                      "directive": null,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 356,
                                        "end": 364,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 356,
                                          "end": 357,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 358,
                                          "end": 364,
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
                                    "start": 335,
                                    "end": 336,
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
                        "start": 308,
                        "end": 313
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 557,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 470,
                      "end": 556,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 480,
                          "end": 555,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 494,
                              "end": 545,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 494,
                                "end": 500,
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
                                "start": 500,
                                "end": 545,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 504,
                                  "end": 545,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 522,
                                      "end": 531,
                                      "directive": null,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 522,
                                        "end": 530,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 522,
                                          "end": 523,
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 524,
                                          "end": 530,
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
                                    "start": 501,
                                    "end": 502,
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
                        "start": 470,
                        "end": 479,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 470,
                          "end": 475
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 479,
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
        "start": 185,
        "end": 186,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 195,
        "end": 200,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 200,
        "end": 208,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 201,
            "end": 207
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
