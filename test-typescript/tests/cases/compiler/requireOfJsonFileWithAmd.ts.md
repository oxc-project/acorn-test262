__ESTREE_TEST__:PASS:
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
      "start": 28,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 36,
            "end": 40,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
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
      "start": 42,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 54,
        "end": 73,
        "expression": {
          "type": "Literal",
          "start": 62,
          "end": 72,
          "value": "./b.json",
          "raw": "'./b.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 75,
      "end": 125,
      "test": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 96,
                  "end": 100,
                  "object": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 98,
                    "name": "b2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 111,
                "end": 121,
                "left": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 115,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 113,
                    "name": "b1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
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
                  "start": 120,
                  "end": 121,
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
