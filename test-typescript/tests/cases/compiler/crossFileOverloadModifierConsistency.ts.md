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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "get",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 30,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 48,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 42,
          "end": 45,
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "name": "get",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "name": "get",
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 42,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "name": "real",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 33,
            "name": "arg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 40,
          "end": 42,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 39,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 160,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 80,
      "id": {
        "type": "Literal",
        "start": 27,
        "end": 36,
        "value": "library",
        "raw": "\"library\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 80,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 41,
            "end": 78,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 48,
              "end": 78,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "name": "get",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 159,
      "id": {
        "type": "Literal",
        "start": 97,
        "end": 110,
        "value": "non-ambient",
        "raw": "\"non-ambient\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 111,
        "end": 159,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 157,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 122,
              "end": 157,
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 135,
                "name": "real",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 136,
                  "end": 147,
                  "name": "arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 150,
                  "end": 156
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
