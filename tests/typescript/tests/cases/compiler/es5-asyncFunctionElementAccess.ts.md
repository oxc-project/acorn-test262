__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "var",
      "declarations": [
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
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
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
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 60,
        "decorators": [],
        "name": "elementAccess0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 69,
            "end": 84,
            "expression": {
              "type": "AssignmentExpression",
              "start": 69,
              "end": 83,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AwaitExpression",
                "start": 73,
                "end": 83,
                "argument": {
                  "type": "MemberExpression",
                  "start": 79,
                  "end": 83,
                  "object": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 117,
        "decorators": [],
        "name": "elementAccess1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 145,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 143,
            "expression": {
              "type": "AssignmentExpression",
              "start": 126,
              "end": 142,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 130,
                "end": 142,
                "object": {
                  "type": "AwaitExpression",
                  "start": 131,
                  "end": 138,
                  "argument": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 176,
        "decorators": [],
        "name": "elementAccess2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 200,
            "expression": {
              "type": "AssignmentExpression",
              "start": 185,
              "end": 199,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 189,
                "end": 199,
                "object": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "AwaitExpression",
                  "start": 191,
                  "end": 198,
                  "argument": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
