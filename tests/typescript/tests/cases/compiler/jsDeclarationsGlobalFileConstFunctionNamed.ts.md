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
            "name": "SomeConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 21
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 44,
                        "end": 48
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 49,
                        "end": 50
                      },
                      "optional": false,
                      "computed": false,
                      "start": 44,
                      "end": 50
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 53,
                      "end": 54
                    },
                    "start": 44,
                    "end": 54
                  },
                  "directive": null,
                  "start": 44,
                  "end": 55
                }
              ],
              "start": 41,
              "end": 57
            },
            "expression": false,
            "start": 24,
            "end": 57
          },
          "definite": false,
          "start": 6,
          "end": 57
        }
      ],
      "declare": false,
      "start": 0,
      "end": 58
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
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 82
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
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
              "start": 102,
              "end": 105
            },
            "expression": false,
            "start": 85,
            "end": 105
          },
          "definite": false,
          "start": 66,
          "end": 105
        }
      ],
      "declare": false,
      "start": 60,
      "end": 106
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
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 136
          },
          "optional": false,
          "computed": false,
          "start": 107,
          "end": 136
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 139,
          "end": 144
        },
        "start": 107,
        "end": 144
      },
      "directive": null,
      "start": 107,
      "end": 145
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
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 169
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 186
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 192,
                        "end": 196
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 198
                      },
                      "optional": false,
                      "computed": false,
                      "start": 192,
                      "end": 198
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 201,
                      "end": 202
                    },
                    "start": 192,
                    "end": 202
                  },
                  "directive": null,
                  "start": 192,
                  "end": 203
                }
              ],
              "start": 189,
              "end": 205
            },
            "expression": false,
            "start": 172,
            "end": 205
          },
          "definite": false,
          "start": 153,
          "end": 205
        }
      ],
      "declare": false,
      "start": 147,
      "end": 206
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
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 236
          },
          "optional": false,
          "computed": false,
          "start": 207,
          "end": 236
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 239,
          "end": 244
        },
        "start": 207,
        "end": 244
      },
      "directive": null,
      "start": 207,
      "end": 245
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
            "name": "SelfReference",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 266
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 283
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
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 298,
                        "end": 302
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 319
                      },
                      "start": 298,
                      "end": 319
                    },
                    "prefix": true,
                    "start": 296,
                    "end": 320
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 338
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 329,
                      "end": 340
                    },
                    "start": 322,
                    "end": 341
                  },
                  "alternate": null,
                  "start": 292,
                  "end": 341
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 346,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 352
                      },
                      "optional": false,
                      "computed": false,
                      "start": 346,
                      "end": 352
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 355,
                      "end": 356
                    },
                    "start": 346,
                    "end": 356
                  },
                  "directive": null,
                  "start": 346,
                  "end": 357
                }
              ],
              "start": 286,
              "end": 359
            },
            "expression": false,
            "start": 269,
            "end": 359
          },
          "definite": false,
          "start": 253,
          "end": 359
        }
      ],
      "declare": false,
      "start": 247,
      "end": 359
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
            "name": "SelfReference",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 373
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 386
          },
          "optional": false,
          "computed": false,
          "start": 360,
          "end": 386
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 389,
          "end": 394
        },
        "start": 360,
        "end": 394
      },
      "directive": null,
      "start": 360,
      "end": 395
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 395
}
```
