__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 25,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 23,
              "end": 25,
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
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 69,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 26,
          "end": 41,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 41,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 44,
          "end": 69,
          "properties": [
            {
              "type": "Property",
              "start": 50,
              "end": 57,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
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
                "start": 51,
                "end": 57,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 54,
                  "end": 57,
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
            },
            {
              "type": "Property",
              "start": 63,
              "end": 67,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 66,
                "end": 67,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 129,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 108,
          "end": 125,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 108,
            "end": 123,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 108,
              "end": 113,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 128,
          "end": 129,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 170,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 152,
        "end": 169,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 152,
          "end": 167,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 157,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 158,
            "end": 167,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 180,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 183,
            "end": 194,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 192,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
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
      "start": 195,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 204,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 195,
          "end": 202,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 195,
            "end": 200,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
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
      "type": "ExpressionStatement",
      "start": 205,
      "end": 212,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 205,
        "end": 212,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 205,
          "end": 210,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 220,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 213,
        "end": 220,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 213,
          "end": 218,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 221,
        "end": 228,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 221,
          "end": 226,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
