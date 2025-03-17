__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 346,
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 60,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 60,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 39,
                "end": 60,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 39,
                  "end": 42,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 40,
                      "end": 41,
                      "name": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 43,
                    "end": 54,
                    "name": "fn",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 47,
                        "end": 54,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
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
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 110,
            "name": "Base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 110,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 83,
                "end": 110,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 83,
                  "end": 86,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 84,
                      "end": 85,
                      "name": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 87,
                    "end": 93,
                    "name": "val",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 92,
                        "end": 93,
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
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
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 108,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 107,
                            "end": 108,
                            "typeName": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 108,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 113,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 129,
        "end": 158,
        "callee": {
          "type": "Identifier",
          "start": 129,
          "end": 133,
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 139,
                  "end": 155,
                  "callee": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 146,
                      "end": 154,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ArrayExpression",
                        "start": 152,
                        "end": 154,
                        "elements": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 142,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
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
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 162,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 186,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 206,
        "name": "Base1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 241,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 213,
            "end": 239,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 226,
              "name": "root",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 226,
              "end": 239,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 228,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 230,
                  "end": 238,
                  "typeName": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 238,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 243,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 257,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "ClassExpression",
        "start": 266,
        "end": 341,
        "id": null,
        "superClass": {
          "type": "Identifier",
          "start": 280,
          "end": 285,
          "name": "Base1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 286,
          "end": 341,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 292,
              "end": 339,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 292,
                "end": 296,
                "name": "root",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 296,
                "end": 339,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
        "superTypeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 345,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
