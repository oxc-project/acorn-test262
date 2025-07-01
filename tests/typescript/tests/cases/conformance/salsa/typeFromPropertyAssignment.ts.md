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
            "type": "ClassExpression",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                        "start": 28,
                        "end": 29
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 31,
                        "end": 32
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 34,
                      "end": 37
                    },
                    "expression": false,
                    "start": 27,
                    "end": 37
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 26,
                  "end": 37
                }
              ],
              "start": 20,
              "end": 39
            },
            "abstract": false,
            "declare": false,
            "start": 12,
            "end": 39
          },
          "definite": false,
          "start": 4,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 51
          },
          "optional": false,
          "computed": false,
          "start": 40,
          "end": 51
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 71
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 76,
                    "end": 79
                  },
                  "expression": false,
                  "start": 69,
                  "end": 79
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 68,
                "end": 79
              }
            ],
            "start": 62,
            "end": 82
          },
          "abstract": false,
          "declare": false,
          "start": 54,
          "end": 82
        },
        "start": 40,
        "end": 82
      },
      "directive": null,
      "start": 40,
      "end": 82
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
            "name": "si",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 110
        }
      ],
      "declare": false,
      "start": 104,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 113
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
        },
        "optional": false,
        "computed": false,
        "start": 111,
        "end": 115
      },
      "directive": null,
      "start": 111,
      "end": 115
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
            "name": "oi",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 147,
          "end": 149
        }
      ],
      "declare": false,
      "start": 143,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "oi",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 152
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        },
        "optional": false,
        "computed": false,
        "start": 150,
        "end": 154
      },
      "directive": null,
      "start": 150,
      "end": 154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
