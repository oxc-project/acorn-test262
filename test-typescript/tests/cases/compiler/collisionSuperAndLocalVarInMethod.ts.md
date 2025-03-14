__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "_super",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 93,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 59,
                    "end": 75,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 63,
                        "end": 74,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 69,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 72,
                          "end": 74,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 189,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 187,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 187,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 161,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 160,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 155,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 158,
                          "end": 160,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 190,
      "end": 320,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 320,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 318,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 318,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 318,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 239,
                    "end": 312,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 243,
                        "end": 312,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 243,
                          "end": 244,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 247,
                          "end": 312,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 253,
                            "end": 312,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 267,
                                "end": 283,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 271,
                                    "end": 282,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 271,
                                      "end": 277,
                                      "decorators": [],
                                      "name": "_super",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 280,
                                      "end": 282,
                                      "raw": "10",
                                      "value": 10
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 196,
        "end": 197,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 209,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
