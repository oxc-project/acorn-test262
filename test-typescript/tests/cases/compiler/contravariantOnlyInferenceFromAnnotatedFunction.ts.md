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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "name": "Funcs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "A",
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
            "start": 36,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 46,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 73,
        "end": 148,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 78,
          "end": 90,
          "name": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "B",
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
          "start": 93,
          "end": 145,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 99,
              "end": 124,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 123,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 103,
                  "end": 123,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 104,
                      "end": 108,
                      "name": "a",
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 114,
                      "name": "b",
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
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
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
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 129,
              "end": 141,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 129,
                "end": 134,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 136,
                  "end": 140,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "K",
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
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
      "start": 150,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
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
          "start": 209,
          "end": 225,
          "name": "fns",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 219,
                "name": "Funcs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 224,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "name": "B",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 170,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 172,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "A",
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
            "start": 174,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 207,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 232,
              "end": 233,
              "typeName": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "name": "B",
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
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 248,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 251,
            "end": 318,
            "callee": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 262,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 264,
                      "end": 314,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 270,
                          "end": 291,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 272,
                            "name": "fn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 274,
                            "end": 291,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 275,
                                "end": 284,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 276,
                                  "end": 284,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 278,
                                    "end": 284
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 289,
                              "end": 291,
                              "body": []
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 297,
                          "end": 309,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 302,
                            "name": "thing",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 304,
                            "end": 309,
                            "value": "asd",
                            "raw": "'asd'"
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
