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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 36,
          "name": "PrismaClientOptions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 66,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 41,
              "end": 64,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 57,
                "name": "rejectOnNotFound",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 63,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 60,
                  "end": 63
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 169,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 169,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 93,
          "name": "PrismaClient",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 147,
          "end": 169,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 151,
              "end": 167,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 159,
                "end": 166,
                "name": "fetcher",
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
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 93,
          "end": 146,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 94,
              "end": 145,
              "name": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 123,
                  "name": "PrismaClientOptions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 145,
                  "name": "PrismaClientOptions",
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
        "declare": false,
        "superTypeArguments": null
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
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 30,
        "value": ".prisma/client",
        "raw": "\".prisma/client\""
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
  "end": 258,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "name": "PrismaClient",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "name": "PrismaClient",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 45,
        "value": "@prisma/client",
        "raw": "\"@prisma/client\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 167,
            "name": "enhancePrisma",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 167,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 167,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 76,
                  "end": 95,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 77,
                      "end": 94,
                      "name": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 94,
                        "name": "TPrismaClientCtor",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 121,
                    "name": "client",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 104,
                        "end": 121,
                        "typeName": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 121,
                          "name": "TPrismaClientCtor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 143,
                          "name": "TPrismaClientCtor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 156,
                              "name": "enhanced",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 156,
                              "end": 165,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 158,
                                "end": 165
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 189,
            "name": "EnhancedPrisma",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 192,
            "end": 219,
            "callee": {
              "type": "Identifier",
              "start": 192,
              "end": 205,
              "name": "enhancePrisma",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 218,
                "name": "PrismaClient",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "type": "ExportDefaultDeclaration",
      "start": 221,
      "end": 257,
      "declaration": {
        "type": "NewExpression",
        "start": 236,
        "end": 256,
        "callee": {
          "type": "Identifier",
          "start": 240,
          "end": 254,
          "name": "EnhancedPrisma",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
