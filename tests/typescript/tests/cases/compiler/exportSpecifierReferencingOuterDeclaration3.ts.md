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
        "start": 18,
        "end": 19
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 42
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 43,
                "end": 46
              },
              "declare": false,
              "start": 29,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 22,
            "end": 46
          }
        ],
        "start": 20,
        "end": 48
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m",
        "raw": "\"m\"",
        "start": 64,
        "end": 67
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 108
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 109,
                      "end": 112
                    },
                    "declare": false,
                    "start": 95,
                    "end": 112
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 88,
                  "end": 112
                }
              ],
              "start": 86,
              "end": 114
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 74,
            "end": 114
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "exportKind": "value",
                "start": 128,
                "end": 129
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 119,
            "end": 132
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 156
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                      "start": 160,
                      "end": 161
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 165
                    },
                    "start": 160,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 160,
                  "end": 165
                },
                "start": 158,
                "end": 165
              },
              "body": null,
              "expression": false,
              "start": 144,
              "end": 166
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 137,
            "end": 166
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 190
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                      "start": 194,
                      "end": 195
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 199
                    },
                    "start": 194,
                    "end": 199
                  },
                  "typeArguments": null,
                  "start": 194,
                  "end": 199
                },
                "start": 192,
                "end": 199
              },
              "body": null,
              "expression": false,
              "start": 178,
              "end": 200
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 171,
            "end": 200
          }
        ],
        "start": 68,
        "end": 211
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 49,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
