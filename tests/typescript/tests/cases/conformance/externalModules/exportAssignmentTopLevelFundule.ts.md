__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 25,
              "end": 31
            },
            "start": 18,
            "end": 32
          }
        ],
        "start": 15,
        "end": 34
      },
      "expression": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
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
                    "start": 63,
                    "end": 69
                  },
                  "init": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 72,
                    "end": 74
                  },
                  "definite": false,
                  "start": 63,
                  "end": 74
                }
              ],
              "declare": false,
              "start": 59,
              "end": 75
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 52,
            "end": 75
          }
        ],
        "start": 49,
        "end": 77
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 77
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
      },
      "start": 78,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 92
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
            "start": 36,
            "end": 39
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 36,
          "end": 46
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 51,
          "end": 53
        },
        "start": 36,
        "end": 53
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 68
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 65,
                  "end": 70
                },
                "definite": false,
                "start": 61,
                "end": 70
              }
            ],
            "declare": false,
            "start": 57,
            "end": 71
          }
        ],
        "start": 54,
        "end": 73
      },
      "alternate": null,
      "start": 33,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
