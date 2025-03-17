__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 55,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 55,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 55,
              "decorators": [],
              "name": "mapped",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 29,
                  "end": 55,
                  "constraint": {
                    "type": "TSLiteralType",
                    "start": 37,
                    "end": 44,
                    "literal": {
                      "type": "Literal",
                      "start": 37,
                      "end": 44,
                      "raw": "'a-b-c'",
                      "value": "a-b-c"
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "nameType": null,
                  "optional": null,
                  "readonly": null,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 85,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 76,
              "decorators": [],
              "name": "example",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 79,
              "end": 85,
              "decorators": [],
              "name": "mapped",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
