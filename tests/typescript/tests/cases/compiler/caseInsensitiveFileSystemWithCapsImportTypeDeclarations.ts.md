__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 32,
        "raw": "'./type-b'",
        "value": "./type-b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "TypeB",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "TypeB",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 109,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 42,
        "end": 109,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 55,
          "end": 109,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 61,
              "end": 107,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 68,
                "end": 107,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 71,
                  "end": 107,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 81,
                      "end": 101,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 88,
                        "end": 100,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 88,
                          "end": 91,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 100,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "decorators": [],
                            "name": "TypeB",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 54,
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 121,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "raw": "'./types'",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Merge",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Merge",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 33,
      "end": 66,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 55,
        "end": 65,
        "raw": "'./type-a'",
        "value": "./type-a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 47,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "TypeA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "TypeA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 75,
        "end": 121,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 85,
          "decorators": [],
          "name": "TypeB",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 120,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 93,
            "end": 120,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 94,
                "end": 99,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 99,
                  "decorators": [],
                  "name": "TypeA",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 119,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 107,
                    "end": 117,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 88,
            "end": 93,
            "decorators": [],
            "name": "Merge",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 38,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "TypeA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 20,
          "end": 38,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 26,
              "end": 36,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 29,
                  "end": 35
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 32,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Merge",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 26,
          "end": 31,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 26,
              "end": 27,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 30,
              "end": 31,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 17,
          "end": 23,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 18,
              "end": 19,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 21,
              "end": 22,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
