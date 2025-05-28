__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 142,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 57,
      "end": 88,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 66,
          "end": 72,
          "imported": {
            "type": "Identifier",
            "start": 66,
            "end": 72,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 72,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 87,
        "value": "./obj",
        "raw": "\"./obj\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 114,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 97,
        "end": 114,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 113,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 107,
              "end": 113,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
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
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 85,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 84,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 29,
                  "end": 84,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 36,
                    "end": 42,
                    "literal": {
                      "type": "Literal",
                      "start": 36,
                      "end": 42,
                      "value": "./id",
                      "raw": "\"./id\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 46,
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 46,
                    "end": 84,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 47,
                        "end": 83,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 53,
                            "end": 81,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 53,
                              "end": 56,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 56,
                              "end": 80,
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "start": 58,
                                "end": 80,
                                "argument": {
                                  "type": "TSLiteralType",
                                  "start": 65,
                                  "end": 71,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 65,
                                    "end": 71,
                                    "value": "./id",
                                    "raw": "\"./id\""
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 76,
                                  "decorators": [],
                                  "name": "Id",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 76,
                                  "end": 80,
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "start": 77,
                                      "end": 79,
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
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 22,
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
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
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
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 20,
          "end": 21,
          "typeName": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
