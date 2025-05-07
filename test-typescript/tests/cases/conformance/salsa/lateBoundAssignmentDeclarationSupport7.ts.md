__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 21,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
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
      "start": 23,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 36,
            "end": 49,
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
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 69,
        "end": 83,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 69,
          "end": 76,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 83,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 85,
        "end": 99,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 85,
          "end": 92,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 95,
          "end": 99,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 101,
        "end": 121,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 101,
          "end": 117,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 101,
            "end": 115,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 101,
              "end": 107,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 108,
              "end": 115,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 123,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 123,
          "end": 139,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 123,
            "end": 137,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 123,
              "end": 129,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 130,
              "end": 137,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 142,
          "end": 146,
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
  "end": 115,
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
                "raw": "\"./lateBoundAssignmentDeclarationSupport7.js\"",
                "value": "./lateBoundAssignmentDeclarationSupport7.js",
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
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 94,
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
            "end": 94,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 76,
              "end": 79,
              "computed": false,
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
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 93,
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
      "start": 96,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 106,
            "end": 114,
            "computed": true,
            "object": {
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
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 110,
              "end": 113,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
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
