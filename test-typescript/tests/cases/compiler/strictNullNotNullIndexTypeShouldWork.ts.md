__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 548,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 24,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 27,
                "end": 44,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 29,
                    "end": 42,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 33,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 84,
              "decorators": [],
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 97,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 94,
                  "end": 97,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 95,
                      "end": 96,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
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
                  "start": 86,
                  "end": 94,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 148,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 142,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 118,
                      "end": 141,
                      "computed": false,
                      "object": {
                        "type": "TSNonNullExpression",
                        "start": 118,
                        "end": 136,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 118,
                          "end": 135,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 118,
                            "end": 128,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 118,
                              "end": 122
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 128,
                              "decorators": [],
                              "name": "attrs",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 135,
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 141,
                        "decorators": [],
                        "name": "name",
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
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 59,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 71,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 71,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 187,
      "body": {
        "type": "TSInterfaceBody",
        "start": 166,
        "end": 187,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 172,
            "end": 185,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 178,
                "end": 184
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 350,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 225,
        "end": 350,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 255,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 241,
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 254,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 251,
                  "end": 254,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 252,
                      "end": 253,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 253,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 251,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 348,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 264,
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
              "start": 264,
              "end": 348,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 275,
                "end": 348,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 285,
                    "end": 322,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 291,
                        "end": 321,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 291,
                          "end": 303,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 293,
                              "end": 301,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 293,
                                "end": 296,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "AssignmentPattern",
                                "start": 293,
                                "end": 301,
                                "decorators": [],
                                "left": {
                                  "type": "Identifier",
                                  "start": 293,
                                  "end": 296,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "right": {
                                  "type": "Literal",
                                  "start": 299,
                                  "end": 301,
                                  "raw": "42",
                                  "value": 42,
                                  "regex": null,
                                  "bigint": null
                                },
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 306,
                          "end": 321,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 306,
                            "end": 310
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 321,
                            "decorators": [],
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 331,
                    "end": 342,
                    "argument": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 341,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 266,
                "end": 274,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 268,
                  "end": 274
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
        "start": 195,
        "end": 203,
        "decorators": [],
        "name": "FooClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 203,
        "end": 224,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 223,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 217,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 217,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 223,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 223,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "P",
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
      "start": 352,
      "end": 548,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 377,
        "end": 548,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 383,
            "end": 402,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 388,
              "decorators": [],
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 401,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 390,
                "end": 401,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 398,
                  "end": 401,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 399,
                      "end": 400,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
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
                  "start": 390,
                  "end": 398,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 546,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 409,
              "end": 546,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 412,
                "end": 546,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 422,
                    "end": 448,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 429,
                      "end": 447,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 429,
                        "end": 446,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 429,
                          "end": 439,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 429,
                            "end": 433
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 434,
                            "end": 439,
                            "decorators": [],
                            "name": "attrs",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 446,
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null
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
        "start": 358,
        "end": 363,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 363,
        "end": 376,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 364,
            "end": 375,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 375,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
