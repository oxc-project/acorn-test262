__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 25,
          "value": "./b",
          "raw": "'./b'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 68,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 63,
            "end": 67,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 69,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 81,
        "end": 100,
        "expression": {
          "type": "Literal",
          "start": 89,
          "end": 99,
          "value": "./b.json",
          "raw": "'./b.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 102,
      "end": 152,
      "test": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 109,
        "end": 152,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 115,
            "end": 128,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 119,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 123,
                  "end": 127,
                  "object": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 125,
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 150,
            "expression": {
              "type": "AssignmentExpression",
              "start": 133,
              "end": 149,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 138,
                "end": 148,
                "left": {
                  "type": "MemberExpression",
                  "start": 138,
                  "end": 142,
                  "object": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 140,
                    "decorators": [],
                    "name": "b1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
