__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 225,
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
      "end": 138,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 137,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 99,
            "end": 113,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 105,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 121,
            "end": 136,
            "properties": [
              {
                "type": "Property",
                "start": 123,
                "end": 134,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 134,
                  "raw": "\"ok\"",
                  "value": "ok",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 98,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 83,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 98,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 139,
      "end": 200,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 199,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 161,
            "end": 175,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 161,
              "end": 167,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Identifier",
            "start": 177,
            "end": 181,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 183,
            "end": 198,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 196,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 190,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 192,
                  "end": 196,
                  "raw": "\"ok\"",
                  "value": "ok",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 139,
          "end": 160,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 160,
            "decorators": [],
            "name": "defineProperty",
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
      "start": 201,
      "end": 225,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 201,
        "end": 224,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 201,
          "end": 217,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 201,
            "end": 215,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 201,
              "end": 207,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 208,
              "end": 215,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 220,
          "end": 224,
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
                "raw": "\"./lateBoundAssignmentDeclarationSupport3.js\"",
                "value": "./lateBoundAssignmentDeclarationSupport3.js",
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
