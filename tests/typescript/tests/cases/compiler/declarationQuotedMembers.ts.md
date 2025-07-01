__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapped",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "constraint": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a-b-c",
                      "raw": "'a-b-c'",
                      "start": 37,
                      "end": 44
                    },
                    "start": 37,
                    "end": 44
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 29,
                  "end": 55
                },
                "start": 27,
                "end": 55
              },
              "start": 21,
              "end": 55
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 55
          }
        ],
        "declare": true,
        "start": 7,
        "end": 55
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "example",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 76
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 85
            },
            "definite": false,
            "start": 69,
            "end": 85
          }
        ],
        "declare": false,
        "start": 63,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
