__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 32,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 32,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "raw": "3",
                    "value": 3
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 37,
            "end": 77,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 45,
              "end": 77,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 55,
                  "end": 71,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 57,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 57,
                    "end": 71,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 68,
                      "end": 71,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "decorators": [],
                        "name": "M",
                        "optional": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 61,
                        "end": 66,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 81,
      "end": 181,
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 181,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 96,
            "end": 179,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 104,
              "end": 179,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 114,
                  "end": 173,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 117,
                    "decorators": [],
                    "name": "fn2",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 117,
                    "end": 173,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 173,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 134,
                          "end": 140,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 138,
                              "end": 139,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "decorators": [],
                                "name": "M",
                                "optional": false
                              },
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 153,
                          "end": 163,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 157,
                              "end": 162,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "decorators": [],
                                "name": "p",
                                "optional": false
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "decorators": [],
                                "name": "x",
                                "optional": false
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
              "name": "d",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 183,
      "end": 309,
      "body": {
        "type": "TSModuleBlock",
        "start": 192,
        "end": 309,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 198,
            "end": 307,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 307,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 301,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "decorators": [],
                    "name": "fn3",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 219,
                    "end": 301,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 222,
                      "end": 301,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 236,
                          "end": 291,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 249,
                            "end": 291,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 267,
                                "end": 277,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 271,
                                    "end": 276,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 271,
                                      "end": 272,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 275,
                                      "end": 276,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
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
                          "id": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 246,
                            "decorators": [],
                            "name": "M",
                            "optional": false
                          },
                          "params": []
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
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 311,
      "end": 385,
      "body": {
        "type": "TSModuleBlock",
        "start": 320,
        "end": 385,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 344,
            "end": 383,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 352,
              "end": 383,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 362,
                  "end": 377,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "M",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 363,
                    "end": 377,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 366,
                      "end": 377,
                      "body": []
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
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 319,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
