__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 31
                  },
                  "init": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 34,
                    "end": 36
                  },
                  "definite": false,
                  "start": 25,
                  "end": 36
                }
              ],
              "declare": false,
              "start": 21,
              "end": 37
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14,
            "end": 37
          }
        ],
        "start": 11,
        "end": 39
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "\"./foo_0\"",
          "start": 21,
          "end": 30
        },
        "start": 13,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 99
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 99
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 104,
          "end": 106
        },
        "start": 89,
        "end": 106
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 107,
        "end": 111
      },
      "alternate": null,
      "start": 86,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
