genericOfACloduleType1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
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
      "end": 197,
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 197,
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
            "start": 151,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 170,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 157,
                  "decorators": [],
                  "name": "g1",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 160,
                  "end": 170,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "decorators": [],
                    "name": "G",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 165,
                    "end": 168,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 166,
                        "end": 167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
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
            "start": 176,
            "end": 195,
            "expression": {
              "type": "CallExpression",
              "start": 176,
              "end": 194,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 176,
                "end": 192,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 176,
                  "end": 188,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 183,
                      "end": 187,
                      "raw": "null",
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 182,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 178,
                      "decorators": [],
                      "name": "g1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
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
                  "start": 189,
                  "end": 192,
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
      "type": "VariableDeclaration",
      "start": 198,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "g2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 207,
            "end": 219,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "G",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 212,
              "end": 217,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 213,
                  "end": 216,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 213,
                    "end": 216,
                    "left": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
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
  ],
  "sourceType": "script"
}
```
