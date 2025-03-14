overloadCallTest.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 244,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 240,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 240,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 240,
                "body": [
                  {
                    "type": "TSDeclareFunction",
                    "start": 40,
                    "end": 63,
                    "async": false,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 52,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "params": [],
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
                    "async": false,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 84,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 93,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 86,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 87,
                            "end": 93
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 104,
                    "end": 147,
                    "async": false,
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
                            "raw": "\"foo\"",
                            "value": "foo"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 116,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 129,
                        "decorators": [],
                        "name": "foo",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 121,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 123,
                            "end": 129
                          }
                        }
                      }
                    ]
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 166,
                          "decorators": [],
                          "name": "test",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 169,
                          "end": 180,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 173,
                              "end": 179,
                              "raw": "\"test\"",
                              "value": "test"
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 172,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 197,
                          "decorators": [],
                          "name": "goo",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 200,
                          "end": 205,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 203,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "decorators": [],
                        "name": "goo",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 222,
                        "end": 233,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 226,
                            "end": 232,
                            "raw": "\"test\"",
                            "value": "test"
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 225,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
