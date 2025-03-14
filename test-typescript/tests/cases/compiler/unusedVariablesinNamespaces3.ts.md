__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 293,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 293,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 62,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 46,
                  "decorators": [],
                  "name": "lettersRegexp",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  },
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 68,
            "end": 100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 74,
                "end": 99,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 86,
                  "decorators": [],
                  "name": "numberRegexp",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 89,
                  "end": 99,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[0-9]+$"
                  },
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 156,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 112,
              "end": 156,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 155,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 139,
                    "decorators": [],
                    "name": "anotherUnusedVariable",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 142,
                    "end": 155,
                    "raw": "\"Dummy value\"",
                    "value": "Dummy value"
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 291,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 169,
              "end": 291,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 196,
                "end": 291,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 206,
                    "end": 285,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 218,
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 218,
                      "end": 285,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 231,
                        "end": 285,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 245,
                            "end": 275,
                            "argument": {
                              "type": "CallExpression",
                              "start": 252,
                              "end": 274,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 273,
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 252,
                                "end": 270,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 265,
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 270,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 219,
                          "end": 229,
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 221,
                            "end": 229,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 223,
                              "end": 229
                            }
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
                "start": 175,
                "end": 195,
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Validation",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
