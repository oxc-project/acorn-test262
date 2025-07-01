__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ollKorrect",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_model",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 53,
              "end": 61
            },
            "directive": null,
            "start": 53,
            "end": 61
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
                  "start": 72,
                  "end": 73
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Emu",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 83
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "optional": false,
                    "computed": false,
                    "start": 80,
                    "end": 85
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 76,
                  "end": 87
                },
                "definite": false,
                "start": 72,
                "end": 87
              }
            ],
            "declare": false,
            "start": 66,
            "end": 87
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
                  "start": 98,
                  "end": 99
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Emu",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 105
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "optional": false,
                    "computed": false,
                    "start": 102,
                    "end": 107
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_wrapperInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 124
                  },
                  "optional": false,
                  "computed": false,
                  "start": 102,
                  "end": 124
                },
                "definite": false,
                "start": 98,
                "end": 124
              }
            ],
            "declare": false,
            "start": 92,
            "end": 125
          }
        ],
        "start": 47,
        "end": 127
      },
      "expression": false,
      "start": 24,
      "end": 127
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
            "name": "Emu",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 133
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
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
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 159
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
                              "start": 172,
                              "end": 176
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_model",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 177,
                              "end": 183
                            },
                            "optional": false,
                            "computed": false,
                            "start": 172,
                            "end": 183
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 186,
                            "end": 187
                          },
                          "start": 172,
                          "end": 187
                        },
                        "directive": null,
                        "start": 172,
                        "end": 187
                      }
                    ],
                    "start": 162,
                    "end": 193
                  },
                  "expression": false,
                  "start": 159,
                  "end": 193
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 148,
                "end": 193
              }
            ],
            "start": 142,
            "end": 195
          },
          "abstract": false,
          "declare": false,
          "start": 136,
          "end": 195
        },
        "start": 128,
        "end": 195
      },
      "directive": null,
      "start": 128,
      "end": 195
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 24,
  "end": 196
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
            "name": "Emu",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
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
            "name": "Emu",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 35,
          "end": 40
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "_wrapperInstance",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 57
        },
        "optional": false,
        "computed": false,
        "start": 35,
        "end": 57
      },
      "directive": null,
      "start": 35,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
