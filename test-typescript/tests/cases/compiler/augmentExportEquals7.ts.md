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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 27,
            "name": "lib",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 27,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 17,
                "end": 27,
                "typeParameters": null,
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 29,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "name": "lib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 51,
        "end": 53,
        "body": []
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 54,
      "end": 67,
      "expression": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "name": "lib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "lib",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "lib",
        "raw": "\"lib\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 84,
      "id": {
        "type": "Literal",
        "start": 43,
        "end": 48,
        "value": "lib",
        "raw": "\"lib\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 84,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 82,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 62,
              "end": 82,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "name": "fn",
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
                "start": 75,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 77,
                  "end": 81
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
  "sourceType": "module",
  "hashbang": null
}
```
