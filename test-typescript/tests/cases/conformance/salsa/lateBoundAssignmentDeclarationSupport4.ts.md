__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 261,
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
      "end": 119,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 111,
          "computed": true,
          "object": {
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 110,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 114,
          "end": 118,
          "raw": "\"ok\"",
          "value": "ok"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 120,
          "end": 137,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 120,
            "end": 131,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 122,
              "end": 131,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 144,
          "raw": "\"ok\"",
          "value": "ok"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "inst",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 160,
            "end": 167,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
      "start": 169,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 180,
            "end": 190,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 180,
              "end": 184,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
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
      "start": 192,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "decorators": [],
            "name": "_z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 203,
            "end": 213,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 203,
              "end": 207,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 208,
              "end": 212,
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
      "start": 215,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 215,
          "end": 231,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 215,
            "end": 229,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 215,
              "end": 221,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 222,
              "end": 229,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 261,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 237,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 237,
          "end": 253,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 237,
            "end": 251,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 237,
              "end": 243,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 244,
              "end": 251,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 256,
          "end": 260,
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
                "raw": "\"./lateBoundAssignmentDeclarationSupport4.js\"",
                "value": "./lateBoundAssignmentDeclarationSupport4.js"
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
