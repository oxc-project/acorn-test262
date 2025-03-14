strictNullNotNullIndexTypeNoLib.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 599,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Readonly",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 19,
        "end": 50,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 35,
          "end": 42,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 41,
            "end": 42,
            "typeName": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 45,
          "end": 49,
          "indexType": {
            "type": "TSTypeReference",
            "start": 47,
            "end": 48,
            "typeName": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 46,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 98,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 96,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 75,
              "decorators": [],
              "name": "params",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 95,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 93,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 149,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 135,
              "decorators": [],
              "name": "attrs",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 148,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 145,
                  "end": 148,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 147,
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 145,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 199,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 199,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 199,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 169,
                    "end": 193,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 169,
                      "end": 192,
                      "computed": false,
                      "object": {
                        "type": "TSNonNullExpression",
                        "start": 169,
                        "end": 187,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 169,
                          "end": 186,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 179,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 169,
                              "end": 173
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 179,
                              "decorators": [],
                              "name": "attrs",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 186,
                            "decorators": [],
                            "name": "params",
                            "optional": false
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 192,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 122,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 203,
      "end": 238,
      "body": {
        "type": "TSInterfaceBody",
        "start": 217,
        "end": 238,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 223,
            "end": 236,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 216,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 240,
      "end": 401,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 401,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 306,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 292,
              "decorators": [],
              "name": "properties",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 305,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 302,
                  "end": 305,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 303,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 302,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 312,
            "end": 399,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 399,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 399,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 336,
                    "end": 373,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 342,
                        "end": 372,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 342,
                          "end": 354,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 344,
                              "end": 352,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 344,
                                "end": 347,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "AssignmentPattern",
                                "start": 344,
                                "end": 352,
                                "decorators": [],
                                "left": {
                                  "type": "Identifier",
                                  "start": 344,
                                  "end": 347,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false
                                },
                                "optional": false,
                                "right": {
                                  "type": "Literal",
                                  "start": 350,
                                  "end": 352,
                                  "raw": "42",
                                  "value": 42
                                }
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 357,
                          "end": 372,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 357,
                            "end": 361
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 362,
                            "end": 372,
                            "decorators": [],
                            "name": "properties",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 382,
                    "end": 393,
                    "argument": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 392,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 317,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 319,
                  "end": 325
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 254,
        "decorators": [],
        "name": "FooClass",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 254,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 255,
            "end": 274,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 265,
              "end": 268,
              "typeName": {
                "type": "Identifier",
                "start": 265,
                "end": 268,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 271,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 271,
                "end": 274,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 403,
      "end": 599,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 428,
        "end": 599,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 434,
            "end": 453,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 439,
              "decorators": [],
              "name": "attrs",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 452,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 452,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 449,
                  "end": 452,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 450,
                      "end": 451,
                      "typeName": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 449,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 459,
            "end": 597,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 460,
              "end": 597,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 463,
                "end": 597,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 473,
                    "end": 499,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 480,
                      "end": 498,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 480,
                        "end": 497,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 480,
                          "end": 490,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 480,
                            "end": 484
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 490,
                            "decorators": [],
                            "name": "attrs",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 491,
                          "end": 497,
                          "decorators": [],
                          "name": "params",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 414,
        "decorators": [],
        "name": "Test2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 427,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 426,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 426,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
