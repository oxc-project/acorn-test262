circularInlineMappedGenericTupleTypeNoCrash.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 380,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 125,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 75,
              "decorators": [],
              "name": "elements",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 124,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 77,
                "end": 124,
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
                      "decorators": [],
                      "name": "Elements",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "P",
                  "optional": false
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
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 107,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 120,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 109,
                          "end": 120,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 118,
                            "end": 119,
                            "typeName": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 119,
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 109,
                            "end": 117,
                            "typeName": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 117,
                              "decorators": [],
                              "name": "Elements",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 253,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 253,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 224,
                          "end": 228
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 237,
                          "decorators": [],
                          "name": "elements",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 248,
                        "decorators": [],
                        "name": "elements",
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 153,
                  "end": 213,
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 164,
                    "decorators": [],
                    "name": "elements",
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
                            "decorators": [],
                            "name": "Elements",
                            "optional": false
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "decorators": [],
                        "name": "P",
                        "optional": false
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
                            "key": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 196,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 196,
                              "end": 209,
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "start": 198,
                                "end": 209,
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 207,
                                  "end": 208,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 207,
                                    "end": 208,
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 198,
                                  "end": 206,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 198,
                                    "end": 206,
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 378,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
              "decorators": [],
              "name": "add",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 378,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "SpreadElement",
                          "start": 340,
                          "end": 356,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 343,
                            "end": 356,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 343,
                              "end": 347
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 348,
                              "end": 356,
                              "decorators": [],
                              "name": "elements",
                              "optional": false
                            }
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 360,
                                "end": 363,
                                "decorators": [],
                                "name": "bar",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 365,
                                "end": 370,
                                "raw": "\"abc\"",
                                "value": "abc"
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 317,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      },
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
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false
                                  }
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
                                  "raw": "\"abc\"",
                                  "value": "abc"
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 269,
                "end": 296,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 271,
                  "end": 296,
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
                                "decorators": [],
                                "name": "Elements",
                                "optional": false
                              }
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
                              "raw": "\"abc\"",
                              "value": "abc"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 274,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 45,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 18,
              "decorators": [],
              "name": "Elements",
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
