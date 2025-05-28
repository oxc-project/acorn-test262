__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 21,
      "declaration": {
        "type": "BinaryExpression",
        "start": 15,
        "end": 20,
        "left": {
          "type": "Literal",
          "start": 15,
          "end": 16,
          "value": 2,
          "raw": "2"
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "value": 2,
          "raw": "2"
        }
      },
      "exportKind": "value"
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 22,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 42,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "BinaryExpression",
        "start": 9,
        "end": 14,
        "left": {
          "type": "Literal",
          "start": 9,
          "end": 10,
          "value": 2,
          "raw": "2"
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 13,
          "end": 14,
          "value": 2,
          "raw": "2"
        }
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 16,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 40,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      }
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
  "start": 36,
  "end": 105,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 104,
      "id": {
        "type": "Literal",
        "start": 51,
        "end": 61,
        "value": "indirect",
        "raw": "\"indirect\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 62,
        "end": 104,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 68,
            "end": 102,
            "declaration": {
              "type": "UnaryExpression",
              "start": 83,
              "end": 101,
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "start": 90,
                "end": 101,
                "object": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 93,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 101,
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 37,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 93,
      "id": {
        "type": "Literal",
        "start": 52,
        "end": 63,
        "value": "indirect2",
        "raw": "\"indirect2\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 93,
        "body": [
          {
            "type": "TSExportAssignment",
            "start": 70,
            "end": 91,
            "expression": {
              "type": "UnaryExpression",
              "start": 79,
              "end": 90,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 86,
                "end": 90,
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 89,
  "end": 156,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 89,
      "end": 107,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 96,
        "end": 106,
        "value": "indirect",
        "raw": "\"indirect\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 108,
      "end": 121,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 115,
        "end": 120,
        "value": "foo",
        "raw": "\"foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 122,
      "end": 141,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 140,
        "value": "indirect2",
        "raw": "\"indirect2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 142,
      "end": 156,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 155,
        "value": "foo2",
        "raw": "\"foo2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
