__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 124,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 38,
        "value": "acorn-walk",
        "raw": "'acorn-walk'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 39,
        "end": 124,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 122,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 50,
              "end": 122,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 65,
                "decorators": [],
                "name": "simple",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 75,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 72,
                      "end": 75
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 90,
                  "decorators": [],
                  "name": "visitors",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 87,
                      "end": 90
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 102,
                  "decorators": [],
                  "name": "base",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 99,
                      "end": 102
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 115,
                  "decorators": [],
                  "name": "state",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 112,
                      "end": 115
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 116,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 118,
                  "end": 121
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "simple",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "simple",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 35,
        "value": "acorn-walk",
        "raw": "'acorn-walk'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
