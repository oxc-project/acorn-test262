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
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 19
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 22
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 25
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "elementAccess0",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 60
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "optional": false,
                  "computed": true,
                  "start": 79,
                  "end": 83
                },
                "start": 73,
                "end": 83
              },
              "start": 69,
              "end": 83
            },
            "directive": null,
            "start": 69,
            "end": 84
          }
        ],
        "start": 63,
        "end": 86
      },
      "expression": false,
      "start": 31,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "elementAccess1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 117
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 138
                  },
                  "start": 131,
                  "end": 138
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "optional": false,
                "computed": true,
                "start": 130,
                "end": 142
              },
              "start": 126,
              "end": 142
            },
            "directive": null,
            "start": 126,
            "end": 143
          }
        ],
        "start": 120,
        "end": 145
      },
      "expression": false,
      "start": 88,
      "end": 145
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "elementAccess2",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 176
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 186
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "property": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "start": 191,
                  "end": 198
                },
                "optional": false,
                "computed": true,
                "start": 189,
                "end": 199
              },
              "start": 185,
              "end": 199
            },
            "directive": null,
            "start": 185,
            "end": 200
          }
        ],
        "start": 179,
        "end": 202
      },
      "expression": false,
      "start": 147,
      "end": 202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
