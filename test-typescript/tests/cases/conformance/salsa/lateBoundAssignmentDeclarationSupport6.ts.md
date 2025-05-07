__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 354,
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
      "end": 124,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 123,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 116,
          "computed": false,
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
            "end": 116,
            "decorators": [],
            "name": "defsAClass",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 119,
          "end": 123,
          "raw": "true",
          "value": true,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 125,
        "end": 180,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 147,
            "end": 158,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 149,
              "end": 158,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Identifier",
            "start": 160,
            "end": 164,
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 166,
            "end": 179,
            "properties": [
              {
                "type": "Property",
                "start": 167,
                "end": 178,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 172,
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
                  "start": 174,
                  "end": 178,
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
          "start": 125,
          "end": 146,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 125,
            "end": 131,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 146,
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
      "start": 182,
      "end": 238,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 237,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 204,
            "end": 215,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 215,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Identifier",
            "start": 217,
            "end": 221,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 223,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 224,
                "end": 235,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 229,
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
                  "start": 231,
                  "end": 235,
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
          "start": 182,
          "end": 203,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 203,
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
      "type": "VariableDeclaration",
      "start": 239,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "inst",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 253,
            "end": 260,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
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
      "start": 262,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "_y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 273,
            "end": 283,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 278,
              "end": 282,
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
      "start": 285,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "decorators": [],
            "name": "_z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 296,
            "end": 306,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 296,
              "end": 300,
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 301,
              "end": 305,
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
      "start": 308,
      "end": 329,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 328,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 308,
          "end": 324,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 308,
            "end": 322,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 308,
              "end": 314,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 315,
              "end": 322,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 354,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 330,
          "end": 346,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 330,
            "end": 344,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 330,
              "end": 336,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 337,
              "end": 344,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 349,
          "end": 353,
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
                "raw": "\"./lateBoundAssignmentDeclarationSupport6.js\"",
                "value": "./lateBoundAssignmentDeclarationSupport6.js",
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
