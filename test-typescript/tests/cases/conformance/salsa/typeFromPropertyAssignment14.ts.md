__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 16,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
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
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
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
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 28,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 28,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 5,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 14,
          "end": 28,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 26,
            "end": 28,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 50,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 29,
            "end": 40,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 50,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 53,
          "end": 78,
          "properties": [
            {
              "type": "Property",
              "start": 59,
              "end": 63,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "Property",
              "start": 69,
              "end": 76,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 70,
                "end": 76,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 76,
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
  "start": 27,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 37,
        "end": 44,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 37,
          "end": 42,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 54,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 54,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 45,
          "end": 52,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 50,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 66,
            "end": 83,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 70,
              "end": 81,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 70,
                "end": 75,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 81,
                "decorators": [],
                "name": "Inner",
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
      "start": 84,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 84,
        "end": 90,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 99,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 99,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 91,
          "end": 97,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 95,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "m",
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
