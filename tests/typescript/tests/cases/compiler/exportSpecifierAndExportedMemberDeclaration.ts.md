__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m2",
        "raw": "\"m2\"",
        "start": 15,
        "end": 19
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
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 67,
                      "end": 70
                    },
                    "declare": false,
                    "start": 55,
                    "end": 70
                  }
                ],
                "start": 45,
                "end": 76
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 33,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 76
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 81,
            "end": 94
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
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "exportKind": "value",
                "start": 108,
                "end": 114
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 99,
            "end": 117
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
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
                    "start": 136,
                    "end": 137
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "start": 136,
                  "end": 139
                },
                "typeArguments": null,
                "start": 136,
                "end": 139
              },
              "start": 134,
              "end": 139
            },
            "body": null,
            "expression": false,
            "start": 122,
            "end": 140
          }
        ],
        "start": 20,
        "end": 142
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 142
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m2",
        "raw": "\"m2\"",
        "start": 159,
        "end": 163
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z2",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 181
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
                    "start": 185,
                    "end": 186
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 188
                  },
                  "start": 185,
                  "end": 188
                },
                "typeArguments": null,
                "start": 185,
                "end": 188
              },
              "start": 183,
              "end": 188
            },
            "body": null,
            "expression": false,
            "start": 170,
            "end": 189
          }
        ],
        "start": 164,
        "end": 191
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 144,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
