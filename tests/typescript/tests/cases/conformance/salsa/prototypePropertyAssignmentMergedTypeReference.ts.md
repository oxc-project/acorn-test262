__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 156,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 64,
            "end": 93,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 93,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 81,
                  "end": 91,
                  "argument": {
                    "type": "Literal",
                    "start": 88,
                    "end": 90,
                    "raw": "12",
                    "value": 12
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 115,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 109,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 96,
            "end": 107,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 107,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 112,
          "end": 115,
          "raw": "\"a\"",
          "value": "a"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
