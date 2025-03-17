__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 24,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 23,
        "value": "./types",
        "raw": "'./types'"
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 360,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 24,
          "end": 43,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 30,
              "end": 41,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 34,
                  "end": 40
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 89,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 52,
        "end": 89,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 69,
          "end": 88,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 75,
              "end": 86,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 77,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 125,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 97,
        "end": 125,
        "id": {
          "type": "Identifier",
          "start": 110,
          "end": 116,
          "name": "IdType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 119,
          "end": 124,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 360,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 133,
        "end": 360,
        "id": {
          "type": "Identifier",
          "start": 147,
          "end": 163,
          "name": "MetadataAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 194,
          "end": 360,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 200,
              "end": 221,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 220,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 226,
              "end": 248,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 234,
                "end": 245,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 245,
                "end": 248,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 253,
              "end": 272,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 261,
                "name": "toString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 261,
                "end": 272,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 263,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 265,
                    "end": 271
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 277,
              "end": 358,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 284,
                "end": 290,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 290,
                "end": 358,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 321,
                    "end": 332,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 324,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 326,
                        "end": 332
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 290,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 291,
                      "end": 292,
                      "name": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 292,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 294,
                      "end": 319,
                      "name": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 304,
                        "end": 310,
                        "typeName": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 310,
                          "name": "IdType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": {
                        "type": "TSTypeReference",
                        "start": 313,
                        "end": 319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 319,
                          "name": "IdType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 357,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 357,
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 351,
                      "name": "MetadataAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 351,
                      "end": 357,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 352,
                          "end": 353,
                          "typeName": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 353,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 355,
                          "end": 356,
                          "typeName": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 356,
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 163,
          "end": 193,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 164,
              "end": 165,
              "name": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 167,
              "end": 192,
              "name": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "name": "IdType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 192,
                  "name": "IdType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
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
  "end": 24,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 24,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 23,
        "value": "./types",
        "raw": "'./types'"
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 24,
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "name": "MetadataAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "name": "MetadataAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 50,
        "value": "@raymondfeng/pkg1",
        "raw": "'@raymondfeng/pkg1'"
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 23,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 23,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "value": "./keys",
        "raw": "'./keys'"
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "name": "MetadataAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "name": "MetadataAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 50,
        "value": "@raymondfeng/pkg2",
        "raw": "\"@raymondfeng/pkg2\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 112,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 60,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 66,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 71,
              "name": "ADMIN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 74,
              "end": 111,
              "callee": {
                "type": "MemberExpression",
                "start": 74,
                "end": 97,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 90,
                  "name": "MetadataAccessor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 97,
                  "name": "create",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 107,
                  "end": 110,
                  "value": "1",
                  "raw": "'1'"
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 97,
                "end": 106,
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 98,
                    "end": 105
                  }
                ]
              }
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
