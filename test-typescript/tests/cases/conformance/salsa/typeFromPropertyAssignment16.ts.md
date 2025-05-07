__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 45,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 45,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 28,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 28,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 31,
          "end": 45,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 43,
            "end": 45,
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
      "start": 46,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 46,
          "end": 67,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 46,
            "end": 57,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 52,
              "end": 57,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 70,
          "end": 95,
          "properties": [
            {
              "type": "Property",
              "start": 76,
              "end": 80,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
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
                "start": 79,
                "end": 80,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 86,
              "end": 93,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
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
                "start": 87,
                "end": 93,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 90,
                  "end": 93,
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
      "type": "VariableDeclaration",
      "start": 124,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 133,
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
      "start": 134,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 134,
        "end": 141,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 134,
          "end": 139,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 151,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 149,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 147,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
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
      "start": 152,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 163,
            "end": 180,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 167,
              "end": 178,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 167,
                "end": 172,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 173,
                "end": 178,
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
      "start": 181,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 181,
        "end": 187,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 181,
          "end": 185,
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 188,
        "end": 196,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 188,
          "end": 194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 192,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
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
  "sourceType": "script",
  "hashbang": null
}
```
