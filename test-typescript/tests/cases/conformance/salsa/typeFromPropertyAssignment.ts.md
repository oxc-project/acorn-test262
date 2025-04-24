__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 12,
            "end": 39,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 20,
              "end": 39,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 26,
                  "end": 37,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 27,
                    "end": 37,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 34,
                      "end": 37,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 28,
                        "end": 29,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 32,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 40,
          "end": 51,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 54,
          "end": 82,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 62,
            "end": 82,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 68,
                "end": 79,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 69,
                  "end": 79,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 76,
                    "end": 79,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "decorators": [],
            "name": "si",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 111,
        "end": 115,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 113,
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 149,
            "decorators": [],
            "name": "oi",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 150,
        "end": 154,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 150,
          "end": 152,
          "decorators": [],
          "name": "oi",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
