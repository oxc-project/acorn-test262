__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 65
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 66,
                        "end": 69
                      },
                      "declare": false,
                      "start": 54,
                      "end": 69
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 47,
                    "end": 69
                  }
                ],
                "start": 37,
                "end": 75
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 75
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 75
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
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
                      "start": 99,
                      "end": 100
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 99,
                    "end": 100
                  }
                ],
                "start": 98,
                "end": 101
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 102,
                "end": 105
              },
              "declare": false,
              "start": 87,
              "end": 105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 80,
            "end": 105
          }
        ],
        "start": 12,
        "end": 107
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 116
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "start": 115,
                    "end": 118
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 120
                  },
                  "start": 115,
                  "end": 120
                },
                "typeArguments": null,
                "start": 115,
                "end": 120
              },
              "start": 113,
              "end": 120
            },
            "start": 112,
            "end": 120
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 123,
            "end": 127
          },
          "definite": false,
          "start": 112,
          "end": 127
        }
      ],
      "declare": false,
      "start": 108,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 138
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "start": 137,
                  "end": 140
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    }
                  ],
                  "start": 140,
                  "end": 148
                },
                "start": 137,
                "end": 148
              },
              "start": 135,
              "end": 148
            },
            "start": 133,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 148
        }
      ],
      "declare": false,
      "start": 129,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
