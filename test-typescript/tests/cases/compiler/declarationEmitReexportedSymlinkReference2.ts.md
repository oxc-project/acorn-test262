monorepo/pkg1/dist/index.d.ts
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
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 23,
        "raw": "'./types'",
        "value": "./types"
      }
    }
  ],
  "sourceType": "module"
}
```
monorepo/pkg1/dist/types.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 44,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "A",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 34,
                  "end": 40
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 52,
        "end": 89,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "B",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 77,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 125,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 97,
        "end": 125,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 110,
          "end": 116,
          "decorators": [],
          "name": "IdType",
          "optional": false
        },
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 360,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 133,
        "end": 360,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 194,
          "end": 360,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 200,
              "end": 221,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "decorators": [],
                "name": "key",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
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
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 226,
              "end": 248,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 234,
                "end": 245,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 245,
                "end": 248,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 253,
              "end": 272,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 261,
                "decorators": [],
                "name": "toString",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 261,
                "end": 272,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
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
              }
            },
            {
              "type": "MethodDefinition",
              "start": 277,
              "end": 358,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 284,
                "end": 290,
                "decorators": [],
                "name": "create",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 290,
                "end": 358,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 321,
                    "end": 332,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 324,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 326,
                        "end": 332
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 357,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 357,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 355,
                          "end": 356,
                          "typeName": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 356,
                            "decorators": [],
                            "name": "D",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 351,
                      "decorators": [],
                      "name": "MetadataAccessor",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 290,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 291,
                      "end": 292,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 292,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 294,
                      "end": 319,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 304,
                        "end": 310,
                        "typeName": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 310,
                          "decorators": [],
                          "name": "IdType",
                          "optional": false
                        }
                      },
                      "default": {
                        "type": "TSTypeReference",
                        "start": 313,
                        "end": 319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 319,
                          "decorators": [],
                          "name": "IdType",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
                        "decorators": [],
                        "name": "D",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 147,
          "end": 163,
          "decorators": [],
          "name": "MetadataAccessor",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 163,
          "end": 193,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 164,
              "end": 165,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 167,
              "end": 192,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "decorators": [],
                  "name": "IdType",
                  "optional": false
                }
              },
              "default": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 192,
                  "decorators": [],
                  "name": "IdType",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "D",
                "optional": false
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
  "sourceType": "module"
}
```
monorepo/pkg2/dist/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 20,
        "raw": "\"./secondary\"",
        "value": "./secondary"
      },
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 22,
      "end": 46,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 45,
        "raw": "'./types'",
        "value": "./types"
      }
    }
  ],
  "sourceType": "module"
}
```
monorepo/pkg2/dist/types.d.ts
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 50,
        "raw": "'@raymondfeng/pkg1'",
        "value": "@raymondfeng/pkg1"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 24,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "decorators": [],
            "name": "MetadataAccessor",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "decorators": [],
            "name": "MetadataAccessor",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
monorepo/pkg2/dist/secondary.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 40,
        "raw": "'@raymondfeng/pkg1'",
        "value": "@raymondfeng/pkg1"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 14,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 14,
            "decorators": [],
            "name": "IdType",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 14,
            "decorators": [],
            "name": "IdType",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
monorepo/pkg3/src/index.ts
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
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "'./keys'",
        "value": "./keys"
      }
    }
  ],
  "sourceType": "module"
}
```
monorepo/pkg3/src/keys.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 50,
        "raw": "\"@raymondfeng/pkg2\"",
        "value": "@raymondfeng/pkg2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "decorators": [],
            "name": "MetadataAccessor",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 24,
            "decorators": [],
            "name": "MetadataAccessor",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 112,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 60,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 66,
            "end": 111,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 71,
              "decorators": [],
              "name": "ADMIN",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 74,
              "end": 111,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 107,
                  "end": 110,
                  "raw": "'1'",
                  "value": "1"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 74,
                "end": 97,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 90,
                  "decorators": [],
                  "name": "MetadataAccessor",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 97,
                  "decorators": [],
                  "name": "create",
                  "optional": false
                }
              },
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
  "sourceType": "module"
}
```
