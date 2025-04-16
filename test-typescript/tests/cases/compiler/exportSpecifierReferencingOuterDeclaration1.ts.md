__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 43,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 43,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 120,
      "id": {
        "type": "Literal",
        "start": 61,
        "end": 64,
        "value": "m",
        "raw": "\"m\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 65,
        "end": 120,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 84,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 80,
                "end": 81,
                "local": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 89,
            "end": 118,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 96,
              "end": 118,
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 117,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 112,
                  "end": 117,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 112,
                    "end": 117,
                    "left": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 117,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
