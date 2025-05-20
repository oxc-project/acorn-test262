__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 64,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 24,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 27,
          "end": 64,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 44,
            "end": 64,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 50,
                "end": 62,
                "argument": {
                  "type": "Literal",
                  "start": 57,
                  "end": 61,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "hunch",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 85,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 73,
              "end": 83,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
