foo1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 36,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 19,
          "end": 36,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 22,
              "end": 34,
              "argument": {
                "type": "Literal",
                "start": 29,
                "end": 33,
                "raw": "true",
                "value": true
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
          "end": 17,
          "decorators": [],
          "name": "x",
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
foo2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo1'",
          "value": "./foo1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 41,
            "end": 47,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 49,
      "end": 60,
      "expression": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo2'",
          "value": "./foo2"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 41,
            "end": 47,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
