__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 27,
            "decorators": [],
            "name": "lib",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 27,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 17,
                "end": 27,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 23,
                    "end": 27
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 29,
      "end": 53,
      "body": {
        "type": "TSModuleBlock",
        "start": 51,
        "end": 53,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "decorators": [],
        "name": "lib",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 54,
      "end": 67,
      "expression": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "lib",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 84,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "\"lib\"",
        "value": "lib"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "lib",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 84,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 84,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 82,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 62,
              "end": 82,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 77,
                  "end": 81
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
        "start": 43,
        "end": 48,
        "raw": "\"lib\"",
        "value": "lib"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
