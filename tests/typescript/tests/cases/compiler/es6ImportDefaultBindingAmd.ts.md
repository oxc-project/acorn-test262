__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingAmd_0",
        "raw": "\"es6ImportDefaultBindingAmd_0\"",
        "start": 27,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 81
          },
          "definite": false,
          "start": 63,
          "end": 81
        }
      ],
      "declare": false,
      "start": 59,
      "end": 82
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 105
          },
          "start": 90,
          "end": 105
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingAmd_0",
        "raw": "\"es6ImportDefaultBindingAmd_0\"",
        "start": 111,
        "end": 141
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
}
```
