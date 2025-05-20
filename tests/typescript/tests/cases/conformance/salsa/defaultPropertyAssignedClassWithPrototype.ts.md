__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 13,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 52,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 21,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 24,
          "end": 52,
          "operator": "||",
          "left": {
            "type": "MemberExpression",
            "start": 24,
            "end": 30,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "FunctionExpression",
            "start": 38,
            "end": 52,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 52,
              "body": []
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 54,
          "end": 70,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 54,
            "end": 60,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 73,
          "end": 89,
          "properties": [
            {
              "type": "Property",
              "start": 79,
              "end": 87,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 82,
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 82,
                "end": 87,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 85,
                  "end": 87,
                  "body": []
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
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 92,
        "end": 108,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 92,
          "end": 104,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 96,
            "end": 102,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 105,
          "end": 108,
          "decorators": [],
          "name": "add",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
