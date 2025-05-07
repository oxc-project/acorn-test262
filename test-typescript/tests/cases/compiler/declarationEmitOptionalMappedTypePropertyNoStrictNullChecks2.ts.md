__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 13,
        "end": 45,
        "types": [
          {
            "type": "TSMappedType",
            "start": 13,
            "end": 40,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 23,
              "end": 30,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 33,
              "end": 37,
              "indexType": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 34,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 43,
            "end": 45,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 270,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 55,
        "end": 270,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 81,
          "decorators": [],
          "name": "createApi",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 95,
            "end": 124,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 124,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 100,
                    "end": 122,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 109,
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 109,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 111,
                        "end": 122,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 122,
                          "decorators": [],
                          "name": "Definitions",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 269,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 127,
            "end": 269,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 137,
              "end": 154,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 154,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 154,
                  "decorators": [],
                  "name": "Definitions",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": {
              "type": "TSTemplateLiteralType",
              "start": 158,
              "end": 193,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 158,
                  "end": 164,
                  "tail": false,
                  "value": {
                    "cooked": "use",
                    "raw": "use"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 186,
                  "end": 193,
                  "tail": true,
                  "value": {
                    "cooked": "Query",
                    "raw": "Query"
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 186,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 174,
                    "end": 186,
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "start": 175,
                        "end": 185,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 176,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 174,
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 196,
              "end": 266,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 266,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 204,
                    "end": 266,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 205,
                        "end": 265,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 211,
                            "end": 235,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 211,
                              "end": 217,
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 217,
                              "end": 234,
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "start": 219,
                                "end": 234,
                                "literal": {
                                  "type": "Literal",
                                  "start": 219,
                                  "end": 234,
                                  "raw": "\"uninitialized\"",
                                  "value": "uninitialized",
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 240,
                            "end": 261,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 252,
                              "decorators": [],
                              "name": "originalArgs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 253,
                              "end": 260,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 255,
                                "end": 260,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 255,
                                  "end": 258
                                }
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 204,
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 94,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 93,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 93,
                "decorators": [],
                "name": "Definitions",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 39,
        "raw": "\"./createApi\"",
        "value": "./createApi",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "createApi",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "createApi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "decorators": [],
            "name": "slice",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 129,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 66,
                "end": 128,
                "properties": [
                  {
                    "type": "Property",
                    "start": 70,
                    "end": 125,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 79,
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 125,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 87,
                          "end": 120,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 93,
                            "end": 120,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 101,
                                "end": 113,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 104,
                                  "decorators": [],
                                  "name": "url",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "TemplateLiteral",
                                  "start": 106,
                                  "end": 113,
                                  "expressions": [],
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "start": 106,
                                      "end": 113,
                                      "tail": true,
                                      "value": {
                                        "cooked": "/user",
                                        "raw": "/user"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
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
              "start": 56,
              "end": 65,
              "decorators": [],
              "name": "createApi",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 170,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 170,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 145,
            "end": 169,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 145,
              "end": 161,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 147,
                  "end": 159,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 159,
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 159,
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 164,
              "end": 169,
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
