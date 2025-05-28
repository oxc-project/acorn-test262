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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 30,
          "value": "./b.json",
          "raw": "'./b.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 46,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 41,
            "end": 45,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 43,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "start": 47,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 59,
        "end": 78,
        "expression": {
          "type": "Literal",
          "start": 67,
          "end": 77,
          "value": "./b.json",
          "raw": "'./b.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 80,
      "end": 130,
      "test": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 87,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 106,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 105,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 105,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 103,
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 116,
                "end": 126,
                "left": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 120,
                  "object": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 118,
                    "decorators": [],
                    "name": "b1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
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
                  "start": 125,
                  "end": 126,
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
