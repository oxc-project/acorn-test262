collisionCodeGenModuleWithConstructorChildren.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 96,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 96,
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
            "end": 94,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 45,
              "end": 94,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 55,
                  "end": 88,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 66,
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
                    "start": 66,
                    "end": 88,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 77,
                      "end": 88,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "M",
                        "optional": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 70,
                        "end": 75,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 75,
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
      "start": 98,
      "end": 180,
      "body": {
        "type": "TSModuleBlock",
        "start": 107,
        "end": 180,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 113,
            "end": 178,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 121,
              "end": 178,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 131,
                  "end": 172,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 142,
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
                    "start": 142,
                    "end": 172,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 161,
                      "end": 172,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 143,
                        "end": 152,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "M",
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 154,
                        "end": 159,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 159,
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
              "start": 119,
              "end": 120,
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
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 182,
      "end": 296,
      "body": {
        "type": "TSModuleBlock",
        "start": 191,
        "end": 296,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 197,
            "end": 294,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 294,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 288,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 227,
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
                    "start": 227,
                    "end": 288,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 230,
                      "end": 288,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 244,
                          "end": 255,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 248,
                              "end": 254,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 248,
                                "end": 249,
                                "decorators": [],
                                "name": "M",
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 252,
                                "end": 254,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 268,
                          "end": 278,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 272,
                              "end": 277,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 272,
                                "end": 273,
                                "decorators": [],
                                "name": "p",
                                "optional": false
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 276,
                                "end": 277,
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
              "start": 203,
              "end": 205,
              "decorators": [],
              "name": "d2",
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
        "start": 189,
        "end": 190,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
