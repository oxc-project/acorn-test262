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
        "name": "ObjectIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 27
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 36
          }
        ],
        "start": 19,
        "end": 37
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 55
                  },
                  "typeArguments": null,
                  "start": 48,
                  "end": 55
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 69
                    },
                    "typeArguments": null,
                    "start": 62,
                    "end": 69
                  },
                  "start": 56,
                  "end": 69
                },
                "start": 48,
                "end": 70
              },
              "start": 46,
              "end": 70
            },
            "start": 41,
            "end": 70
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "start": 72,
            "end": 83
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 104
                },
                "typeArguments": null,
                "start": 97,
                "end": 104
              },
              "start": 95,
              "end": 104
            },
            "start": 85,
            "end": 104
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 116
            },
            "typeArguments": null,
            "start": 109,
            "end": 116
          },
          "start": 106,
          "end": 116
        },
        "start": 40,
        "end": 116
      },
      "declare": false,
      "start": 0,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LoDashStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 141
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 157
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 158,
                    "end": 159
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 158,
                  "end": 174
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 183
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 176,
                  "end": 183
                }
              ],
              "start": 157,
              "end": 184
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 191
                        },
                        "typeArguments": null,
                        "start": 190,
                        "end": 191
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
                    ],
                    "start": 190,
                    "end": 210
                  },
                  "start": 188,
                  "end": 210
                },
                "start": 185,
                "end": 210
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 236
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 237,
                            "end": 238
                          },
                          "typeArguments": null,
                          "start": 237,
                          "end": 238
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 240,
                            "end": 247
                          },
                          "typeArguments": null,
                          "start": 240,
                          "end": 247
                        }
                      ],
                      "start": 236,
                      "end": 248
                    },
                    "start": 222,
                    "end": 248
                  },
                  "start": 220,
                  "end": 248
                },
                "start": 212,
                "end": 248
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
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
                      "start": 265,
                      "end": 266
                    },
                    "typeArguments": null,
                    "start": 265,
                    "end": 266
                  },
                  "start": 259,
                  "end": 266
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 276
                  },
                  "typeArguments": null,
                  "start": 269,
                  "end": 276
                },
                "optional": false,
                "readonly": null,
                "start": 251,
                "end": 278
              },
              "start": 249,
              "end": 278
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 148,
            "end": 279
          }
        ],
        "start": 142,
        "end": 281
      },
      "declare": false,
      "start": 119,
      "end": 281
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
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoDashStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 311
                },
                "typeArguments": null,
                "start": 299,
                "end": 311
              },
              "start": 297,
              "end": 311
            },
            "start": 296,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 296,
          "end": 311
        }
      ],
      "declare": true,
      "start": 282,
      "end": 312
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 323
      },
      "start": 313,
      "end": 324
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 324
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "INDEX_FIELD",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 24
            },
            "init": {
              "type": "Literal",
              "value": "__INDEX",
              "raw": "'__INDEX'",
              "start": 27,
              "end": 36
            },
            "definite": false,
            "start": 13,
            "end": 36
          }
        ],
        "declare": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./dash",
        "raw": "'./dash'",
        "start": 19,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "INDEX_FIELD",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 49
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "INDEX_FIELD",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 49
          },
          "importKind": "value",
          "start": 38,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Consts",
        "raw": "'./Consts'",
        "start": 57,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 29,
      "end": 68
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 87
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 167
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 171
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "vm",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 175
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 191,
                            "end": 196
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 199,
                            "end": 200
                          },
                          "definite": false,
                          "start": 191,
                          "end": 200
                        }
                      ],
                      "declare": false,
                      "start": 187,
                      "end": 201
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "vm",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 212
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "objects",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 220
                          },
                          "optional": false,
                          "computed": false,
                          "start": 210,
                          "end": 220
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 223,
                              "end": 224
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mapValues",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 225,
                              "end": 234
                            },
                            "optional": false,
                            "computed": false,
                            "start": 223,
                            "end": 234
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 248,
                              "end": 251
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 265,
                                  "end": 271
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 281,
                                      "end": 287
                                    },
                                    "start": 278,
                                    "end": 287
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "INDEX_FIELD",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 290,
                                      "end": 301
                                    },
                                    "value": {
                                      "type": "UpdateExpression",
                                      "operator": "++",
                                      "prefix": false,
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 304,
                                        "end": 309
                                      },
                                      "start": 304,
                                      "end": 311
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": true,
                                    "optional": false,
                                    "start": 289,
                                    "end": 311
                                  }
                                ],
                                "start": 276,
                                "end": 313
                              },
                              "id": null,
                              "generator": false,
                              "start": 265,
                              "end": 314
                            }
                          ],
                          "optional": false,
                          "start": 223,
                          "end": 325
                        },
                        "start": 210,
                        "end": 325
                      },
                      "directive": null,
                      "start": 210,
                      "end": 326
                    }
                  ],
                  "start": 177,
                  "end": 332
                },
                "expression": false,
                "start": 167,
                "end": 332
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 163,
              "end": 332
            }
          ],
          "start": 88,
          "end": 334
        },
        "abstract": false,
        "declare": false,
        "start": 77,
        "end": 334
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 70,
      "end": 334
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 334
}
```
