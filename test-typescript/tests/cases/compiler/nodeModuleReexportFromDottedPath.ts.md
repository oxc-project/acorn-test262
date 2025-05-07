__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 66,
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 66,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 41,
              "end": 64,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 57,
                "decorators": [],
                "name": "rejectOnNotFound",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 63,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 60,
                  "end": 63
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 36,
          "decorators": [],
          "name": "PrismaClientOptions",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 169,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 147,
          "end": 169,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 151,
              "end": 167,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 159,
                "end": 166,
                "decorators": [],
                "name": "fetcher",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 93,
          "decorators": [],
          "name": "PrismaClient",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 93,
          "end": 146,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 94,
              "end": 145,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 123,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 123,
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 145,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 145,
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
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
      "exportKind": "value",
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
  "end": 32,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 30,
        "raw": "\".prisma/client\"",
        "value": ".prisma/client",
        "regex": null,
        "bigint": null
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
  "end": 257,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 45,
        "raw": "\"@prisma/client\"",
        "value": "@prisma/client",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "PrismaClient",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "PrismaClient",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 167,
            "decorators": [],
            "name": "enhancePrisma",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 167,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 167,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 121,
                    "decorators": [],
                    "name": "client",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 104,
                        "end": 121,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 121,
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 126,
                    "end": 167,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 126,
                        "end": 143,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 143,
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 146,
                        "end": 167,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 148,
                            "end": 165,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 156,
                              "decorators": [],
                              "name": "enhanced",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 156,
                              "end": 165,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 158,
                                "end": 165
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 76,
                  "end": 95,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 77,
                      "end": 94,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 94,
                        "decorators": [],
                        "name": "TPrismaClientCtor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 189,
            "decorators": [],
            "name": "EnhancedPrisma",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 192,
            "end": 219,
            "arguments": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 218,
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 192,
              "end": 205,
              "decorators": [],
              "name": "enhancePrisma",
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
      "type": "ExportDefaultDeclaration",
      "start": 221,
      "end": 257,
      "declaration": {
        "type": "NewExpression",
        "start": 236,
        "end": 256,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 240,
          "end": 254,
          "decorators": [],
          "name": "EnhancedPrisma",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
