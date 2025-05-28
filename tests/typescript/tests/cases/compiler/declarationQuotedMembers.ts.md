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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 55,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 55,
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
                  "key": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSLiteralType",
                    "start": 37,
                    "end": 44,
                    "literal": {
                      "type": "Literal",
                      "start": 37,
                      "end": 44,
                      "value": "a-b-c",
                      "raw": "'a-b-c'"
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "optional": false,
                  "readonly": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 86,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 86,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 85,
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
            },
            "definite": false
          }
        ],
        "declare": false
      },
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
