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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "decorators": [],
        "name": "CoreObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 273,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 248,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 84,
              "end": 248,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "Statics",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Instance",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 122,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 122,
                        "decorators": [],
                        "name": "B1",
                        "optional": false,
                        "typeAnnotation": null
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 136,
                    "end": 138,
                    "name": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 138,
                      "decorators": [],
                      "name": "B1",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 183,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Statics",
                            "optional": false,
                            "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "Instance",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 197,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
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
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "Statics",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "Instance",
                                    "optional": false,
                                    "typeAnnotation": null
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
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 252,
            "end": 271,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 260,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 260,
              "end": 271,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 262,
                "end": 270,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 264,
                  "end": 270
                }
              },
              "body": null,
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 275,
      "end": 351,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 294,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
      },
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
        "start": 298,
        "end": 351,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 302,
            "end": 349,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 315,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 315,
              "end": 349,
              "id": null,
              "generator": false,
              "async": false,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 326,
                  "end": 334,
                  "decorators": [],
                  "name": "args",
                  "optional": true,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null
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
              "body": null,
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 387,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 387,
            "decorators": [],
            "name": "Observable",
            "optional": false,
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
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 388,
      "end": 454,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 413,
        "decorators": [],
        "name": "EmberObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "decorators": [],
            "name": "CoreObject",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 433,
            "end": 439,
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 440,
            "end": 450,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 452,
        "end": 454,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 455,
      "end": 511,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 477,
        "decorators": [],
        "name": "CoreView",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "decorators": [],
            "name": "EmberObject",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 498,
            "end": 504,
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 505,
            "end": 507,
            "properties": []
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 509,
        "end": 511,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 512,
      "end": 566,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 535,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "decorators": [],
            "name": "CoreView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 553,
            "end": 559,
            "decorators": [],
            "name": "extend",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 560,
            "end": 562,
            "properties": []
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 564,
        "end": 566,
        "body": []
      },
      "abstract": false,
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 33,
          "end": 42,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 43,
          "end": 49,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
