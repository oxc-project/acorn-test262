__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 567,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "name": "CoreObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 273,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 248,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "name": "extend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 84,
              "end": 248,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 183,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 154,
                      "end": 183,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 154,
                          "end": 161,
                          "typeName": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 161,
                            "name": "Statics",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 164,
                          "end": 183,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 166,
                              "end": 181,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 171,
                                "end": 181,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 173,
                                  "end": 181,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 173,
                                    "end": 181,
                                    "name": "Instance",
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 197,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 193,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 195,
                      "end": 197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 197,
                        "name": "T1",
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
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 84,
                "end": 142,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 90,
                    "end": 97,
                    "name": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 97,
                      "name": "Statics",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 103,
                    "end": 122,
                    "name": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 111,
                      "name": "Instance",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 122,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 122,
                        "name": "B1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 128,
                    "end": 130,
                    "name": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 130,
                      "name": "T1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 136,
                    "end": 138,
                    "name": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 138,
                      "name": "B1",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 201,
                "end": 247,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 203,
                  "end": 247,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 203,
                      "end": 220,
                      "typeName": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 211,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 211,
                        "end": 220,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 212,
                            "end": 219,
                            "typeName": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 219,
                              "name": "Statics",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 223,
                      "end": 247,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 225,
                          "end": 245,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 230,
                            "end": 245,
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "start": 232,
                              "end": 245,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 232,
                                  "end": 234,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 232,
                                    "end": 234,
                                    "name": "T1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 237,
                                  "end": 245,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 237,
                                    "end": 245,
                                    "name": "Instance",
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
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 252,
            "end": 271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 260,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 260,
              "end": 271,
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
                "start": 262,
                "end": 270,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 264,
                  "end": 270
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
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 275,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 294,
        "name": "Mixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 298,
        "end": 351,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 302,
            "end": 349,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 315,
              "name": "create",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 315,
              "end": 349,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 326,
                  "end": 334,
                  "name": "args",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 334,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 333,
                      "end": 334,
                      "typeName": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 334,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 315,
                "end": 318,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 316,
                    "end": 317,
                    "name": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 317,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 338,
                "end": 348,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 340,
                  "end": 348,
                  "typeName": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 345,
                    "name": "Mixin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 345,
                    "end": 348,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 347,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
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
        "start": 294,
        "end": 297,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 295,
            "end": 296,
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 387,
            "name": "Observable",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 378,
                "end": 387,
                "typeName": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 383,
                  "name": "Mixin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 383,
                  "end": 387,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 384,
                      "end": 386,
                      "members": []
                    }
                  ]
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
      "start": 388,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 413,
        "name": "EmberObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 422,
        "end": 451,
        "callee": {
          "type": "MemberExpression",
          "start": 422,
          "end": 439,
          "object": {
            "type": "Identifier",
            "start": 422,
            "end": 432,
            "name": "CoreObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 433,
            "end": 439,
            "name": "extend",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 440,
            "end": 450,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 452,
        "end": 454,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 455,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 477,
        "name": "CoreView",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 486,
        "end": 508,
        "callee": {
          "type": "MemberExpression",
          "start": 486,
          "end": 504,
          "object": {
            "type": "Identifier",
            "start": 486,
            "end": 497,
            "name": "EmberObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 498,
            "end": 504,
            "name": "extend",
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
            "start": 505,
            "end": 507,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 509,
        "end": 511,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 512,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 535,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 544,
        "end": 563,
        "callee": {
          "type": "MemberExpression",
          "start": 544,
          "end": 559,
          "object": {
            "type": "Identifier",
            "start": 544,
            "end": 552,
            "name": "CoreView",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 553,
            "end": 559,
            "name": "extend",
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
            "start": 560,
            "end": 562,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 564,
        "end": 566,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
