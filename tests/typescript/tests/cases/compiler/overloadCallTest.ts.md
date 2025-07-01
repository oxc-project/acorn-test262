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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 16,
              "end": 27
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
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 52
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 56,
                        "end": 62
                      },
                      "start": 54,
                      "end": 62
                    },
                    "body": null,
                    "expression": false,
                    "start": 40,
                    "end": 63
                  },
                  {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 84
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 87,
                            "end": 93
                          },
                          "start": 86,
                          "end": 93
                        },
                        "start": 85,
                        "end": 93
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 72,
                    "end": 95
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 116
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 123,
                            "end": 129
                          },
                          "start": 121,
                          "end": 129
                        },
                        "start": 117,
                        "end": 129
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 140,
                            "end": 145
                          },
                          "start": 133,
                          "end": 145
                        }
                      ],
                      "start": 131,
                      "end": 147
                    },
                    "expression": false,
                    "start": 104,
                    "end": 147
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 147,
                    "end": 148
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
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 166
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 172
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "test",
                              "raw": "\"test\"",
                              "start": 173,
                              "end": 179
                            }
                          ],
                          "optional": false,
                          "start": 169,
                          "end": 180
                        },
                        "definite": false,
                        "start": 162,
                        "end": 180
                      }
                    ],
                    "declare": false,
                    "start": 158,
                    "end": 181
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
                          "name": "goo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 197
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 203
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 200,
                          "end": 205
                        },
                        "definite": false,
                        "start": 194,
                        "end": 205
                      }
                    ],
                    "declare": false,
                    "start": 190,
                    "end": 206
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "goo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 219
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 225
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "test",
                            "raw": "\"test\"",
                            "start": 226,
                            "end": 232
                          }
                        ],
                        "optional": false,
                        "start": 222,
                        "end": 233
                      },
                      "start": 216,
                      "end": 233
                    },
                    "directive": null,
                    "start": 216,
                    "end": 234
                  }
                ],
                "start": 30,
                "end": 240
              },
              "expression": false,
              "start": 27,
              "end": 240
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 240
          }
        ],
        "start": 10,
        "end": 244
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 245
}
```
