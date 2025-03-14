ex.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 41,
        "end": 107,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 53,
          "decorators": [],
          "name": "art",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 54,
            "end": 64,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              }
            }
          },
          {
            "type": "Identifier",
            "start": 66,
            "end": 90,
            "decorators": [],
            "name": "message",
            "optional": true,
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
                      "decorators": [],
                      "name": "Error",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 91,
          "end": 106,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 93,
            "end": 106,
            "asserts": true,
            "parameterName": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "typeAnnotation": null
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
ex2.d.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "art",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 57,
          "decorators": [],
          "name": "message",
          "optional": true,
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
                    "decorators": [],
                    "name": "Error",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 73,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 60,
          "end": 73,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "value",
            "optional": false
          },
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
        "decorators": [],
        "name": "art",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
