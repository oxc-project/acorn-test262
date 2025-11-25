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
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 72
          },
          "importKind": "value",
          "start": 66,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./obj",
        "raw": "\"./obj\"",
        "start": 80,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 57,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 113
            },
            "definite": false,
            "start": 103,
            "end": 113
          }
        ],
        "declare": false,
        "start": 97,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 142
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./id",
                    "raw": "\"./id\"",
                    "start": 36,
                    "end": 42
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 46
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 53,
                              "end": 56
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "source": {
                                  "type": "Literal",
                                  "value": "./id",
                                  "raw": "\"./id\"",
                                  "start": 65,
                                  "end": 71
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Id",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 74,
                                  "end": 76
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [],
                                      "start": 77,
                                      "end": 79
                                    }
                                  ],
                                  "start": 76,
                                  "end": 80
                                },
                                "start": 58,
                                "end": 80
                              },
                              "start": 56,
                              "end": 80
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 53,
                            "end": 81
                          }
                        ],
                        "start": 47,
                        "end": 83
                      }
                    ],
                    "start": 46,
                    "end": 84
                  },
                  "start": 29,
                  "end": 84
                },
                "start": 27,
                "end": 84
              },
              "start": 21,
              "end": 84
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 84
          }
        ],
        "declare": true,
        "start": 7,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 14
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
                "start": 15,
                "end": 16
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 15,
              "end": 16
            }
          ],
          "start": 14,
          "end": 17
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "typeArguments": null,
          "start": 20,
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
