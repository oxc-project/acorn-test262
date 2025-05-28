__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 470,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "CBaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 18,
              "decorators": [],
              "name": "T3",
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
        "start": 20,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 59,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 54,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 41,
                      "end": 54,
                      "typeName": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 50,
                        "decorators": [],
                        "name": "Parameter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 50,
                        "end": 54,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 51,
                            "end": 53,
                            "typeName": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 53,
                              "decorators": [],
                              "name": "T3",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 59,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 114,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 74,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 77,
              "decorators": [],
              "name": "T2",
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
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 96,
        "decorators": [],
        "name": "CBaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 96,
        "end": 109,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 97,
            "end": 108,
            "typeName": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 108,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 105,
                  "end": 107,
                  "typeName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 107,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 114,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 161,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 131,
        "decorators": [],
        "name": "Parameter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 134,
              "decorators": [],
              "name": "T4",
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
        "start": 136,
        "end": 161,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 159,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 159,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 154,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 152,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 154,
                        "decorators": [],
                        "name": "T4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 159,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 202,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 176,
        "end": 180,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 179,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 179,
              "decorators": [],
              "name": "T5",
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
        "start": 181,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 200,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 195,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 197,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 199,
                  "decorators": [],
                  "name": "T5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 470,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 211,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 211,
        "end": 215,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 214,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 214,
              "decorators": [],
              "name": "T1",
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
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 229,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 229,
        "end": 233,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 230,
            "end": 232,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 232,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 470,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 240,
            "end": 304,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 252,
              "decorators": [],
              "name": "works",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 252,
              "end": 304,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 304,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 265,
                    "end": 298,
                    "expression": {
                      "type": "NewExpression",
                      "start": 265,
                      "end": 297,
                      "callee": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 278,
                        "decorators": [],
                        "name": "CBaseBase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 278,
                        "end": 291,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 279,
                            "end": 290,
                            "typeName": {
                              "type": "Identifier",
                              "start": 279,
                              "end": 286,
                              "decorators": [],
                              "name": "Wrapper",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 286,
                              "end": 290,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 287,
                                  "end": 289,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 287,
                                    "end": 289,
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 292,
                          "end": 296
                        }
                      ]
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 309,
            "end": 429,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 325,
              "decorators": [],
              "name": "alsoWorks",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 325,
              "end": 429,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 429,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 338,
                    "end": 358,
                    "expression": {
                      "type": "NewExpression",
                      "start": 338,
                      "end": 357,
                      "callee": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 347,
                        "decorators": [],
                        "name": "CBase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 347,
                        "end": 351,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 348,
                            "end": 350,
                            "typeName": {
                              "type": "Identifier",
                              "start": 348,
                              "end": 350,
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 352,
                          "end": 356
                        }
                      ]
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 435,
            "end": 468,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 448,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 448,
              "end": 468,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 449,
                  "end": 463,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 450,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 463,
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 459,
                        "decorators": [],
                        "name": "Wrapper",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 459,
                        "end": 463,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 460,
                            "end": 462,
                            "typeName": {
                              "type": "Identifier",
                              "start": 460,
                              "end": 462,
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 468,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
