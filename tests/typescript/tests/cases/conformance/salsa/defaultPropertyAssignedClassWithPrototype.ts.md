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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 52,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 52,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 21,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 24,
          "end": 52,
          "left": {
            "type": "MemberExpression",
            "start": 24,
            "end": 30,
            "object": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "FunctionExpression",
            "start": 38,
            "end": 52,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 52,
              "body": []
            },
            "expression": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 54,
          "end": 70,
          "object": {
            "type": "MemberExpression",
            "start": 54,
            "end": 60,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 82,
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 82,
                "end": 87,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 85,
                  "end": 87,
                  "body": []
                },
                "expression": false
              },
              "method": true,
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
      "type": "ExpressionStatement",
      "start": 92,
      "end": 109,
      "expression": {
        "type": "MemberExpression",
        "start": 92,
        "end": 108,
        "object": {
          "type": "NewExpression",
          "start": 92,
          "end": 104,
          "callee": {
            "type": "MemberExpression",
            "start": 96,
            "end": 102,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 105,
          "end": 108,
          "decorators": [],
          "name": "add",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
