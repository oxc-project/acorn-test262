__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "subject",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 21,
              "end": 23
            },
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "subject1",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 19
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 22,
              "end": 24
            },
            "definite": false,
            "start": 11,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 26
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "exportKind": "value",
          "start": 47,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 61,
        "end": 66
      },
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 67
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject1",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "subject1",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "exportKind": "value",
          "start": 88,
          "end": 96
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "'./1'",
        "start": 103,
        "end": 108
      },
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 109
}
```
