__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 39,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 37,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 21,
              "end": 37,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 36,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "decorators": [],
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 36,
                    "value": 42,
                    "raw": "42"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
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
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 86,
      "end": 111,
      "test": {
        "type": "BinaryExpression",
        "start": 89,
        "end": 106,
        "left": {
          "type": "MemberExpression",
          "start": 89,
          "end": 99,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 104,
          "end": 106,
          "value": 42,
          "raw": "42"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 107,
        "end": 111,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
