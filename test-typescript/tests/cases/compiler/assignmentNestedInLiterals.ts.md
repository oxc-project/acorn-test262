__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "target",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 42,
      "expression": {
        "type": "AssignmentExpression",
        "start": 18,
        "end": 41,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 18,
          "end": 24,
          "name": "target",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 27,
          "end": 41,
          "elements": [
            {
              "type": "AssignmentExpression",
              "start": 28,
              "end": 33,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 32,
                "end": 33,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "AssignmentExpression",
              "start": 35,
              "end": 40,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "name": "aegis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 66,
          "name": "aegis",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 69,
          "end": 91,
          "properties": [
            {
              "type": "Property",
              "start": 71,
              "end": 79,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentExpression",
                "start": 74,
                "end": 79,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "value": 1,
                  "raw": "1"
                }
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 81,
              "end": 89,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentExpression",
                "start": 84,
                "end": 89,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 106,
            "name": "kowloona",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 114,
      "end": 150,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 119,
        "end": 127,
        "name": "kowloona",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 131,
        "end": 145,
        "elements": [
          {
            "type": "AssignmentExpression",
            "start": 132,
            "end": 137,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 139,
            "end": 144,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 147,
        "end": 150,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
