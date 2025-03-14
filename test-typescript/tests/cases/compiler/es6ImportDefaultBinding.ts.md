__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
        "optional": false
      },
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
  "end": 192,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 54,
        "raw": "\"es6ImportDefaultBinding_0\"",
        "value": "es6ImportDefaultBinding_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 21,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 64,
            "end": 78,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 136,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 135,
        "raw": "\"es6ImportDefaultBinding_0\"",
        "value": "es6ImportDefaultBinding_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 87,
          "end": 102,
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 102,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
