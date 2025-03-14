__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
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
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 28,
          "raw": "'b.json'",
          "value": "b.json"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 39,
            "end": 43,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "decorators": [],
              "name": "b1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
      "start": 45,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "b2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 57,
        "end": 74,
        "expression": {
          "type": "Literal",
          "start": 65,
          "end": 73,
          "raw": "'c.json'",
          "value": "c.json"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 76,
      "end": 126,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 83,
        "end": 126,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 93,
                "end": 101,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 97,
                  "end": 101,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 99,
                    "decorators": [],
                    "name": "b2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
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
            "start": 107,
            "end": 124,
            "expression": {
              "type": "AssignmentExpression",
              "start": 107,
              "end": 123,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 112,
                "end": 122,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 112,
                  "end": 116,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 114,
                    "decorators": [],
                    "name": "b1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
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
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
