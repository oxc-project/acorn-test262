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
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 41,
            "end": 45,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 43,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "start": 47,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 105,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 105,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 103,
                    "name": "b2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "b1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
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
                  "start": 125,
                  "end": 126,
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
