__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 107,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 41,
        "end": 107,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 53,
          "name": "art",
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
            "start": 54,
            "end": 64,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 66,
            "end": 90,
            "name": "message",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 90,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 76,
                "end": 90,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 76,
                    "end": 82
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 90,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 91,
          "end": 106,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 93,
            "end": 106,
            "parameterName": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": true,
            "typeAnnotation": null
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
  "end": 88,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "art",
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
          "end": 31,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 57,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 57,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 43,
              "end": 57,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 57,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 57,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 73,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 60,
          "end": 73,
          "parameterName": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 75,
      "end": 88,
      "expression": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "art",
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
