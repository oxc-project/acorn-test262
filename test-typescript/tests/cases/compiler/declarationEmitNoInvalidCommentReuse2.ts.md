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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "value": "./obj.ts",
        "raw": "\"./obj.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 60,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
              "name": "object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 90,
              "name": "object",
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
                      "value": "./id.ts",
                      "raw": "\"./id.ts\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 49,
                    "name": "Id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 56,
                              "end": 59,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "value": "./id.ts",
                                    "raw": "\"./id.ts\""
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 82,
                                  "name": "Id",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
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
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 14,
          "name": "Id",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 20,
          "end": 21,
          "typeName": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
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
