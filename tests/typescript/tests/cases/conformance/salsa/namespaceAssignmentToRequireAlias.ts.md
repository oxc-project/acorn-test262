__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 17,
          "end": 19
        },
        "start": 0,
        "end": 19
      },
      "directive": null,
      "start": 0,
      "end": 19
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 20
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "untyped",
                "raw": "'untyped'",
                "start": 18,
                "end": 27
              }
            ],
            "optional": false,
            "start": 10,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "assignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 42
            },
            "optional": false,
            "computed": false,
            "start": 30,
            "end": 42
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 49
          },
          "optional": false,
          "computed": false,
          "start": 30,
          "end": 49
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 52,
          "end": 56
        },
        "start": 30,
        "end": 56
      },
      "directive": null,
      "start": 30,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "noError",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 66
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 57,
        "end": 68
      },
      "directive": null,
      "start": 57,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
