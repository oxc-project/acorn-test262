__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "EE",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 53,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 94,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 69,
            "end": 94,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 69,
              "end": 83,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 75,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 83,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "NewExpression",
              "start": 86,
              "end": 94,
              "callee": {
                "type": "Identifier",
                "start": 90,
                "end": 92,
                "decorators": [],
                "name": "EE",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 111,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 111,
        "callee": {
          "type": "MemberExpression",
          "start": 96,
          "end": 105,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 106,
            "end": 110,
            "value": "hi",
            "raw": "'hi'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 171,
        "callee": {
          "type": "MemberExpression",
          "start": 148,
          "end": 165,
          "object": {
            "type": "MemberExpression",
            "start": 148,
            "end": 162,
            "object": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 155,
              "end": 162,
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
            "start": 163,
            "end": 165,
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 166,
            "end": 170,
            "value": "hi",
            "raw": "'hi'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 185,
          "end": 193,
          "object": {
            "type": "Identifier",
            "start": 185,
            "end": 191,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 196,
          "end": 197,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 214,
          "object": {
            "type": "MemberExpression",
            "start": 198,
            "end": 212,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 204,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 205,
              "end": 212,
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
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 217,
          "end": 218,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 227,
      "expression": {
        "type": "MemberExpression",
        "start": 219,
        "end": 227,
        "object": {
          "type": "Identifier",
          "start": 219,
          "end": 225,
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 226,
          "end": 227,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 244,
      "expression": {
        "type": "MemberExpression",
        "start": 228,
        "end": 244,
        "object": {
          "type": "MemberExpression",
          "start": 228,
          "end": 242,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 234,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 242,
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
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "npmlog",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 32,
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 21,
                "end": 31,
                "value": "./npmlog",
                "raw": "'./npmlog'"
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
      "type": "ExpressionStatement",
      "start": 33,
      "end": 41,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 41,
        "object": {
          "type": "Identifier",
          "start": 33,
          "end": 39,
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 51,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 51,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 48,
          "decorators": [],
          "name": "npmlog",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 49,
          "end": 51,
          "decorators": [],
          "name": "on",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
