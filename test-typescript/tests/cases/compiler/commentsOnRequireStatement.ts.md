__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 42,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 25,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "name": "subject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 39,
              "end": 41,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 19,
              "name": "subject1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 22,
              "end": 24,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
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
  "start": 39,
  "end": 110,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 67,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 47,
          "end": 54,
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "name": "subject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "name": "subject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 109,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 88,
          "end": 96,
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
            "name": "subject1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
            "name": "subject1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 108,
        "value": "./1",
        "raw": "'./1'"
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
