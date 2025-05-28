__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "ObjectIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "TObject",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "TResult",
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
        "type": "TSFunctionType",
        "start": 40,
        "end": 116,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 70,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 70,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 48,
                "end": 70,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 48,
                  "end": 55,
                  "typeName": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 55,
                    "decorators": [],
                    "name": "TObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 56,
                  "end": 69,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 69,
                      "decorators": [],
                      "name": "TObject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 72,
            "end": 83,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            }
          },
          {
            "type": "Identifier",
            "start": 85,
            "end": 104,
            "decorators": [],
            "name": "collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 104,
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 106,
          "end": 116,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 116,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 116,
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 119,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 141,
        "decorators": [],
        "name": "LoDashStatic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 281,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 148,
            "end": 279,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 157,
              "decorators": [],
              "name": "mapValues",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 157,
              "end": 184,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 158,
                  "end": 174,
                  "name": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 176,
                  "end": 183,
                  "name": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 183,
                    "decorators": [],
                    "name": "TResult",
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
                "start": 185,
                "end": 210,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 210,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 190,
                    "end": 210,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 190,
                        "end": 191,
                        "typeName": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 194,
                        "end": 198
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 201,
                        "end": 210
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 212,
                "end": 248,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 248,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 236,
                      "decorators": [],
                      "name": "ObjectIterator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 236,
                      "end": 248,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 238,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 238,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 240,
                          "end": 247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 247,
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 278,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 251,
                "end": 278,
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 259,
                  "end": 266,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 265,
                    "end": 266,
                    "typeName": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
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
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 276,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 276,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "optional": false,
                "readonly": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 312,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 311,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 299,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 311,
                  "decorators": [],
                  "name": "LoDashStatic",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 313,
      "end": 324,
      "expression": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 37,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "decorators": [],
              "name": "INDEX_FIELD",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 27,
              "end": 36,
              "value": "__INDEX",
              "raw": "'__INDEX'"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 334,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "value": "./dash",
        "raw": "'./dash'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 29,
      "end": 68,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 38,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "decorators": [],
            "name": "INDEX_FIELD",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "decorators": [],
            "name": "INDEX_FIELD",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 67,
        "value": "./Consts",
        "raw": "'./Consts'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 334,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 77,
        "end": 334,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 87,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 88,
          "end": 334,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 163,
              "end": 332,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 167,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 167,
                "end": 332,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 168,
                    "end": 171,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 173,
                    "end": 175,
                    "decorators": [],
                    "name": "vm",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 177,
                  "end": 332,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 187,
                      "end": 201,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 191,
                          "end": 200,
                          "id": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 196,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 199,
                            "end": 200,
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
                      "start": 210,
                      "end": 326,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 210,
                        "end": 325,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 210,
                          "end": 220,
                          "object": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 212,
                            "decorators": [],
                            "name": "vm",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 220,
                            "decorators": [],
                            "name": "objects",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 223,
                          "end": 325,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 223,
                            "end": 234,
                            "object": {
                              "type": "Identifier",
                              "start": 223,
                              "end": 224,
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 225,
                              "end": 234,
                              "decorators": [],
                              "name": "mapValues",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 248,
                              "end": 251,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 265,
                              "end": 314,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 265,
                                  "end": 271,
                                  "decorators": [],
                                  "name": "object",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "ObjectExpression",
                                "start": 276,
                                "end": 313,
                                "properties": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 278,
                                    "end": 287,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 281,
                                      "end": 287,
                                      "decorators": [],
                                      "name": "object",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "start": 289,
                                    "end": 311,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 290,
                                      "end": 301,
                                      "decorators": [],
                                      "name": "INDEX_FIELD",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "UpdateExpression",
                                      "start": 304,
                                      "end": 311,
                                      "operator": "++",
                                      "prefix": false,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 304,
                                        "end": 309,
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": true,
                                    "optional": false
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
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
