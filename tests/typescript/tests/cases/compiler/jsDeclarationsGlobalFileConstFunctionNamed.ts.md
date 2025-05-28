__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 395,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 58,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 21,
            "decorators": [],
            "name": "SomeConstructor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 24,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "decorators": [],
              "name": "Named",
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
              "start": 41,
              "end": 57,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 44,
                  "end": 55,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 44,
                    "end": 54,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 44,
                      "end": 50,
                      "object": {
                        "type": "ThisExpression",
                        "start": 44,
                        "end": 48
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
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
                      "start": 53,
                      "end": 54,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 82,
            "decorators": [],
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 85,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "decorators": [],
              "name": "Named",
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
              "start": 102,
              "end": 105,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 145,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 107,
          "end": 136,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 123,
            "decorators": [],
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 139,
          "end": 144,
          "value": "str",
          "raw": "\"str\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 206,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 169,
            "decorators": [],
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 172,
            "end": 205,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 186,
              "decorators": [],
              "name": "Named",
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
              "start": 189,
              "end": 205,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 192,
                  "end": 203,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 192,
                    "end": 202,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 192,
                      "end": 198,
                      "object": {
                        "type": "ThisExpression",
                        "start": 192,
                        "end": 196
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 198,
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
                      "start": 201,
                      "end": 202,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 245,
      "expression": {
        "type": "AssignmentExpression",
        "start": 207,
        "end": 244,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 207,
          "end": 236,
          "object": {
            "type": "Identifier",
            "start": 207,
            "end": 223,
            "decorators": [],
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 236,
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 239,
          "end": 244,
          "value": "str",
          "raw": "\"str\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 359,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 266,
            "decorators": [],
            "name": "SelfReference",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 269,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 278,
              "end": 283,
              "decorators": [],
              "name": "Named",
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
              "start": 286,
              "end": 359,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 292,
                  "end": 341,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 296,
                    "end": 320,
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 298,
                      "end": 319,
                      "left": {
                        "type": "ThisExpression",
                        "start": 298,
                        "end": 302
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 319,
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "prefix": true
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "start": 322,
                    "end": 341,
                    "argument": {
                      "type": "NewExpression",
                      "start": 329,
                      "end": 340,
                      "callee": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 338,
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 346,
                  "end": 357,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 346,
                    "end": 356,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 346,
                      "end": 352,
                      "object": {
                        "type": "ThisExpression",
                        "start": 346,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 352,
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
                      "start": 355,
                      "end": 356,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 360,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 360,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 360,
          "end": 386,
          "object": {
            "type": "Identifier",
            "start": 360,
            "end": 373,
            "decorators": [],
            "name": "SelfReference",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 374,
            "end": 386,
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 389,
          "end": 394,
          "value": "str",
          "raw": "\"str\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
