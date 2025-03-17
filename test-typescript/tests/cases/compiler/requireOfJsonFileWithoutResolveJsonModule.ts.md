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
      "start": 42,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 50,
            "end": 54,
            "object": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
      "start": 56,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 68,
        "end": 87,
        "expression": {
          "type": "Literal",
          "start": 76,
          "end": 86,
          "value": "./b.json",
          "raw": "'./b.json'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 98,
      "end": 148,
      "test": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 119,
                  "end": 123,
                  "object": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 121,
                    "name": "b2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 134,
                "end": 144,
                "left": {
                  "type": "MemberExpression",
                  "start": 134,
                  "end": 138,
                  "object": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 136,
                    "name": "b1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
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
                  "start": 143,
                  "end": 144,
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
