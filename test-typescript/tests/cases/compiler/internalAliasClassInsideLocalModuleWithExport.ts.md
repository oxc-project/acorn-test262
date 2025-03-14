__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 103,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 103,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 101,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 101,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 101,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 47,
                      "end": 95,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 50,
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
                        "start": 50,
                        "end": 95,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 62,
                          "end": 95,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 76,
                              "end": 85,
                              "argument": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
                                "decorators": [],
                                "name": "a",
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
                            "start": 51,
                            "end": 60,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 52,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
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
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "c",
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 261,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 112,
        "end": 261,
        "body": {
          "type": "TSModuleBlock",
          "start": 122,
          "end": 261,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 128,
              "end": 259,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 135,
                "end": 259,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 145,
                  "end": 259,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 155,
                      "end": 177,
                      "attributes": [],
                      "declaration": {
                        "type": "TSImportEqualsDeclaration",
                        "start": 162,
                        "end": 177,
                        "id": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "importKind": "value",
                        "moduleReference": {
                          "type": "TSQualifiedName",
                          "start": 173,
                          "end": 176,
                          "left": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 176,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          }
                        }
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 186,
                      "end": 213,
                      "attributes": [],
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 193,
                        "end": 213,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 197,
                            "end": 212,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 197,
                              "end": 202,
                              "decorators": [],
                              "name": "cProp",
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 205,
                              "end": 212,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 209,
                                "end": 210,
                                "decorators": [],
                                "name": "c",
                                "optional": false
                              }
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
                      "type": "VariableDeclaration",
                      "start": 222,
                      "end": 253,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 226,
                          "end": 252,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 236,
                            "decorators": [],
                            "name": "cReturnVal",
                            "optional": false
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 239,
                            "end": 252,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 249,
                                "end": 251,
                                "raw": "10",
                                "value": 10
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 239,
                              "end": 248,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 239,
                                "end": 244,
                                "decorators": [],
                                "name": "cProp",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 248,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              }
                            },
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
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 144,
                  "decorators": [],
                  "name": "m3",
                  "optional": false
                },
                "kind": "module"
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
          "start": 119,
          "end": 121,
          "decorators": [],
          "name": "m2",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 263,
      "end": 292,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 270,
        "end": 292,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 274,
            "end": 291,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 278,
              "end": 291,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 282,
                "end": 289,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 282,
                  "end": 287,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 284,
                    "decorators": [],
                    "name": "m2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 287,
                    "decorators": [],
                    "name": "m3",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
