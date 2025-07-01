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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 11,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 15,
          "end": 21
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "optional": false,
            "computed": false,
            "start": 24,
            "end": 30
          },
          "operator": "||",
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 50,
              "end": 52
            },
            "expression": false,
            "start": 38,
            "end": 52
          },
          "start": 24,
          "end": 52
        },
        "start": 15,
        "end": 52
      },
      "directive": null,
      "start": 15,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "optional": false,
            "computed": false,
            "start": 54,
            "end": 60
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 54,
          "end": 70
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
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 82
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 85,
                  "end": 87
                },
                "expression": false,
                "start": 82,
                "end": 87
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 79,
              "end": 87
            }
          ],
          "start": 73,
          "end": 89
        },
        "start": 54,
        "end": 89
      },
      "directive": null,
      "start": 54,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 100
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 102
          },
          "typeArguments": null,
          "arguments": [],
          "start": 92,
          "end": 104
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "add",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 108
        },
        "optional": false,
        "computed": false,
        "start": 92,
        "end": 108
      },
      "directive": null,
      "start": 92,
      "end": 109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
