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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "Id",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
        "type": "TSIntersectionType",
        "start": 13,
        "end": 45,
        "types": [
          {
            "type": "TSMappedType",
            "start": 13,
            "end": 40,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 18,
              "end": 30,
              "name": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 23,
                "end": 30,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 29,
                  "end": 30,
                  "typeName": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
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
              "type": "TSIndexedAccessType",
              "start": 33,
              "end": 37,
              "objectType": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 23,
              "end": 30,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
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
              "start": 18,
              "end": 19,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 270,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 55,
        "end": 270,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 81,
          "name": "createApi",
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
            "start": 95,
            "end": 124,
            "name": "_",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 109,
                      "name": "endpoints",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 109,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 111,
                        "end": 122,
                        "typeName": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 122,
                          "name": "Definitions",
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
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 94,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 93,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 93,
                "name": "Definitions",
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
          "start": 125,
          "end": 269,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 127,
            "end": 269,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 132,
              "end": 154,
              "name": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 137,
                "end": 154,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 143,
                  "end": 154,
                  "typeName": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 154,
                    "name": "Definitions",
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
            "nameType": {
              "type": "TSTemplateLiteralType",
              "start": 158,
              "end": 193,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 158,
                  "end": 164,
                  "value": {
                    "cooked": "use",
                    "raw": "use"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 186,
                  "end": 193,
                  "value": {
                    "cooked": "Query",
                    "raw": "Query"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 186,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 174,
                    "name": "Capitalize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 196,
              "end": 266,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 204,
                    "name": "Id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 211,
                              "end": 217,
                              "name": "status",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                  "value": "uninitialized",
                                  "raw": "\"uninitialized\""
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 240,
                            "end": 261,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 252,
                              "name": "originalArgs",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 137,
              "end": 154,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 154,
                  "name": "Definitions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 171,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "createApi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "createApi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 39,
        "value": "./createApi",
        "raw": "\"./createApi\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "name": "slice",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 129,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 65,
              "name": "createApi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 79,
                      "name": "endpoints",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 125,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 87,
                          "end": 120,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 93,
                            "end": 120,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 101,
                                "end": 113,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 104,
                                  "name": "url",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                      "value": {
                                        "cooked": "/user",
                                        "raw": "/user"
                                      },
                                      "tail": true
                                    }
                                  ]
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 170,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 170,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 145,
            "end": 169,
            "id": {
              "type": "ObjectPattern",
              "start": 145,
              "end": 161,
              "properties": [
                {
                  "type": "Property",
                  "start": 147,
                  "end": 159,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 159,
                    "name": "useTestQuery",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 159,
                    "name": "useTestQuery",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 164,
              "end": 169,
              "name": "slice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
