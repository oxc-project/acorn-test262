__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
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
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 30,
          "raw": "'./b.json'",
          "value": "./b.json"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
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
            "end": 45,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 43,
              "decorators": [],
              "name": "b1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "start": 47,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "decorators": [],
        "name": "b2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 59,
        "end": 78,
        "expression": {
          "type": "Literal",
          "start": 67,
          "end": 77,
          "raw": "'./b.json'",
          "value": "./b.json"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 80,
      "end": 130,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 87,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 105,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 105,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 103,
                    "decorators": [],
                    "name": "b2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
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
            "start": 111,
            "end": 128,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 116,
                "end": 126,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 120,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 118,
                    "decorators": [],
                    "name": "b1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
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
        "start": 84,
        "end": 85,
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
