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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
      "expression": false
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 81,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 80,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
