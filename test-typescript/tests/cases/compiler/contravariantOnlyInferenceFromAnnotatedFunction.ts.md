__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 320,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 148,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "decorators": [],
        "name": "Funcs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 73,
        "end": 148,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 83,
          "end": 90,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 89,
            "end": 90,
            "typeName": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 93,
          "end": 145,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 99,
              "end": 124,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
                "decorators": [],
                "name": "fn",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 123,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 103,
                  "end": 123,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 104,
                      "end": 108,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 105,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 107,
                          "end": 108,
                          "typeName": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 114,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 113,
                          "end": 114,
                          "typeName": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 119,
                      "end": 123
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 129,
              "end": 141,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 129,
                "end": 134,
                "decorators": [],
                "name": "thing",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 136,
                  "end": 140,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 69,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 46,
              "end": 69,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 52,
                "end": 69,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 61,
                    "end": 68
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 234,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 209,
          "end": 225,
          "decorators": [],
          "name": "fns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 225,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 219,
                "end": 225,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 220,
                    "end": 221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 224,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 219,
                "decorators": [],
                "name": "Funcs",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 226,
        "end": 234,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 228,
          "end": 234,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 232,
              "end": 233,
              "typeName": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 170,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 172,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 207,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 207,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 190,
                "end": 207,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 191,
                    "end": 197
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 199,
                    "end": 206
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 248,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 251,
            "end": 318,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 255,
                "end": 317,
                "properties": [
                  {
                    "type": "Property",
                    "start": 259,
                    "end": 314,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 262,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 264,
                      "end": 314,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 270,
                          "end": 291,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 272,
                            "decorators": [],
                            "name": "fn",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 274,
                            "end": 291,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 289,
                              "end": 291,
                              "body": []
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 275,
                                "end": 284,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 276,
                                  "end": 284,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 278,
                                    "end": 284
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 297,
                          "end": 309,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 302,
                            "decorators": [],
                            "name": "thing",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 304,
                            "end": 309,
                            "raw": "'asd'",
                            "value": "asd"
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
              "start": 251,
              "end": 254,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
