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
      "async": false,
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 56,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 55,
        "raw": "\"foo\"",
        "value": "foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 43,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 69,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 68,
          "exported": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 80,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 99,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 90,
          "end": 98,
          "exported": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "decorators": [],
            "name": "foo",
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
