__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "decorators": [],
            "name": "aegis",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "aegis",
          "optional": false,
          "typeAnnotation": null
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "value": 1,
                  "raw": "1"
                }
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 81,
              "end": 89,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "method": false,
              "shorthand": false,
              "computed": false,
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 106,
            "decorators": [],
            "name": "kowloona",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "kowloona",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
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
