__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 31,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 30,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 48,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 42,
          "end": 45,
          "exported": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 42,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 40,
          "end": 42,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "real",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 33,
            "decorators": [],
            "name": "arg",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 39,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 159,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 80,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 80,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 41,
            "end": 78,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 48,
              "end": 78,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 64,
                  "end": 77,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 73,
                      "end": 77
                    }
                  ]
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
        "start": 27,
        "end": 36,
        "raw": "\"library\"",
        "value": "library"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 159,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 111,
        "end": 159,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 157,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 122,
              "end": 157,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 135,
                "decorators": [],
                "name": "real",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 136,
                  "end": 147,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 150,
                  "end": 156
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
        "start": 97,
        "end": 110,
        "raw": "\"non-ambient\"",
        "value": "non-ambient"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
