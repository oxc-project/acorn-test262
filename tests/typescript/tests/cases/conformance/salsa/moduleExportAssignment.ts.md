__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EE",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
            },
            "value": {
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 50,
                "end": 53
              },
              "expression": false,
              "start": 46,
              "end": 53
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 53
          }
        ],
        "start": 9,
        "end": 55
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 55
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
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "init": {
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
                "start": 69,
                "end": 75
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 83
              },
              "optional": false,
              "computed": false,
              "start": 69,
              "end": 83
            },
            "right": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "EE",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 92
              },
              "typeArguments": null,
              "arguments": [],
              "start": 86,
              "end": 94
            },
            "start": 69,
            "end": 94
          },
          "definite": false,
          "start": 60,
          "end": 94
        }
      ],
      "declare": false,
      "start": 56,
      "end": 94
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
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 105
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 106,
            "end": 110
          }
        ],
        "optional": false,
        "start": 96,
        "end": 111
      },
      "directive": null,
      "start": 96,
      "end": 111
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 154
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 162
            },
            "optional": false,
            "computed": false,
            "start": 148,
            "end": 162
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 165
          },
          "optional": false,
          "computed": false,
          "start": 148,
          "end": 165
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 166,
            "end": 170
          }
        ],
        "optional": false,
        "start": 148,
        "end": 171
      },
      "directive": null,
      "start": 148,
      "end": 171
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
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 193
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 193
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 196,
          "end": 197
        },
        "start": 185,
        "end": 197
      },
      "directive": null,
      "start": 185,
      "end": 197
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
              "start": 198,
              "end": 204
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 212
            },
            "optional": false,
            "computed": false,
            "start": 198,
            "end": 212
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "optional": false,
          "computed": false,
          "start": 198,
          "end": 214
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 217,
          "end": 218
        },
        "start": 198,
        "end": 218
      },
      "directive": null,
      "start": 198,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 225
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 227
        },
        "optional": false,
        "computed": false,
        "start": 219,
        "end": 227
      },
      "directive": null,
      "start": 219,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 242
          },
          "optional": false,
          "computed": false,
          "start": 228,
          "end": 242
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 244
        },
        "optional": false,
        "computed": false,
        "start": 228,
        "end": 244
      },
      "directive": null,
      "start": 228,
      "end": 244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 245
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
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 20
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./npmlog",
                "raw": "'./npmlog'",
                "start": 21,
                "end": 31
              }
            ],
            "optional": false,
            "start": 13,
            "end": 32
          },
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 39
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 41
        },
        "optional": false,
        "computed": false,
        "start": 33,
        "end": 41
      },
      "directive": null,
      "start": 33,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 48
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "on",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 51
        },
        "optional": false,
        "computed": false,
        "start": 42,
        "end": 51
      },
      "directive": null,
      "start": 42,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
