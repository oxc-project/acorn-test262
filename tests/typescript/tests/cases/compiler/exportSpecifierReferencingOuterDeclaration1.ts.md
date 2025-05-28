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
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
