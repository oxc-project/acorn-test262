__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 10,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 28,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 27,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 22,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "commands",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 25,
          "end": 27,
          "properties": []
        }
      },
      "directive": null
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
  "end": 51,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 18,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 12,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 10,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 1,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2,
              "end": 10,
              "decorators": [],
              "name": "commands",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 15,
          "end": 18,
          "value": 111,
          "raw": "111"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 32,
          "object": {
            "type": "MemberExpression",
            "start": 20,
            "end": 30,
            "object": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 22,
              "end": 30,
              "decorators": [],
              "name": "commands",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 35,
          "end": 50,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 47,
            "end": 50,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
