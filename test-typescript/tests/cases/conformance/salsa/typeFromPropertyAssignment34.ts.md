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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 28,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 27,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 22,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "commands",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 25,
          "end": 27,
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
  "end": 51,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 18,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 12,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 10,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 1,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2,
              "end": 10,
              "decorators": [],
              "name": "commands",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 15,
          "end": 18,
          "raw": "111",
          "value": 111
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 51,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 32,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 20,
            "end": 30,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 22,
              "end": 30,
              "decorators": [],
              "name": "commands",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 35,
          "end": 50,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 47,
            "end": 50,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
