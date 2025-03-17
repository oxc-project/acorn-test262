__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "Readonly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 19,
        "end": 50,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 30,
          "end": 42,
          "name": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 45,
          "end": 49,
          "objectType": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 46,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 47,
            "end": 48,
            "typeName": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": true,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 75,
              "name": "params",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 135,
              "name": "attrs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 145,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "TSNonNullExpression",
                        "start": 169,
                        "end": 187,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 169,
                          "end": 186,
                          "object": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 179,
                            "object": {
                              "type": "ThisExpression",
                              "start": 169,
                              "end": 173
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 179,
                              "name": "attrs",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 186,
                            "name": "params",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 192,
                        "name": "name",
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
        "start": 110,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "A",
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
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 203,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 216,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 240,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 254,
        "name": "FooClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 401,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 306,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 292,
              "name": "properties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 302,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "P",
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 312,
            "end": 399,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 399,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "ObjectPattern",
                          "start": 342,
                          "end": 354,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 344,
                              "end": 352,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 344,
                                "end": 347,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "AssignmentPattern",
                                "start": 344,
                                "end": 352,
                                "left": {
                                  "type": "Identifier",
                                  "start": 344,
                                  "end": 347,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 350,
                                  "end": 352,
                                  "value": 42,
                                  "raw": "42"
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 357,
                          "end": 372,
                          "object": {
                            "type": "ThisExpression",
                            "start": 357,
                            "end": 361
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 362,
                            "end": 372,
                            "name": "properties",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 382,
                    "end": 393,
                    "argument": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 392,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
        "start": 254,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 255,
            "end": 274,
            "name": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 265,
              "end": 268,
              "typeName": {
                "type": "Identifier",
                "start": 265,
                "end": 268,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 271,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 271,
                "end": 274,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
      "start": 403,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 414,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 428,
        "end": 599,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 434,
            "end": 453,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 439,
              "name": "attrs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 452,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 452,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 449,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 459,
            "end": 597,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 460,
              "end": 597,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 480,
                          "end": 490,
                          "object": {
                            "type": "ThisExpression",
                            "start": 480,
                            "end": 484
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 490,
                            "name": "attrs",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 491,
                          "end": 497,
                          "name": "params",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 427,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 426,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 426,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "name": "A",
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
          }
        ]
      },
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
