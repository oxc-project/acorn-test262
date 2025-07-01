__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 18,
              "end": 22
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 26,
                      "end": 32
                    },
                    "start": 24,
                    "end": 32
                  },
                  "start": 23,
                  "end": 32
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 34,
                "end": 36
              },
              "expression": false,
              "start": 22,
              "end": 36
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 36
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 44
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 61,
                          "end": 62
                        },
                        "init": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 66,
                              "end": 70
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "foo",
                              "start": 71,
                              "end": 75
                            },
                            "optional": false,
                            "computed": false,
                            "start": 66,
                            "end": 75
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 78,
                              "end": 80
                            },
                            "operator": "*",
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 83,
                              "end": 84
                            },
                            "start": 78,
                            "end": 84
                          },
                          "start": 66,
                          "end": 84
                        },
                        "definite": false,
                        "start": 61,
                        "end": 85
                      }
                    ],
                    "declare": false,
                    "start": 57,
                    "end": 86
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 102
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 106
                        },
                        "optional": false,
                        "computed": false,
                        "start": 95,
                        "end": 106
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 108
                        }
                      ],
                      "optional": false,
                      "start": 95,
                      "end": 109
                    },
                    "directive": null,
                    "start": 95,
                    "end": 110
                  }
                ],
                "start": 47,
                "end": 122
              },
              "expression": false,
              "start": 44,
              "end": 122
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 122
          }
        ],
        "start": 8,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeArguments": null,
            "arguments": [],
            "start": 126,
            "end": 133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 126,
        "end": 139
      },
      "directive": null,
      "start": 126,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
