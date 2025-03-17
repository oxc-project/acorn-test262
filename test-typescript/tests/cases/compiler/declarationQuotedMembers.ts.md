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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 55,
              "name": "mapped",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 29,
                  "end": 55,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 32,
                    "end": 44,
                    "name": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "optional": null,
                  "readonly": null,
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
                  "key": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 86,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 76,
              "name": "example",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 79,
              "end": 85,
              "name": "mapped",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
