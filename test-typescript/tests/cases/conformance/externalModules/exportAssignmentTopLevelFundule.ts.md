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
              "value": "test",
              "raw": "\"test\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 74,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 72,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 56,
              "end": 72,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 60,
                  "end": 71,
                  "id": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "name": "answer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 69,
                    "end": 71,
                    "value": 42,
                    "raw": "42"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 75,
      "end": 88,
      "expression": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 74,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "start": 33,
      "end": 73,
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 53,
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "name": "answer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 53,
          "value": 42,
          "raw": "42"
        }
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 65,
                  "end": 70,
                  "callee": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 68,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
