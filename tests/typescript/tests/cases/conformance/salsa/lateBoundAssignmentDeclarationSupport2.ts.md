__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 159,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 47,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 46,
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
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 75,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 74,
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
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 77,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 77,
          "end": 97,
          "object": {
            "type": "MemberExpression",
            "start": 77,
            "end": 91,
            "object": {
              "type": "Identifier",
              "start": 77,
              "end": 83,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 91,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 100,
          "end": 104,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 134,
      "expression": {
        "type": "AssignmentExpression",
        "start": 106,
        "end": 133,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 106,
          "end": 126,
          "object": {
            "type": "MemberExpression",
            "start": 106,
            "end": 120,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 125,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 133,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 159,
      "expression": {
        "type": "AssignmentExpression",
        "start": 135,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 135,
          "end": 151,
          "object": {
            "type": "MemberExpression",
            "start": 135,
            "end": 149,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 141,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 142,
              "end": 149,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 154,
          "end": 158,
          "decorators": [],
          "name": "_sym",
          "optional": false,
          "typeAnnotation": null
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
  "end": 111,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 64,
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
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 63,
                "value": "./lateBoundAssignmentDeclarationSupport2.js",
                "raw": "\"./lateBoundAssignmentDeclarationSupport2.js\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 93,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 92,
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
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 78,
              "end": 91,
              "value": "my-fake-sym",
              "raw": "\"my-fake-sym\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 111,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 110,
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
            "object": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 106,
              "end": 109,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
