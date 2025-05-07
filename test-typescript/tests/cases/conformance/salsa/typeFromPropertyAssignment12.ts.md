__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 40,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 40,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 147,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 29,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "Pos",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 32,
          "end": 54,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 52,
            "end": 54,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "line",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "ch",
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
      "type": "ExpressionStatement",
      "start": 78,
      "end": 103,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 78,
        "end": 102,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 78,
          "end": 97,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 78,
            "end": 87,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 97,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 98,
          "end": 102,
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 111,
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 114,
            "end": 135,
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 131,
                "end": 134,
                "raw": "'x'",
                "value": "x",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 118,
              "end": 127,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 123,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 124,
                "end": 127,
                "decorators": [],
                "name": "Pos",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 137,
        "end": 145,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "pos",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
