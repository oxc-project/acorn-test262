__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 346,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 37,
        "name": "ComputedOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
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
        "start": 43,
        "end": 78,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 50,
          "end": 62,
          "name": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 55,
            "end": 62,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 62,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
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
          "type": "TSFunctionType",
          "start": 65,
          "end": 75,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 75,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 71,
              "end": 75,
              "objectType": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 55,
          "end": 62,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 61,
            "end": 62,
            "typeName": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
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
          "start": 50,
          "end": 51,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 80,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 107,
          "end": 171,
          "name": "options",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 123,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 123,
                        "end": 126,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 125,
                          "end": 126,
                          "typeName": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 128,
                      "end": 151,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 136,
                        "name": "computed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 136,
                        "end": 151,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 151,
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 148,
                            "name": "ComputedOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 148,
                            "end": 151,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 149,
                                "end": 150,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 149,
                                  "end": 150,
                                  "name": "C",
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
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 156,
                  "end": 171,
                  "typeName": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 164,
                    "name": "ThisType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 169,
                            "end": 170,
                            "typeName": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "P",
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
            "start": 104,
            "end": 105,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "C",
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
        "start": 172,
        "end": 178,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 174,
          "end": 178
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 345,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 344,
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 184,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 196,
                  "name": "props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 198,
                  "end": 214,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 200,
                      "end": 205,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 201,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 203,
                        "end": 205,
                        "value": 10,
                        "raw": "10"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 207,
                      "end": 212,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 210,
                        "end": 212,
                        "value": 20,
                        "raw": "20"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 220,
                "end": 341,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 228,
                  "name": "computed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 230,
                  "end": 341,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 240,
                      "end": 318,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 243,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 243,
                        "end": 318,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                  "id": {
                                    "type": "Identifier",
                                    "start": 272,
                                    "end": 273,
                                    "name": "z",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "start": 276,
                                    "end": 284,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 276,
                                      "end": 280
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 281,
                                      "end": 284,
                                      "name": "bar",
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
                              "kind": "let",
                              "declare": false
                            },
                            {
                              "type": "ReturnStatement",
                              "start": 298,
                              "end": 308,
                              "argument": {
                                "type": "Literal",
                                "start": 305,
                                "end": 307,
                                "value": 42,
                                "raw": "42"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 245,
                          "end": 253,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 247,
                            "end": 253
                          }
                        }
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 328,
                      "end": 335,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 331,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 333,
                        "end": 335,
                        "value": 42,
                        "raw": "42"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
