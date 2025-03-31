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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 25,
        "name": "ContextualType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 64,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 35,
            "end": 62,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 41,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 54,
                "name": "parameter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
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
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "name": "CBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 99,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 133,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 124,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 121,
                        "name": "ContextualType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 121,
                        "end": 124,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 122,
                            "end": 123,
                            "typeName": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 123,
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 133,
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
            "start": 139,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 176,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 167,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 150,
                      "end": 167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 164,
                        "name": "ContextualType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 176,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
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
      "type": "ClassDeclaration",
      "start": 180,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 196,
        "end": 201,
        "name": "CBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 566,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 564,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 227,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 564,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 564,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 309,
                    "end": 392,
                    "expression": {
                      "type": "CallExpression",
                      "start": 309,
                      "end": 391,
                      "callee": {
                        "type": "Super",
                        "start": 309,
                        "end": 314
                      },
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
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 329,
                                "end": 335,
                                "name": "method",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 335,
                                "end": 380,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 336,
                                    "end": 337,
                                    "name": "p",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 339,
                                  "end": 380,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 357,
                                      "end": 366,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 357,
                                        "end": 365,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 357,
                                          "end": 358,
                                          "name": "p",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 359,
                                          "end": 365,
                                          "name": "length",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 471,
                    "end": 558,
                    "expression": {
                      "type": "CallExpression",
                      "start": 471,
                      "end": 557,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 471,
                        "end": 480,
                        "object": {
                          "type": "Super",
                          "start": 471,
                          "end": 476
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 495,
                                "end": 501,
                                "name": "method",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 501,
                                "end": 546,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 502,
                                    "end": 503,
                                    "name": "p",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 505,
                                  "end": 546,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 523,
                                      "end": 532,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "start": 523,
                                        "end": 531,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 523,
                                          "end": 524,
                                          "name": "p",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 525,
                                          "end": 531,
                                          "name": "length",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
