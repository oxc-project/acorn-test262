__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PrismaClientOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 36
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "rejectOnNotFound",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 57
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 60,
                  "end": 63
                },
                "start": 58,
                "end": 63
              },
              "accessibility": null,
              "static": false,
              "start": 41,
              "end": 64
            }
          ],
          "start": 37,
          "end": 66
        },
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PrismaClient",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 93
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
                "start": 94,
                "end": 95
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 123
                },
                "typeArguments": null,
                "start": 104,
                "end": 123
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 145
                },
                "typeArguments": null,
                "start": 126,
                "end": 145
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 94,
              "end": 145
            }
          ],
          "start": 93,
          "end": 146
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fetcher",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 166
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 151,
              "end": 167
            }
          ],
          "start": 147,
          "end": 169
        },
        "abstract": false,
        "declare": false,
        "start": 75,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": ".prisma/client",
        "raw": "\".prisma/client\"",
        "start": 14,
        "end": 30
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
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
            "name": "PrismaClient",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "PrismaClient",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "importKind": "value",
          "start": 9,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@prisma/client",
        "raw": "\"@prisma/client\"",
        "start": 29,
        "end": 45
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
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
            "name": "enhancePrisma",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPrismaClientCtor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 94
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 77,
                      "end": 94
                    }
                  ],
                  "start": 76,
                  "end": 95
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "client",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 121
                        },
                        "typeArguments": null,
                        "start": 104,
                        "end": 121
                      },
                      "start": 102,
                      "end": 121
                    },
                    "start": 96,
                    "end": 121
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 143
                        },
                        "typeArguments": null,
                        "start": 126,
                        "end": 143
                      },
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
                              "name": "enhanced",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 148,
                              "end": 156
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 158,
                                "end": 165
                              },
                              "start": 156,
                              "end": 165
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 148,
                            "end": 165
                          }
                        ],
                        "start": 146,
                        "end": 167
                      }
                    ],
                    "start": 126,
                    "end": 167
                  },
                  "start": 123,
                  "end": 167
                },
                "start": 76,
                "end": 167
              },
              "start": 74,
              "end": 167
            },
            "start": 61,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 167
        }
      ],
      "declare": true,
      "start": 47,
      "end": 168
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
            "name": "EnhancedPrisma",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 189
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "enhancePrisma",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 205
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 218
              }
            ],
            "optional": false,
            "start": 192,
            "end": 219
          },
          "definite": false,
          "start": 175,
          "end": 219
        }
      ],
      "declare": false,
      "start": 169,
      "end": 220
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnhancedPrisma",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "start": 236,
        "end": 256
      },
      "exportKind": "value",
      "start": 221,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
