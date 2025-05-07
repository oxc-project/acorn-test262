__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 138,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 35,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 38,
            "end": 46,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 58,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 61,
            "end": 74,
            "raw": "\"my-fake-sym\"",
            "value": "my-fake-sym",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 77,
        "end": 97,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 77,
          "end": 90,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 84,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 97,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 120,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 112,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 106,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 111,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 115,
          "end": 119,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 138,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 137,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 130,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 133,
          "end": 137,
          "decorators": [],
          "name": "_sym",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 64,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 63,
                "raw": "\"./lateBoundAssignmentDeclarationSupport1.js\"",
                "value": "./lateBoundAssignmentDeclarationSupport1.js",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 92,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 78,
              "end": 91,
              "raw": "\"my-fake-sym\"",
              "value": "my-fake-sym",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 104,
            "end": 110,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 106,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
