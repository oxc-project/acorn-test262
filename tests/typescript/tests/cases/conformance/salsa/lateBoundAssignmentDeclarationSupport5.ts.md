__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 262,
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
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 93,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 146,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 105,
          "object": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 105,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 108,
          "end": 146,
          "properties": [
            {
              "type": "Property",
              "start": 114,
              "end": 126,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "_sym",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 122,
                "end": 126,
                "value": "ok",
                "raw": "\"ok\""
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            },
            {
              "type": "Property",
              "start": 132,
              "end": 144,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 137,
                "decorators": [],
                "name": "_str",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 140,
                "end": 144,
                "value": "ok",
                "raw": "\"ok\""
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 169,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 157,
            "decorators": [],
            "name": "inst",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 161,
            "end": 168,
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 192,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "decorators": [],
            "name": "_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 181,
            "end": 191,
            "object": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "decorators": [],
              "name": "_str",
              "optional": false,
              "typeAnnotation": null
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
      "start": 193,
      "end": 215,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "decorators": [],
            "name": "_z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 204,
            "end": 214,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "decorators": [],
              "name": "_sym",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 216,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 216,
          "end": 232,
          "object": {
            "type": "MemberExpression",
            "start": 216,
            "end": 230,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 222,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 223,
              "end": 230,
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
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 262,
      "expression": {
        "type": "AssignmentExpression",
        "start": 238,
        "end": 261,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 238,
          "end": 254,
          "object": {
            "type": "MemberExpression",
            "start": 238,
            "end": 252,
            "object": {
              "type": "Identifier",
              "start": 238,
              "end": 244,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 245,
              "end": 252,
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
            "start": 253,
            "end": 254,
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
          "start": 257,
          "end": 261,
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
  "end": 142,
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
                "value": "./lateBoundAssignmentDeclarationSupport5.js",
                "raw": "\"./lateBoundAssignmentDeclarationSupport5.js\""
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
      "end": 90,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "inst",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 80,
            "end": 89,
            "callee": {
              "type": "MemberExpression",
              "start": 84,
              "end": 87,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 121,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 101,
            "end": 120,
            "object": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 106,
              "end": 119,
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
      "start": 122,
      "end": 142,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 132,
            "end": 141,
            "object": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 137,
              "end": 140,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
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
