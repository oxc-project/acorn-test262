__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "raw": "\"./obj.ts\"",
        "value": "./obj.ts",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 60,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 59,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 91,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 90,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 90,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 29,
                  "end": 90,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 36,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 36,
                      "end": 45,
                      "raw": "\"./id.ts\"",
                      "value": "./id.ts",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 49,
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 49,
                    "end": 90,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 50,
                        "end": 89,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 56,
                            "end": 87,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 56,
                              "end": 59,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 59,
                              "end": 86,
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "start": 61,
                                "end": 86,
                                "argument": {
                                  "type": "TSLiteralType",
                                  "start": 68,
                                  "end": 77,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 68,
                                    "end": 77,
                                    "raw": "\"./id.ts\"",
                                    "value": "./id.ts",
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 82,
                                  "decorators": [],
                                  "name": "Id",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 82,
                                  "end": 86,
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "start": 83,
                                      "end": 85,
                                      "members": []
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        ]
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
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 14,
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 20,
          "end": 21,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 17,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 16,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
