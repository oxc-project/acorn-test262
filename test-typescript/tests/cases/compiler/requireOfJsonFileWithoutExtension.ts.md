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
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 63,
            "end": 67,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 119,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 123,
                  "end": 127,
                  "object": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 125,
                    "name": "b2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "b1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
