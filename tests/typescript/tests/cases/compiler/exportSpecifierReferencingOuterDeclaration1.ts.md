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
                  "start": 83,
                  "end": 84
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "exportKind": "value",
                "start": 83,
                "end": 84
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 74,
            "end": 87
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
                "start": 108,
                "end": 111
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
                      "start": 115,
                      "end": 116
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
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
              "body": null,
              "expression": false,
              "start": 99,
              "end": 121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 121
          }
        ],
        "start": 68,
        "end": 123
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 49,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
