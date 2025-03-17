__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 381,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 380,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 75,
              "name": "elements",
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
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 124,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 77,
                "end": 124,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 80,
                  "end": 99,
                  "name": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 85,
                    "end": 99,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 99,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 99,
                        "name": "Elements",
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
                  "type": "TSTypeLiteral",
                  "start": 102,
                  "end": 122,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 104,
                      "end": 120,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 107,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 120,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 109,
                          "end": 120,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 109,
                            "end": 117,
                            "typeName": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 117,
                              "name": "Elements",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 118,
                            "end": 119,
                            "typeName": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 119,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 85,
                  "end": 99,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 99,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 99,
                      "name": "Elements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 253,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 253,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 153,
                  "end": 213,
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 164,
                    "name": "elements",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 166,
                      "end": 213,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 169,
                        "end": 188,
                        "name": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 174,
                          "end": 188,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 180,
                            "end": 188,
                            "typeName": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 188,
                              "name": "Elements",
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
                        "type": "TSTypeLiteral",
                        "start": 191,
                        "end": 211,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 193,
                            "end": 209,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 196,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 196,
                              "end": 209,
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "start": 198,
                                "end": 209,
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 198,
                                  "end": 206,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 198,
                                    "end": 206,
                                    "name": "Elements",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 207,
                                  "end": 208,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 207,
                                    "end": 208,
                                    "name": "P",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 174,
                        "end": 188,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 188,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 188,
                            "name": "Elements",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 253,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 224,
                    "end": 249,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 224,
                      "end": 248,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 224,
                        "end": 237,
                        "object": {
                          "type": "ThisExpression",
                          "start": 224,
                          "end": 228
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 237,
                          "name": "elements",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 248,
                        "name": "elements",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 378,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 378,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 378,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 303,
                    "end": 374,
                    "argument": {
                      "type": "NewExpression",
                      "start": 310,
                      "end": 373,
                      "callee": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 317,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "SpreadElement",
                          "start": 340,
                          "end": 356,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 343,
                            "end": 356,
                            "object": {
                              "type": "ThisExpression",
                              "start": 343,
                              "end": 347
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 348,
                              "end": 356,
                              "name": "elements",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 358,
                          "end": 372,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 360,
                              "end": 370,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 360,
                                "end": 363,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 365,
                                "end": 370,
                                "value": "abc",
                                "raw": "\"abc\""
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 317,
                        "end": 339,
                        "params": [
                          {
                            "type": "TSTupleType",
                            "start": 318,
                            "end": 338,
                            "elementTypes": [
                              {
                                "type": "TSRestType",
                                "start": 319,
                                "end": 330,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 322,
                                  "end": 330,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 330,
                                    "name": "Elements",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 332,
                                "end": 337,
                                "literal": {
                                  "type": "Literal",
                                  "start": 332,
                                  "end": 337,
                                  "value": "abc",
                                  "raw": "\"abc\""
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 269,
                "end": 296,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 271,
                  "end": 296,
                  "typeName": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 274,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 274,
                    "end": 296,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 275,
                        "end": 295,
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "start": 276,
                            "end": 287,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 279,
                              "end": 287,
                              "typeName": {
                                "type": "Identifier",
                                "start": 279,
                                "end": 287,
                                "name": "Elements",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 289,
                            "end": 294,
                            "literal": {
                              "type": "Literal",
                              "start": 289,
                              "end": 294,
                              "value": "abc",
                              "raw": "\"abc\""
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 18,
              "name": "Elements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 27,
              "end": 45,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 36,
                "end": 45,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 36,
                  "end": 43
                }
              }
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
