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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 16
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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 5
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
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
                  "start": 26,
                  "end": 37
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
                              "start": 80,
                              "end": 84
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 85,
                              "end": 86
                            },
                            "optional": false,
                            "computed": false,
                            "start": 80,
                            "end": 86
                          },
                          "right": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 89,
                            "end": 91
                          },
                          "start": 80,
                          "end": 91
                        },
                        "directive": null,
                        "start": 80,
                        "end": 91
                      }
                    ],
                    "start": 40,
                    "end": 97
                  },
                  "expression": false,
                  "start": 37,
                  "end": 97
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 26,
                "end": 97
              }
            ],
            "start": 20,
            "end": 99
          },
          "abstract": false,
          "declare": false,
          "start": 14,
          "end": 99
        },
        "start": 0,
        "end": 99
      },
      "directive": null,
      "start": 0,
      "end": 99
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
            "name": "local",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 137
        }
      ],
      "declare": false,
      "start": 128,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "local",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 143
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 145
        },
        "optional": false,
        "computed": false,
        "start": 138,
        "end": 145
      },
      "directive": null,
      "start": 138,
      "end": 145
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
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 155
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 167
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 173
              },
              "optional": false,
              "computed": false,
              "start": 162,
              "end": 173
            },
            "typeArguments": null,
            "arguments": [],
            "start": 158,
            "end": 175
          },
          "definite": false,
          "start": 150,
          "end": 175
        }
      ],
      "declare": false,
      "start": 146,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 181
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "optional": false,
        "computed": false,
        "start": 176,
        "end": 183
      },
      "directive": null,
      "start": 176,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 184
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 32
        }
      ],
      "declare": false,
      "start": 27,
      "end": 32
    },
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
          "start": 33,
          "end": 34
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "optional": false,
        "computed": false,
        "start": 33,
        "end": 36
      },
      "directive": null,
      "start": 33,
      "end": 36
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 60
            },
            "typeArguments": null,
            "arguments": [],
            "start": 45,
            "end": 62
          },
          "definite": false,
          "start": 41,
          "end": 62
        }
      ],
      "declare": false,
      "start": 37,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "optional": false,
        "computed": false,
        "start": 63,
        "end": 66
      },
      "directive": null,
      "start": 63,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 27,
  "end": 66
}
```
