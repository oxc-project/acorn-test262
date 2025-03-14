foo.d.ts
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
        "operator": "+",
        "left": {
          "type": "Literal",
          "start": 15,
          "end": 16,
          "raw": "2",
          "value": 2
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "raw": "2",
          "value": 2
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo2.d.ts
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
        "operator": "+",
        "left": {
          "type": "Literal",
          "start": 9,
          "end": 10,
          "raw": "2",
          "value": 2
        },
        "right": {
          "type": "Literal",
          "start": 13,
          "end": 14,
          "raw": "2",
          "value": 2
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
indirection.d.ts
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
      "kind": "module",
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
              "argument": {
                "type": "MemberExpression",
                "start": 90,
                "end": 101,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 93,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 101,
                  "decorators": [],
                  "name": "default",
                  "optional": false
                }
              },
              "operator": "typeof",
              "prefix": true
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 51,
        "end": 61,
        "raw": "\"indirect\"",
        "value": "indirect"
      }
    }
  ],
  "sourceType": "module"
}
```
indirection2.d.ts
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
      "kind": "module",
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
              "argument": {
                "type": "Identifier",
                "start": 86,
                "end": 90,
                "decorators": [],
                "name": "Foo2",
                "optional": false
              },
              "operator": "typeof",
              "prefix": true
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 52,
        "end": 63,
        "raw": "\"indirect2\"",
        "value": "indirect2"
      }
    }
  ],
  "sourceType": "module"
}
```
consumer.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 96,
        "end": 106,
        "raw": "\"indirect\"",
        "value": "indirect"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 108,
      "end": 121,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 115,
        "end": 120,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 122,
      "end": 141,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 140,
        "raw": "\"indirect2\"",
        "value": "indirect2"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 142,
      "end": 156,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 155,
        "raw": "\"foo2\"",
        "value": "foo2"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
