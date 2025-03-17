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
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 28,
          "value": "b.json",
          "raw": "'b.json'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 39,
            "end": 43,
            "object": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
      "start": 45,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 57,
        "end": 74,
        "expression": {
          "type": "Literal",
          "start": 65,
          "end": 73,
          "value": "c.json",
          "raw": "'c.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 76,
      "end": 126,
      "test": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 97,
                  "end": 101,
                  "object": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 99,
                    "name": "b2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 112,
                "end": 122,
                "left": {
                  "type": "MemberExpression",
                  "start": 112,
                  "end": 116,
                  "object": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 114,
                    "name": "b1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
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
                  "start": 121,
                  "end": 122,
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
