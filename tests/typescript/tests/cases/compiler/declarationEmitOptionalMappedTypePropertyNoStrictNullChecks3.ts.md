__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 23,
              "end": 30
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "typeArguments": null,
                "start": 33,
                "end": 34
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "typeArguments": null,
                "start": 35,
                "end": 36
              },
              "start": 33,
              "end": 37
            },
            "optional": false,
            "readonly": null,
            "start": 13,
            "end": 40
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 43,
            "end": 45
          }
        ],
        "start": 13,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createApi",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 81
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 93
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 82,
              "end": 93
            }
          ],
          "start": 81,
          "end": 94
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 109
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Definitions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 111,
                          "end": 122
                        },
                        "typeArguments": null,
                        "start": 111,
                        "end": 122
                      },
                      "start": 109,
                      "end": 122
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 100,
                    "end": 122
                  }
                ],
                "start": 98,
                "end": 124
              },
              "start": 96,
              "end": 124
            },
            "start": 95,
            "end": 124
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Definitions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 154
                },
                "typeArguments": null,
                "start": 143,
                "end": 154
              },
              "start": 137,
              "end": 154
            },
            "nameType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "use",
                    "cooked": "use"
                  },
                  "tail": false,
                  "start": 158,
                  "end": 164
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "Query",
                    "cooked": "Query"
                  },
                  "tail": true,
                  "start": 186,
                  "end": 193
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 174
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "typeArguments": null,
                            "start": 175,
                            "end": 176
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          }
                        ],
                        "start": 175,
                        "end": 185
                      }
                    ],
                    "start": 174,
                    "end": 186
                  },
                  "start": 164,
                  "end": 186
                }
              ],
              "start": 158,
              "end": 193
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 204
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 211,
                              "end": 217
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "uninitialized",
                                  "raw": "\"uninitialized\"",
                                  "start": 219,
                                  "end": 234
                                },
                                "start": 219,
                                "end": 234
                              },
                              "start": 217,
                              "end": 234
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 211,
                            "end": 235
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "originalArgs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 240,
                              "end": 252
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNeverKeyword",
                                "start": 255,
                                "end": 260
                              },
                              "start": 253,
                              "end": 260
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 240,
                            "end": 261
                          }
                        ],
                        "start": 205,
                        "end": 265
                      }
                    ],
                    "start": 204,
                    "end": 266
                  },
                  "start": 202,
                  "end": 266
                },
                "start": 199,
                "end": 266
              },
              "start": 196,
              "end": 266
            },
            "optional": false,
            "readonly": null,
            "start": 127,
            "end": 269
          },
          "start": 125,
          "end": 269
        },
        "body": null,
        "expression": false,
        "start": 55,
        "end": 270
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 48,
      "end": 270
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createApi",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createApi",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./createApi",
        "raw": "\"./createApi\"",
        "start": 26,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "slice",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createApi",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 65
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 79
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 91
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "url",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 101,
                                  "end": 104
                                },
                                "value": {
                                  "type": "TemplateLiteral",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "/user",
                                        "cooked": "/user"
                                      },
                                      "tail": true,
                                      "start": 106,
                                      "end": 113
                                    }
                                  ],
                                  "expressions": [],
                                  "start": 106,
                                  "end": 113
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 101,
                                "end": 113
                              }
                            ],
                            "start": 93,
                            "end": 120
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 87,
                          "end": 120
                        }
                      ],
                      "start": 81,
                      "end": 125
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 70,
                    "end": 125
                  }
                ],
                "start": 66,
                "end": 128
              }
            ],
            "optional": false,
            "start": 56,
            "end": 129
          },
          "definite": false,
          "start": 48,
          "end": 129
        }
      ],
      "declare": false,
      "start": 42,
      "end": 130
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 159
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 159
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 147,
                  "end": 159
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 161
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 169
            },
            "definite": false,
            "start": 145,
            "end": 169
          }
        ],
        "declare": false,
        "start": 139,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 132,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
