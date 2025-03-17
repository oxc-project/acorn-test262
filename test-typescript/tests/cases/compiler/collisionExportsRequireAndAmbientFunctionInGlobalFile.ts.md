__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 35,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 26,
        "end": 34,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 28,
          "end": 34
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 71,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 60,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 62,
        "end": 70,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 64,
          "end": 70
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 72,
      "end": 161,
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 161,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 96,
            "end": 125,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 124,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 116,
                "end": 124,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 130,
            "end": 159,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 146,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 158,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 150,
                "end": 158,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 150,
                  "end": 156
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 162,
      "end": 285,
      "body": {
        "type": "TSModuleBlock",
        "start": 172,
        "end": 285,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 178,
            "end": 220,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 185,
              "end": 220,
              "async": false,
              "body": null,
              "declare": true,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 202,
                "end": 209,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 211,
                "end": 219,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 213,
                  "end": 219
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 225,
            "end": 267,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 232,
              "end": 267,
              "async": false,
              "body": null,
              "declare": true,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 249,
                "end": 256,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 258,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 260,
                  "end": 266
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 272,
            "end": 283,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 276,
                "end": 282,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 280,
                  "end": 282,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
