__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 34,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 34,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 18,
            "end": 32,
            "argument": {
              "type": "Literal",
              "start": 25,
              "end": 31,
              "raw": "\"test\"",
              "value": "test"
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
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 74,
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 74,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 72,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 56,
              "end": 72,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 60,
                  "end": 71,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "decorators": [],
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 69,
                    "end": 71,
                    "raw": "42",
                    "value": 42
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 75,
      "end": 88,
      "expression": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "foo",
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
  "end": 73,
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 73,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 54,
        "end": 73,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 57,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 65,
                  "end": 70,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 68,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 53,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 53,
          "raw": "42",
          "value": 42
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
