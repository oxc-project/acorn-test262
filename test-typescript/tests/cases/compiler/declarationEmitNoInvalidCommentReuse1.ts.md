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
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 72,
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
        "start": 80,
        "end": 87,
        "value": "./obj",
        "raw": "\"./obj\""
      },
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 113,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 107,
              "end": 113,
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 84,
              "name": "object",
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
                    "name": "Id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "name": "Id",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
