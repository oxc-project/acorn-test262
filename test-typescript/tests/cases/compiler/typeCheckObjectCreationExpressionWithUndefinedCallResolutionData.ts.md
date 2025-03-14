file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 80,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 80,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 48,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 47,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 35,
                    "decorators": [],
                    "name": "classes",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "start": 53,
              "end": 78,
              "argument": {
                "type": "NewExpression",
                "start": 60,
                "end": 77,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 72,
                    "end": 76,
                    "raw": "null",
                    "value": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 71,
                  "decorators": [],
                  "name": "classes",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "raw": "'./file1'",
          "value": "./file1"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 39,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 38,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 36,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
