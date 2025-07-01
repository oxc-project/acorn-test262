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
            "name": "dropPrivateProps1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 25
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 25
          },
          "importKind": "value",
          "start": 8,
          "end": 25
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 44
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 44
          },
          "importKind": "value",
          "start": 27,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./api",
        "raw": "'./api'",
        "start": 51,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 59
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps1",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 87
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 92
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 94,
                      "end": 96
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 89,
                    "end": 96
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 102
                    },
                    "value": {
                      "type": "Literal",
                      "value": "secret",
                      "raw": "'secret'",
                      "start": 104,
                      "end": 112
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 98,
                    "end": 112
                  }
                ],
                "start": 88,
                "end": 113
              }
            ],
            "optional": false,
            "start": 70,
            "end": 114
          },
          "definite": false,
          "start": 66,
          "end": 114
        }
      ],
      "declare": false,
      "start": 60,
      "end": 115
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 283
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 288
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 290,
                      "end": 292
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 285,
                    "end": 292
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 298
                    },
                    "value": {
                      "type": "Literal",
                      "value": "secret",
                      "raw": "'secret'",
                      "start": 300,
                      "end": 308
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 294,
                    "end": 308
                  }
                ],
                "start": 284,
                "end": 309
              }
            ],
            "optional": false,
            "start": 266,
            "end": 310
          },
          "definite": false,
          "start": 262,
          "end": 310
        }
      ],
      "declare": false,
      "start": 256,
      "end": 311
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 467
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
            "name": "excludePrivateKeys1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 27
          },
          "importKind": "value",
          "start": 8,
          "end": 27
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 48
          },
          "importKind": "value",
          "start": 29,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./internal",
        "raw": "'./internal'",
        "start": 55,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 68
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
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps1",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 99
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 106
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 106
                  }
                ],
                "start": 102,
                "end": 107
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 116
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 116
                    },
                    "start": 111,
                    "end": 116
                  },
                  "start": 108,
                  "end": 116
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "excludePrivateKeys1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 140
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 144
                  }
                ],
                "optional": false,
                "start": 121,
                "end": 145
              },
              "id": null,
              "generator": false,
              "start": 102,
              "end": 145
            },
            "definite": false,
            "start": 82,
            "end": 145
          }
        ],
        "declare": false,
        "start": 76,
        "end": 146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 69,
      "end": 146
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
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps2",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 177
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 184
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 181,
                    "end": 184
                  }
                ],
                "start": 180,
                "end": 185
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 194
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 194
                    },
                    "start": 189,
                    "end": 194
                  },
                  "start": 186,
                  "end": 194
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "excludePrivateKeys2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 218
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 222
                  }
                ],
                "optional": false,
                "start": 199,
                "end": 223
              },
              "id": null,
              "generator": false,
              "start": 180,
              "end": 223
            },
            "definite": false,
            "start": 160,
            "end": 223
          }
        ],
        "declare": false,
        "start": 154,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 147,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 225
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
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "excludePrivateKeys1",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 43
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
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 47
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 44,
              "end": 47
            }
          ],
          "start": 43,
          "end": 48
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 57
                },
                "typeArguments": null,
                "start": 54,
                "end": 57
              },
              "start": 52,
              "end": 57
            },
            "start": 49,
            "end": 57
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
              "start": 62,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PublicKeys1",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 78
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 85,
                      "end": 88
                    },
                    "start": 79,
                    "end": 88
                  }
                ],
                "start": 78,
                "end": 89
              },
              "start": 67,
              "end": 89
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 95
                },
                "typeArguments": null,
                "start": 92,
                "end": 95
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 92,
              "end": 98
            },
            "optional": false,
            "readonly": null,
            "start": 60,
            "end": 99
          },
          "start": 58,
          "end": 99
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 100
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 100
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "excludePrivateKeys2",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 144
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
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 148
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 145,
              "end": 148
            }
          ],
          "start": 144,
          "end": 149
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 158
                },
                "typeArguments": null,
                "start": 155,
                "end": 158
              },
              "start": 153,
              "end": 158
            },
            "start": 150,
            "end": 158
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
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PublicKeys2",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 179
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 186,
                      "end": 189
                    },
                    "start": 180,
                    "end": 189
                  }
                ],
                "start": 179,
                "end": 190
              },
              "start": 168,
              "end": 190
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "typeArguments": null,
                "start": 193,
                "end": 196
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "typeArguments": null,
                "start": 197,
                "end": 198
              },
              "start": 193,
              "end": 199
            },
            "optional": false,
            "readonly": null,
            "start": 161,
            "end": 200
          },
          "start": 159,
          "end": 200
        },
        "body": null,
        "expression": false,
        "start": 108,
        "end": 201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 101,
      "end": 201
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PublicKeys1",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 225
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
                "start": 226,
                "end": 227
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 226,
              "end": 227
            }
          ],
          "start": 225,
          "end": 228
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "typeArguments": null,
            "start": 231,
            "end": 232
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false,
                "start": 241,
                "end": 245
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 251,
                "end": 253
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 245,
                "end": 251
              }
            ],
            "start": 241,
            "end": 253
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 256,
            "end": 261
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "typeArguments": null,
            "start": 264,
            "end": 265
          },
          "start": 231,
          "end": 265
        },
        "declare": false,
        "start": 209,
        "end": 266
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 202,
      "end": 266
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PublicKeys2",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 283
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
              "start": 284,
              "end": 285
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 284,
            "end": 285
          }
        ],
        "start": 283,
        "end": 286
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "typeArguments": null,
          "start": 296,
          "end": 297
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 306,
              "end": 310
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 316,
              "end": 318
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 310,
              "end": 316
            }
          ],
          "start": 306,
          "end": 318
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 321,
          "end": 326
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "typeArguments": null,
          "start": 329,
          "end": 330
        },
        "start": 296,
        "end": 330
      },
      "declare": false,
      "start": 267,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 331
}
```
