__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 244,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 240,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 240,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 240,
                "body": [
                  {
                    "type": "TSDeclareFunction",
                    "start": 40,
                    "end": 63,
                    "id": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 52,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 54,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 56,
                        "end": 62
                      }
                    }
                  },
                  {
                    "type": "TSDeclareFunction",
                    "start": 72,
                    "end": 95,
                    "id": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 84,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 93,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 86,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 87,
                            "end": 93
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 104,
                    "end": 147,
                    "id": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 116,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 129,
                        "name": "foo",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 121,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 123,
                            "end": 129
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 131,
                      "end": 147,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 133,
                          "end": 145,
                          "argument": {
                            "type": "Literal",
                            "start": 140,
                            "end": 145,
                            "value": "foo",
                            "raw": "\"foo\""
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 147,
                    "end": 148
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 158,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 162,
                        "end": 180,
                        "id": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 166,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 169,
                          "end": 180,
                          "callee": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 172,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 173,
                              "end": 179,
                              "value": "test",
                              "raw": "\"test\""
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 190,
                    "end": 206,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 194,
                        "end": 205,
                        "id": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 197,
                          "name": "goo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 200,
                          "end": 205,
                          "callee": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 203,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 216,
                    "end": 234,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 216,
                      "end": 233,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 219,
                        "name": "goo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 222,
                        "end": 233,
                        "callee": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 225,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 226,
                            "end": 232,
                            "value": "test",
                            "raw": "\"test\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
