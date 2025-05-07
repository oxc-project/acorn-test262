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
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 43,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 43,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 120,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 65,
        "end": 120,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 84,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 80,
                "end": 81,
                "exported": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 89,
            "end": 118,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 96,
              "end": 118,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 117,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 112,
                  "end": 117,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 112,
                    "end": 117,
                    "left": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 117,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 61,
        "end": 64,
        "raw": "\"m\"",
        "value": "m",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
