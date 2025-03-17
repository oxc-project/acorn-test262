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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 25,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "subject",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 39,
              "end": 41,
              "raw": "10",
              "value": 10
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
              "value": 10
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
  "end": 110,
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
        "value": "./0"
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
        "value": "./1"
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
