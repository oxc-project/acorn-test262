__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 13,
            "end": 31,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 28,
              "end": 31,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 32,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 56,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 35,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 38,
          "end": 56,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 53,
            "end": 56,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 39,
            "arguments": [],
            "callee": {
              "type": "FunctionExpression",
              "start": 8,
              "end": 37,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 37,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 26,
                    "end": 35,
                    "argument": {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "raw": "1",
                      "value": 1
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
  "sourceType": "module",
  "hashbang": null
}
```
