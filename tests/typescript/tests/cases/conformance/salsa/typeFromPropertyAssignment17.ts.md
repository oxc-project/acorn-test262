__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 12,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "start": 38,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 49
        }
      ],
      "declare": true,
      "start": 26,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 43
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 51
          },
          "optional": false,
          "computed": false,
          "start": 37,
          "end": 51
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "minimatch",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 63
        },
        "start": 37,
        "end": 63
      },
      "directive": null,
      "start": 37,
      "end": 63
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
            "name": "minimatch",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 64,
          "end": 75
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 79
        },
        "start": 64,
        "end": 79
      },
      "directive": null,
      "start": 64,
      "end": 79
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
            "name": "minimatch",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 89
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 80,
          "end": 96
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "filter",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 105
        },
        "start": 80,
        "end": 105
      },
      "directive": null,
      "start": 80,
      "end": 105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "minimatch",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 146
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 137,
              "end": 148
            },
            "start": 130,
            "end": 148
          }
        ],
        "start": 124,
        "end": 150
      },
      "expression": false,
      "start": 106,
      "end": 150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "minimatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 169
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
        "start": 172,
        "end": 175
      },
      "expression": false,
      "start": 151,
      "end": 175
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaults",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 176,
          "end": 186
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 202
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 220
                },
                "start": 210,
                "end": 220
              }
            ],
            "start": 204,
            "end": 222
          },
          "expression": false,
          "start": 189,
          "end": 222
        },
        "start": 176,
        "end": 222
      },
      "directive": null,
      "start": 176,
      "end": 222
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 234
            },
            "optional": false,
            "computed": false,
            "start": 223,
            "end": 234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 236
          },
          "optional": false,
          "computed": false,
          "start": 223,
          "end": 236
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 251,
            "end": 254
          },
          "expression": false,
          "start": 239,
          "end": 254
        },
        "start": 223,
        "end": 254
      },
      "directive": null,
      "start": 223,
      "end": 254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 265
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
        "start": 268,
        "end": 271
      },
      "expression": false,
      "start": 255,
      "end": 271
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 272
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mini",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 45
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./minimatch",
                "raw": "'./minimatch'",
                "start": 56,
                "end": 69
              }
            ],
            "optional": false,
            "start": 48,
            "end": 70
          },
          "definite": false,
          "start": 41,
          "end": 70
        }
      ],
      "declare": false,
      "start": 37,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mini",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 75
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "optional": false,
            "computed": false,
            "start": 71,
            "end": 77
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaults",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 71,
          "end": 86
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 71,
        "end": 88
      },
      "directive": null,
      "start": 71,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mini",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 105
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "optional": false,
              "computed": false,
              "start": 101,
              "end": 107
            },
            "typeArguments": null,
            "arguments": [],
            "start": 97,
            "end": 109
          },
          "definite": false,
          "start": 93,
          "end": 109
        }
      ],
      "declare": false,
      "start": 89,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
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
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 110,
        "end": 115
      },
      "directive": null,
      "start": 110,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mini",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 127
          },
          "optional": false,
          "computed": false,
          "start": 116,
          "end": 127
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 116,
        "end": 129
      },
      "directive": null,
      "start": 116,
      "end": 129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 129
}
```
