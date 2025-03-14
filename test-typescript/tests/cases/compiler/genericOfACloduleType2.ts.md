genericOfACloduleType2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 35,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 35,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 24,
                    "end": 33,
                    "argument": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "x",
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
                  "start": 16,
                  "end": 20,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 17,
                    "end": 20,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 19,
                      "end": 20,
                      "typeName": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "G",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 208,
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 208,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 53,
            "end": 81,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 60,
              "end": 81,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 68,
                "end": 81,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 70,
                    "end": 79,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 73,
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
                      "start": 73,
                      "end": 79,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 76,
                        "end": 79,
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
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 144,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 93,
              "end": 144,
              "body": {
                "type": "TSModuleBlock",
                "start": 102,
                "end": 144,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 112,
                    "end": 138,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 119,
                      "end": 138,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 127,
                        "end": 138,
                        "body": []
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "X",
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
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 170,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 169,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "decorators": [],
                  "name": "g1",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 159,
                  "end": 169,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "G",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 164,
                    "end": 167,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 166,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 194,
            "expression": {
              "type": "CallExpression",
              "start": 175,
              "end": 193,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 175,
                "end": 191,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 175,
                  "end": 187,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 182,
                      "end": 186,
                      "raw": "null",
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 175,
                    "end": 181,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 177,
                      "decorators": [],
                      "name": "g1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 181,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 191,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 248,
      "body": {
        "type": "TSModuleBlock",
        "start": 219,
        "end": 248,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 225,
            "end": 246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 229,
                "end": 246,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 231,
                  "decorators": [],
                  "name": "g2",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 234,
                  "end": 246,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "G",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 239,
                    "end": 244,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 240,
                        "end": 243,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 240,
                          "end": 243,
                          "left": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 241,
                            "decorators": [],
                            "name": "M",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 243,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    ]
                  }
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
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
