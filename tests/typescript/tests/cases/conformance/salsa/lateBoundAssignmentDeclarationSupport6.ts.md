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
            "start": 31,
            "end": 35
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 44
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 38,
            "end": 46
          },
          "definite": false,
          "start": 31,
          "end": 46
        }
      ],
      "declare": false,
      "start": 25,
      "end": 47
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
            "start": 54,
            "end": 58
          },
          "init": {
            "type": "Literal",
            "value": "my-fake-sym",
            "raw": "\"my-fake-sym\"",
            "start": 61,
            "end": 74
          },
          "definite": false,
          "start": 54,
          "end": 74
        }
      ],
      "declare": false,
      "start": 48,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
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
        "start": 90,
        "end": 93
      },
      "expression": false,
      "start": 77,
      "end": 93
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
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 105
            },
            "optional": false,
            "computed": false,
            "start": 94,
            "end": 105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defsAClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 116
          },
          "optional": false,
          "computed": false,
          "start": 94,
          "end": 116
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 119,
          "end": 123
        },
        "start": 94,
        "end": 123
      },
      "directive": null,
      "start": 94,
      "end": 124
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 146
          },
          "optional": false,
          "computed": false,
          "start": 125,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 158
            },
            "optional": false,
            "computed": false,
            "start": 147,
            "end": 158
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_str",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 164
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 172
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 174,
                  "end": 178
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 167,
                "end": 178
              }
            ],
            "start": 166,
            "end": 179
          }
        ],
        "optional": false,
        "start": 125,
        "end": 180
      },
      "directive": null,
      "start": 125,
      "end": 181
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 182,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 215
            },
            "optional": false,
            "computed": false,
            "start": 204,
            "end": 215
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 221
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 229
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 231,
                  "end": 235
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 224,
                "end": 235
              }
            ],
            "start": 223,
            "end": 236
          }
        ],
        "optional": false,
        "start": 182,
        "end": 237
      },
      "directive": null,
      "start": 182,
      "end": 238
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
            "name": "inst",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "typeArguments": null,
            "arguments": [],
            "start": 253,
            "end": 260
          },
          "definite": false,
          "start": 245,
          "end": 260
        }
      ],
      "declare": false,
      "start": 239,
      "end": 261
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
            "name": "_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 270
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 277
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_str",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 282
            },
            "optional": false,
            "computed": true,
            "start": 273,
            "end": 283
          },
          "definite": false,
          "start": 268,
          "end": 283
        }
      ],
      "declare": false,
      "start": 262,
      "end": 284
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
            "name": "_z",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 300
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "_sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 305
            },
            "optional": false,
            "computed": true,
            "start": 296,
            "end": 306
          },
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": false,
      "start": 285,
      "end": 307
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
              "start": 308,
              "end": 314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 322
            },
            "optional": false,
            "computed": false,
            "start": 308,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          "optional": false,
          "computed": false,
          "start": 308,
          "end": 324
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 328
        },
        "start": 308,
        "end": 328
      },
      "directive": null,
      "start": 308,
      "end": 329
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
              "start": 330,
              "end": 336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 344
            },
            "optional": false,
            "computed": false,
            "start": 330,
            "end": 344
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 346
          },
          "optional": false,
          "computed": false,
          "start": 330,
          "end": 346
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "_sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 353
        },
        "start": 330,
        "end": 353
      },
      "directive": null,
      "start": 330,
      "end": 354
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 25,
  "end": 354
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
                "value": "./lateBoundAssignmentDeclarationSupport6.js",
                "raw": "\"./lateBoundAssignmentDeclarationSupport6.js\"",
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
            "name": "inst",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 76
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "optional": false,
              "computed": false,
              "start": 84,
              "end": 87
            },
            "typeArguments": null,
            "arguments": [],
            "start": 80,
            "end": 89
          },
          "definite": false,
          "start": 72,
          "end": 89
        }
      ],
      "declare": false,
      "start": 66,
      "end": 90
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
            "start": 97,
            "end": 98
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "property": {
              "type": "Literal",
              "value": "my-fake-sym",
              "raw": "\"my-fake-sym\"",
              "start": 106,
              "end": 119
            },
            "optional": false,
            "computed": true,
            "start": 101,
            "end": 120
          },
          "definite": false,
          "start": 97,
          "end": 120
        }
      ],
      "declare": false,
      "start": 91,
      "end": 121
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
            "start": 128,
            "end": 129
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "inst",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "optional": false,
              "computed": false,
              "start": 137,
              "end": 140
            },
            "optional": false,
            "computed": true,
            "start": 132,
            "end": 141
          },
          "definite": false,
          "start": 128,
          "end": 141
        }
      ],
      "declare": false,
      "start": 122,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 142
}
```
