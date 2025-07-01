__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 13,
            "end": 21
          },
          "definite": false,
          "start": 6,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 33
          },
          "init": {
            "type": "Literal",
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\"",
            "start": 36,
            "end": 49
          },
          "definite": false,
          "start": 29,
          "end": 49
        }
      ],
      "declare": false,
      "start": 23,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 65,
        "end": 68
      },
      "expression": false,
      "start": 52,
      "end": 68
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
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 75
          },
          "optional": false,
          "computed": true,
          "start": 69,
          "end": 76
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 79,
          "end": 83
        },
        "start": 69,
        "end": 83
      },
      "directive": null,
      "start": 69,
      "end": 84
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
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 91
          },
          "optional": false,
          "computed": true,
          "start": 85,
          "end": 92
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "\"ok\"",
          "start": 95,
          "end": 99
        },
        "start": 85,
        "end": 99
      },
      "directive": null,
      "start": 85,
      "end": 100
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "optional": false,
            "computed": false,
            "start": 101,
            "end": 115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 117
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "start": 101,
        "end": 121
      },
      "directive": null,
      "start": 101,
      "end": 122
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 129
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 137
            },
            "optional": false,
            "computed": false,
            "start": 123,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 123,
          "end": 139
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "_sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 146
        },
        "start": 123,
        "end": 146
      },
      "directive": null,
      "start": 123,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 147
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./lateBoundAssignmentDeclarationSupport7.js",
                "raw": "\"./lateBoundAssignmentDeclarationSupport7.js\"",
                "start": 18,
                "end": 63
              }
            ],
            "optional": false,
            "start": 10,
            "end": 64
          },
          "definite": false,
          "start": 6,
          "end": 64
        }
      ],
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 79
            },
            "property": {
              "type": "Literal",
              "value": "my-fake-sym",
              "raw": "\"my-fake-sym\"",
              "start": 80,
              "end": 93
            },
            "optional": false,
            "computed": true,
            "start": 76,
            "end": 94
          },
          "definite": false,
          "start": 72,
          "end": 94
        }
      ],
      "declare": false,
      "start": 66,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "optional": false,
              "computed": false,
              "start": 106,
              "end": 109
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "optional": false,
              "computed": false,
              "start": 110,
              "end": 113
            },
            "optional": false,
            "computed": true,
            "start": 106,
            "end": 114
          },
          "definite": false,
          "start": 102,
          "end": 114
        }
      ],
      "declare": false,
      "start": 96,
      "end": 115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
