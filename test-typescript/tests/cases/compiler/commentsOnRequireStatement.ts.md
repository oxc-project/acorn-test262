__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 24,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "subject",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 21,
              "end": 23,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 24,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 19,
              "decorators": [],
              "name": "subject1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 22,
              "end": 24,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 47,
          "end": 54,
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "decorators": [],
            "name": "subject",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "decorators": [],
            "name": "subject",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 109,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 108,
        "raw": "'./1'",
        "value": "./1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 88,
          "end": 96,
          "exported": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
            "decorators": [],
            "name": "subject1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
            "decorators": [],
            "name": "subject1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
