__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 380,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 380,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Elements",
              "optional": false,
              "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 380,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 75,
              "decorators": [],
              "name": "elements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 124,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 77,
                "end": 124,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Elements",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
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
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "Elements",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
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
                "optional": false,
                "readonly": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 253,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 253,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 153,
                  "end": 213,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 164,
                    "decorators": [],
                    "name": "elements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 166,
                      "end": 213,
                      "key": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "Elements",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null
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
                      "optional": false,
                      "readonly": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "elements",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 248,
                        "decorators": [],
                        "name": "elements",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 378,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 267,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 378,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Elements",
                                "optional": false,
                                "typeAnnotation": null
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
              },
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
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
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
                                    "optional": false,
                                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "elements",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 360,
                                "end": 363,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 365,
                                "end": 370,
                                "value": "abc",
                                "raw": "\"abc\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      ]
                    }
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
