file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "b1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 25,
          "raw": "'./b'",
          "value": "./b"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 36,
            "end": 40,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "b1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 42,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "b2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 54,
        "end": 73,
        "expression": {
          "type": "Literal",
          "start": 62,
          "end": 72,
          "raw": "'./b.json'",
          "value": "./b.json"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 75,
      "end": 125,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 82,
        "end": 125,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 101,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 92,
                "end": 100,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 96,
                  "end": 100,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 98,
                    "decorators": [],
                    "name": "b2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 106,
            "end": 123,
            "expression": {
              "type": "AssignmentExpression",
              "start": 106,
              "end": 122,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 111,
                "end": 121,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 115,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 113,
                    "decorators": [],
                    "name": "b1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
