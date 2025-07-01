__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 15,
          "end": 16
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 19,
          "end": 20
        },
        "start": 15,
        "end": 20
      },
      "exportKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 45
      },
      "start": 22,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 9,
          "end": 10
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 13,
          "end": 14
        },
        "start": 9,
        "end": 14
      },
      "start": 0,
      "end": 15
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 40
      },
      "start": 16,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "indirect",
        "raw": "\"indirect\"",
        "start": 51,
        "end": 61
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 93
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 101
                },
                "optional": false,
                "computed": false,
                "start": 90,
                "end": 101
              },
              "prefix": true,
              "start": 83,
              "end": 101
            },
            "exportKind": "value",
            "start": 68,
            "end": 102
          }
        ],
        "start": 62,
        "end": 104
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 36,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 105
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "indirect2",
        "raw": "\"indirect2\"",
        "start": 52,
        "end": 63
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 90
              },
              "prefix": true,
              "start": 79,
              "end": 90
            },
            "start": 70,
            "end": 91
          }
        ],
        "start": 64,
        "end": 93
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 37,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 94
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "indirect",
        "raw": "\"indirect\"",
        "start": 96,
        "end": 106
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 89,
      "end": 107
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 115,
        "end": 120
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 108,
      "end": 121
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "indirect2",
        "raw": "\"indirect2\"",
        "start": 129,
        "end": 140
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 122,
      "end": 141
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo2",
        "raw": "\"foo2\"",
        "start": 149,
        "end": 155
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 142,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 89,
  "end": 156
}
```
