__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
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
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 43,
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
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "decorators": [],
            "name": "b1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 45,
      "end": 77,
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
        "end": 76,
        "expression": {
          "type": "Literal",
          "start": 65,
          "end": 75,
          "raw": "'./b.json'",
          "value": "./b.json"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 78,
      "end": 100,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 85,
        "end": 100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 98,
            "expression": {
              "type": "AssignmentExpression",
              "start": 91,
              "end": 97,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 95,
                "end": 97,
                "decorators": [],
                "name": "b2",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
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
