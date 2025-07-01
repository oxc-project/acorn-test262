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
            "name": "variable",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 15,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "variable",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 27
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "optional": false,
          "computed": false,
          "start": 19,
          "end": 29
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 32,
          "end": 33
        },
        "start": 19,
        "end": 33
      },
      "directive": null,
      "start": 19,
      "end": 34
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initializedMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 67
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 70,
              "end": 72
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 89
            },
            "value": {
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
                          "start": 102,
                          "end": 106
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "member",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 113
                        },
                        "optional": false,
                        "computed": false,
                        "start": 102,
                        "end": 113
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 116,
                        "end": 118
                      },
                      "start": 102,
                      "end": 118
                    },
                    "directive": null,
                    "start": 102,
                    "end": 119
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
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "member",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 139
                          },
                          "optional": false,
                          "computed": false,
                          "start": 128,
                          "end": 139
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 141
                        },
                        "optional": false,
                        "computed": false,
                        "start": 128,
                        "end": 141
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 144,
                        "end": 145
                      },
                      "start": 128,
                      "end": 145
                    },
                    "directive": null,
                    "start": 128,
                    "end": 146
                  }
                ],
                "start": 92,
                "end": 152
              },
              "expression": false,
              "start": 89,
              "end": 152
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 152
          }
        ],
        "start": 44,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 36,
      "end": 154
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 163
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 180
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 182,
                  "end": 184
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 172,
                "end": 184
              }
            ],
            "start": 166,
            "end": 186
          },
          "definite": false,
          "start": 160,
          "end": 186
        }
      ],
      "declare": false,
      "start": 156,
      "end": 187
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 192
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 201
            },
            "optional": false,
            "computed": false,
            "start": 189,
            "end": 201
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 189,
          "end": 203
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 206,
          "end": 207
        },
        "start": 189,
        "end": 207
      },
      "directive": null,
      "start": 189,
      "end": 208
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 217
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 221,
                "end": 223
              }
            ],
            "start": 220,
            "end": 224
          },
          "definite": false,
          "start": 214,
          "end": 224
        }
      ],
      "declare": false,
      "start": 210,
      "end": 225
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 242
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
              "type": "ObjectExpression",
              "properties": [],
              "start": 258,
              "end": 260
            },
            "start": 251,
            "end": 261
          }
        ],
        "start": 245,
        "end": 263
      },
      "expression": false,
      "start": 227,
      "end": 263
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 265
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
            "name": "variable",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 8
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 10
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 13,
          "end": 14
        },
        "start": 0,
        "end": 14
      },
      "directive": null,
      "start": 0,
      "end": 15
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
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "typeArguments": null,
              "arguments": [],
              "start": 17,
              "end": 24
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 32
            },
            "optional": false,
            "computed": false,
            "start": 16,
            "end": 32
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "optional": false,
          "computed": false,
          "start": 16,
          "end": 34
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 37,
          "end": 38
        },
        "start": 16,
        "end": 38
      },
      "directive": null,
      "start": 16,
      "end": 39
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
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "typeArguments": null,
              "arguments": [],
              "start": 41,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "initializedMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 67
            },
            "optional": false,
            "computed": false,
            "start": 40,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "optional": false,
          "computed": false,
          "start": 40,
          "end": 69
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 72,
          "end": 73
        },
        "start": 40,
        "end": 73
      },
      "directive": null,
      "start": 40,
      "end": 74
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 78
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 87
            },
            "optional": false,
            "computed": false,
            "start": 75,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "optional": false,
          "computed": false,
          "start": 75,
          "end": 89
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 92,
          "end": 93
        },
        "start": 75,
        "end": 93
      },
      "directive": null,
      "start": 75,
      "end": 94
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
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 99,
              "end": 100
            },
            "optional": false,
            "computed": true,
            "start": 95,
            "end": 101
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 103
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 106,
          "end": 107
        },
        "start": 95,
        "end": 107
      },
      "directive": null,
      "start": 95,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 115
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 109,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 119
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 122,
          "end": 123
        },
        "start": 109,
        "end": 123
      },
      "directive": null,
      "start": 109,
      "end": 124
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
}
```
