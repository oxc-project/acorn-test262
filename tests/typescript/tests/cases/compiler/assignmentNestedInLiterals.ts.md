__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 24
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 32,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "start": 35,
              "end": 40
            }
          ],
          "start": 27,
          "end": 41
        },
        "start": 18,
        "end": 41
      },
      "directive": null,
      "start": 18,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aegis",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 53
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 56
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 59
        }
      ],
      "declare": false,
      "start": 44,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aegis",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 66
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 72
              },
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 78,
                  "end": 79
                },
                "start": 74,
                "end": 79
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 71,
              "end": 79
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "start": 84,
                "end": 89
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 81,
              "end": 89
            }
          ],
          "start": 69,
          "end": 91
        },
        "start": 61,
        "end": 91
      },
      "directive": null,
      "start": 61,
      "end": 92
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kowloona",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 106
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 106
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 109
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 112
        }
      ],
      "declare": false,
      "start": 94,
      "end": 113
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "kowloona",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 127
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 136,
              "end": 137
            },
            "start": 132,
            "end": 137
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "start": 139,
            "end": 144
          }
        ],
        "start": 131,
        "end": 145
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 147,
        "end": 150
      },
      "start": 114,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
