__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 252,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 45,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 93,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 252,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 200,
        "end": 252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 206,
            "end": 216,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 206,
              "end": 215,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 206,
                "end": 211,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 211,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 214,
                "end": 215,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 230,
            "end": 244,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 230,
              "end": 243,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 230,
                "end": 235,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 235,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 243,
                "raw": "false",
                "value": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
