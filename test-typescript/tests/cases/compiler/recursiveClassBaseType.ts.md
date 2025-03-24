__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 345,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 60,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 60,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 39,
                "end": 60,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 43,
                    "end": 54,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 47,
                        "end": 54,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
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
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 59,
                    "end": 60,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 39,
                  "end": 42,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 40,
                      "end": 41,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
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
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 110,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 110,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 83,
                "end": 110,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 87,
                    "end": 93,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 92,
                        "end": 93,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
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
                  "start": 95,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 98,
                    "end": 110,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 100,
                        "end": 108,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 108,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 107,
                            "end": 108,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 108,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 83,
                  "end": 86,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 84,
                      "end": 85,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
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
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 113,
      "end": 162,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 162,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 129,
        "end": 158,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 134,
            "end": 157,
            "properties": [
              {
                "type": "Property",
                "start": 136,
                "end": 155,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 155,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 146,
                      "end": 154,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 152,
                        "end": 154,
                        "elements": []
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 140,
                    "end": 145,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 141,
                        "end": 144,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 141,
                          "end": 142,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 142,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 129,
          "end": 133,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 186,
      "end": 241,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 241,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 213,
            "end": 239,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 226,
              "decorators": [],
              "name": "root",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 226,
              "end": 239,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 228,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 230,
                  "end": 238,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 238,
                    "decorators": [],
                    "name": "Derived1",
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
        "start": 201,
        "end": 206,
        "decorators": [],
        "name": "Base1",
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
      "start": 243,
      "end": 345,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 345,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 257,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "ClassExpression",
        "start": 266,
        "end": 341,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 286,
          "end": 341,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 292,
              "end": 339,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 292,
                "end": 296,
                "decorators": [],
                "name": "root",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 296,
                "end": 339,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 299,
                  "end": 339,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 309,
                      "end": 333,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 316,
                        "end": 332,
                        "expression": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 325,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 329,
                          "end": 332
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
        "id": null,
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 280,
          "end": 285,
          "decorators": [],
          "name": "Base1",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
