__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 27,
        "decorators": [],
        "name": "IStringDictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 54,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 34,
            "end": 52,
            "parameters": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 47,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 82,
        "decorators": [],
        "name": "INumberDictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 108,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 89,
            "end": 106,
            "parameters": [
              {
                "type": "Identifier",
                "start": 90,
                "end": 101,
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 134,
        "decorators": [],
        "name": "forEach",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 187,
          "decorators": [],
          "name": "from",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 187,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 144,
              "end": 187,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 144,
                  "end": 164,
                  "typeName": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 161,
                    "decorators": [],
                    "name": "IStringDictionary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 161,
                    "end": 164,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 162,
                        "end": 163,
                        "typeName": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 163,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 167,
                  "end": 187,
                  "typeName": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 184,
                    "decorators": [],
                    "name": "INumberDictionary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 184,
                    "end": 187,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 185,
                        "end": 186,
                        "typeName": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 186,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 189,
          "end": 258,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 258,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 199,
              "end": 258,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 230,
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 207,
                      "end": 230,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 209,
                          "end": 218,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 212,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 212,
                            "end": 217,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 214,
                              "end": 217
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 219,
                          "end": 228,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 224,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 224,
                            "end": 227,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 226,
                              "end": 227,
                              "typeName": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 227,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 250,
                  "decorators": [],
                  "name": "remove",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 250,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 240,
                      "end": 250,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 243,
                        "end": 250,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 246,
                          "end": 250
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 252,
                "end": 258,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 255,
                  "end": 258
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 276,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 271,
            "decorators": [],
            "name": "count",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 274,
            "end": 275,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 319,
      "expression": {
        "type": "CallExpression",
        "start": 277,
        "end": 318,
        "callee": {
          "type": "Identifier",
          "start": 277,
          "end": 284,
          "decorators": [],
          "name": "forEach",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 285,
            "end": 302,
            "properties": [
              {
                "type": "Property",
                "start": 287,
                "end": 300,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 295,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 297,
                  "end": 300,
                  "value": 123,
                  "raw": "123"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 304,
            "end": 317,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "UpdateExpression",
              "start": 310,
              "end": 317,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 310,
                "end": 315,
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
