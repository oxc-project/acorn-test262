exportImportMultipleFiles_math.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 43,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 43,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 28,
              "end": 41,
              "argument": {
                "type": "BinaryExpression",
                "start": 35,
                "end": 40,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "b",
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
          "name": "add",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
exportImportMultipleFiles_library.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 63,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "math",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 21,
          "end": 62,
          "expression": {
            "type": "Literal",
            "start": 29,
            "end": 61,
            "raw": "\"exportImportMultipleFiles_math\"",
            "value": "exportImportMultipleFiles_math"
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 78,
        "arguments": [
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 76,
            "end": 77,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 64,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "decorators": [],
            "name": "math",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "add",
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
exportImportMultipleFiles_userCode.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "lib",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 59,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 58,
          "raw": "'./exportImportMultipleFiles_library'",
          "value": "./exportImportMultipleFiles_library"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 80,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 79,
        "arguments": [
          {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 73,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 61,
            "end": 69,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "lib",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "math",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 73,
            "decorators": [],
            "name": "add",
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
