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
            "value": "my-fake-sym"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 93,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 93,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
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
      "start": 94,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 105,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 105,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "_sym",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 122,
                "end": 126,
                "raw": "\"ok\"",
                "value": "ok"
              }
            },
            {
              "type": "Property",
              "start": 132,
              "end": 144,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 137,
                "decorators": [],
                "name": "_str",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 140,
                "end": 144,
                "raw": "\"ok\"",
                "value": "ok"
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 168,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 191,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "decorators": [],
              "name": "_str",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 214,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "decorators": [],
              "name": "_sym",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 216,
          "end": 232,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 216,
            "end": 230,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 222,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 223,
              "end": 230,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 262,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 238,
        "end": 261,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 238,
          "end": 254,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 238,
            "end": 252,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 238,
              "end": 244,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 245,
              "end": 252,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
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
  "end": 142,
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
                "raw": "\"./lateBoundAssignmentDeclarationSupport5.js\"",
                "value": "./lateBoundAssignmentDeclarationSupport5.js"
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
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 89,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 84,
              "end": 87,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 120,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 106,
              "end": 119,
              "raw": "\"my-fake-sym\"",
              "value": "my-fake-sym"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 141,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 137,
              "end": 140,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
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
