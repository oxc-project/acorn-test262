__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 32,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 30,
            "argument": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 56,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 43,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 55,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 69,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 68,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 80,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 99,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 90,
          "end": 98,
          "local": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
