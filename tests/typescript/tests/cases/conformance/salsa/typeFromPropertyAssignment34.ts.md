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
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commands",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 22
          },
          "optional": false,
          "computed": false,
          "start": 12,
          "end": 22
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 25,
          "end": 27
        },
        "start": 12,
        "end": 27
      },
      "directive": null,
      "start": 12,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
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
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 1
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commands",
              "optional": false,
              "typeAnnotation": null,
              "start": 2,
              "end": 10
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 10
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 12
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 15,
          "end": 18
        },
        "start": 0,
        "end": 18
      },
      "directive": null,
      "start": 0,
      "end": 19
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
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commands",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 30
            },
            "optional": false,
            "computed": false,
            "start": 20,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 32
        },
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
            "start": 47,
            "end": 50
          },
          "expression": false,
          "start": 35,
          "end": 50
        },
        "start": 20,
        "end": 50
      },
      "directive": null,
      "start": 20,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
