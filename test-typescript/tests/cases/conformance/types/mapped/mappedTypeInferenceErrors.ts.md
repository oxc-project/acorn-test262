__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 345,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 78,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 37,
        "decorators": [],
        "name": "ComputedOf",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 43,
        "end": 78,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 55,
          "end": 62,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 61,
            "end": 62,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 65,
          "end": 75,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 75,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 71,
              "end": 75,
              "indexType": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
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
      "type": "TSDeclareFunction",
      "start": 80,
      "end": 179,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 107,
          "end": 171,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 171,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 116,
              "end": 171,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 116,
                  "end": 153,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 118,
                      "end": 127,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 123,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 123,
                        "end": 126,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 125,
                          "end": 126,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 128,
                      "end": 151,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 136,
                        "decorators": [],
                        "name": "computed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 136,
                        "end": 151,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 151,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 148,
                            "end": 151,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 149,
                                "end": 150,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 149,
                                  "end": 150,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 148,
                            "decorators": [],
                            "name": "ComputedOf",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 156,
                  "end": 171,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 164,
                    "end": 171,
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "start": 165,
                        "end": 170,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 169,
                            "end": 170,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 164,
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 172,
        "end": 178,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 174,
          "end": 178
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 105,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 345,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 344,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 185,
            "end": 343,
            "properties": [
              {
                "type": "Property",
                "start": 191,
                "end": 214,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 196,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 198,
                  "end": 214,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 200,
                      "end": 205,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 201,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 203,
                        "end": 205,
                        "raw": "10",
                        "value": 10,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 207,
                      "end": 212,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 210,
                        "end": 212,
                        "raw": "20",
                        "value": 20,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 220,
                "end": 341,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 228,
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 230,
                  "end": 341,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 240,
                      "end": 318,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 243,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 243,
                        "end": 318,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 254,
                          "end": 318,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 268,
                              "end": 285,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 272,
                                  "end": 284,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 272,
                                    "end": 273,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "start": 276,
                                    "end": 284,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 276,
                                      "end": 280
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 281,
                                      "end": 284,
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "let"
                            },
                            {
                              "type": "ReturnStatement",
                              "start": 298,
                              "end": 308,
                              "argument": {
                                "type": "Literal",
                                "start": 305,
                                "end": 307,
                                "raw": "42",
                                "value": 42,
                                "regex": null,
                                "bigint": null
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
                          "start": 245,
                          "end": 253,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 247,
                            "end": 253
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 328,
                      "end": 335,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 331,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 333,
                        "end": 335,
                        "raw": "42",
                        "value": 42,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 184,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
