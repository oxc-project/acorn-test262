errorsOnImportedSymbol_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 52,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 22,
            "end": 34,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 39,
            "end": 50,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Sammy",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 53,
      "end": 68,
      "expression": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "decorators": [],
        "name": "Sammy",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
errorsOnImportedSymbol_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Sammy",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 52,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 51,
          "raw": "\"./errorsOnImportedSymbol_0\"",
          "value": "./errorsOnImportedSymbol_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 62,
            "end": 79,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 66,
              "end": 77,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "decorators": [],
                "name": "Sammy",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "decorators": [],
                "name": "Sammy",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 89,
            "end": 102,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 89,
              "end": 100,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 89,
                "end": 94,
                "decorators": [],
                "name": "Sammy",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 95,
                "end": 100,
                "decorators": [],
                "name": "Sammy",
                "optional": false
              }
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
