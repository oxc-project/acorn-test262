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
          "decorators": [],
          "name": "PrismaClientOptions",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "rejectOnNotFound",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 169,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 169,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 123,
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 147,
          "end": 169,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 151,
              "end": 167,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 159,
                "end": 166,
                "decorators": [],
                "name": "fetcher",
                "optional": false,
                "typeAnnotation": null
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
              "accessibility": "private"
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
  "end": 257,
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
            "decorators": [],
            "name": "PrismaClient",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "PrismaClient",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 168,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 167,
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
                        "decorators": [],
                        "name": "TPrismaClientCtor",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 121,
                          "decorators": [],
                          "name": "TPrismaClientCtor",
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
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "enhanced",
                              "optional": false,
                              "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 220,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 219,
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
            "callee": {
              "type": "Identifier",
              "start": 192,
              "end": 205,
              "decorators": [],
              "name": "enhancePrisma",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "EnhancedPrisma",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
