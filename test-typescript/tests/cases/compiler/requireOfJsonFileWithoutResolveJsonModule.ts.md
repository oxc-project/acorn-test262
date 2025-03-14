__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
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
      "start": 42,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 50,
            "end": 54,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "decorators": [],
              "name": "b1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
      "start": 56,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "b2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 68,
        "end": 87,
        "expression": {
          "type": "Literal",
          "start": 76,
          "end": 86,
          "raw": "'./b.json'",
          "value": "./b.json"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 98,
      "end": 148,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 105,
        "end": 148,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 111,
            "end": 124,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 123,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 119,
                  "end": 123,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 121,
                    "decorators": [],
                    "name": "b2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
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
            "start": 129,
            "end": 146,
            "expression": {
              "type": "AssignmentExpression",
              "start": 129,
              "end": 145,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 134,
                "end": 144,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 134,
                  "end": 138,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 136,
                    "decorators": [],
                    "name": "b1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
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
        "start": 102,
        "end": 103,
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
