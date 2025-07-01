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
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
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
                        "start": 31,
                        "end": 35
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 36,
                        "end": 37
                      },
                      "optional": false,
                      "computed": false,
                      "start": 31,
                      "end": 37
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 40,
                      "end": 41
                    },
                    "start": 31,
                    "end": 41
                  },
                  "directive": null,
                  "start": 31,
                  "end": 41
                }
              ],
              "start": 25,
              "end": 43
            },
            "expression": false,
            "start": 12,
            "end": 43
          },
          "definite": false,
          "start": 4,
          "end": 43
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
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
            "start": 44,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 55
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 55
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
            "start": 64,
            "end": 65
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
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 83
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
                              "start": 96,
                              "end": 100
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 101,
                              "end": 102
                            },
                            "optional": false,
                            "computed": false,
                            "start": 96,
                            "end": 102
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 105,
                            "end": 106
                          },
                          "start": 96,
                          "end": 106
                        },
                        "directive": null,
                        "start": 96,
                        "end": 106
                      }
                    ],
                    "start": 86,
                    "end": 112
                  },
                  "expression": false,
                  "start": 83,
                  "end": 112
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 72,
                "end": 112
              }
            ],
            "start": 66,
            "end": 114
          },
          "abstract": false,
          "declare": false,
          "start": 58,
          "end": 114
        },
        "start": 44,
        "end": 114
      },
      "directive": null,
      "start": 44,
      "end": 114
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
            "name": "ja",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 142
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 142
        }
      ],
      "declare": false,
      "start": 136,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ja",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 145
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 147
        },
        "optional": false,
        "computed": false,
        "start": 143,
        "end": 147
      },
      "directive": null,
      "start": 143,
      "end": 147
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
            "name": "da",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 181
        }
      ],
      "declare": false,
      "start": 175,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "da",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 184
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 186
        },
        "optional": false,
        "computed": false,
        "start": 182,
        "end": 186
      },
      "directive": null,
      "start": 182,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
