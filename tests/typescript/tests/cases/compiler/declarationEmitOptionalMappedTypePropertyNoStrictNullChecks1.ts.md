__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 13,
        "end": 45,
        "types": [
          {
            "type": "TSMappedType",
            "start": 13,
            "end": 40,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "readonly": null
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
      "end": 274,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 55,
        "end": 274,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 81,
          "decorators": [],
          "name": "createApi",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "Definitions",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 109,
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Definitions",
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
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 273,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 127,
            "end": 273,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Definitions",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
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
              "end": 270,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 270,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 270,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 204,
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 204,
                    "end": 270,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 205,
                        "end": 269,
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
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null
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
                            "end": 265,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 252,
                              "decorators": [],
                              "name": "originalArgs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 253,
                              "end": 264,
                              "typeAnnotation": {
                                "type": "TSUndefinedKeyword",
                                "start": 255,
                                "end": 264
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
            "optional": false,
            "readonly": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "createApi",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 130,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 129,
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
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 65,
              "decorators": [],
              "name": "createApi",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 79,
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 104,
                                  "decorators": [],
                                  "name": "url",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "TemplateLiteral",
                                  "start": 106,
                                  "end": 113,
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
                                  ],
                                  "expressions": []
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 145,
            "end": 169,
            "id": {
              "type": "ObjectPattern",
              "start": 145,
              "end": 161,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 147,
                  "end": 159,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 159,
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 159,
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
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
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
