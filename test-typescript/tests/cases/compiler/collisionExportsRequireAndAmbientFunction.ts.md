__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 42,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 31,
          "decorators": [],
          "name": "exports",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 33,
          "end": 41,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 35,
            "end": 41
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 51,
        "end": 88,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 75,
          "decorators": [],
          "name": "require",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 77,
          "end": 87,
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 79,
            "end": 87,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 79,
              "end": 85
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 94,
      "end": 179,
      "body": {
        "type": "TSModuleBlock",
        "start": 112,
        "end": 179,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 118,
            "end": 145,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 134,
              "decorators": [],
              "name": "exports",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 150,
            "end": 177,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 166,
              "decorators": [],
              "name": "require",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 111,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 180,
      "end": 305,
      "body": {
        "type": "TSModuleBlock",
        "start": 190,
        "end": 305,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 196,
            "end": 238,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 203,
              "end": 238,
              "async": false,
              "declare": true,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 220,
                "end": 227,
                "decorators": [],
                "name": "exports",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 229,
                "end": 237,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 231,
                  "end": 237
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 243,
            "end": 287,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 250,
              "end": 287,
              "async": false,
              "declare": true,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 267,
                "end": 274,
                "decorators": [],
                "name": "require",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 276,
                "end": 286,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 278,
                  "end": 286,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 278,
                    "end": 284
                  }
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 303,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 296,
                "end": 302,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 300,
                  "end": 302,
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
        "start": 187,
        "end": 189,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
