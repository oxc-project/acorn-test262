__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 27,
        "name": "IStringDictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "V",
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
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "INumberDictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "V",
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
                "name": "idx",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "forEach",
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
          "start": 138,
          "end": 187,
          "name": "from",
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
                    "name": "IStringDictionary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "name": "INumberDictionary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 189,
          "end": 258,
          "name": "callback",
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
                  "name": "entry",
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
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 250,
                  "name": "remove",
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
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 271,
            "name": "count",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
          "name": "forEach",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 295,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 297,
                  "end": 300,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 304,
            "end": 317,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
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
                "name": "count",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
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
