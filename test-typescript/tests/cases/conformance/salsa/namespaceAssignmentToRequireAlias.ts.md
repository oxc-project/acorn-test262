__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 17,
          "end": 19,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 28,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 27,
                "raw": "'untyped'",
                "value": "untyped"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 30,
        "end": 56,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 30,
          "end": 49,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 30,
            "end": 42,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 32,
              "end": 42,
              "decorators": [],
              "name": "assignment",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 52,
          "end": 56,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 68,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 68,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 57,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "noError",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
