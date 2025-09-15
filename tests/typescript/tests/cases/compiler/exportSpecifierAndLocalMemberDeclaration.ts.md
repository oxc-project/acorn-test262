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
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
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
                    "start": 58,
                    "end": 59
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 60,
                    "end": 63
                  },
                  "declare": false,
                  "start": 48,
                  "end": 63
                }
              ],
              "start": 38,
              "end": 69
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 26,
            "end": 69
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 74,
            "end": 87
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
                  "start": 101,
                  "end": 102
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "exportKind": "value",
                "start": 101,
                "end": 107
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 110
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
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
                    "start": 129,
                    "end": 130
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 132
                  },
                  "start": 129,
                  "end": 132
                },
                "typeArguments": null,
                "start": 129,
                "end": 132
              },
              "start": 127,
              "end": 132
            },
            "body": null,
            "expression": false,
            "start": 115,
            "end": 133
          }
        ],
        "start": 20,
        "end": 135
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 135
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m2",
        "raw": "\"m2\"",
        "start": 152,
        "end": 156
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
              "start": 172,
              "end": 174
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
                    "start": 178,
                    "end": 179
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "start": 178,
                  "end": 181
                },
                "typeArguments": null,
                "start": 178,
                "end": 181
              },
              "start": 176,
              "end": 181
            },
            "body": null,
            "expression": false,
            "start": 163,
            "end": 182
          }
        ],
        "start": 157,
        "end": 184
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 137,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
